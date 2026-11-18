import { existsSync, readFileSync } from 'node:fs'
import { mkdir, readFile } from 'node:fs/promises'
import { dirname, join, relative } from 'node:path'
import { config } from './configs'
import { type ComponentConfig, type KeyboardMapping } from './manifest'

export interface PropSpec {
  name: string
  type: string
  required: boolean
  defaultValue?: string
  description: string
}

export interface PartSpec {
  name: string
  exportName: string
  kind: 'primitive' | 'abstraction'
  description: string
  dataScope?: string
  dataPart?: string
  props: PropSpec[]
}

export interface VariantSpec {
  name: string
  values: string[]
  defaultValue?: string
}

export interface ComponentDocSpec {
  name: string
  key: string
  description: string
  variants: VariantSpec[]
  parts: PartSpec[]
  a11y?: {
    pattern: string
    apgUrl: string
    keyboard: KeyboardMapping[]
    notes?: string[]
  }
}

interface ParsedInterfaceDecl {
  kind: 'interface'
  heritage: string[]
  body: string
}

interface ParsedTypeAliasDecl {
  kind: 'type'
  expr: string
}

type ParsedDecl = ParsedInterfaceDecl | ParsedTypeAliasDecl
type DeclMap = Map<string, ParsedDecl>

// Anchor every path to this script's location so output doesn't depend on the cwd.
// (Previously `process.cwd()` was used, so running from `packages/react` wrote to
// `packages/react/docs/generated` instead of the docs app's `docs/generated`.)
const REACT_PKG_ROOT = join(import.meta.dir, '..')
const REPO_ROOT = join(REACT_PKG_ROOT, '..', '..')
const DESIGN_SYSTEM_SPEC_PATH = join(
  REACT_PKG_ROOT,
  'styled-system',
  'specs',
  'design-system.json',
)
const DOCS_SPEC_OUT_DIR = join(REPO_ROOT, 'docs', 'generated', 'api-specs')

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function toKebabCase(str: string): string {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()
}

/**
 * If `src[i]` starts a `//` or `/* *\/` comment, returns the index just past it; otherwise -1.
 * Scanners must skip comments so apostrophes in JSDoc (e.g. "don't") aren't read as quotes.
 */
function skipComment(src: string, i: number): number {
  if (src[i] !== '/') return -1
  if (src[i + 1] === '/') {
    const end = src.indexOf('\n', i + 2)
    // Stop AT the newline so line-terminated scanners still see it
    return end === -1 ? src.length : end
  }
  if (src[i + 1] === '*') {
    const end = src.indexOf('*/', i + 2)
    return end === -1 ? src.length : end + 2
  }
  return -1
}

/**
 * Splits a string by `delimiter` only when outside `{}`, `()`, `<>`, `[]`, and quotes.
 */
function splitTopLevel(input: string, delimiter: string): string[] {
  const parts: string[] = []
  let brace = 0
  let paren = 0
  let angle = 0
  let bracket = 0
  let quote: string | null = null
  let start = 0

  for (let i = 0; i < input.length; i++) {
    const ch = input[i]

    if (quote) {
      if (ch === quote && input[i - 1] !== '\\') {
        quote = null
      }
      continue
    }

    const commentEnd = skipComment(input, i)
    if (commentEnd !== -1) {
      i = commentEnd - 1
      continue
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch
      continue
    }

    if (ch === '{') brace++
    else if (ch === '}') brace--
    else if (ch === '(') paren++
    else if (ch === ')') paren--
    else if (ch === '<' && input[i - 1] !== '=') angle++
    else if (ch === '>' && input[i - 1] !== '=') angle--
    else if (ch === '[') bracket++
    else if (ch === ']') bracket--

    if (
      brace === 0 &&
      paren === 0 &&
      angle === 0 &&
      bracket === 0 &&
      input.startsWith(delimiter, i)
    ) {
      parts.push(input.slice(start, i).trim())
      i += delimiter.length - 1
      start = i + 1
    }
  }

  const tail = input.slice(start).trim()
  if (tail) parts.push(tail)
  return parts
}

/**
 * Finds the matching closing character index for an opening delimiter at `openIdx`.
 */
