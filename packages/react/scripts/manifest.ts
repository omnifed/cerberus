export type AbstractionConfig = {
  name: string
  file: string
  description: string
  isDefaultExport?: boolean
  types?: string[]
}

export type KeyboardMapping = {
  key: string
  description: string
}

export type A11yConfig = {
  /** WAI-ARIA pattern name (e.g., 'Accordion') */
  pattern: string
  /** W3C WAI-ARIA APG reference URL */
  apgUrl: string
  /** Keyboard interaction matrix for Section 508 / WCAG 2.1 AA docs */
  keyboard: KeyboardMapping[]
  /** Optional 508 authoring guidance (e.g., accessible name requirements) */
  notes?: string[]
}

export type ComponentConfig = {
  name: string
  key: string
  anatomy: { keys: () => string[] } | readonly string[]
  description: string
  isArkUI?: boolean
  abstractions?: AbstractionConfig[]
  types?: string[]
  a11y?: A11yConfig
}
