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
            base: '#014B2D',
            _lightMode: '#A1FED9',
            _darkMode: '#014B2D',
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
    },
  },
})
