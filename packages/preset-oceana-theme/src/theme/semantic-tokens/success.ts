import { type SuccessTokens, createSemanticToken } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of success tokens that are used to generate the theme.
 * @module successTokens
 */

const THEME = getThemeName()

export const successTokens: SuccessTokens = {
  success: {
    border: {
      initial: createSemanticToken(THEME, 'border.success.initial'),
    },

    bg: {
      initial: createSemanticToken(THEME, 'background.success.initial'),
      hover: createSemanticToken(THEME, 'background.success.hover'),
      active: createSemanticToken(THEME, 'background.success.active'),
    },

    ghost: {
      initial: createSemanticToken(THEME, 'ghost.success.initial'),
      hover: createSemanticToken(THEME, 'ghost.success.hover'),
      active: createSemanticToken(THEME, 'ghost.success.active'),
    },

    surface: {
      initial: createSemanticToken(THEME, 'surface.success.initial'),
      100: createSemanticToken(THEME, 'surface.success.100'),
      200: createSemanticToken(THEME, 'surface.success.200'),
    },

    text: {
      initial: createSemanticToken(THEME, 'text.success.initial'),
      100: createSemanticToken(THEME, 'text.success.100'),
      200: createSemanticToken(THEME, 'text.success.200'),
      inverse: createSemanticToken(THEME, 'text.success.inverse'),
      static: createSemanticToken(THEME, 'text.success.static'),
    },
  },
}
