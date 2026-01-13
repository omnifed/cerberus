import { type ActionTokens, createSemanticToken } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module actionTokens
 */

const THEME = getThemeName()

export const actionTokens: ActionTokens = {
  action: {
    bg: {
      initial: createSemanticToken(THEME, 'action.background.initial'),
      hover: createSemanticToken(THEME, 'action.background.hover'),
      active: createSemanticToken(THEME, 'action.background.active'),
    },

    border: {
      initial: createSemanticToken(THEME, 'action.border.initial'),
      100: createSemanticToken(THEME, 'action.border.100'),
      focus: createSemanticToken(THEME, 'action.border.focus'),
    },

    ghost: {
      initial: createSemanticToken(THEME, 'action.ghost.initial'),
      hover: createSemanticToken(THEME, 'action.ghost.hover'),
      active: createSemanticToken(THEME, 'action.ghost.active'),
    },

    navigation: {
      initial: createSemanticToken(THEME, 'action.text.navigation.initial'),
      hover: createSemanticToken(THEME, 'action.text.navigation.hover'),
      visited: createSemanticToken(THEME, 'action.text.navigation.visited'),
    },

    text: {
      initial: createSemanticToken(THEME, 'action.text.initial'),
      100: createSemanticToken(THEME, 'action.text.100'),
      200: createSemanticToken(THEME, 'action.text.200'),
      inverse: createSemanticToken(THEME, 'action.text.inverse'),
      static: createSemanticToken(THEME, 'action.text.static'),
    },
  },
}
