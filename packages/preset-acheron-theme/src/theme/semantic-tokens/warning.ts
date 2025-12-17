import { type WarningTokens, formatSemanticTokenValue } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

const THEME = getThemeName()

export const warningTokens: WarningTokens = {
  warning: {
    border: {
      initial: formatSemanticTokenValue('border.warning.initial', THEME),
    },

    bg: {
      initial: formatSemanticTokenValue('background.warning.initial', THEME),
      hover: formatSemanticTokenValue('background.warning.hover', THEME),
      active: formatSemanticTokenValue('background.warning.active', THEME),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.warning.initial', THEME),
      hover: formatSemanticTokenValue('ghost.warning.hover', THEME),
      active: formatSemanticTokenValue('ghost.warning.active', THEME),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.warning.initial', THEME),
      100: formatSemanticTokenValue('surface.warning.100', THEME),
      200: formatSemanticTokenValue('surface.warning.200', THEME),
    },

    text: {
      initial: formatSemanticTokenValue('text.warning.initial', THEME),
      100: formatSemanticTokenValue('text.warning.100', THEME),
      200: formatSemanticTokenValue('text.warning.200', THEME),
      inverse: formatSemanticTokenValue('text.warning.inverse', THEME),
      static: formatSemanticTokenValue('text.warning.static', THEME),
    },
  },
}
