import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens, semanticColors } from '../../tokens'
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
          semanticColors.backdrop[PAGE].initial.$description ||
          'The default backdrop color used for modals and dialogs on a page.',
        value: {
          // Figma converts the rgba to a HEX value in the token data so we have
          // to use a raw value here.
          _cerberusTheme: {
            base: 'rgba(19, 0, 36, 0.75)',
            _lightMode: 'rgba(188, 186, 202, 0.50)',
            _darkMode: 'rgba(19, 0, 36, 0.75)',
          },
        },
      },
    },
    bg: {
      initial: {
        description:
          semanticColors.background[PAGE].initial.$description ||
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
          semanticColors.background[PAGE]['100'].$description ||
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
          semanticColors.background[PAGE]['200'].$description ||
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
        description:
          semanticColors.border[PAGE].initial.$description ||
          'The default border color used for layouts.',
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
          semanticColors.background[PAGE]['100'].$description ||
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
          semanticColors.border[PAGE]['200'].$description ||
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
          semanticColors.surface[PAGE].initial.$description ||
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
          semanticColors.surface[PAGE]['100'].$description ||
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
          semanticColors.surface[PAGE]['200'].$description ||
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
          semanticColors.surface[PAGE]['300'].$description ||
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
          semanticColors.surface[PAGE].inverse.$description ||
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
        description:
          semanticColors.text[PAGE].initial.$description ||
          'The default text color used for layouts.',
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
          semanticColors.text[PAGE]['100'].$description ||
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
          semanticColors.text[PAGE]['200'].$description ||
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
          semanticColors.text[PAGE]['300'].$description ||
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
          semanticColors.text[PAGE].inverse.$description ||
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
