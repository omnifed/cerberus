import type { Prominence, SemanticToken } from './types'

type Prominences = Exclude<Prominence, 300>

export interface DangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly border: {
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

export const dangerTokens: DangerTokens = {
  danger: {
    bg: {
      initial: {
        description: 'The default background color of the danger elements.',
        value: {
          _cerberusTheme: {
            base: '#FB362D',
            _lightMode: '#FB362D',
            _darkMode: '#FB362D',
          },
        },
      },
      hover: {
        description: 'The background color of the danger element when hovered.',
        value: {
          _cerberusTheme: {
            base: '#FC5E57',
            _lightMode: '#DA1E28',
            _darkMode: '#FC5E57',
          },
        },
      },
      active: {
        description: 'The background color of the danger element when active.',
        value: {
          _cerberusTheme: {
            base: '#FD8681',
            _lightMode: '#97201B',
            _darkMode: '#FD8681',
          },
        },
      },
    },

    border: {
      initial: {
        description: 'The default border color of danger elements.',
        value: {
          _cerberusTheme: {
            base: '#DA1E28',
            _lightMode: '#DA1E28',
            _darkMode: '#DA1E28',
          },
        },
      },
    },

    surface: {
      initial: {
        description:
          'The default color for a layout-based surface element (like a page, card, banner, etc.) in a danger state.',
        value: {
          _cerberusTheme: {
            base: '#641612',
            _lightMode: '#FFEBEA',
            _darkMode: '#641612',
          },
        },
      },
    },

    text: {
      initial: {
        description: 'The default text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: '#320B09',
            _lightMode: '#320B09',
            _darkMode: '#320B09',
          },
        },
      },
      100: {
        description: 'The secondary text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: '#FDAFAB',
            _lightMode: '#DA1E28',
            _darkMode: '#FDAFAB',
          },
        },
      },
      200: {
        description: 'The tertiary text color of danger elements.',
        value: {
          _cerberusTheme: {
            base: '#FC5E57',
            _lightMode: '#FB362D',
            _darkMode: '#FC5E57',
          },
        },
      },
      inverse: {
        description:
          'The text color of danger elements when you need to display a light mode option within the dark mode.',
        value: {
          _cerberusTheme: {
            base: '#FFEBEA',
            _lightMode: '#641612',
            _darkMode: '#FFEBEA',
          },
        },
      },
    },
  },
}