function findMatchingClose(
  source: string,
  openIdx: number,
  openChar: string,
  closeChar: string,
): number {
  let depth = 1
  let quote: string | null = null

  for (let i = openIdx + 1; i < source.length; i++) {
    const ch = source[i]

    if (quote) {
      if (ch === quote && source[i - 1] !== '\\') quote = null
      continue
    }

    const commentEnd = skipComment(source, i)
    if (commentEnd !== -1) {
      i = commentEnd - 1
      continue
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch
      continue
    }

    if (ch === openChar) depth++
    else if (ch === closeChar) {
      depth--
      if (depth === 0) return i
    }
  }

  return -1
}

/**
 * Parses a JSDoc comment block into description prose and an optional @default value.
 */
function parseJsDocBlock(rawComment: string): {
  description: string
  defaultValue?: string
} {
  const lines = rawComment
    .replace(/^\/\*\*/, '')
    .replace(/\*\/$/, '')
    .split('\n')
    .map((line) => line.replace(/^\s*\*\s?/, '').trim())
    .filter(Boolean)

  let defaultValue: string | undefined
  const descLines: string[] = []

  for (const line of lines) {
    if (line.startsWith('@default')) {
      defaultValue = line.replace(/^@default\s+/, '').trim()
    } else if (!line.startsWith('@')) {
      descLines.push(line)
    }
  }

  return {
    description: descLines.join(' '),
    defaultValue,
  }
}

/**
 * Parses all property signatures and JSDoc blocks inside `{ ... }`.
 */
function parseInterfaceBody(body: string): PropSpec[] {
  const props: PropSpec[] = []
  let i = 0

  while (i < body.length) {
    while (i < body.length && /\s/.test(body[i])) i++
    if (i >= body.length) break

    let jsDoc = ''
    if (body.startsWith('/**', i)) {
      const commentEnd = body.indexOf('*/', i + 3)
      if (commentEnd !== -1) {
        jsDoc = body.slice(i, commentEnd + 2)
        i = commentEnd + 2
        while (i < body.length && /\s/.test(body[i])) i++
      }
    } else if (body.startsWith('//', i)) {
      const lineEnd = body.indexOf('\n', i)
      i = lineEnd === -1 ? body.length : lineEnd + 1
      continue
    } else if (body.startsWith('/*', i)) {
      const commentEnd = body.indexOf('*/', i + 2)
      i = commentEnd === -1 ? body.length : commentEnd + 2
      continue
    }

    // Find top-level ':' for this property
    let colonIdx = -1
    let scan = i
    let scanBracket = 0
    while (scan < body.length) {
      const ch = body[scan]
      if (ch === '[') scanBracket++
      else if (ch === ']') scanBracket--
      else if (scanBracket === 0 && ch === ':') {
        colonIdx = scan
        break
      } else if (scanBracket === 0 && (ch === ';' || ch === '\n')) {
        break
      }
      scan++
    }

    if (colonIdx === -1) {
      const nextLine = body.indexOf('\n', i)
      i = nextLine === -1 ? body.length : nextLine + 1
      continue
    }

    const rawName = body
      .slice(i, colonIdx)
      .replace(/^readonly\s+/, '')
      .trim()

    if (rawName.startsWith('[')) {
      const nextLine = body.indexOf('\n', colonIdx)
      i = nextLine === -1 ? body.length : nextLine + 1
      continue
    }

    const required = !rawName.endsWith('?')
    const name = rawName.replace(/\?$/, '').trim()
    i = colonIdx + 1

    // Read type annotation at depth 0 until ';' or newline
    let braceDepth = 0
    let parenDepth = 0
    let angleDepth = 0
    let bracketDepth = 0
    const typeStart = i

    while (i < body.length) {
      const ch = body[i]
      if (ch === '{') braceDepth++
      else if (ch === '}') braceDepth--
      else if (ch === '(') parenDepth++
      else if (ch === ')') parenDepth--
      else if (ch === '<' && body[i - 1] !== '=') angleDepth++
      else if (ch === '>' && body[i - 1] !== '=') angleDepth--
      else if (ch === '[') bracketDepth++
      else if (ch === ']') bracketDepth--

      const atTopLevel =
        braceDepth === 0 &&
        parenDepth === 0 &&
        angleDepth === 0 &&
        bracketDepth === 0

      if (atTopLevel && (ch === ';' || ch === '\n')) {
        break
      }
      i++
    }

    let type = body.slice(typeStart, i).trim().replace(/\s+/g, ' ')

    if (!required) {
      type = type.replace(/\s*\|\s*undefined$/, '')
    }

    if (body[i] === ';') i++

    if (name && /^[a-zA-Z0-9_$]+$/.test(name)) {
      const { description, defaultValue } = jsDoc
        ? parseJsDocBlock(jsDoc)
        : { description: '', defaultValue: undefined }

      props.push({
        name,
        type,
        required,
        defaultValue,
        description,
      })
    }
  }

  return props
}

