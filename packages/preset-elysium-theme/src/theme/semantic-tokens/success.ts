import { type SuccessTokens, formatSemanticTokenValue } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of success tokens that are used to generate the theme.
 * @module successTokens
 */

const THEME = getThemeName()

export const successTokens: SuccessTokens = {
  success: {
    border: {
      initial: formatSemanticTokenValue('border.success.initial', THEME),
    },

    bg: {
      initial: formatSemanticTokenValue('background.success.initial', THEME),
      hover: formatSemanticTokenValue('background.success.hover', THEME),
      active: formatSemanticTokenValue('background.success.active', THEME),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.success.initial', THEME),
      hover: formatSemanticTokenValue('ghost.success.hover', THEME),
      active: formatSemanticTokenValue('ghost.success.active', THEME),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.success.initial', THEME),
      100: formatSemanticTokenValue('surface.success.100', THEME),
      200: formatSemanticTokenValue('surface.success.200', THEME),
    },

    text: {
      initial: formatSemanticTokenValue('text.success.initial', THEME),
      100: formatSemanticTokenValue('text.success.100', THEME),
      200: formatSemanticTokenValue('text.success.200', THEME),
      inverse: formatSemanticTokenValue('text.success.inverse', THEME),
      static: formatSemanticTokenValue('text.success.static', THEME),
    },
  },
}
