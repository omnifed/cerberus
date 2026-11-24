import { findMemberType, parseInterfaceBody } from '../parser/declarations'
import { splitTopLevel } from '../parser/scan'
import type { PropSpec } from '../types'
import { ModuleGraph, type ResolvedDecl } from './module-graph'
import {
  extractStringLiterals,
  mergePropLists,
  mergeUnionBranches,
} from './prop-utils'

export interface UnresolvedRef {
  /** The type expression that could not be resolved to properties */
  expr: string
  /** The file whose scope it was resolved from */
  file: string
  /**
   * `opaque`: a value-level reference such as `ComponentProps<typeof AccordionItem>`.
   * The parser can't follow `typeof`, so the inherited props are not expanded.
   */
  reason: 'not-found' | 'missing-member' | 'unsupported' | 'opaque'
}

/** Raw HTML/DOM attribute bags, skipped so tables aren't flooded with native attributes. */
const HTML_ATTRIBUTE_BAGS = [
  /^HTMLProps\b/,
  /^HTMLArkProps\b/,
  /^ComponentPropsWithoutRef\b/,
  /^ComponentPropsWithRef\b/,
  /^(?:React\.)?HTMLAttributes\b/,
  /^JSX\.IntrinsicElements\b/,
  // Panda's HTML attributes + style props (`CerberusProps<'div'>`)
  /^JsxHTMLProps\b/,
]

