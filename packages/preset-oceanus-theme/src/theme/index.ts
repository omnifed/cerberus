import { defineTheme } from '@cerberus/tokens'
import { SemanticTokens } from '@pandacss/dev'
import { semanticTokens } from './semantic-tokens/config'

/**
 * This module contains the Acheron theme and configuration options.
 * @module
 */

export const theme: { semanticTokens: SemanticTokens } = defineTheme({
  semanticTokens,
})
