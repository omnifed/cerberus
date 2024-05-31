import { defineSentiment, type SentimentConfig } from './index'

export const neutralTokens: SentimentConfig = defineSentiment({
  neutral: {
    bg: {
      initial: {
        description:
          'The default background color used for non-action, action-like elements (i.e. inputs).',
        value: {
          _cerberusTheme: {
            base: '#130024',
            _lightMode: '#FCFBFE',
            _darkMode: '#130024',
          },
        },
      },
      active: {
        description:
          'The background color when a non-action, action-like element (i.e. inputs) is in an active state.',
        value: {
          _cerberusTheme: {
            base: '#2D2D55',
            _lightMode: '#D1DFEF',
            _darkMode: '#2D2D55',
          },
        },
      },
      hover: {
        description:
          'The background color when a non-action, action-like element (i.e. inputs) is in a hover state.',
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
        description: 'The default border color used for layouts.',
        value: {
          _cerberusTheme: {
            base: '#291D47',
            _lightMode: '#E4E3E9',
            _darkMode: '#291D47',
          },
        },
      },
      100: {
        description:
          'The border color used for layouts with a 100 surface color.',
        value: {
          _cerberusTheme: {
            base: '#302451',
            _lightMode: '#BCBACA',
            _darkMode: '#302451',
          },
        },
      },
      200: {
        description:
          'The border color used for layouts with a 200 surface color.',
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
        description: 'The default surface color used for layouts.',
        value: {
          _cerberusTheme: {
            base: '#130024',
            _lightMode: '#FCFBFE',
            _darkMode: '#130024',
          },
        },
      },
      100: {
        description:
          'The surface color used for layouts of an element that is on the second layer from the initial surface layer.',
        value: {
          _cerberusTheme: {
            base: '#160126',
            _lightMode: '#ffffff',
            _darkMode: '#160126',
          },
        },
      },
      200: {
        description:
          'The surface color used for layouts of an element that is on the third layer from the initial surface layer.',
        value: {
          _cerberusTheme: {
            base: '#291D47',
            _lightMode: '#E4E3E9',
            _darkMode: '#291D47',
          },
        },
      },
      300: {
        description:
          'The surface color used for layouts of an element that is on the fourth layer from the initial surface layer.',
        value: {
          _cerberusTheme: {
            base: '#302451',
            _lightMode: '#BCBACA',
            _darkMode: '#302451',
          },
        },
      },
      inverse: {
        description:
          'The surface color used for layouts of an element that requires a light mode surface.',
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
        description: 'The default text color used for layouts.',
        value: {
          _cerberusTheme: {
            base: '#FCFBFE',
            _lightMode: '#21143B',
            _darkMode: '#FCFBFE',
          },
        },
      },
      100: {
        description:
          'The text color used for layouts with a 100 surface color.',
        value: {
          _cerberusTheme: {
            base: '#BCBACA',
            _lightMode: '#696584',
            _darkMode: '#BCBACA',
          },
        },
      },
      200: {
        description:
          'The text color used for layouts with a 200 surface color.',
        value: {
          _cerberusTheme: {
            base: '#E4E3E9',
            _lightMode: '#362A58',
            _darkMode: '#E4E3E9',
          },
        },
      },
      300: {
        description:
          'The text color used for layouts with a 300 surface color.',
        value: {
          _cerberusTheme: {
            base: '#FFFFFF',
            _lightMode: '#130024',
            _darkMode: '#FFFFFF',
          },
        },
      },
      inverse: {
        description:
          'The text color used for layouts with an inverse surface color.',
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