const COMPONENT_PROPS_OF = /^(?:React\.)?ComponentProps(?:WithoutRef|WithRef)?$/
const NULLISH_BRANCH = /^(?:undefined|null|never)$/
const INDEXED_ACCESS =
  /^(?:([A-Za-z0-9_$]+)\.)?([A-Za-z0-9_$]+)\[['"]([A-Za-z0-9_$]+)['"]\]$/
const GENERIC = /^([A-Za-z0-9_$.]+)<([\s\S]+)>$/
const TYPE_REF = /^(?:([A-Za-z0-9_$]+)\.)?([A-Za-z0-9_$]+)$/
// A homomorphic mapped type, `{ [K in keyof X]?: X[K] | undefined }` (Panda's
// `<Recipe>VariantProps`): X's props, all optional when marked `?`
const HOMOMORPHIC_MAPPED =
  /^\{\s*\[\s*([A-Za-z_$][\w$]*)\s+in\s+keyof\s+([A-Za-z0-9_$.]+)\s*\](\??)\s*:\s*\2\[\s*\1\s*\](?:\s*\|\s*undefined)?\s*;?\s*\}$/

/**
 * Turns type expressions from Ark UI, Zag.js and Cerberus sources into prop lists.
 * Every reference it can't follow is recorded; callers drain and report them.
 */
export class TypeResolver {
  readonly modules: ModuleGraph
  private readonly unresolved: UnresolvedRef[] = []

  constructor(modules = new ModuleGraph()) {
    this.modules = modules
  }

  /** Returns and clears every reference given up on since the last call. */
  drainUnresolved(): UnresolvedRef[] {
    return this.unresolved.splice(0, this.unresolved.length)
  }

  resolveModule(spec: string, fromFile: string): string | null {
    return this.modules.resolveModule(spec, fromFile)
  }

  lookupExport(file: string, name: string): ResolvedDecl | null {
    return this.modules.lookupExport(file, name)
  }

  lookupLocal(file: string, name: string): ResolvedDecl | null {
    return this.modules.lookupLocal(file, name)
  }

  /** Props of `name` as exported from `entry`, following aliases; `null` if not exported. */
  resolveExportProps(entry: string, name: string): PropSpec[] | null {
    const resolved = this.modules.lookupExport(entry, name)
    return resolved ? this.resolveDecl(resolved) : null
  }

  /** Props of a located declaration, resolved in its own file's scope. */
  resolveDecl(resolved: ResolvedDecl, visited = new Set<string>()): PropSpec[] {
    const { decl, file, name } = resolved
    const visitKey = `${file}::${name}`
    if (visited.has(visitKey)) return []
    visited.add(visitKey)

    if (decl.kind === 'type') return this.resolveExpr(decl.expr, file, visited)

    let inherited: PropSpec[] = []
    for (const parentExpr of decl.heritage) {
      inherited = mergePropLists(
        inherited,
        this.resolveExpr(parentExpr, file, new Set(visited)),
      )
    }
    return mergePropLists(inherited, parseInterfaceBody(decl.body))
  }

  /** Props of a type expression, with names resolved from the scope of `file`. */
  resolveExpr(
    rawExpr: string,
    file: string,
    visited = new Set<string>(),
  ): PropSpec[] {
    const expr = rawExpr.trim()
    if (!expr) return []
    if (HTML_ATTRIBUTE_BAGS.some((re) => re.test(expr))) return []

    const recurse = (e: string, f = file, v = new Set(visited)) =>
      this.resolveExpr(e, f, v)

    // `A | B` is checked before `&`, which binds tighter
    const unionTerms = splitTopLevel(expr, '|').filter(
      (t) => !NULLISH_BRANCH.test(t),
    )
    if (unionTerms.length > 1) {
      return mergeUnionBranches(unionTerms.map((term) => recurse(term)))
    }

    const intersectionTerms = splitTopLevel(expr, '&')
    if (intersectionTerms.length > 1) {
      return intersectionTerms.reduce<PropSpec[]>(
        (acc, term) => mergePropLists(acc, recurse(term)),
        [],
      )
    }

    const mapped = HOMOMORPHIC_MAPPED.exec(expr)
    if (mapped) {
      const [, , source, optional] = mapped
      const props = recurse(source)
      return optional ? props.map((p) => ({ ...p, required: false })) : props
    }

    if (expr.startsWith('{') && expr.endsWith('}')) {
      return parseInterfaceBody(expr.slice(1, -1))
    }

    if (expr.startsWith('(') && expr.endsWith(')')) {
      return recurse(expr.slice(1, -1), file, visited)
    }

    const indexed = INDEXED_ACCESS.exec(expr)
    if (indexed) return this.resolveIndexedAccess(expr, file, visited, indexed)

    const generic = GENERIC.exec(expr)
    if (generic) return this.resolveGeneric(expr, file, visited, generic)

    const ref = TYPE_REF.exec(expr)
    if (ref) {
      const [, ns, typeName] = ref
      const resolved = this.modules.lookupTypeRef(file, ns, typeName)
      if (!resolved) return this.giveUp(expr, file, 'not-found')
      return this.resolveDecl(resolved, visited)
    }

    return this.giveUp(expr, file, 'unsupported')
  }

  /** Zag's `Schema['props']`, optionally namespaced: `accordion.Schema['props']` */
  private resolveIndexedAccess(
    expr: string,
    file: string,
    visited: Set<string>,
    [, ns, targetType, memberName]: RegExpExecArray,
  ): PropSpec[] {
    const resolved = this.modules.lookupTypeRef(file, ns, targetType)
    if (!resolved) return this.giveUp(expr, file, 'not-found')

    const { decl } = resolved
    const body =
      decl.kind === 'interface'
        ? decl.body
        : decl.expr.startsWith('{')
          ? decl.expr.slice(1, -1)
          : null
    const memberExpr = body ? findMemberType(body, memberName) : null
    if (!memberExpr) return this.giveUp(expr, file, 'missing-member')
    return this.resolveExpr(memberExpr, resolved.file, new Set(visited))
  }

  private resolveGeneric(
    expr: string,
    file: string,
    visited: Set<string>,
    [, genericName, argsRaw]: RegExpExecArray,
  ): PropSpec[] {
    const args = splitTopLevel(argsRaw, ',')
    const inner = () => this.resolveExpr(args[0], file, visited)
    const keys = () => extractStringLiterals(args[1])

    if (
      COMPONENT_PROPS_OF.test(genericName) &&
      /^typeof\s/.test(args[0] ?? '')
    ) {
      return this.giveUp(expr, file, 'opaque')
    }

    if (args.length >= 2) {
      switch (genericName) {
        case 'Assign':
          return mergePropLists(
            this.resolveExpr(args[0], file, new Set(visited)),
            this.resolveExpr(args[1], file, new Set(visited)),
          )
        // Ark's private `Union<T, U>` (date-picker cell props): every key of `T`,
        // typed `U[K] | T[K]` when `U` has it too, plus the rest of `U`. Its mapped
        // body can't be parsed, so it is handled by name like the helpers below
        case 'Union': {
          const own = this.resolveExpr(args[0], file, new Set(visited))
          const other = this.resolveExpr(args[1], file, new Set(visited))
          const otherByName = new Map(other.map((p) => [p.name, p]))
          const ownNames = new Set(own.map((p) => p.name))
          return [
            ...own.map((p) => {
              const shared = otherByName.get(p.name)
              if (!shared || shared.type === p.type) return p
              return {
                ...p,
                type: `${shared.type} | ${p.type}`,
                description: p.description || shared.description,
              }
            }),
            ...other.filter((p) => !ownNames.has(p.name)),
          ]
        }
        case 'Omit': {
          const omitted = keys()
          return inner().filter((p) => !omitted.has(p.name))
        }
        case 'Pick': {
          const picked = keys()
          return inner().filter((p) => picked.has(p.name))
        }
        case 'Optional': {
          const optional = keys()
          return inner().map((p) =>
            optional.has(p.name) ? { ...p, required: false } : p,
          )
        }
        case 'RequiredBy': {
          const required = keys()
          return inner().map((p) =>
            required.has(p.name) ? { ...p, required: true } : p,
          )
        }
      }
    }

    if (args.length >= 1) {
      if (genericName === 'Partial') {
        return inner().map((p) => ({ ...p, required: false }))
      }
      if (genericName === 'Required') {
        return inner().map((p) => ({ ...p, required: true }))
      }
    }

    // Any other generic (e.g. `ItemProps<T>`): resolve its declaration, ignoring type args
    return this.resolveExpr(genericName, file, visited)
  }

  private giveUp(
    expr: string,
    file: string,
    reason: UnresolvedRef['reason'],
  ): PropSpec[] {
    this.unresolved.push({ expr, file, reason })
    return []
  }
}
