import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { indexDeclarations, type Declaration } from '../parser/declarations'
import { blankComments } from '../parser/scan'

interface ImportRef {
  spec: string
  name: string
}

export interface ModuleInfo {
  path: string
  decls: Map<string, Declaration>
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

export interface ResolvedDecl {
  decl: Declaration
  file: string
  /** The declaration's own name in `file` (differs from the looked-up name for aliases) */
  name: string
}

const TYPE_FILE_EXTS = ['.d.ts', '.d.mts', '.ts', '.tsx']
const TYPE_FILE = /\.(d\.m?ts|tsx?)$/

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

function resolveFileCandidates(base: string): string | null {
  const stripped = base.replace(/\.(m|c)?js$/, '')
  const candidates = [
    base,
    ...TYPE_FILE_EXTS.map((ext) => `${stripped}${ext}`),
    ...TYPE_FILE_EXTS.map((ext) => join(stripped, `index${ext}`)),
  ]
  return candidates.find((c) => TYPE_FILE.test(c) && existsSync(c)) ?? null
}

function extractTypesPath(entry: unknown): string | null {
  if (typeof entry === 'string') return TYPE_FILE.test(entry) ? entry : null
  if (!entry || typeof entry !== 'object') return null
  const obj = entry as Record<string, unknown>
  for (const key of ['types', 'import', 'default']) {
    const found = extractTypesPath(obj[key])
    if (found) return found
  }
  return null
}

/**
 * Parses files on demand and answers "what does name N mean in file F?", following
 * imports, `export { a as b }`, `export *` and package `exports`. Names are always
 * resolved per file, never through a global map.
 */
export class ModuleGraph {
  private readonly modules = new Map<string, ModuleInfo | null>()

  parse(path: string): ModuleInfo | null {
    if (this.modules.has(path)) return this.modules.get(path)!
    if (!existsSync(path)) {
      this.modules.set(path, null)
      return null
    }

    const source = readFileSync(path, 'utf-8')
    const code = blankComments(source)
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

    const namedImport =
      /import\s+(?:type\s+)?(?:[A-Za-z0-9_$]+\s*,\s*)?\{([^}]*)\}\s*from\s*['"]([^'"]+)['"]/g
    while ((m = namedImport.exec(code)) !== null) {
      for (const { orig, alias } of parseSpecifierList(m[1])) {
        info.imports.set(alias, { spec: m[2], name: orig })
      }
    }

    const nsImport =
      /import\s+(?:type\s+)?\*\s+as\s+([A-Za-z0-9_$]+)\s+from\s*['"]([^'"]+)['"]/g
    while ((m = nsImport.exec(code)) !== null) {
      info.namespaces.set(m[1], m[2])
    }

    const exportList =
      /export\s+(?:type\s+)?\{([^}]*)\}(?:\s*from\s*['"]([^'"]+)['"])?/g
    while ((m = exportList.exec(code)) !== null) {
      for (const { orig, alias } of parseSpecifierList(m[1])) {
        if (m[2]) info.reExports.set(alias, { spec: m[2], name: orig })
        else info.localExports.set(alias, orig)
      }
    }

    const starExport = /export\s+\*\s+from\s*['"]([^'"]+)['"]/g
    while ((m = starExport.exec(code)) !== null) {
      info.starExports.push(m[1])
    }

    this.modules.set(path, info)
    return info
  }

  /**
   * Resolves a module specifier (relative or bare package) to a type declaration file.
   */
  resolveModule(spec: string, fromFile: string): string | null {
    const fromDir = dirname(fromFile)
    if (spec.startsWith('.')) return resolveFileCandidates(join(fromDir, spec))

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
   * Finds a symbol exported from a module, following aliases, re-exports and `export *`.
   */
  lookupExport(
    file: string,
    name: string,
    seen = new Set<string>(),
  ): ResolvedDecl | null {
    const key = `${file}::${name}`
    if (seen.has(key)) return null
    seen.add(key)

    const mod = this.parse(file)
    if (!mod) return null

    const localName = mod.localExports.get(name)
    if (localName) return this.lookupLocal(file, localName, seen)

    const reExport = mod.reExports.get(name)
    if (reExport) {
      const target = this.resolveModule(reExport.spec, file)
      return target ? this.lookupExport(target, reExport.name, seen) : null
    }

    if (mod.decls.has(name)) return this.lookupLocal(file, name, seen)

    for (const spec of mod.starExports) {
      const target = this.resolveModule(spec, file)
      const found = target ? this.lookupExport(target, name, seen) : null
      if (found) return found
    }

    return null
  }

  /**
   * Resolves a name as seen from inside `file`: local declaration first, then imports.
   */
  lookupLocal(
    file: string,
    name: string,
    seen = new Set<string>(),
  ): ResolvedDecl | null {
    const mod = this.parse(file)
    if (!mod) return null

    const decl = mod.decls.get(name)
    if (decl) return { decl, file, name }

    const imported = mod.imports.get(name)
    if (imported) {
      const target = this.resolveModule(imported.spec, file)
      return target ? this.lookupExport(target, imported.name, seen) : null
    }

    return null
  }

  /**
   * Resolves `Name` or `ns.Name` from the scope of `file`.
   */
  lookupTypeRef(
    file: string,
    ns: string | undefined,
    name: string,
  ): ResolvedDecl | null {
    if (!ns) return this.lookupLocal(file, name)
    const spec = this.parse(file)?.namespaces.get(ns)
    if (!spec) return null
    const target = this.resolveModule(spec, file)
    return target ? this.lookupExport(target, name) : null
  }
}