/**
 * Indexes all `interface`, `type`, and `export { type X as Y }` alias declarations.
 */
function indexDeclarations(source: string): DeclMap {
  const map: DeclMap = new Map()

  // 1. Index `interface Name ... { ... }`
  const interfaceRegex =
    /(?:export\s+)?(?:declare\s+)?interface\s+([A-Za-z0-9_$]+)(?:<[^>]*>)?\s*(?:extends\s+([^{]+))?\{/g
  let match: RegExpExecArray | null

  while ((match = interfaceRegex.exec(source)) !== null) {
    const name = match[1]
    const heritageRaw = match[2]?.trim()
    const openBraceIdx = match.index + match[0].length - 1
    const closeBraceIdx = findMatchingClose(source, openBraceIdx, '{', '}')
    if (closeBraceIdx === -1) continue

    const body = source.slice(openBraceIdx + 1, closeBraceIdx)
    const heritage = heritageRaw ? splitTopLevel(heritageRaw, ',') : []
    map.set(name, { kind: 'interface', heritage, body })
  }

  // 2. Index `type Name = ...`
  const typeRegex =
    /(?:export\s+)?(?:declare\s+)?type\s+([A-Za-z0-9_$]+)(?:<[^>]*>)?\s*=/g
  while ((match = typeRegex.exec(source)) !== null) {
    const name = match[1]
    let i = match.index + match[0].length
    while (i < source.length && /\s/.test(source[i])) i++

    let brace = 0
    let paren = 0
    let angle = 0
    let bracket = 0
    let quote: string | null = null
    const exprStart = i

    while (i < source.length) {
      const ch = source[i]
      if (quote) {
        if (ch === quote && source[i - 1] !== '\\') quote = null
        i++
        continue
      }
      const commentEnd = skipComment(source, i)
      if (commentEnd !== -1) {
        i = commentEnd
        continue
      }

      if (ch === "'" || ch === '"' || ch === '`') {
        quote = ch
        i++
        continue
      }
      if (ch === '{') brace++
      else if (ch === '}') brace--
      else if (ch === '(') paren++
      else if (ch === ')') paren--
      else if (ch === '<' && source[i - 1] !== '=') angle++
      else if (ch === '>' && source[i - 1] !== '=') angle--
      else if (ch === '[') bracket++
      else if (ch === ']') bracket--

      const atTopLevel =
        brace === 0 && paren === 0 && angle === 0 && bracket === 0

      if (atTopLevel && ch === ';') {
        break
      }

      if (atTopLevel && ch === '\n') {
        const rest = source.slice(i + 1).trimStart()
        if (
          rest.startsWith('export ') ||
          rest.startsWith('interface ') ||
          rest.startsWith('type ') ||
          rest.startsWith('declare ') ||
          rest.startsWith('/**') ||
          rest.startsWith('//')
        ) {
          break
        }
      }

      i++
    }

    const expr = source.slice(exprStart, i).trim()
    if (expr) {
      map.set(name, { kind: 'type', expr })
    }
  }

  // NOTE: `export { A as B }` aliases are intentionally NOT indexed here. They are
  // module-scoped and handled by `parseModule`; flattening them into a global map
  // causes collisions (e.g. Ark's `ItemProps` alias shadowing Zag's `ItemProps`).

  return map
}

/* -------------------------------------------------------------------------- */
/*                         Import-aware module resolution                     */
/* -------------------------------------------------------------------------- */

interface ImportRef {
  spec: string
  name: string
}

interface ModuleInfo {
  path: string
  decls: DeclMap
  /** local binding -> imported symbol */
  imports: Map<string, ImportRef>
  /** `import * as ns from 'x'` -> spec */
  namespaces: Map<string, string>
  /** `export { local as exported }` (no `from`) */
  localExports: Map<string, string>
  /** `export { orig as exported } from 'x'` */
  reExports: Map<string, ImportRef>
  /** `export * from 'x'` */
  starExports: string[]
}

interface ResolvedDecl {
  decl: ParsedDecl
  file: string
}

const moduleCache = new Map<string, ModuleInfo | null>()

function parseSpecifierList(
  list: string,
): Array<{ orig: string; alias: string }> {
  return list
    .split(',')
    .map((s) => s.trim().replace(/^type\s+/, ''))
    .filter(Boolean)
    .map((s) => {
      const m = /^([A-Za-z0-9_$]+)(?:\s+as\s+([A-Za-z0-9_$]+))?$/.exec(s)
      return m ? { orig: m[1], alias: m[2] ?? m[1] } : null
    })
    .filter((x): x is { orig: string; alias: string } => x !== null)
}

function parseModule(path: string): ModuleInfo | null {
  if (moduleCache.has(path)) return moduleCache.get(path)!
  if (!existsSync(path)) {
    moduleCache.set(path, null)
    return null
  }

  const source = readFileSync(path, 'utf-8')
  const info: ModuleInfo = {
    path,
    decls: indexDeclarations(source),
    imports: new Map(),
    namespaces: new Map(),
    localExports: new Map(),
    reExports: new Map(),
    starExports: [],
  }

  let m: RegExpExecArray | null

  const namedImportRegex =
    /import\s+(?:type\s+)?(?:[A-Za-z0-9_$]+\s*,\s*)?\{([^}]*)\}\s*from\s*['"]([^'"]+)['"]/g
  while ((m = namedImportRegex.exec(source)) !== null) {
    for (const { orig, alias } of parseSpecifierList(m[1])) {
      info.imports.set(alias, { spec: m[2], name: orig })
    }
  }

  const nsImportRegex =
    /import\s+(?:type\s+)?\*\s+as\s+([A-Za-z0-9_$]+)\s+from\s*['"]([^'"]+)['"]/g
  while ((m = nsImportRegex.exec(source)) !== null) {
    info.namespaces.set(m[1], m[2])
  }

  const exportListRegex =
    /export\s+(?:type\s+)?\{([^}]*)\}(?:\s*from\s*['"]([^'"]+)['"])?/g
  while ((m = exportListRegex.exec(source)) !== null) {
    for (const { orig, alias } of parseSpecifierList(m[1])) {
      if (m[2]) info.reExports.set(alias, { spec: m[2], name: orig })
      else info.localExports.set(alias, orig)
    }
  }

  const starExportRegex = /export\s+\*\s+from\s*['"]([^'"]+)['"]/g
  while ((m = starExportRegex.exec(source)) !== null) {
    info.starExports.push(m[1])
  }

  moduleCache.set(path, info)
  return info
}

