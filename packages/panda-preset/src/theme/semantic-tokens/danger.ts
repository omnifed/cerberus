import type { Prominence, SemanticToken } from './types'
import { darkTokens, lightTokens, getSemanticToken } from '../../tokens'
import { DANGER } from '../../recipes/shared/palettes'

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
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
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

export const dangerTokens: DangerTokens = {
  danger: {
    bg: {
      initial: {
        description:
          darkTokens.background[DANGER].initial.$description ||
          'The default background color of the danger elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.danger.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.danger.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.danger.initial.$value,
            ),
          },
        },
      },
      hover: {
        description:
          darkTokens.background[DANGER].hover.$description ||
          'The background color of the danger element when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.danger.hover.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.danger.hover.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.danger.hover.$value,
            ),
          },
        },
      },
      active: {
        description:
          darkTokens.background[DANGER].active.$description ||
          'The background color of the danger element when active.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.background.danger.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.background.danger.active.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.background.danger.active.$value,
            ),
          },
        },
      },
    },

    border: {
      initial: {
        description:
          darkTokens.border[DANGER].initial.$description ||
          'The default border color of danger elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.border.danger.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.border.danger.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.border.danger.initial.$value,
            ),
          },
        },
      },
    },

    ghost: {
      initial: {
        description:
          darkTokens.ghost[DANGER].initial.$description ||
          'The default ghost color of the danger elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.danger.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.danger.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.danger.initial.$value),
          },
        },
      },
      hover: {
        description:
          darkTokens.ghost[DANGER].hover.$description ||
          'The ghost color of the danger element when hovered.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.danger.hover.$value),
            _lightMode: getSemanticToken(lightTokens.ghost.danger.hover.$value),
            _darkMode: getSemanticToken(darkTokens.ghost.danger.hover.$value),
          },
        },
      },
      active: {
        description:
          darkTokens.ghost[DANGER].active.$description ||
          'The ghost color of the danger element when active.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.ghost.danger.active.$value),
            _lightMode: getSemanticToken(
              lightTokens.ghost.danger.active.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.ghost.danger.active.$value),
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          darkTokens.surface[DANGER].initial.$description ||
          'The default color for a static (surface) element in a danger state',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.danger.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.danger.initial.$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.danger.initial.$value,
            ),
          },
        },
      },
      100: {
        description:
          darkTokens.surface[DANGER]['100'].$description ||
          'The second layer of color for static (surface) elements that display a error state - used on top of initial.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.danger['100'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.danger['100'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.danger['100'].$value,
            ),
          },
        },
      },
      200: {
        description:
          darkTokens.surface[DANGER]['200'].$description ||
          'The third layer of color for static (surface) elements that display a error state - used on top of 100.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.surface.danger['200'].$value),
            _lightMode: getSemanticToken(
              lightTokens.surface.danger['200'].$value,
            ),
            _darkMode: getSemanticToken(
              darkTokens.surface.danger['200'].$value,
            ),
          },
        },
      },
    },

    text: {
      initial: {
        description:
          darkTokens.text[DANGER].initial.$description ||
          'The default text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.danger.initial.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.danger.initial.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.danger.initial.$value),
          },
        },
      },
      100: {
        description:
          darkTokens.text[DANGER]['100'].$description ||
          'The secondary text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.danger['100'].$value),
            _lightMode: getSemanticToken(lightTokens.text.danger['100'].$value),
            _darkMode: getSemanticToken(darkTokens.text.danger['100'].$value),
          },
        },
      },
      200: {
        description:
          darkTokens.text[DANGER]['200'].$description ||
          'The tertiary text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.danger['200'].$value),
            _lightMode: getSemanticToken(lightTokens.text.danger['200'].$value),
            _darkMode: getSemanticToken(darkTokens.text.danger['200'].$value),
          },
        },
      },
      inverse: {
        description:
          darkTokens.text[DANGER].inverse.$description ||
          'The text color of danger elements when you need to display a light mode option within the dark mode.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.danger.inverse.$value),
            _lightMode: getSemanticToken(
              lightTokens.text.danger.inverse.$value,
            ),
            _darkMode: getSemanticToken(darkTokens.text.danger.inverse.$value),
          },
        },
      },
      static: {
        description:
          darkTokens.text[DANGER].static.$description ||
          'The text color of danger elements when you need to display a light mode option within the dark mode.',
        value: {
          _cerberusTheme: {
            base: getSemanticToken(darkTokens.text.danger.static.$value),
            _lightMode: getSemanticToken(lightTokens.text.danger.static.$value),
            _darkMode: getSemanticToken(darkTokens.text.danger.static.$value),
          },
        },
      },
    },
  },
}
