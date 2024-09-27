import type { SemanticToken } from './types'
import { lightTokens, darkTokens, getSemanticToken } from '../../tokens'

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
          darkTokens.background[SECONDARY_ACTION].initial.$description ||
          'The default background color of the action element.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.background[SECONDARY_ACTION].initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.background[SECONDARY_ACTION].initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background[SECONDARY_ACTION].initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.background[SECONDARY_ACTION].hover.$description ||
          'The background color of the action element when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.background[SECONDARY_ACTION].hover.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.background[SECONDARY_ACTION].hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background[SECONDARY_ACTION].hover.$value,
            ),
          },
        },
      },
      active: {
        description:
          darkTokens.background[SECONDARY_ACTION].active.$description ||
          'The background color of the action element when active.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.background[SECONDARY_ACTION].active.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.background[SECONDARY_ACTION].active.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background[SECONDARY_ACTION].active.$value,
            ),
          },
        },
      },
    },

    border: {
      initial: {
        description:
          darkTokens.border[SECONDARY_ACTION].initial.$description ||
          'The default border color of the action element.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.border[SECONDARY_ACTION].initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.border[SECONDARY_ACTION].initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.border[SECONDARY_ACTION].initial.$value,
            ),
          },
        },
      },
      100: {
        description:
          darkTokens.border[SECONDARY_ACTION]['100'].$description ||
          'The default alternative border color of the action element.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.border[SECONDARY_ACTION]['100'].$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.border[SECONDARY_ACTION]['100'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.border[SECONDARY_ACTION]['100'].$value,
            ),
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          darkTokens.ghost[SECONDARY_ACTION].initial.$description ||
          'The default ghost color of the action element.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.ghost[SECONDARY_ACTION].initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.ghost[SECONDARY_ACTION].initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.ghost[SECONDARY_ACTION].initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.ghost[SECONDARY_ACTION].hover.$description ||
          'The ghost color of the action element when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.ghost[SECONDARY_ACTION].hover.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.ghost[SECONDARY_ACTION].hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.ghost[SECONDARY_ACTION].hover.$value,
            ),
          },
        },
      },
      active: {
        description:
          darkTokens.ghost[SECONDARY_ACTION].active.$description ||
          'The ghost color of the action element when active.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.ghost[SECONDARY_ACTION].active.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.ghost[SECONDARY_ACTION].active.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.ghost[SECONDARY_ACTION].active.$value,
            ),
          },
        },
      },
    },

    navigation: {
      initial: {
        description:
          darkTokens.text[SECONDARY_ACTION].navigation.initial.$description ||
          'The default color of the navigation links.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].navigation.initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text[SECONDARY_ACTION].navigation.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].navigation.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.text[SECONDARY_ACTION].navigation.hover.$description ||
          'The background color of the navigation action when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].navigation.hover.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text[SECONDARY_ACTION].navigation.hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].navigation.hover.$value,
            ),
          },
        },
      },
      visited: {
        description:
          darkTokens.text[SECONDARY_ACTION].navigation.visited.$description ||
          'The background color of the navigation action when visited.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].navigation.visited.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text[SECONDARY_ACTION].navigation.visited.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].navigation.visited.$value,
            ),
          },
        },
      },
    },

    text: {
      initial: {
        description:
          darkTokens.text[SECONDARY_ACTION].initial.$description ||
          'The default text color of the action element.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text[SECONDARY_ACTION].initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].initial.$value,
            ),
          },
        },
      },
      100: {
        description:
          darkTokens.text[SECONDARY_ACTION]['100'].$description ||
          'The text color of the action element that uses a 100 background color.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION]['100'].$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text[SECONDARY_ACTION]['100'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION]['100'].$value,
            ),
          },
        },
      },
      200: {
        description:
          darkTokens.text[SECONDARY_ACTION]['200'].$description ||
          'The text color of the action element that uses a 200 background color.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION]['200'].$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text[SECONDARY_ACTION]['200'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION]['200'].$value,
            ),
          },
        },
      },
      static: {
        description:
          darkTokens.text[SECONDARY_ACTION].static.$description ||
          'A static text color for an action element.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].static.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.text[SECONDARY_ACTION].static.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.text[SECONDARY_ACTION].static.$value,
            ),
          },
        },
      },
    },
  },
}
