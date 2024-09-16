import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens, semanticColors } from '../../tokens'
import { INFO } from '../../recipes/shared/palettes'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

type Prominences = Exclude<Prominence, 'inverse' | 300>

export interface InfoTokens {
  readonly info: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: {
        description:
          semanticColors.border[INFO].initial.$description ||
          'The default border color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.info.initial.$value,
            ).$value,
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          semanticColors.background[INFO].initial.$description ||
          'The default background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.background[INFO].hover.$description ||
          'The hover background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.info.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.background[INFO].active.$description ||
          'The active background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.info.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.info.active.$value,
            ).$value,
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          semanticColors.ghost[INFO].initial.$description ||
          'The default ghost color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.info.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.ghost[INFO].hover.$description ||
          'The hover ghost color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.info.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.info.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.info.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.ghost[INFO].active.$description ||
          'The active ghost color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.info.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.info.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.info.active.$value,
            ).$value,
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          semanticColors.surface[INFO].initial.$description ||
          'The default color for a layout-based surface element (like a page or card) in a informational state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.surface[INFO]['100'].$description ||
          'The second layer of color for static (surface) elements that display a info state - used on top of initial.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.info['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.surface[INFO]['200'].$description ||
          'The third layer of color for static (surface) elements that display a info state - used on top of 100.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.info['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.info['200'].$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description:
          semanticColors.text[INFO].initial.$description ||
          'The default text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.info.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.text[INFO]['100'].$description ||
          'The secondary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.info['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.text[INFO]['200'].$description ||
          'The tertiary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.info['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info['200'].$value,
            ).$value,
          },
        },
      },
      static: {
        description:
          semanticColors.text[INFO].static.$description ||
          'The default text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info.static.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.info.static.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.info.static.$value,
            ).$value,
          },
        },
      },
    },
  },
}
