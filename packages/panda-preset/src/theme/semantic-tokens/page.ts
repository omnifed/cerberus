import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens } from '../../tokens'

/**
 * This module is a collection of page tokens that are used to generate the theme.
 * @module pageTokens
 */

export interface PageTokens {
  readonly page: {
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
      readonly [P in Prominence]: SemanticToken
    }
    readonly text: {
      readonly [P in Prominence]: SemanticToken
    }
  }
}

export const pageTokens: PageTokens = {
  page: {
    bg: {
      initial: {
        description:
          'The default background color used for non-action elements (i.e. inputs).',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.page.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          'A secondary background color when a non-action elements (i.e. inputs).',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.page['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          'A third-level color when a non-action elements (i.e. inputs).',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.page['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['200'].$value,
            ).$value,
          },
        },
      },
    },

    border: {
      initial: {
        description: 'The default border color used for layouts.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.page.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.page.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.page.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          'The border color used for layouts with a 100 surface color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.page['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          'The border color used for layouts with a 200 surface color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.page['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['200'].$value,
            ).$value,
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for a layout-based surface element (like a page or card) in a danger state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.page.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          'The second color for a layout-based surface element, used for the layer on top of the initial.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.page['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          'The third color for a layout-based surface element, used for the layer on top of the 100.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.page['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.page['200'].$value,
            ).$value,
          },
        },
      },
      300: {
        description:
          'The fourth color for a layout-based surface element, used for the layer on top of the 200.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page['300'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.page['300'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page['300'].$value,
            ).$value,
          },
        },
      },
      inverse: {
        description:
          'The inverse color for a initial layout-based surface element (like a page or card) to display the opposite mode theme.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page.inverse.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.page.inverse.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.page.inverse.$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color used for layouts.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.page.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          'The text color used for layouts with a 100 surface color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.page['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          'The text color used for layouts with a 200 surface color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.page['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page['200'].$value,
            ).$value,
          },
        },
      },
      300: {
        description:
          'The text color used for layouts with a 300 surface color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page['300'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.page['300'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page['300'].$value,
            ).$value,
          },
        },
      },
      inverse: {
        description:
          'The text color used for layouts with an inverse surface color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page.inverse.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.page.inverse.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.page.inverse.$value,
            ).$value,
          },
        },
      },
    },
  },
}
