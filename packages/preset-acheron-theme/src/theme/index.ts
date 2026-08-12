import { createAcheronPrimitiveColors } from '@cerberus/tokens'
import { Config } from '@pandacss/types'
import { getThemeName } from '../config'
import { semanticTokens } from './semantic-tokens/config'

/**
 * This module contains the Acheron theme and configuration options.
 * @module
 */

export const themes: Config['themes'] = {
  [getThemeName()]: {
    tokens: {
      colors: createAcheronPrimitiveColors(),
    },
    semanticTokens,
  },
}
