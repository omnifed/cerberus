import { defineSentiment, type SentimentConfig } from './index'

export const warningTokens: SentimentConfig = defineSentiment({
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

    surface: {
      initial: {
        description: 'The default surface color of warning elements.',
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
})
