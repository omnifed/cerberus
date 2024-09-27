import type { Prominence, SemanticToken } from './types'
import { darkTokens, getSemanticToken, lightTokens } from '../../tokens'
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
          darkTokens.border[INFO].initial.$description ||
          'The default border color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.border.info.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.border.info.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.border.info.initial.$value),
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          darkTokens.background[INFO].initial.$description ||
          'The default background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.info.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.info.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.info.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.background[INFO].hover.$description ||
          'The hover background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.info.hover.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.info.hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.info.hover.$value,
            ),
          },
        },
      },
      active: {
        description:
          darkTokens.background[INFO].active.$description ||
          'The active background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.info.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.info.active.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.info.active.$value,
            ),
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          darkTokens.ghost[INFO].initial.$description ||
          'The default ghost color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.info.initial.$value),
            _lightMode: getSemanticToken(lightTokens.ghost.info.initial.$value),
            _darkMode: getSemanticToken(darkTokens.ghost.info.initial.$value),
          },
        },
      },
      hover: {
        description:
          darkTokens.ghost[INFO].hover.$description ||
          'The hover ghost color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.info.hover.$value),
            _lightMode: getSemanticToken(lightTokens.ghost.info.hover.$value),
            _darkMode: getSemanticToken(darkTokens.ghost.info.hover.$value),
          },
        },
      },
      active: {
        description:
          darkTokens.ghost[INFO].active.$description ||
          'The active ghost color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.info.active.$value),
            _lightMode: getSemanticToken(lightTokens.ghost.info.active.$value),
            _darkMode: getSemanticToken(darkTokens.ghost.info.active.$value),
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          darkTokens.surface[INFO].initial.$description ||
          'The default color for a layout-based surface element (like a page or card) in a informational state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.info.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.info.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.surface.info.initial.$value),
          },
        },
      },
      100: {
        description:
          darkTokens.surface[INFO]['100'].$description ||
          'The second layer of color for static (surface) elements that display a info state - used on top of initial.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.info['100'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.info['100'].$value,
            ),
            _darkMode: getSemanticToken(darkTokens.surface.info['100'].$value),
          },
        },
      },
      200: {
        description:
          darkTokens.surface[INFO]['200'].$description ||
          'The third layer of color for static (surface) elements that display a info state - used on top of 100.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.info['200'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.info['200'].$value,
            ),
            _darkMode: getSemanticToken(darkTokens.surface.info['200'].$value),
          },
        },
      },
    },

    text: {
      initial: {
        description:
          darkTokens.text[INFO].initial.$description ||
          'The default text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.info.initial.$value),
            _lightMode: getSemanticToken(lightTokens.text.info.initial.$value),
            _darkMode: getSemanticToken(darkTokens.text.info.initial.$value),
          },
        },
      },
      100: {
        description:
          darkTokens.text[INFO]['100'].$description ||
          'The secondary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.info['100'].$value),
            _lightMode: getSemanticToken(lightTokens.text.info['100'].$value),
            _darkMode: getSemanticToken(darkTokens.text.info['100'].$value),
          },
        },
      },
      200: {
        description:
          darkTokens.text[INFO]['200'].$description ||
          'The tertiary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.info['200'].$value),
            _lightMode: getSemanticToken(lightTokens.text.info['200'].$value),
            _darkMode: getSemanticToken(darkTokens.text.info['200'].$value),
          },
        },
      },
      static: {
        description:
          darkTokens.text[INFO].static.$description ||
          'The default text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.info.static.$value),
            _lightMode: getSemanticToken(lightTokens.text.info.static.$value),
            _darkMode: getSemanticToken(darkTokens.text.info.static.$value),
          },
        },
      },
    },
  },
}
