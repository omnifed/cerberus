export type { defineUtility } from './utilities'
export type { definePattern } from './patterns'

export type Simplify<T> = T extends unknown ? { [K in keyof T]: T[K] } : never

export type NextDisplay = 'auto' | 'block' | 'swap' | 'fallback' | 'optional'
export type NextFontWeight =
  | '400'
  | '600'
  | '700'
  | '800'
  | '100'
  | '200'
  | '300'
  | '500'
  | '900'
  | ('400' | '600' | '700' | '800' | '100' | '200' | '300' | '500' | '900')[]
export type NextSubsets = ('latin' | 'latin-ext')[]
