import { defineTheme } from '@cerberus/tokens'
import { semanticTokens } from './semantic-tokens/config'
import { SemanticTokens } from '@pandacss/types'

/**
 * This module contains the Acheron theme and configuration options.
 * @module
 */

export const theme: { semanticTokens: SemanticTokens } = defineTheme({
  semanticTokens,
})
