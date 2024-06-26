import type { Prominence, SemanticToken } from './types'

type Prominences = Exclude<Prominence, 'inverse' | 300>

export interface InfoTokens {
  readonly info: {
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

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: {
        description: 'The default border color of informational elements.',
        value: {
          _cerberusTheme: {
            base: '#35A0DD',
            _lightMode: '#0288D5',
            _darkMode: '#35A0DD',
          },
        },
      },
    },

    bg: {
      initial: {
        description: 'The default background color of informational elements.',
        value: {
          _cerberusTheme: {
            base: '#026DAA',
            _lightMode: '#CCE7F7',
            _darkMode: '#026DAA',
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for a layout-based surface element (like a page or card) in a informational state.',
        value: {
          _cerberusTheme: {
            base: '#026DAA',
            _lightMode: '#CCE7F7',
            _darkMode: '#026DAA',
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: '#E6F3FB',
            _lightMode: '#015280',
            _darkMode: '#E6F3FB',
          },
        },
      },
      100: {
        description: 'The secondary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: '#9ACFEE',
            _lightMode: '#026DAA',
            _darkMode: '#9ACFEE',
          },
        },
      },
      200: {
        description: 'The tertiary text color of informational elements.',
        value: {
          _cerberusTheme: {
            base: '#2BB2FF',
            _lightMode: '#0088D5',
            _darkMode: '#2BB2FF',
          },
        },
      },
    },
  },
}
