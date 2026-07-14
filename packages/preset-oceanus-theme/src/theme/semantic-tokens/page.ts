import { type PageTokens, createSemanticToken } from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of page tokens that are used to generate the theme.
 * @module pageTokens
 */

const THEME = getThemeName()

export const pageTokens: PageTokens = {
  page: {
    backdrop: {
      initial: createSemanticToken(THEME, 'page.backdrop.initial'),
    },

    bg: {
      initial: createSemanticToken(THEME, 'page.background.initial'),
      100: createSemanticToken(THEME, 'page.background.100'),
      200: createSemanticToken(THEME, 'page.background.200'),
      300: createSemanticToken(THEME, 'page.background.300'),
    },

    border: {
      initial: createSemanticToken(THEME, 'page.border.initial'),
      100: createSemanticToken(THEME, 'page.border.100'),
      200: createSemanticToken(THEME, 'page.border.200'),
    },

    surface: {
      initial: createSemanticToken(THEME, 'page.surface.initial'),
      100: createSemanticToken(THEME, 'page.surface.100'),
      200: createSemanticToken(THEME, 'page.surface.200'),
      300: createSemanticToken(THEME, 'page.surface.300'),
      400: createSemanticToken(THEME, 'page.surface.400'),
      inverse: createSemanticToken(THEME, 'page.surface.inverse'),
    },

    text: {
      initial: createSemanticToken(THEME, 'page.text.initial'),
      100: createSemanticToken(THEME, 'page.text.100'),
      200: createSemanticToken(THEME, 'page.text.200'),
      300: createSemanticToken(THEME, 'page.text.300'),
      inverse: createSemanticToken(THEME, 'page.text.inverse'),
    },
  },
}
