import type { Prominence, SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens } from '../../tokens'

/**
 * This module is a collection of danger tokens that are used to generate the theme.
 * @module dangerTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface DangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const dangerTokens: DangerTokens = {
  danger: {
    bg: {
      initial: {
        description: 'The default background color of the danger elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.danger.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.danger.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.danger.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description: 'The background color of the danger element when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.danger.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.danger.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.danger.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description: 'The background color of the danger element when active.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.danger.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.danger.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.danger.active.$value,
            ).$value,
          },
        },
      },
    },

    border: {
      initial: {
        description: 'The default border color of danger elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.danger.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.danger.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.danger.initial.$value,
            ).$value,
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for a static (surface) element in a danger state',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.danger.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.surface.danger.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.surface.danger.initial.$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.danger.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description: 'The secondary text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.danger['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description: 'The tertiary text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.danger['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger['200'].$value,
            ).$value,
          },
        },
      },
      inverse: {
        description:
          'The text color of danger elements when you need to display a light mode option within the dark mode.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger.inverse.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.danger.inverse.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.danger.inverse.$value,
            ).$value,
          },
        },
      },
    },
  },
}
