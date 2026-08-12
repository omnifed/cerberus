import { createAcheronPrimitiveColors, defineTheme } from '@cerberus/tokens'
import { SemanticTokens } from '@pandacss/types'
import { semanticTokens } from './semantic-tokens/config'

/**
 * This module contains the Acheron theme and configuration options.
 * @module
 */

export const theme: { semanticTokens: SemanticTokens } = defineTheme({
  semanticTokens,
  extend: {
    tokens: {
      colors: createAcheronPrimitiveColors(),
    },
  },
})
