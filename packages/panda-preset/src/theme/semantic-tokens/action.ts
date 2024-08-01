import type { SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens, semanticColors } from '../../tokens'
import { ACTION } from '../../recipes/shared/palettes'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module actionTokens
 */

export type ActionProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly active: SemanticToken
}
export type ActionNavProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly visited: SemanticToken
}

export interface ActionTokens {
  readonly action: {
    readonly bg: ActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly focus: SemanticToken
    }
    readonly ghost: ActionProminences
    readonly navigation: ActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly inverse: SemanticToken
    }
  }
}

export const actionTokens: ActionTokens = {
  action: {
    bg: {
      initial: {
        description:
          semanticColors.background[ACTION].initial.$description ||
          'The default background color of the action.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.action.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.background[ACTION].hover.$description ||
          'The background color of the action when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.action.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.background[ACTION].active.$description ||
          'The background color of the action when active.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.action.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.active.$value,
            ).$value,
          },
        },
      },
    },

    border: {
      initial: {
        description:
          semanticColors.border[ACTION].initial.$description ||
          'The default border color of the action.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.action.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.action.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.action.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.border[ACTION]['100'].$description ||
          'The default alternative border color of the action.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.action['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border.action['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border.action['100'].$value,
            ).$value,
          },
        },
      },
      focus: {
        // This is an unofficial token
        description: 'The outline color of an action when focused.',
        value: {
          _cerberusTheme: {
            base: '#BB93E1',
            _lightMode: '#4C0091',
            _darkMode: '#BB93E1',
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          semanticColors.ghost[ACTION].initial.$description ||
          'The default ghost color of the action.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.action.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.action.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.action.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.ghost[ACTION].hover.$description ||
          'The ghost color of the action when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.action.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.action.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.action.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.ghost[ACTION].active.$description ||
          'The ghost color of the action when active.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.action.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost.action.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost.action.active.$value,
            ).$value,
          },
        },
      },
    },

    navigation: {
      initial: {
        description:
          semanticColors.text[ACTION].navigation.initial.$description ||
          'The default color of the navigation links.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[ACTION].navigation.initial
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[ACTION].navigation.initial
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[ACTION].navigation.initial
                .$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.text[ACTION].navigation.hover.$description ||
          'The background color of the navigation action when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[ACTION].navigation.hover
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[ACTION].navigation.hover
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[ACTION].navigation.hover
                .$value,
            ).$value,
          },
        },
      },
      visited: {
        description:
          semanticColors.text[ACTION].navigation.visited.$description ||
          'The background color of the navigation action when visited.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[ACTION].navigation.visited
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[ACTION].navigation.visited
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[ACTION].navigation.visited
                .$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description:
          semanticColors.text[ACTION].initial.$description ||
          'The default text color of the action.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.text[ACTION]['100'].$description ||
          'The text color of the action that uses a 100 background color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.text[ACTION]['200'].$description ||
          'The text color of the action that uses a 200 background color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['200'].$value,
            ).$value,
          },
        },
      },
      inverse: {
        description:
          semanticColors.text[ACTION].inverse.$description ||
          'The text color of the action when there needs to be a light mode text within the dark theme.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.inverse.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action.inverse.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.inverse.$value,
            ).$value,
          },
        },
      },
    },
  },
}
