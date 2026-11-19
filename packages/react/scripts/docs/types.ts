/**
 * Types of a generated `ComponentDocSpec`, inferred from `./schema`. Like the schema,
 * this module must stay free of Bun and Node APIs: the docs app imports it.
 */
import type { z } from 'zod'
import type {
  A11ySpecSchema,
  ComponentDocSpecSchema,
  DataAttributeSpecSchema,
  KeyboardMappingSchema,
  PartSpecSchema,
  PropSpecSchema,
  VariantSpecSchema,
} from './schema'

export type KeyboardMapping = z.infer<typeof KeyboardMappingSchema>
export type PropSpec = z.infer<typeof PropSpecSchema>
export type PartSpec = z.infer<typeof PartSpecSchema>
export type DataAttributeSpec = z.infer<typeof DataAttributeSpecSchema>
export type VariantSpec = z.infer<typeof VariantSpecSchema>
export type A11ySpec = z.infer<typeof A11ySpecSchema>
export type ComponentDocSpec = z.infer<typeof ComponentDocSpecSchema>