const TYPE_FILE_EXTS = ['.d.ts', '.d.mts', '.ts', '.tsx']

function resolveFileCandidates(base: string): string | null {
  const stripped = base.replace(/\.(m|c)?js$/, '')
  const candidates = [
    base,
    ...TYPE_FILE_EXTS.map((ext) => `${stripped}${ext}`),
    ...TYPE_FILE_EXTS.map((ext) => join(stripped, `index${ext}`)),
  ]
  for (const c of candidates) {
    if (/\.(d\.m?ts|tsx?)$/.test(c) && existsSync(c)) return c
  }
  return null
}

function extractTypesPath(entry: unknown): string | null {
  if (typeof entry === 'string') {
    return /\.(d\.m?ts|tsx?)$/.test(entry) ? entry : null
  }
  if (!entry || typeof entry !== 'object') return null
  const obj = entry as Record<string, unknown>
  for (const key of ['types', 'import', 'default']) {
    const found = extractTypesPath(obj[key])
    if (found) return found
  }
  return null
}

/**
 * Resolves a module specifier (relative or bare package) to a type declaration file.
 */
function resolveModuleTypes(spec: string, fromFile: string): string | null {
  const fromDir = dirname(fromFile)

  if (spec.startsWith('.')) {
    return resolveFileCandidates(join(fromDir, spec))
  }

  const segments = spec.split('/')
  const pkgName = spec.startsWith('@')
    ? segments.slice(0, 2).join('/')
    : segments[0]
  const subpath = segments.slice(pkgName.split('/').length).join('/')

  let pkgJsonPath: string
  try {
    pkgJsonPath = Bun.resolveSync(`${pkgName}/package.json`, fromDir)
  } catch {
    return null
  }

  const pkgRoot = dirname(pkgJsonPath)
  const pkgJson = JSON.parse(readFileSync(pkgJsonPath, 'utf-8'))
  const exportKey = subpath ? `./${subpath}` : '.'

  if (pkgJson.exports && typeof pkgJson.exports === 'object') {
    const direct = extractTypesPath(pkgJson.exports[exportKey])
    const wildcard = subpath
      ? extractTypesPath(pkgJson.exports['./*'])?.replace('*', subpath)
      : null
    const rawTypes = direct ?? wildcard
    if (rawTypes) {
      const resolved = resolveFileCandidates(join(pkgRoot, rawTypes))
      if (resolved) return resolved
    }
  }

  if (!subpath) {
    const rootTypes = pkgJson.types ?? pkgJson.typings
    if (typeof rootTypes === 'string') {
      return resolveFileCandidates(join(pkgRoot, rootTypes))
    }
  }

  return resolveFileCandidates(join(pkgRoot, subpath || 'index'))
}

