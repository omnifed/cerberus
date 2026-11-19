import type { PropSpec } from '../types'
import { parseJsDocBlock } from './jsdoc'
import {
  blankComments,
  findMatchingClose,
  readTypeExpr,
  scan,
  skipComment,
  splitTopLevel,
} from './scan'

export interface InterfaceDecl {
  kind: 'interface'
  /** `extends` clauses, one type expression each */
  heritage: string[]
  /** Text between the braces */
  body: string
}

export interface TypeAliasDecl {
  kind: 'type'
  /** Right-hand side of `type X = …` */
  expr: string
}

export type Declaration = InterfaceDecl | TypeAliasDecl

const IDENT = /^[A-Za-z0-9_$]+$/

function skipWhitespace(src: string, i: number): number {
  while (i < src.length && /\s/.test(src[i])) i++
  return i
}

/** If `src[i]` opens a type-parameter list, returns the index past its `>`. */
function skipTypeParams(src: string, i: number): number {
  if (src[i] !== '<') return i
  const close = findMatchingClose(src, i)
  return close === -1 ? i : close + 1
}

/**
 * Indexes the `interface` and `type` declarations of one file by name. Searches a
 * comment-blanked copy so declarations mentioned in JSDoc are ignored.
 *
 * `export { A as B }` aliases are deliberately not indexed here: they are module-scoped
 * and handled by the module graph (indexing them globally caused name collisions).
 */
export function indexDeclarations(source: string): Map<string, Declaration> {
  const decls = new Map<string, Declaration>()
  const code = blankComments(source)
  let m: RegExpExecArray | null

  const interfaceRe =
    /(?:^|[^\w$.])(?:export\s+)?(?:declare\s+)?interface\s+([A-Za-z0-9_$]+)/g
  while ((m = interfaceRe.exec(code)) !== null) {
    let i = skipWhitespace(code, m.index + m[0].length)
    i = skipWhitespace(code, skipTypeParams(code, i))

    let heritageRaw = ''
    if (code.startsWith('extends', i) && /\s/.test(code[i + 7] ?? '')) {
      const heritageStart = i + 7
      const open = findBodyBrace(code, heritageStart)
      if (open === -1) continue
      heritageRaw = source.slice(heritageStart, open).trim()
      i = open
    }
    if (code[i] !== '{') continue

    const close = findMatchingClose(source, i)
    if (close === -1) continue
    decls.set(m[1], {
      kind: 'interface',
      heritage: heritageRaw ? splitTopLevel(heritageRaw, ',') : [],
      body: source.slice(i + 1, close),
    })
  }

  const typeRe =
    /(?:^|[^\w$.])(?:export\s+)?(?:declare\s+)?type\s+([A-Za-z0-9_$]+)/g
  while ((m = typeRe.exec(code)) !== null) {
    let i = skipWhitespace(code, m.index + m[0].length)
    i = skipWhitespace(code, skipTypeParams(code, i))
    if (code[i] !== '=') continue

    const exprStart = skipWhitespace(source, i + 1)
    const end = readTypeExpr(source, exprStart, 'alias')
    const expr = source.slice(exprStart, end).trim()
    if (expr) decls.set(m[1], { kind: 'type', expr })
  }

  return decls
}

/** Index of the interface body's `{` at or after `start` (skipping generic args), or -1. */
function findBodyBrace(src: string, start: number): number {
  const end = scan(
    src,
    start,
    (i, d) =>
      src[i] === '{' &&
      d.brace === 1 &&
      d.paren === 0 &&
      d.angle === 0 &&
      d.bracket === 0,
  )
  return end === src.length ? -1 : end
}

/**
 * Finds the raw type text of member `memberName` in an interface or object-type body,
 * e.g. `props` in Zag's `AccordionSchema`. Matches on a comment-blanked copy.
 */
export function findMemberType(
  body: string,
  memberName: string,
): string | null {
  const re = new RegExp(`(?:^|[\\s;,{])${memberName}\\??\\s*:`)
  const match = re.exec(blankComments(body))
  if (!match) return null
  const start = skipWhitespace(body, match.index + match[0].length)
  const end = readTypeExpr(body, start, 'member')
  return body.slice(start, end).trim() || null
}

const MEMBER_HEAD =
  /(?:readonly\s+)?([A-Za-z0-9_$]+|'[^']*'|"[^"]*"|\[[^\]]*\])(\?)?\s*/y

/**
 * Parses the property and method signatures (with their JSDoc) in an interface or
 * object-type body. Index signatures, call signatures and quoted names are skipped.
 */
export function parseInterfaceBody(body: string): PropSpec[] {
  const props: PropSpec[] = []
  let i = 0

  const skipToNextLine = (from: number) => {
    const nl = body.indexOf('\n', from)
    return nl === -1 ? body.length : nl + 1
  }

  while (i < body.length) {
    i = skipWhitespace(body, i)
    if (i >= body.length) break

    let jsDoc = ''
    if (body.startsWith('/**', i)) {
      const end = skipComment(body, i)
      jsDoc = body.slice(i, end)
      i = skipWhitespace(body, end)
    } else if (body[i] === ';' || body[i] === ',') {
      i++
      continue
    } else {
      const end = skipComment(body, i)
      if (end !== -1) {
        i = end
        continue
      }
    }
    if (i >= body.length) break

    MEMBER_HEAD.lastIndex = i
    const head = MEMBER_HEAD.exec(body)
    if (!head) {
      i = skipToNextLine(i)
      continue
    }
    const [, rawName, optional] = head
    let j = head.index + head[0].length

    // Method signature: `name?<T>(args): Ret` documents as `<T>(args) => Ret`
    let typePrefix = ''
    if (body[j] === '<' || body[j] === '(') {
      const paramsStart = j
      j = skipTypeParams(body, j)
      if (body[j] !== '(') {
        i = skipToNextLine(i)
        continue
      }
      const closeParen = findMatchingClose(body, j)
      if (closeParen === -1) break
      typePrefix = `${body.slice(paramsStart, closeParen + 1)} => `
      j = skipWhitespace(body, closeParen + 1)
    }

    if (body[j] !== ':') {
      i = skipToNextLine(i)
      continue
    }

    const typeStart = skipWhitespace(body, j + 1)
    const typeEnd = readTypeExpr(body, typeStart, 'member')
    i = typeEnd + 1

    if (!IDENT.test(rawName)) continue

    const required = !optional
    // Prettier's multi-line unions start with a leading `|`
    const typeText = body
      .slice(typeStart, typeEnd)
      .trim()
      .replace(/^[|&]\s*/, '')
    let type = (typePrefix + typeText).replace(/\s+/g, ' ')
    if (!required) type = type.replace(/\s*\|\s*undefined$/, '')

    const { description, defaultValue, deprecated, see } = jsDoc
      ? parseJsDocBlock(jsDoc)
      : { description: '' }

    props.push({
      name: rawName,
      type,
      required,
      defaultValue,
      description,
      ...(deprecated !== undefined ? { deprecated } : {}),
      ...(see ? { see } : {}),
    })
  }

  return props
}
