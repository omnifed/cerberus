// Figma Data

export type NodeMeta = {
  key: string // sha
  name: string
  styleType: string
  remote: boolean
  description: string
}

// Helpers

/**
 * Simplifies a type by removing readonly modifiers.
 */
export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : never

/**
 * Represents a variable color with red, green, blue, and alpha components.
 */
export type VariableColor = {
  r: number
  g: number
  b: number
  a: number
}

/**
 * Represents a writable type by removing readonly modifiers.
 */
export type Writable<T> = {
  -readonly [K in keyof T]: T[K]
}

/**
 * Represents a proxy value that can be used to read and write values of type T.
 */
export type ProxyValue<T> = {
  <Value>(definition: Value extends T ? Value : T): Value
} & {
  [K in keyof Required<T>]: <Value>(
    definition: Value extends T[K] ? Value : T[K],
  ) => Value
}
