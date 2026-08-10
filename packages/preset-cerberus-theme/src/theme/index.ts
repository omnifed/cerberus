import { defineTheme } from '@cerberus/tokens'
import { type Config } from '@pandacss/dev'
import { semanticTokens } from './semantic-tokens/config'

/**
 * This module contains the Acheron theme and configuration options.
 * @module
 */

export const theme: Config['theme'] = defineTheme({
  semanticTokens,
  // tokens: {
  //   colors: createCerberusPrimitiveColors(),
  // },
})
