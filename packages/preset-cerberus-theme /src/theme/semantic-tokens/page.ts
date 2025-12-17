import {
  type ContractPageTokens,
  type PageTokens,
  formatSemanticTokenValue,
  themeTokens,
} from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of page tokens that are used to generate the theme.
 * @module pageTokens
 */

const THEME = getThemeName()

export const contractPageTokens: ContractPageTokens = {
  page: {
    backdrop: {
      initial: {},
    },
    bg: {
      initial: {},
      100: {},
      200: {},
      300: {},
    },
    border: {
      initial: {},
      100: {},
      200: {},
    },
    surface: {
      initial: {},
      inverse: {},
      100: {},
      200: {},
      300: {},
      400: {},
    },
    text: {
      initial: {},
      inverse: {},
      100: {},
      200: {},
      300: {},
    },
  },
}

export const pageTokens: PageTokens = {
  page: {
    backdrop: {
      initial: {
        description:
          themeTokens.cerberus.dark.backdrop.page.initial.$description,
        value: {
          // Figma converts the rgba to a HEX value which removes the opacity
          base: 'rgba(27, 26, 25, 0.50)',
          _lightMode: 'rgba(106, 103, 100, 0.50)',
          _darkMode: 'rgba(27, 26, 25, 0.50)',
        },
      },
    },

    bg: {
      initial: formatSemanticTokenValue('background.page.initial', THEME),
      100: formatSemanticTokenValue('background.page.100', THEME),
      200: formatSemanticTokenValue('background.page.200', THEME),
      300: formatSemanticTokenValue('background.page.300', THEME),
    },

    border: {
      initial: formatSemanticTokenValue('border.page.initial', THEME),
      100: formatSemanticTokenValue('border.page.100', THEME),
      200: formatSemanticTokenValue('border.page.200', THEME),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.page.initial', THEME),
      100: formatSemanticTokenValue('surface.page.100', THEME),
      200: formatSemanticTokenValue('surface.page.200', THEME),
      300: formatSemanticTokenValue('surface.page.300', THEME),
      400: formatSemanticTokenValue('surface.page.400', THEME),
      inverse: formatSemanticTokenValue('surface.page.inverse', THEME),
    },

    text: {
      initial: formatSemanticTokenValue('text.page.initial', THEME),
      100: formatSemanticTokenValue('text.page.100', THEME),
      200: formatSemanticTokenValue('text.page.200', THEME),
      300: formatSemanticTokenValue('text.page.300', THEME),
      inverse: formatSemanticTokenValue('text.page.inverse', THEME),
    },
  },
}
