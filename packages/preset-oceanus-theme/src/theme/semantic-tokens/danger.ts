import { type DangerTokens, createSemanticToken } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of danger tokens that are used to generate the theme.
 * @module dangerTokens
 */

const THEME = getThemeName()

export const dangerTokens: DangerTokens = {
  danger: {
    bg: {
      initial: createSemanticToken(THEME, 'danger.background.initial'),
      hover: createSemanticToken(THEME, 'danger.background.hover'),
      active: createSemanticToken(THEME, 'danger.background.active'),
    },

    border: {
      initial: createSemanticToken(THEME, 'danger.border.initial'),
    },

    ghost: {
      initial: createSemanticToken(THEME, 'danger.ghost.initial'),
      hover: createSemanticToken(THEME, 'danger.ghost.hover'),
      active: createSemanticToken(THEME, 'danger.ghost.active'),
    },

    surface: {
      initial: createSemanticToken(THEME, 'danger.surface.initial'),
      100: createSemanticToken(THEME, 'danger.surface.100'),
      200: createSemanticToken(THEME, 'danger.surface.200'),
    },

    text: {
      initial: createSemanticToken(THEME, 'danger.text.initial'),
      100: createSemanticToken(THEME, 'danger.text.100'),
      200: createSemanticToken(THEME, 'danger.text.200'),
      inverse: createSemanticToken(THEME, 'danger.text.inverse'),
      static: createSemanticToken(THEME, 'danger.text.static'),
    },
  },
}
