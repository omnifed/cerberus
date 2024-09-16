import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens, semanticColors } from '../../tokens'
import { SUCCESS } from '../../recipes/shared/palettes'

/**
 * This module is a collection of success tokens that are used to generate the theme.
 * @module successTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface SuccessTokens {
  readonly success: {
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

export const successTokens: SuccessTokens = {
  success: {
    border: {
      initial: {
        description:
          semanticColors.border[SUCCESS].initial.$description ||
          'The default border color of success elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.success.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.success.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.success.initial.$value,
            ).$value,
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          semanticColors.background[SUCCESS].initial.$description ||
          'The default background color of interactive elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.success.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.success.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.success.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.background[SUCCESS].hover.$description ||
          'The default background color of interactive elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: '#0B6B2C',
            _lightMode: '#D0F0DB',
            _darkMode: '#0B6B2C',
          },
        },
      },
      active: {
        description:
          semanticColors.background[SUCCESS].active.$description ||
          'The active surface color of interactive elements in a successful state.',
        value: {
          _cerberusTheme: {
            base: '#41C16E',
            _lightMode: '#0E8E3B',
            _darkMode: '#41C16E',
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          semanticColors.ghost[SUCCESS].initial.$description ||
          'The default ghost color of interactive elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.success.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.success.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.success.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.ghost[SUCCESS].hover.$description ||
          'The default ghost color of interactive elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.success.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.success.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.success.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.ghost[SUCCESS].active.$description ||
          'The active surface color of interactive elements in a successful state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.success.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.success.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.success.active.$value,
            ).$value,
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          semanticColors.surface[SUCCESS].initial.$description ||
          'The default color for a static element (like a card, section, or page) in a successful state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.success.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.success.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.success.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.surface[SUCCESS]['100'].$description ||
          'The layer color above initial for a static element (like a card, section, or page) in a successful state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.success['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.success['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.success['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.surface[SUCCESS]['200'].$description ||
          'The layer color above 100 for a static element (like a card, section, or page) in a successful state.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.success['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.success['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.success['200'].$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description:
          semanticColors.text[SUCCESS].initial.$description ||
          'The default text color of success elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.success.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.text[SUCCESS]['100'].$description ||
          'The secondary text color of success elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.success['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.text[SUCCESS]['200'].$description ||
          'The tertiary text color of success elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.success['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success['200'].$value,
            ).$value,
          },
        },
      },
      inverse: {
        description:
          semanticColors.text[SUCCESS].inverse.$description ||
          'The text color of success elements when you need a light mode treatment within the dark mode.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success.inverse.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.success.inverse.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success.inverse.$value,
            ).$value,
          },
        },
      },
      static: {
        description:
          semanticColors.text[SUCCESS].static.$description ||
          'The text color of success elements when you need a light mode treatment within the dark mode.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success.static.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.success.static.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.success.static.$value,
            ).$value,
          },
        },
      },
    },
  },
}
