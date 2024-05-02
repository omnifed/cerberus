import { defineSentiment } from './index'

export const dangerTokens = defineSentiment({
  danger: {
    bg: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#FB362D',
            _lightMode: '#FB362D',
            _darkMode: '#FB362D',
          },
        },
      },
      hover: {
        value: {
          _cerberusTheme: {
            base: '#FC5E57',
            _lightMode: '#DA1E28',
            _darkMode: '#FC5E57',
          },
        },
      },
      active: {
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
        value: {
          _cerberusTheme: {
            base: '#FDAFAB',
            _lightMode: '#FC5E57',
            _darkMode: '#FDAFAB',
          },
        },
      },
    },

    surface: {
      initial: {
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
        value: {
          _cerberusTheme: {
            base: '#FFEBEA',
            _lightMode: '#641612',
            _darkMode: '#FFEBEA',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#FDAFAB',
            _lightMode: '#DA1E28',
            _darkMode: '#FDAFAB',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#FC5E57',
            _lightMode: '#FB362D',
            _darkMode: '#FC5E57',
          },
        },
      },
      inverse: {
        value: {
          _cerberusTheme: {
            base: '#320B09',
            _lightMode: '#FFEBEA',
            _darkMode: '#320B09',
          },
        },
      },
    },
  },
})
