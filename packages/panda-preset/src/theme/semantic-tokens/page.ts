import {
  type ContractPageTokens,
  type PageTokens,
  formatSemanticTokenValue,
  themeTokens,
} from '@cerberus/tokens'

/**
 * This module is a collection of page tokens that are used to generate the theme.
 * @module pageTokens
 */

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
          themeTokens.cerberus.dark.backdrop.page.initial.$description ||
          'The default backdrop color used for modals and dialogs on a page.',
        value: {
          // Figma converts the rgba to a HEX value which removes the opacity
          base: 'rgba(32, 25, 52, 0.8)',
          _lightMode: 'rgba(188, 186, 202, 0.50)',
          _darkMode: 'rgba(32, 25, 52, 0.8)',
        },
      },
    },

    bg: {
      initial: formatSemanticTokenValue('background.page.initial'),
      100: formatSemanticTokenValue('background.page.100'),
      200: formatSemanticTokenValue('background.page.200'),
      300: formatSemanticTokenValue('background.page.300'),
    },

    border: {
      initial: formatSemanticTokenValue('border.page.initial'),
      100: formatSemanticTokenValue('border.page.100'),
      200: formatSemanticTokenValue('border.page.200'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.page.initial'),
      100: formatSemanticTokenValue('surface.page.100'),
      200: formatSemanticTokenValue('surface.page.200'),
      300: formatSemanticTokenValue('surface.page.300'),
      400: formatSemanticTokenValue('surface.page.400'),
      inverse: formatSemanticTokenValue('surface.page.inverse'),
    },

    text: {
      initial: formatSemanticTokenValue('text.page.initial'),
      100: formatSemanticTokenValue('text.page.100'),
      200: formatSemanticTokenValue('text.page.200'),
      300: formatSemanticTokenValue('text.page.300'),
      inverse: formatSemanticTokenValue('text.page.inverse'),
    },
  },
}
