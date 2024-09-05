export interface EnumResult {
  name: string
  type: 'enum'
  value: string[]
}

function Enum(name: string, value: string[]): EnumResult {
  return {
    name,
    type: 'enum',
    value,
  }
}

export interface NumberResult {
  name: string
  type: 'number'
  value: number
}

function Number(name: string, value: number): NumberResult {
  return {
    name,
    type: 'number',
    value,
  }
}

export interface TextResult {
  name: string
  type: 'text'
  value: string
}

function Text(name: string, value: string): TextResult {
  return {
    name,
    type: 'text',
    value,
  }
}

export interface BooleanResult {
  name: string
  type: 'boolean'
  value: boolean
}

function Boolean(name: string, value: boolean): BooleanResult {
  return {
    name,
    type: 'boolean',
    value,
  }
}

export type BuilderResult =
  | EnumResult
  | TextResult
  | BooleanResult
  | NumberResult

export const builder = {
  Boolean,
  Enum,
  Text,
  Number,
}
