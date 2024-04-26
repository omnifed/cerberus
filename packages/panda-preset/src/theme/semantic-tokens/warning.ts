import { defineSentiment } from './index'

export const warningTokens = defineSentiment({
  warning: {
    border: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#FFED00',
            _lightMode: '#FFED00',
            _darkMode: '#FFED00',
          },
        },
      },
    },

    surface: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#6B4C00',
            _lightMode: '#FFEDC0',
            _darkMode: '#6B4C00',
          },
        },
      },
    },

    text: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#FFF6E0',
            _lightMode: '#352600',
            _darkMode: '#FFF6E0',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#FFE4A1',
            _lightMode: '#A17300',
            _darkMode: '#FFE4A1',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#FFD262',
            _lightMode: '#D69900',
            _darkMode: '#FFD262',
          },
        },
      },
    },
  },
})
