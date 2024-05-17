import { defineSentiment } from './index'

export const actionTokens = defineSentiment({
  action: {
    bg: {
      initial: {
        description: 'The default background color of the action.',
        value: {
          _cerberusTheme: {
            base: '#7F33C4',
            _lightMode: '#5F00B5',
            _darkMode: '#7F33C4',
          },
        },
      },
      hover: {
        description: 'The background color of the action when hovered.',
        value: {
          _cerberusTheme: {
            base: '#5F00B5',
            _lightMode: '#7F33C4',
            _darkMode: '#5F00B5',
          },
        },
      },
      active: {
        description: 'The background color of the action when active.',
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
          description:
            'The default alternative background color of the action.',
          value: {
            _cerberusTheme: {
              base: '#21143B',
              _lightMode: '#FFFFFF',
              _darkMode: '#21143B',
            },
          },
        },
        hover: {
          description:
            'The alternative background color of the action when hovered.',
          value: {
            _cerberusTheme: {
              base: '#291D47',
              _lightMode: '#F3F2F4',
              _darkMode: '#291D47',
            },
          },
        },
        active: {
          description:
            'The alternative background color of the action when active.',
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
        description: 'The default border color of the action.',
        value: {
          _cerberusTheme: {
            base: '#291D47',
            _lightMode: '#E4E3E9',
            _darkMode: '#291D47',
          },
        },
      },
      100: {
        description: 'The default alternative border color of the action.',
        value: {
          _cerberusTheme: {
            base: '#4E476D',
            _lightMode: '#696584',
            _darkMode: '#4E476D',
          },
        },
      },
      focus: {
        description: 'The border color of the action when focused.',
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
        description: 'The default background color of the navigation action.',
        value: {
          _cerberusTheme: {
            base: '#9F66D3',
            _lightMode: '#5F00B5',
            _darkMode: '#9F66D3',
          },
        },
      },
      hover: {
        description:
          'The background color of the navigation action when hovered.',
        value: {
          _cerberusTheme: {
            base: '#BB93E1',
            _lightMode: '#7F33C4',
            _darkMode: '#BB93E1',
          },
        },
      },
      visited: {
        description:
          'The background color of the navigation action when visited.',
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
          description:
            'The default alternative background color of the navigation action.',
          value: {
            _cerberusTheme: {
              base: '#41E3E0',
              _lightMode: '#3B8180',
              _darkMode: '#41E3E0',
            },
          },
        },
        hover: {
          description:
            'The alternative background color of the navigation action when hovered.',
          value: {
            _cerberusTheme: {
              base: '#B8F4F3',
              _lightMode: '#1F5B5A',
              _darkMode: '#B8F4F3',
            },
          },
        },
        visited: {
          description:
            'The alternative background color of the navigation action when visited.',
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
        description: 'The default text color of the action.',
        value: {
          _cerberusTheme: {
            base: '#FCFBFE',
            _lightMode: '#FCFBFE',
            _darkMode: '#FCFBFE',
          },
        },
      },
      100: {
        description:
          'The text color of the action that uses a 100 background color.',
        value: {
          _cerberusTheme: {
            base: '#7F33C4',
            _lightMode: '#39006D',
            _darkMode: '#7F33C4',
          },
        },
      },
      200: {
        description:
          'The text color of the action that uses a 200 background color.',
        value: {
          _cerberusTheme: {
            base: '#BB93E1',
            _lightMode: '#5F00B5',
            _darkMode: '#BB93E1',
          },
        },
      },
      inverse: {
        description:
          'The text color of the action when there needs to be a light mode text within the dark theme.',
        value: {
          _cerberusTheme: {
            base: '#130024',
            _lightMode: '#130024',
            _darkMode: '#130024',
          },
        },
      },
      alternate: {
        description:
          'The text color of the action that uses an alternate background color.',
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
