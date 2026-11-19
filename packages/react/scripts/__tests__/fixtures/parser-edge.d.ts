/**
 * Mentions `interface Fake { bogus: string }` and `type Ghost = { boo: 1 }` in prose,
 * which must not become declarations.
 */
export interface Handlers<T extends Record<string, Array<number>>> {
  /** Called when the value changes */
  onValueChange?(details: { value: T }): void
  format?<U>(value: U, locale: string): string
  separator?: 'a;b' | "c{d"
}

export type Nested<T extends Map<string, Set<number>>> = {
  inline: { a: string, b: number }
  after: boolean
}
