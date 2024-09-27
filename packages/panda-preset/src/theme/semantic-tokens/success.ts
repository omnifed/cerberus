import type { Prominence, SemanticToken } from './types'
import { darkTokens, lightTokens, getSemanticToken } from '../../tokens'
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
          darkTokens.border[SUCCESS].initial.$description ||
          'The default border color of success elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.border.success.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.border.success.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.border.success.initial.$value,
            ),
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          darkTokens.background[SUCCESS].initial.$description ||
          'The default background color of interactive elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(
              darkTokens.background.success.initial.$value,
            ),
            _lightMode: getSemanticToken(
              lightTokens.background.success.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.success.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.background[SUCCESS].hover.$description ||
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
          darkTokens.background[SUCCESS].active.$description ||
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
          darkTokens.ghost[SUCCESS].initial.$description ||
          'The default ghost color of interactive elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.success.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.success.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.ghost.success.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.ghost[SUCCESS].hover.$description ||
          'The default ghost color of interactive elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.success.hover.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.success.hover.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.success.hover.$value),
          },
        },
      },
      active: {
        description:
          darkTokens.ghost[SUCCESS].active.$description ||
          'The active surface color of interactive elements in a successful state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.success.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.success.active.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.success.active.$value),
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          darkTokens.surface[SUCCESS].initial.$description ||
          'The default color for a static element (like a card, section, or page) in a successful state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.success.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.success.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.success.initial.$value,
            ),
          },
        },
      },
      100: {
        description:
          darkTokens.surface[SUCCESS]['100'].$description ||
          'The layer color above initial for a static element (like a card, section, or page) in a successful state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.success['100'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.success['100'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.success['100'].$value,
            ),
          },
        },
      },
      200: {
        description:
          darkTokens.surface[SUCCESS]['200'].$description ||
          'The layer color above 100 for a static element (like a card, section, or page) in a successful state.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.success['200'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.success['200'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.success['200'].$value,
            ),
          },
        },
      },
    },

    text: {
      initial: {
        description:
          darkTokens.text[SUCCESS].initial.$description ||
          'The default text color of success elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.success.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.success.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.success.initial.$value),
          },
        },
      },
      100: {
        description:
          darkTokens.text[SUCCESS]['100'].$description ||
          'The secondary text color of success elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.success['100'].$value),
            _lightMode: getSemanticToken(
              lightTokens.text.success['100'].$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.success['100'].$value),
          },
        },
      },
      200: {
        description:
          darkTokens.text[SUCCESS]['200'].$description ||
          'The tertiary text color of success elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.success['200'].$value),
            _lightMode: getSemanticToken(
              lightTokens.text.success['200'].$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.success['200'].$value),
          },
        },
      },
      inverse: {
        description:
          darkTokens.text[SUCCESS].inverse.$description ||
          'The text color of success elements when you need a light mode treatment within the dark mode.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.success.inverse.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.success.inverse.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.success.inverse.$value),
          },
        },
      },
      static: {
        description:
          darkTokens.text[SUCCESS].static.$description ||
          'The text color of success elements when you need a light mode treatment within the dark mode.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.success.static.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.success.static.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.success.static.$value),
          },
        },
      },
    },
  },
}
