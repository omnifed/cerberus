// Figma Data

export type NodeMeta = {
  key: string // sha
  name: string
  styleType: string
  remote: boolean
  description: string
}

// Helpers

export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : never

export type VariableColor = {
  r: number
  g: number
  b: number
  a: number
}

export type Writable<T> = {
  -readonly [K in keyof T]: T[K]
}

export type ProxyValue<T> = {
  <Value>(definition: Value extends T ? Value : T): Value
} & {
  [K in keyof Required<T>]: <Value>(
    definition: Value extends T[K] ? Value : T[K],
  ) => Value
}
