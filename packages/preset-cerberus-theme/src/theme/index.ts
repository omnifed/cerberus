import { createCerberusPrimitiveColors, defineTheme } from '@cerberus/tokens'
import { type Config } from '@pandacss/dev'
import { getThemeName } from '../config'
import { semanticTokens } from './semantic-tokens/config'

/**
 * This module contains the Acheron theme and configuration options.
 * @module
 */

export const theme: Config['theme'] = defineTheme({
  semanticTokens,
  extend: {
    tokens: {
      colors: createCerberusPrimitiveColors(),
    },
  },
})

export const themes: Config['themes'] = {
  [getThemeName()]: {
    tokens: {
      colors: createCerberusPrimitiveColors(),
    },
    semanticTokens,
  },
}
