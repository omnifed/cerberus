import { defineSentiment } from './index'

export const neutralTokens = defineSentiment({
  neutral: {
    bg: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#393B6B',
            _lightMode: '#D9E4F2',
            _darkMode: '#393B6B',
          },
        },
      },
      active: {
        value: {
          _cerberusTheme: {
            base: '#2D2D55',
            _lightMode: '#D1DFEF',
            _darkMode: '#2D2D55',
          },
        },
      },
      hover: {
        value: {
          _cerberusTheme: {
            base: '#404376',
            _lightMode: '#DAE3EE',
            _darkMode: '#404376',
          },
        },
      },
    },

    border: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#404376',
            _lightMode: '#C2D1E2',
            _darkMode: '#404376',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#2D2D55',
            _lightMode: '#DAE3EE',
            _darkMode: '#2D2D55',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#585FA2',
            _lightMode: '#89A4C7',
            _darkMode: '#585FA2',
          },
        },
      },
    },

    surface: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#101025',
            _lightMode: '#F3F3FF',
            _darkMode: '#101025',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#1B1834',
            _lightMode: '#f4f7fa',
            _darkMode: '#1B1834',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#2E2E52',
            _lightMode: '#F3F3FF',
            _darkMode: '#2E2E52',
          },
        },
      },
      300: {
        value: {
          _cerberusTheme: {
            base: '#4E4E88',
            _lightMode: '#EFEFFF',
            _darkMode: '#4E4E88',
          },
        },
      },
      inverse: {
        value: {
          _cerberusTheme: {
            base: '#F3F3FF',
            _lightMode: '#101025',
            _darkMode: '#F3F3FF',
          },
        },
      },
    },

    text: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#D1D2E6',
            _lightMode: '#3E5674',
            _darkMode: '#D1D2E6',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#8B90C1',
            _lightMode: '#546F92',
            _darkMode: '#8B90C1',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#A5AACF',
            _lightMode: '#4E6583',
            _darkMode: '#A5AACF',
          },
        },
      },
      300: {
        value: {
          _cerberusTheme: {
            base: '#F3F3F8',
            _lightMode: '#1A2737',
            _darkMode: '#F3F3F8',
          },
        },
      },
      inverse: {
        value: {
          _cerberusTheme: {
            base: '#130F25',
            _lightMode: '#FFFFFF',
            _darkMode: '#130F25',
          },
        },
      },
    },
  },
})