/**
 * Finds a symbol exported from a module, following aliases, re-exports, and `export *`.
 */
function lookupExport(
  file: string,
  name: string,
  seen = new Set<string>(),
): ResolvedDecl | null {
  const key = `${file}::${name}`
  if (seen.has(key)) return null
  seen.add(key)

  const mod = parseModule(file)
  if (!mod) return null

  const localName = mod.localExports.get(name)
  if (localName) return lookupLocal(file, localName, seen)

  const reExport = mod.reExports.get(name)
  if (reExport) {
    const target = resolveModuleTypes(reExport.spec, file)
    return target ? lookupExport(target, reExport.name, seen) : null
  }

  if (mod.decls.has(name)) return lookupLocal(file, name, seen)

  for (const spec of mod.starExports) {
    const target = resolveModuleTypes(spec, file)
    const found = target ? lookupExport(target, name, seen) : null
    if (found) return found
  }

  return null
}

/**
 * Resolves a name as seen from inside `file`: local declaration first, then imports.
 */
function lookupLocal(
  file: string,
  name: string,
  seen = new Set<string>(),
): ResolvedDecl | null {
  const mod = parseModule(file)
  if (!mod) return null

  const decl = mod.decls.get(name)
  if (decl) return { decl, file }

  const imported = mod.imports.get(name)
  if (imported) {
    const target = resolveModuleTypes(imported.spec, file)
    return target ? lookupExport(target, imported.name, seen) : null
  }

  return null
}

/**
 * Resolves `Name` or `ns.Name` from the scope of `file`.
 */
function lookupTypeRef(
  file: string,
  ns: string | undefined,
  name: string,
): ResolvedDecl | null {
  if (!ns) return lookupLocal(file, name)
  const mod = parseModule(file)
  const spec = mod?.namespaces.get(ns)
  if (!spec) return null
  const target = resolveModuleTypes(spec, file)
  return target ? lookupExport(target, name) : null
}

function mergePropLists(base: PropSpec[], override: PropSpec[]): PropSpec[] {
  const byName = new Map<string, PropSpec>()
  for (const prop of base) {
    byName.set(prop.name, prop)
  }
  for (const prop of override) {
    const prev = byName.get(prop.name)
    byName.set(prop.name, {
      ...prev,
      ...prop,
      description: prop.description || prev?.description || '',
      defaultValue: prop.defaultValue ?? prev?.defaultValue,
    })
  }
  return Array.from(byName.values())
}

function extractStringLiterals(unionExpr: string): Set<string> {
  const keys = new Set<string>()
  const regex = /['"]([^'"]+)['"]/g
  let m: RegExpExecArray | null
  while ((m = regex.exec(unionExpr)) !== null) {
    keys.add(m[1])
  }
  return keys
}

/**
 * Extracts the type expression for a specific member inside an interface body
 * (e.g., `props: AccordionProps` or `props: { ... }` inside `AccordionSchema`).
 */
function extractMemberTypeFromBody(
  body: string,
  memberName: string,
): string | null {
  const propRegex = new RegExp(`\\b${memberName}\\??\\s*:`)
  const match = propRegex.exec(body)
  if (!match) return null

  let i = match.index + match[0].length
  while (i < body.length && /\s/.test(body[i])) i++

  let brace = 0
  let paren = 0
  let angle = 0
  let bracket = 0
  let quote: string | null = null
  const start = i

  while (i < body.length) {
    const ch = body[i]
    if (quote) {
      if (ch === quote && body[i - 1] !== '\\') quote = null
      i++
      continue
    }
    const commentEnd = skipComment(body, i)
    if (commentEnd !== -1) {
      i = commentEnd
      continue
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch
      i++
      continue
    }
    if (ch === '{') brace++
    else if (ch === '}') brace--
    else if (ch === '(') paren++
    else if (ch === ')') paren--
    else if (ch === '<' && body[i - 1] !== '=') angle++
    else if (ch === '>' && body[i - 1] !== '=') angle--
    else if (ch === '[') bracket++
    else if (ch === ']') bracket--

    const atTopLevel =
      brace === 0 && paren === 0 && angle === 0 && bracket === 0

    if (atTopLevel && (ch === ';' || ch === '\n')) {
      break
    }
    i++
  }

  return body.slice(start, i).trim() || null
}

