import { type WarningTokens, createSemanticToken } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

const THEME = getThemeName()

export const warningTokens: WarningTokens = {
  warning: {
    border: {
      initial: createSemanticToken(THEME, 'warning.border.initial'),
    },

    bg: {
      initial: createSemanticToken(THEME, 'warning.background.initial'),
      hover: createSemanticToken(THEME, 'warning.background.hover'),
      active: createSemanticToken(THEME, 'warning.background.active'),
    },

    ghost: {
      initial: createSemanticToken(THEME, 'warning.ghost.initial'),
      hover: createSemanticToken(THEME, 'warning.ghost.hover'),
      active: createSemanticToken(THEME, 'warning.ghost.active'),
    },

    surface: {
      initial: createSemanticToken(THEME, 'warning.surface.initial'),
      100: createSemanticToken(THEME, 'warning.surface.100'),
      200: createSemanticToken(THEME, 'warning.surface.200'),
    },

    text: {
      initial: createSemanticToken(THEME, 'warning.text.initial'),
      100: createSemanticToken(THEME, 'warning.text.100'),
      200: createSemanticToken(THEME, 'warning.text.200'),
      inverse: createSemanticToken(THEME, 'warning.text.inverse'),
      static: createSemanticToken(THEME, 'warning.text.static'),
    },
  },
}
