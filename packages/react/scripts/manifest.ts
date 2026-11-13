import { config } from './configs'

export type ComponentConfig = {
  name: string
  key: string
  anatomy: any
  isArkUI?: boolean // Primitive bypass flag (defaults to true)
  description: string // The main Rust-level summary
  abstractions?: AbstractionConfig[]
  types?: string[] // Explicit types to export
}

export type AbstractionConfig = {
  name: string
  file: string // e.g., 'item-group' (no extension)
  description: string // Optional description for the abstraction
  isDefaultExport?: boolean
  types?: string[] // Explicit types to export
}

export const COMPONENTS: ComponentConfig[] = config
