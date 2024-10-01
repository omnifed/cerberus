import { baseTheme } from '../../theme'
import { defineTheme } from '../../theme-contract'
import { semanticTokens } from './semantic-tokens/config'

/**
 * This module contains the Acheron theme and configuration options.
 * @module
 */

export const acheronTheme = defineTheme({
  ...baseTheme,
  semanticTokens,
})
