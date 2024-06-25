import type { Prominence, SemanticToken } from './types'

type Prominences = Exclude<Prominence, 'inverse' | 300>

export interface WarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
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
        description: 'The default border color of warning elements.',
        value: {
          _cerberusTheme: {
            base: '#FCF6D1',
            _lightMode: '#F4DA49',
            _darkMode: '#FCF6D1',
          },
        },
      },
    },

    bg: {
      initial: {
        description:
          'The default background color for elements that display a warning state.',
        value: {
          _cerberusTheme: {
            base: '#917D10',
            _lightMode: '#FCF6D1',
            _darkMode: '#917D10',
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for a layout-based surface element (like a page or card) in a warning state.',
        value: {
          _cerberusTheme: {
            base: '#917D10',
            _lightMode: '#FCF6D1',
            _darkMode: '#917D10',
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: '#FEFBE9',
            _lightMode: '#60540B',
            _darkMode: '#FEFBE9',
          },
        },
      },
      100: {
        description: 'The secondary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: '#F9EDA4',
            _lightMode: '#C1A716',
            _darkMode: '#F9EDA4',
          },
        },
      },
      200: {
        description: 'The tertiary text color of warning elements.',
        value: {
          _cerberusTheme: {
            base: '#F1D11B',
            _lightMode: '#F1D11B',
            _darkMode: '#F1D11B',
          },
        },
      },
    },
  },
}
