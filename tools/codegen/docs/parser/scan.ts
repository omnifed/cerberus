/**
 * One comment- and string-aware scanner for TypeScript source text. Every reader in the
 * parser is built on `scan`, so they agree on what "top level" means.
 */

export interface Depth {
  brace: number
  paren: number
  angle: number
  bracket: number
}

const isTopLevel = (d: Depth) =>
  d.brace === 0 && d.paren === 0 && d.angle === 0 && d.bracket === 0

/**
 * If `src[i]` starts a `//` or `/* *\/` comment, returns the index just past it; otherwise -1.
 * A line comment ends AT its newline, so line-terminated readers still see it.
 * Skipping comments keeps apostrophes in JSDoc (e.g. "don't") from being read as quotes.
 */
export function skipComment(src: string, i: number): number {
  if (src[i] !== '/') return -1
  if (src[i + 1] === '/') {
    const end = src.indexOf('\n', i + 2)
    return end === -1 ? src.length : end
  }
  if (src[i + 1] === '*') {
    const end = src.indexOf('*/', i + 2)
    return end === -1 ? src.length : end + 2
  }
  return -1
}

/**
 * Walks `src` from `start`, skipping string literals and comments and tracking bracket
 * depth (`=>` is not an angle bracket). `visit` sees every code character after its
 * depth change is applied; returning `true` stops the scan at that index.
 * Returns the stop index, or `src.length`.
 */
export function scan(
  src: string,
  start: number,
  visit: (i: number, depth: Depth, atTopLevel: boolean) => boolean | void,
): number {
  const depth: Depth = { brace: 0, paren: 0, angle: 0, bracket: 0 }
  let quote: string | null = null

  for (let i = start; i < src.length; i++) {
    const ch = src[i]

    if (quote) {
      if (ch === quote && src[i - 1] !== '\\') quote = null
      continue
    }

    const commentEnd = skipComment(src, i)
    if (commentEnd !== -1) {
      i = commentEnd - 1
      continue
    }

    if (ch === "'" || ch === '"' || ch === '`') {
      quote = ch
      continue
    }

    if (ch === '{') depth.brace++
    else if (ch === '}') depth.brace--
    else if (ch === '(') depth.paren++
    else if (ch === ')') depth.paren--
    else if (ch === '<' && src[i - 1] !== '=') depth.angle++
    else if (ch === '>' && src[i - 1] !== '=') depth.angle--
    else if (ch === '[') depth.bracket++
    else if (ch === ']') depth.bracket--

    if (visit(i, depth, isTopLevel(depth))) return i
  }
  return src.length
}

/**
 * Splits `input` on a single-character `delimiter` only at the top level.
 */
export function splitTopLevel(input: string, delimiter: string): string[] {
  if (delimiter.length !== 1) {
    throw new Error('splitTopLevel only supports single-character delimiters')
  }
  const parts: string[] = []
  let start = 0
  scan(input, 0, (i, _depth, atTop) => {
    if (atTop && input[i] === delimiter) {
      parts.push(input.slice(start, i).trim())
      start = i + 1
    }
  })
  const tail = input.slice(start).trim()
  if (tail) parts.push(tail)
  return parts
}

const CLOSERS: Record<string, keyof Depth> = {
  '{': 'brace',
  '(': 'paren',
  '<': 'angle',
  '[': 'bracket',
}

/**
 * Returns the index of the bracket closing the one at `openIdx`, or -1.
 */
export function findMatchingClose(src: string, openIdx: number): number {
  const kind = CLOSERS[src[openIdx]]
  if (!kind) throw new Error(`No bracket at index ${openIdx}`)
  let seenOpen = false
  const end = scan(src, openIdx, (_i, depth) => {
    if (depth[kind] > 0) seenOpen = true
    return seenOpen && depth[kind] === 0
  })
  return end === src.length ? -1 : end
}

/**
 * Replaces comment text with spaces (newlines kept), preserving every offset, so regexes
 * can search code without matching inside comments.
 */
export function blankComments(src: string): string {
  let out = ''
  let quote: string | null = null
  for (let i = 0; i < src.length; i++) {
    const ch = src[i]
    if (quote) {
      if (ch === quote && src[i - 1] !== '\\') quote = null
      out += ch
      continue
    }
    const end = skipComment(src, i)
    if (end !== -1) {
      out += src.slice(i, end).replace(/[^\n]/g, ' ')
      i = end - 1
      continue
    }
    if (ch === "'" || ch === '"' || ch === '`') quote = ch
    out += ch
  }
  return out
}

const DECLARATION_START = /^(?:export |interface |type |declare |\/\*\*|\/\/)/
const TRAILING_OPERATOR = /(?:[|&:?]|=>)$/
const LEADING_OPERATOR = /^(?:[|&:?]|=>)/

/**
 * Reads a type expression starting at `start` and returns its end index (exclusive).
 *
 * - `member`: a property type inside `{ … }`. Ends at a top-level `;` or `,`, or at a
 *   newline unless the type continues (a dangling `|`/`&`/`=>`/`:`/`?`, or the next line
 *   starts with one, as prettier formats multi-line unions).
 * - `alias`: the right-hand side of `type X =`. Ends at a top-level `;`, or at a newline
 *   followed by the start of another declaration.
 */
export function readTypeExpr(
  src: string,
  start: number,
  mode: 'member' | 'alias',
): number {
  return scan(src, start, (i, _depth, atTop) => {
    if (!atTop) return false
    const ch = src[i]
    if (ch === ';') return true
    if (mode === 'member' && ch === ',') return true
    if (ch !== '\n') return false

    const rest = src.slice(i + 1).trimStart()
    if (mode === 'alias') return DECLARATION_START.test(rest)

    const sofar = blankComments(src.slice(start, i)).trim()
    if (sofar === '' || TRAILING_OPERATOR.test(sofar)) return false
    return !LEADING_OPERATOR.test(rest)
  })
}
