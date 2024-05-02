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
            base: '#D5F0FF',
            _lightMode: '#003655',
            _darkMode: '#D5F0FF',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#80D1FF',
            _lightMode: '#005180',
            _darkMode: '#80D1FF',
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
