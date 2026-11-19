/**
 * The shape of a generated `ComponentDocSpec` JSON file. This module must stay free of
 * Bun and Node APIs: the docs app type-checks against it.
 */
import type { KeyboardMapping } from '../manifest'

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
  /** Panda `allowsBoolean`: the variant also accepts `true`/`false` */
  allowsBoolean?: boolean
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
