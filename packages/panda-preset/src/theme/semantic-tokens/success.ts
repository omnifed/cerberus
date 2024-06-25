import type { Prominence, SemanticToken } from './types'

type Prominences = Exclude<Prominence, 300>

export interface SuccessTokens {
  readonly success: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly active: SemanticToken
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
        description: 'The default border color of success elements.',
        value: {
          _cerberusTheme: {
            base: '#47B44B',
            _lightMode: '#02BB71',
            _darkMode: '#47B44B',
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          'The default background color of elements that display a successful state.',
        value: {
          _cerberusTheme: {
            base: '#0B6B2C',
            _lightMode: '#D0F0DB',
            _darkMode: '#0B6B2C',
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for a layout-based surface element (like a page or card) in a successful state.',
        value: {
          _cerberusTheme: {
            base: '#0B6B2C',
            _lightMode: '#D0F0DB',
            _darkMode: '#0B6B2C',
          },
        },
      },
      active: {
        description: 'The active surface color of success elements.',
        value: {
          _cerberusTheme: {
            base: '#41C16E',
            _lightMode: '#0E8E3B',
            _darkMode: '#41C16E',
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color of success elements.',
        value: {
          _cerberusTheme: {
            base: '#D0FFEC',
            _lightMode: '#002517',
            _darkMode: '#D0FFEC',
          },
        },
      },
      100: {
        description: 'The secondary text color of success elements.',
        value: {
          _cerberusTheme: {
            base: '#43FDB4',
            _lightMode: '#017044',
            _darkMode: '#43FDB4',
          },
        },
      },
      200: {
        description: 'The tertiary text color of success elements.',
        value: {
          _cerberusTheme: {
            base: '#02BB71',
            _lightMode: '#01955B',
            _darkMode: '#02BB71',
          },
        },
      },
      inverse: {
        description:
          'The text color of success elements when you need a light mode treatment within the dark mode.',
        value: {
          _cerberusTheme: {
            base: '#07471E',
            _lightMode: '#0E8E3B',
            _darkMode: '#07471E',
          },
        },
      },
    },
  },
}
