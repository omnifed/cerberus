import { defineSentiment } from './index'

export const neutralTokens = defineSentiment({
  neutral: {
    bg: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#130024',
            _lightMode: '#FCFBFE',
            _darkMode: '#130024',
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
            base: '#291D47',
            _lightMode: '#E4E3E9',
            _darkMode: '#291D47',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#302451',
            _lightMode: '#BCBACA',
            _darkMode: '#302451',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#39006D',
            _lightMode: '#DFCCF0',
            _darkMode: '#39006D',
          },
        },
      },
    },

    surface: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#130024',
            _lightMode: '#FCFBFE',
            _darkMode: '#130024',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#160126',
            _lightMode: '#ffffff',
            _darkMode: '#160126',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#291D47',
            _lightMode: '#E4E3E9',
            _darkMode: '#291D47',
          },
        },
      },
      300: {
        value: {
          _cerberusTheme: {
            base: '#302451',
            _lightMode: '#BCBACA',
            _darkMode: '#302451',
          },
        },
      },
      inverse: {
        value: {
          _cerberusTheme: {
            base: '#F3F2F4',
            _lightMode: '#21143B',
            _darkMode: '#F3F2F4',
          },
        },
      },
    },

    text: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#FCFBFE',
            _lightMode: '#21143B',
            _darkMode: '#FCFBFE',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#BCBACA',
            _lightMode: '#696584',
            _darkMode: '#BCBACA',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#E4E3E9',
            _lightMode: '#362A58',
            _darkMode: '#E4E3E9',
          },
        },
      },
      300: {
        value: {
          _cerberusTheme: {
            base: '#FFFFFF',
            _lightMode: '#130024',
            _darkMode: '#FFFFFF',
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
