import type { PageTokens } from '../../../theme/semantic-tokens/page'
import { formatSemanticTokenValue, themeTokens } from '../../../tokens'

/**
 * This module is a collection of page tokens that are used to generate the theme.
 * @module pageTokens
 */

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
      initial: formatSemanticTokenValue('background.page.initial', 'acheron'),
      100: formatSemanticTokenValue('background.page.100', 'acheron'),
      200: formatSemanticTokenValue('background.page.200', 'acheron'),
      300: formatSemanticTokenValue('background.page.300', 'acheron'),
    },

    border: {
      initial: formatSemanticTokenValue('border.page.initial', 'acheron'),
      100: formatSemanticTokenValue('border.page.100', 'acheron'),
      200: formatSemanticTokenValue('border.page.200', 'acheron'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.page.initial', 'acheron'),
      100: formatSemanticTokenValue('surface.page.100', 'acheron'),
      200: formatSemanticTokenValue('surface.page.200', 'acheron'),
      300: formatSemanticTokenValue('surface.page.300', 'acheron'),
      400: formatSemanticTokenValue('surface.page.400', 'acheron'),
      inverse: formatSemanticTokenValue('surface.page.inverse', 'acheron'),
    },

    text: {
      initial: formatSemanticTokenValue('text.page.initial', 'acheron'),
      100: formatSemanticTokenValue('text.page.100', 'acheron'),
      200: formatSemanticTokenValue('text.page.200', 'acheron'),
      300: formatSemanticTokenValue('text.page.300', 'acheron'),
      inverse: formatSemanticTokenValue('text.page.inverse', 'acheron'),
    },
  },
}
