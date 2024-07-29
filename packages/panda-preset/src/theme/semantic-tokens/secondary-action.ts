import type { SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens, semanticColors } from '../../tokens'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module secondaryActionTokens
 */

const SECONDARY_ACTION = 'secondary-action'
const ALT_INITIAL = 'alt-initial'
const ALT_HOVER = 'alt-hover'
const ALT_VISITED = 'alt-visited'

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
  readonly SECONDARY_ACTION: {
    readonly bg: SecondaryActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
    }
    readonly navigation: SecondaryActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
  }
}

export const secondaryActionTokens: SecondaryActionTokens = {
  SECONDARY_ACTION: {
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

    navigation: {
      initial: {
        description:
          semanticColors.text.navigation[ALT_INITIAL].$description ||
          'The default color of the navigation links.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation[ALT_INITIAL].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.navigation[ALT_INITIAL]
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation[ALT_INITIAL].$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          semanticColors.text.navigation[ALT_HOVER].$description ||
          'The background color of the navigation action when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation[ALT_HOVER].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.navigation[ALT_HOVER].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation[ALT_HOVER].$value,
            ).$value,
          },
        },
      },
      visited: {
        description:
          semanticColors.text.navigation[ALT_VISITED].$description ||
          'The background color of the navigation action when visited.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation[ALT_VISITED].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.navigation[ALT_VISITED]
                .$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation[ALT_VISITED].$value,
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
    },
  },
}
