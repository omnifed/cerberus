import { type InfoTokens, formatSemanticTokenValue } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

const THEME = getThemeName()

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: formatSemanticTokenValue('border.info.initial', THEME),
      100: formatSemanticTokenValue('border.info.100', THEME),
    },

    bg: {
      initial: formatSemanticTokenValue('background.info.initial', THEME),
      hover: formatSemanticTokenValue('background.info.hover', THEME),
      active: formatSemanticTokenValue('background.info.active', THEME),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.info.initial', THEME),
      hover: formatSemanticTokenValue('ghost.info.hover', THEME),
      active: formatSemanticTokenValue('ghost.info.active', THEME),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.info.initial', THEME),
      100: formatSemanticTokenValue('surface.info.100', THEME),
      200: formatSemanticTokenValue('surface.info.200', THEME),
    },

    text: {
      initial: formatSemanticTokenValue('text.info.initial', THEME),
      100: formatSemanticTokenValue('text.info.100', THEME),
      200: formatSemanticTokenValue('text.info.200', THEME),
      static: formatSemanticTokenValue('text.info.static', THEME),
    },
  },
}
