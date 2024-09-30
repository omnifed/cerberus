import type { Prominence, SemanticToken } from './types'
import { formatSemanticTokenValue, themeTokens } from '../../tokens'
import { PAGE } from '../../recipes/shared/palettes'

/**
 * This module is a collection of page tokens that are used to generate the theme.
 * @module pageTokens
 */

type PageProminence = Exclude<Prominence, 'static'>

export interface PageTokens {
  readonly page: {
    readonly backdrop: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly surface: {
      readonly [P in PageProminence]: SemanticToken
    }
    readonly text: {
      readonly [P in PageProminence]: SemanticToken
    }
  }
}

export const pageTokens: PageTokens = {
  page: {
    backdrop: {
      initial: {
        description:
          themeTokens.cerberus.dark.backdrop[PAGE].initial.$description ||
          'The default backdrop color used for modals and dialogs on a page.',
        value: {
          // Figma converts the rgba to a HEX value which removes the opacity
          _cerberusTheme: {
            base: 'rgba(19, 0, 36, 0.75)',
            _lightMode: 'rgba(188, 186, 202, 0.50)',
            _darkMode: 'rgba(19, 0, 36, 0.75)',
          },
          _acheronTheme: {
            base: 'rgba(27, 26, 25, 0.50)',
            _lightMode: 'rgba(106, 103, 100, 0.50)',
            _darkMode: 'rgba(27, 26, 25, 0.50)',
          },
        },
      },
    },

    bg: {
      initial: formatSemanticTokenValue('background.page.initial'),
      100: formatSemanticTokenValue('background.page.100'),
      200: formatSemanticTokenValue('background.page.200'),
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
