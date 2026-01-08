import { type InfoTokens, createSemanticToken } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

const THEME = getThemeName()

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: createSemanticToken(THEME, 'info.border.initial'),
      100: createSemanticToken(THEME, 'info.border.100'),
    },

    bg: {
      initial: createSemanticToken(THEME, 'info.background.initial'),
      hover: createSemanticToken(THEME, 'info.background.hover'),
      active: createSemanticToken(THEME, 'info.background.active'),
    },

    ghost: {
      initial: createSemanticToken(THEME, 'info.ghost.initial'),
      hover: createSemanticToken(THEME, 'info.ghost.hover'),
      active: createSemanticToken(THEME, 'info.ghost.active'),
    },

    surface: {
      initial: createSemanticToken(THEME, 'info.surface.initial'),
      100: createSemanticToken(THEME, 'info.surface.100'),
      200: createSemanticToken(THEME, 'info.surface.200'),
    },

    text: {
      initial: createSemanticToken(THEME, 'info.text.initial'),
      100: createSemanticToken(THEME, 'info.text.100'),
      200: createSemanticToken(THEME, 'info.text.200'),
      static: createSemanticToken(THEME, 'info.text.static'),
    },
  },
}
