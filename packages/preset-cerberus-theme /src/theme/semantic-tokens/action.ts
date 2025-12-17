import { type ActionTokens, formatSemanticTokenValue } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module actionTokens
 */

const THEME = getThemeName()

export const actionTokens: ActionTokens = {
  action: {
    bg: {
      initial: formatSemanticTokenValue('background.action.initial', THEME),
      hover: formatSemanticTokenValue('background.action.hover', THEME),
      active: formatSemanticTokenValue('background.action.active', THEME),
    },

    border: {
      initial: formatSemanticTokenValue('border.action.initial', THEME),
      100: formatSemanticTokenValue('border.action.100', THEME),
      focus: formatSemanticTokenValue('border.action.focus', THEME),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.action.initial', THEME),
      hover: formatSemanticTokenValue('ghost.action.hover', THEME),
      active: formatSemanticTokenValue('ghost.action.active', THEME),
    },

    navigation: {
      initial: formatSemanticTokenValue(
        'text.action.navigation.initial',
        THEME,
      ),
      hover: formatSemanticTokenValue('text.action.navigation.hover', THEME),
      visited: formatSemanticTokenValue(
        'text.action.navigation.visited',
        THEME,
      ),
    },

    text: {
      initial: formatSemanticTokenValue('text.action.initial', THEME),
      100: formatSemanticTokenValue('text.action.100', THEME),
      200: formatSemanticTokenValue('text.action.200', THEME),
      inverse: formatSemanticTokenValue('text.action.inverse', THEME),
      static: formatSemanticTokenValue('text.action.static', THEME),
    },
  },
}
