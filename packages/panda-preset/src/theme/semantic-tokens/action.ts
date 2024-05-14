import { defineSentiment } from './index'

export const actionTokens = defineSentiment({
  action: {
    bg: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#7F33C4',
            _lightMode: '#5F00B5',
            _darkMode: '#7F33C4',
          },
        },
      },
      hover: {
        value: {
          _cerberusTheme: {
            base: '#5F00B5',
            _lightMode: '#7F33C4',
            _darkMode: '#5F00B5',
          },
        },
      },
      active: {
        value: {
          _cerberusTheme: {
            base: '#4C0091',
            _lightMode: '#9F66D3',
            _darkMode: '#4C0091',
          },
        },
      },
      100: {
        initial: {
          value: {
            _cerberusTheme: {
              base: '#21143B',
              _lightMode: '#FFFFFF',
              _darkMode: '#21143B',
            },
          },
        },
        hover: {
          value: {
            _cerberusTheme: {
              base: '#291D47',
              _lightMode: '#F3F2F4',
              _darkMode: '#291D47',
            },
          },
        },
        active: {
          value: {
            _cerberusTheme: {
              base: '#24186A',
              _lightMode: '#D1DFEF',
              _darkMode: '#24186A',
            },
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
            base: '#4E476D',
            _lightMode: '#696584',
            _darkMode: '#4E476D',
          },
        },
      },
      focus: {
        value: {
          _cerberusTheme: {
            base: '#BB93E1',
            _lightMode: '#4C0091',
            _darkMode: '#BB93E1',
          },
        },
      },
    },

    navigation: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#9F66D3',
            _lightMode: '#5F00B5',
            _darkMode: '#9F66D3',
          },
        },
      },
      hover: {
        value: {
          _cerberusTheme: {
            base: '#BB93E1',
            _lightMode: '#7F33C4',
            _darkMode: '#BB93E1',
          },
        },
      },
      visited: {
        value: {
          _cerberusTheme: {
            base: '#DFCCF0',
            _lightMode: '#362A58',
            _darkMode: '#DFCCF0',
          },
        },
      },
      alternate: {
        initial: {
          value: {
            _cerberusTheme: {
              base: '#41E3E0',
              _lightMode: '#3B8180',
              _darkMode: '#41E3E0',
            },
          },
        },
        hover: {
          value: {
            _cerberusTheme: {
              base: '#B8F4F3',
              _lightMode: '#1F5B5A',
              _darkMode: '#B8F4F3',
            },
          },
        },
        visited: {
          value: {
            _cerberusTheme: {
              base: '#EEFDFC',
              _lightMode: '#362A58',
              _darkMode: '#EEFDFC',
            },
          },
        },
      },
    },

    text: {
      initial: {
        value: {
          _cerberusTheme: {
            base: '#FCFBFE',
            _lightMode: '#FCFBFE',
            _darkMode: '#FCFBFE',
          },
        },
      },
      100: {
        value: {
          _cerberusTheme: {
            base: '#7F33C4',
            _lightMode: '#39006D',
            _darkMode: '#7F33C4',
          },
        },
      },
      200: {
        value: {
          _cerberusTheme: {
            base: '#BB93E1',
            _lightMode: '#5F00B5',
            _darkMode: '#BB93E1',
          },
        },
      },
      inverse: {
        value: {
          _cerberusTheme: {
            base: '#130024',
            _lightMode: '#130024',
            _darkMode: '#130024',
          },
        },
      },
      alternate: {
        value: {
          _cerberusTheme: {
            base: '#41E3E0',
            _lightMode: '#3B8180',
            _darkMode: '#41E3E0',
          },
        },
      },
    },
  },
})