/**
 * Recursively resolves all properties from an Ark UI / Zag.js / Cerberus type expression.
 * Type names are resolved from the scope of `file`, following its imports, so namespaced
 * references like `accordion.Props` land on the right `@zag-js/*` declaration.
 */
function resolvePropsFromExpr(
  rawExpr: string,
  file: string,
  visited = new Set<string>(),
): PropSpec[] {
  const expr = rawExpr.trim()
  if (!expr) return []

  // Skip raw HTML/DOM attribute bags so tables aren't flooded with 250+ native HTML events
  if (
    /^HTMLProps\b/.test(expr) ||
    /^HTMLArkProps\b/.test(expr) ||
    /^ComponentPropsWithoutRef\b/.test(expr) ||
    /^ComponentPropsWithRef\b/.test(expr) ||
    /^(?:React\.)?HTMLAttributes\b/.test(expr) ||
    /^JSX\.IntrinsicElements\b/.test(expr)
  ) {
    return []
  }

  const recurse = (e: string, f = file, v = new Set(visited)) =>
    resolvePropsFromExpr(e, f, v)

  // Handle top-level intersection: `A & B & { ... }`
  const intersectionTerms = splitTopLevel(expr, '&')
  if (intersectionTerms.length > 1) {
    let acc: PropSpec[] = []
    for (const term of intersectionTerms) {
      acc = mergePropLists(acc, recurse(term))
    }
    return acc
  }

  // Handle inline object type literal: `{ foo?: string }`
  if (expr.startsWith('{') && expr.endsWith('}')) {
    return parseInterfaceBody(expr.slice(1, -1))
  }

  // Handle parenthesized expression: `(A & B)`
  if (expr.startsWith('(') && expr.endsWith(')')) {
    return recurse(expr.slice(1, -1), file, visited)
  }

  // Handle indexed access type used by Zag.js: `AccordionSchema['props']`
  const indexedMatch =
    /^(?:([A-Za-z0-9_$]+)\.)?([A-Za-z0-9_$]+)\[['"]([A-Za-z0-9_$]+)['"]\]$/.exec(
      expr,
    )
  if (indexedMatch) {
    const [, ns, targetType, memberName] = indexedMatch
    const resolved = lookupTypeRef(file, ns, targetType)
    if (!resolved) return []
    const body =
      resolved.decl.kind === 'interface'
        ? resolved.decl.body
        : resolved.decl.expr.startsWith('{')
          ? resolved.decl.expr.slice(1, -1)
          : null
    const memberExpr = body ? extractMemberTypeFromBody(body, memberName) : null
    return memberExpr ? recurse(memberExpr, resolved.file) : []
  }

  // Handle generic utility types: `Assign<A, B>`, `Omit<T, K>`, `Optional<T, K>`, `Partial<T>`, `Pick<T, K>`
  const genericMatch = /^([A-Za-z0-9_$.]+)<(.+)>$/.exec(expr)
  if (genericMatch) {
    const [, genericName, genericArgsRaw] = genericMatch
    const args = splitTopLevel(genericArgsRaw, ',')

    if (genericName === 'Assign' && args.length >= 2) {
      return mergePropLists(recurse(args[0]), recurse(args[1]))
    }

    if (genericName === 'Omit' && args.length >= 2) {
      const omitted = extractStringLiterals(args[1])
      return recurse(args[0], file, visited).filter((p) => !omitted.has(p.name))
    }

    if (genericName === 'Pick' && args.length >= 2) {
      const picked = extractStringLiterals(args[1])
      return recurse(args[0], file, visited).filter((p) => picked.has(p.name))
    }

    if (genericName === 'Optional' && args.length >= 2) {
      const optionalKeys = extractStringLiterals(args[1])
      return recurse(args[0], file, visited).map((p) =>
        optionalKeys.has(p.name) ? { ...p, required: false } : p,
      )
    }

    if (genericName === 'RequiredBy' && args.length >= 2) {
      const requiredKeys = extractStringLiterals(args[1])
      return recurse(args[0], file, visited).map((p) =>
        requiredKeys.has(p.name) ? { ...p, required: true } : p,
      )
    }

    if (genericName === 'Partial' && args.length >= 1) {
      return recurse(args[0], file, visited).map((p) => ({
        ...p,
        required: false,
      }))
    }

    if (genericName === 'Required' && args.length >= 1) {
      return recurse(args[0], file, visited).map((p) => ({
        ...p,
        required: true,
      }))
    }

    // Unknown generic interface (e.g. `ItemProps<T>`): resolve its declaration, ignoring type args
    return recurse(genericName, file, visited)
  }

  // Handle named type/interface reference (e.g., `UseAccordionProps` or `accordion.Props`)
  const namespacedMatch = /^(?:([A-Za-z0-9_$]+)\.)?([A-Za-z0-9_$]+)$/.exec(expr)
  if (namespacedMatch) {
    const [, ns, typeName] = namespacedMatch
    const resolved = lookupTypeRef(file, ns, typeName)
    if (!resolved) return []

    const visitKey = `${resolved.file}::${typeName}`
    if (visited.has(visitKey)) return []
    visited.add(visitKey)

    const { decl, file: declFile } = resolved

    if (decl.kind === 'type') {
      return resolvePropsFromExpr(decl.expr, declFile, visited)
    }

    let inherited: PropSpec[] = []
    for (const parentExpr of decl.heritage) {
      inherited = mergePropLists(
        inherited,
        resolvePropsFromExpr(parentExpr, declFile, new Set(visited)),
      )
    }

    return mergePropLists(inherited, parseInterfaceBody(decl.body))
  }

  return []
}

/**
 * Resolves the Ark UI type entry file for `@ark-ui/react/<key>`.
 */
function resolveArkEntry(key: string): string | null {
  const anchor = join(REACT_PKG_ROOT, 'package.json')
  const entry = resolveModuleTypes(`@ark-ui/react/${key}`, anchor)
  if (!entry) {
    console.warn(`⚠️ Could not resolve @ark-ui/react/${key} declaration files`)
  }
  return entry
}

/**
 * Reads Panda v2's `design-system.json` to extract recipe variants & defaults.
 */
async function loadRecipeVariants(key: string): Promise<VariantSpec[]> {
  if (!existsSync(DESIGN_SYSTEM_SPEC_PATH)) return []

  const raw = JSON.parse(await readFile(DESIGN_SYSTEM_SPEC_PATH, 'utf-8'))
  const recipe = raw.slotRecipes?.[key] ?? raw.recipes?.[key]
  if (!recipe?.variants) return []

  const defaultVariants: Record<string, unknown> = recipe.defaultVariants ?? {}

  return Object.entries(recipe.variants).map(([variantName, spec]) => {
    const typedSpec = spec as { values?: unknown[] } | Record<string, unknown>
    const values = Array.isArray(typedSpec?.values)
      ? typedSpec.values.map(String)
      : Object.keys(typedSpec ?? {})

    const defVal = defaultVariants[variantName]
    return {
      name: variantName,
      values,
      defaultValue: defVal !== undefined ? `'${String(defVal)}'` : undefined,
    }
  })
}

const PANDA_CERBERUS_PRIMITIVE_PROPS: PropSpec[] = [
  {
    name: 'asChild',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description:
      'Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node.',
  },
  {
    name: 'unstyled',
    type: 'boolean',
    required: false,
    defaultValue: 'false',
    description:
      'Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes.',
  },
  {
    name: 'css',
    type: 'SystemStyleObject',
    required: false,
    defaultValue: 'undefined',
    description:
      'PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted.',
  },
]

async function buildComponentDocSpec(
  config: ComponentConfig,
): Promise<ComponentDocSpec> {
  const {
    name,
    key,
    anatomy,
    description,
    isArkUI = true,
    abstractions = [],
    a11y,
  } = config

  const reliableParts: string[] = Array.isArray(anatomy)
    ? [...anatomy]
    : (anatomy as { keys: () => string[] }).keys()
  const uniqueParts = [...new Set(reliableParts)]

  const variants = await loadRecipeVariants(key)
  const arkEntry = isArkUI ? resolveArkEntry(key) : null

  const parts: PartSpec[] = []

  // Convert Panda recipe variants into PropSpecs so `Root` documents both Ark + PandaCSS props
  const variantPropSpecs: PropSpec[] = variants.map((v) => ({
    name: v.name,
    type: v.values.map((val) => `'${val}'`).join(' | '),
    required: false,
    defaultValue: v.defaultValue,
    description: `PandaCSS recipe variant for ${v.name}.`,
  }))

  // 1. Extract Abstraction Specs
  for (const abs of abstractions) {
    const absFilePath = join(
      REACT_PKG_ROOT,
      'src',
      'components',
      key,
      `${abs.file}.tsx`,
    )
    const candidateInterfaces = [
      ...(abs.types ?? []),
      `${name}${abs.name}Props`,
      `${name}${abs.name}BaseProps`,
    ]

    let extracted: PropSpec[] = []
    for (const candidate of candidateInterfaces) {
      if (lookupLocal(absFilePath, candidate)) {
        extracted = resolvePropsFromExpr(candidate, absFilePath)
        break
      }
    }

    parts.push({
      name: abs.name,
      exportName: `${name}.${abs.name}`,
      kind: 'abstraction',
      description: abs.description,
      props: mergePropLists(extracted, [
        {
          name: 'unstyled',
          type: 'boolean',
          required: false,
          defaultValue: 'false',
          description:
            'Strips Cerberus PandaCSS recipe classes from this abstraction layer.',
        },
        {
          name: 'css',
          type: 'SystemStyleObject',
          required: false,
          defaultValue: 'undefined',
          description:
            'PandaCSS style object for custom atomic styling. All PandaCSS style props are also accepted.',
        },
      ]),
    })
  }

  // 2. Extract Primitive Specs (Ark UI + Zag.js + PandaCSS)
  for (const part of uniqueParts) {
    const isRoot = part === 'root'
    const exportKey = isRoot ? 'Root' : capitalize(part)
    const partPascal = `${name}${capitalize(part)}`

    let arkProps: PropSpec[] = []
    if (arkEntry) {
      for (const candidate of [
        `${partPascal}Props`,
        `${partPascal}BaseProps`,
      ]) {
        const resolved = lookupExport(arkEntry, candidate)
        if (resolved) {
          // Resolve from the declaring file so its own imports (e.g. `@zag-js/*`) are in scope
          arkProps = resolvePropsFromExpr(candidate, resolved.file)
          break
        }
      }
    }

    const combinedProps = isRoot
      ? mergePropLists(
          mergePropLists(variantPropSpecs, arkProps),
          PANDA_CERBERUS_PRIMITIVE_PROPS,
        )
      : mergePropLists(arkProps, PANDA_CERBERUS_PRIMITIVE_PROPS)

    parts.push({
      name: exportKey,
      exportName: `${name}.${exportKey}`,
      kind: 'primitive',
      description: isRoot
        ? `The root container of the ${name} component.`
        : `The ${toKebabCase(part)} primitive part of the ${name} component.`,
      dataScope: key,
      dataPart: toKebabCase(part),
      props: combinedProps,
    })
  }

  return {
    name,
    key,
    description: description.trim(),
    variants,
    parts,
    a11y,
  }
}

async function run() {
  await mkdir(DOCS_SPEC_OUT_DIR, { recursive: true })
  const keys: string[] = []

  for (const apiConfig of config) {
    const spec = await buildComponentDocSpec(apiConfig)
    await Bun.write(
      join(DOCS_SPEC_OUT_DIR, `${apiConfig.key}.json`),
      JSON.stringify(spec, null, 2),
    )
    keys.push(apiConfig.key)
    const summary = spec.parts
      .map((p) => `${p.exportName}(${p.props.length})`)
      .join(', ')
    console.log(`📄 ${apiConfig.name}: ${summary}`)
  }

  let barrel = `// @generated by Cerberus CLI — Do not edit manually.\n`
  const specTypeImport = relative(
    DOCS_SPEC_OUT_DIR,
    join(import.meta.dir, 'generate-docs-spec'),
  )
  barrel += `import type { ComponentDocSpec } from '${specTypeImport}'\n`
  for (const key of keys) {
    const varName = `${key.replace(/-/g, '_')}Spec`
    barrel += `import ${varName} from './${key}.json'\n`
  }
  barrel += `\nexport const API_SPECS: Record<string, ComponentDocSpec> = {\n`
  for (const key of keys) {
    const varName = `${key.replace(/-/g, '_')}Spec`
    barrel += `  '${key}': ${varName} as ComponentDocSpec,\n`
  }
  barrel += `}\n`

  await Bun.write(join(DOCS_SPEC_OUT_DIR, 'index.ts'), barrel)
  console.log('\n🎉 All component doc specs generated!')
}

run().catch(console.error)
