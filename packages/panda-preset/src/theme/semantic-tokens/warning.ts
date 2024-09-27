import type { Prominence, SemanticToken } from './types'
import { getSemanticToken, darkTokens, lightTokens } from '../../tokens'
import { WARNING } from '../../recipes/shared/palettes'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface WarningTokens {
  readonly warning: {
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

export const warningTokens: WarningTokens = {
  warning: {
    border: {
      initial: {
        description:
          darkTokens.border[WARNING].initial.$description ||
          'The default border color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.border.warning.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.border.warning.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.border.warning.initial.$value,
            ),
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          darkTokens.background[WARNING].initial.$description ||
          'The default background color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.background.warning.initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.background.warning.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.warning.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.background[WARNING].hover.$description ||
          'The hover background color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.warning.hover.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.warning.hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.warning.hover.$value,
            ),
          },
        },
      },
      active: {
        description:
          darkTokens.background[WARNING].active.$description ||
          'The active background color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.warning.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.warning.active.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.warning.active.$value,
            ),
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          darkTokens.ghost[WARNING].initial.$description ||
          'The default ghost color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.warning.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.warning.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.ghost.warning.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.ghost[WARNING].hover.$description ||
          'The hover ghost color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.warning.hover.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.warning.hover.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.warning.hover.$value),
          },
        },
      },
      active: {
        description:
          darkTokens.ghost[WARNING].active.$description ||
          'The active ghost color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.warning.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.warning.active.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.warning.active.$value),
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          darkTokens.surface[WARNING].initial.$description ||
          'The default color for static (surface) elements that display a warning state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.warning.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.warning.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.warning.initial.$value,
            ),
          },
        },
      },
      100: {
        description:
          darkTokens.surface[WARNING]['100'].$description ||
          'The second layer of color for static (surface) elements that display a warning state - used on top of initial.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.warning['100'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.warning['100'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.warning['100'].$value,
            ),
          },
        },
      },
      200: {
        description:
          darkTokens.surface[WARNING]['200'].$description ||
          'The third layer of color for static (surface) elements that display a warning state - used on top of 100.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.warning['200'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.warning['200'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.warning['200'].$value,
            ),
          },
        },
      },
    },

    text: {
      initial: {
        description:
          darkTokens.text[WARNING].initial.$description ||
          'The default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.warning.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.warning.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.warning.initial.$value),
          },
        },
      },
      100: {
        description:
          darkTokens.text[WARNING]['100'].$description ||
          'The secondary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.warning['100'].$value),
            _lightMode: getSemanticToken(
              lightTokens.text.warning['100'].$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.warning['100'].$value),
          },
        },
      },
      200: {
        description:
          darkTokens.text[WARNING]['200'].$description ||
          'The tertiary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.warning['200'].$value),
            _lightMode: getSemanticToken(
              lightTokens.text.warning['200'].$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.warning['200'].$value),
          },
        },
      },
      inverse: {
        description:
          darkTokens.text[WARNING].inverse.$description ||
          'The inverse version of the default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.warning.inverse.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.warning.inverse.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.warning.inverse.$value),
          },
        },
      },
      static: {
        description:
          darkTokens.text[WARNING].static.$description ||
          'The static version of the default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.warning.static.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.warning.static.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.warning.static.$value),
          },
        },
      },
    },
  },
}
