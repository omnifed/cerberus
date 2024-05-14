import { defineSentiment } from './index'

export const infoTokens = defineSentiment({
  info: {
    border: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#35A0DD',
            _lightMode: '#0288D5',
            _darkMode: '#35A0DD',
          },
        },
      },
    },

    surface: {
      initial: {
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
        value: {
          _cerberusTheme: {
            base: '#E6F3FB',
            _lightMode: '#015280',
            _darkMode: '#E6F3FB',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#9ACFEE',
            _lightMode: '#026DAA',
            _darkMode: '#9ACFEE',
          },
        },
      },
      200: {
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
})
