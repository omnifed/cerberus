import type { SemanticToken } from './types'
import { darkTokens, lightTokens, getSemanticToken } from '../../tokens'
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
      readonly static: SemanticToken
    }
  }
}

export const actionTokens: ActionTokens = {
  action: {
    bg: {
      initial: {
        description:
          darkTokens.background[ACTION].initial.$description ||
          'The default background color of the action.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.action.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.action.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.action.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.background[ACTION].hover.$description ||
          'The background color of the action when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.action.hover.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.action.hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.action.hover.$value,
            ),
          },
        },
      },
      active: {
        description:
          darkTokens.background[ACTION].active.$description ||
          'The background color of the action when active.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.action.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.action.active.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.action.active.$value,
            ),
          },
        },
      },
    },

    border: {
      initial: {
        description:
          darkTokens.border[ACTION].initial.$description ||
          'The default border color of the action.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.border.action.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.border.action.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.border.action.initial.$value,
            ),
          },
        },
      },
      100: {
        description:
          darkTokens.border[ACTION]['100'].$description ||
          'The default alternative border color of the action.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.border.action['100'].$value),
            _lightMode: getSemanticToken(
              lightTokens.border.action['100'].$value,
            ),
            _darkMode: getSemanticToken(darkTokens.border.action['100'].$value),
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
          darkTokens.ghost[ACTION].initial.$description ||
          'The default ghost color of the action.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.action.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.action.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.action.initial.$value),
          },
        },
      },
      hover: {
        description:
          darkTokens.ghost[ACTION].hover.$description ||
          'The ghost color of the action when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.action.hover.$value),
            _lightMode: getSemanticToken(lightTokens.ghost.action.hover.$value),
            _darkMode: getSemanticToken(darkTokens.ghost.action.hover.$value),
          },
        },
      },
      active: {
        description:
          darkTokens.ghost[ACTION].active.$description ||
          'The ghost color of the action when active.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.action.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.action.active.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.action.active.$value),
          },
        },
      },
    },

    navigation: {
      initial: {
        description:
          darkTokens.text[ACTION].navigation.initial.$description ||
          'The default color of the navigation links.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text.action.navigation.initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text.action.navigation.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text.action.navigation.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.text[ACTION].navigation.hover.$description ||
          'The background color of the navigation action when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text.action.navigation.hover.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text.action.navigation.hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text.action.navigation.hover.$value,
            ),
          },
        },
      },
      visited: {
        description:
          darkTokens.text[ACTION].navigation.visited.$description ||
          'The background color of the navigation action when visited.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text.action.navigation.visited.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text.action.navigation.visited.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text.action.navigation.visited.$value,
            ),
          },
        },
      },
    },

    text: {
      initial: {
        description:
          darkTokens.text[ACTION].initial.$description ||
          'The default text color of the action.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.action.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.action.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.action.initial.$value),
          },
        },
      },
      100: {
        description:
          darkTokens.text[ACTION]['100'].$description ||
          'The text color of the action that uses a 100 background color.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.action['100'].$value),
            _lightMode: getSemanticToken(lightTokens.text.action['100'].$value),
            _darkMode: getSemanticToken(darkTokens.text.action['100'].$value),
          },
        },
      },
      200: {
        description:
          darkTokens.text[ACTION]['200'].$description ||
          'The text color of the action that uses a 200 background color.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.action['200'].$value),
            _lightMode: getSemanticToken(lightTokens.text.action['200'].$value),
            _darkMode: getSemanticToken(darkTokens.text.action['200'].$value),
          },
        },
      },
      inverse: {
        description:
          darkTokens.text[ACTION].inverse.$description ||
          'The text color of the action when there needs to be a light mode text within the dark theme.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.action.inverse.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.action.inverse.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.action.inverse.$value),
          },
        },
      },
      static: {
        description:
          darkTokens.text[ACTION].static.$description ||
          'The text color of the action when there needs to be a light mode text within the dark theme.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.action.static.$value),
            _lightMode: getSemanticToken(lightTokens.text.action.static.$value),
            _darkMode: getSemanticToken(darkTokens.text.action.static.$value),
          },
        },
      },
    },
  },
}
