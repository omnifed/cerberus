import { defineSentiment } from './index'

export const successTokens = defineSentiment({
  success: {
    border: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#47B44B',
            _lightMode: '#02BB71',
            _darkMode: '#47B44B',
          },
        },
      },
    },

    surface: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#0B6B2C',
            _lightMode: '#D0F0DB',
            _darkMode: '#0B6B2C',
          },
        },
      },
      active: {
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
        value: {
          _cerberusTheme: {
            base: '#D0FFEC',
            _lightMode: '#002517',
            _darkMode: '#D0FFEC',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#43FDB4',
            _lightMode: '#017044',
            _darkMode: '#43FDB4',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#02BB71',
            _lightMode: '#01955B',
            _darkMode: '#02BB71',
          },
        },
      },
      inverse: {
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
})
