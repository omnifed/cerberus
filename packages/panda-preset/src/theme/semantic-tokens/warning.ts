import { defineSentiment } from './index'

export const warningTokens = defineSentiment({
  warning: {
    border: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#FCF6D1',
            _lightMode: '#F4DA49',
            _darkMode: '#FCF6D1',
          },
        },
      },
    },

    surface: {
      initial: {
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
        value: {
          _cerberusTheme: {
            base: '#FEFBE9',
            _lightMode: '#60540B',
            _darkMode: '#FEFBE9',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#F9EDA4',
            _lightMode: '#C1A716',
            _darkMode: '#F9EDA4',
          },
        },
      },
      200: {
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
})
