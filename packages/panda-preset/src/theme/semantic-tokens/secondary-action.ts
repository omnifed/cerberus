import type { SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens, semanticColors } from '../../tokens'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module secondaryActionTokens
 */

const SECONDARY_ACTION = 'secondary-action'

export type SecondaryActionProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly active: SemanticToken
}
export type SecondaryActionNavProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly visited: SemanticToken
}

export interface SecondaryActionTokens {
  readonly secondaryAction: {
    readonly bg: SecondaryActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
    }
    readonly ghost: SecondaryActionProminences
    readonly navigation: SecondaryActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly static: SemanticToken
    }
  }
}

export const secondaryActionTokens: SecondaryActionTokens = {
  secondaryAction: {
    bg: {
      initial: {
        description:
          semanticColors.background[SECONDARY_ACTION].initial.$description ||
          'The default background color of the action element.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background[SECONDARY_ACTION].initial
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background[SECONDARY_ACTION]
                .initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background[SECONDARY_ACTION].initial
                .$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.background[SECONDARY_ACTION].hover.$description ||
          'The background color of the action element when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background[SECONDARY_ACTION].hover
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background[SECONDARY_ACTION].hover
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background[SECONDARY_ACTION].hover
                .$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.background[SECONDARY_ACTION].active.$description ||
          'The background color of the action element when active.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background[SECONDARY_ACTION].active
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background[SECONDARY_ACTION].active
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background[SECONDARY_ACTION].active
                .$value,
            ).$value,
          },
        },
      },
    },

    border: {
      initial: {
        description:
          semanticColors.border[SECONDARY_ACTION].initial.$description ||
          'The default border color of the action element.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border[SECONDARY_ACTION].initial
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border[SECONDARY_ACTION].initial
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border[SECONDARY_ACTION].initial
                .$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.border[SECONDARY_ACTION]['100'].$description ||
          'The default alternative border color of the action element.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border[SECONDARY_ACTION]['100']
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.border[SECONDARY_ACTION]['100']
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.border[SECONDARY_ACTION]['100']
                .$value,
            ).$value,
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          semanticColors.ghost[SECONDARY_ACTION].initial.$description ||
          'The default ghost color of the action element.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost[SECONDARY_ACTION].initial
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost[SECONDARY_ACTION].initial
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost[SECONDARY_ACTION].initial
                .$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.ghost[SECONDARY_ACTION].hover.$description ||
          'The ghost color of the action element when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost[SECONDARY_ACTION].hover
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost[SECONDARY_ACTION].hover
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost[SECONDARY_ACTION].hover
                .$value,
            ).$value,
          },
        },
      },
      active: {
        description:
          semanticColors.ghost[SECONDARY_ACTION].active.$description ||
          'The ghost color of the action element when active.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost[SECONDARY_ACTION].active
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.ghost[SECONDARY_ACTION].active
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.ghost[SECONDARY_ACTION].active
                .$value,
            ).$value,
          },
        },
      },
    },

    navigation: {
      initial: {
        description:
          semanticColors.text[SECONDARY_ACTION].navigation.initial
            .$description || 'The default color of the navigation links.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].navigation
                .initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[SECONDARY_ACTION].navigation
                .initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].navigation
                .initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.text[SECONDARY_ACTION].navigation.hover.$description ||
          'The background color of the navigation action when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].navigation
                .hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[SECONDARY_ACTION].navigation
                .hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].navigation
                .hover.$value,
            ).$value,
          },
        },
      },
      visited: {
        description:
          semanticColors.text[SECONDARY_ACTION].navigation.visited
            .$description ||
          'The background color of the navigation action when visited.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].navigation
                .visited.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[SECONDARY_ACTION].navigation
                .visited.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].navigation
                .visited.$value,
            ).$value,
          },
        },
      },
    },

    text: {
      initial: {
        description:
          semanticColors.text[SECONDARY_ACTION].initial.$description ||
          'The default text color of the action element.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].initial
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[SECONDARY_ACTION].initial
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].initial
                .$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          semanticColors.text[SECONDARY_ACTION]['100'].$description ||
          'The text color of the action element that uses a 100 background color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION]['100']
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[SECONDARY_ACTION]['100']
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION]['100']
                .$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          semanticColors.text[SECONDARY_ACTION]['200'].$description ||
          'The text color of the action element that uses a 200 background color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION]['200']
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[SECONDARY_ACTION]['200']
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION]['200']
                .$value,
            ).$value,
          },
        },
      },
      static: {
        description:
          semanticColors.text[SECONDARY_ACTION].static.$description ||
          'A static text color for an action element.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].static
                .$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text[SECONDARY_ACTION].static
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text[SECONDARY_ACTION].static
                .$value,
            ).$value,
          },
        },
      },
    },
  },
}
