import type { SemanticToken } from './types'
import { colors, deepGetByPaths, rawTokens } from '../../tokens'

export type ActionProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly active: SemanticToken
}
export type ActionNavProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly visited: SemanticToken
}

const ALT_INITIAL = 'alt-initial'
const ALT_HOVER = 'alt-hover'
const ALT_VISITED = 'alt-visited'

export interface ActionTokens {
  readonly action: {
    readonly bg: ActionProminences & {
      readonly 100: ActionProminences
    }
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly focus: SemanticToken
    }
    readonly navigation: ActionNavProminences & {
      readonly alternate: ActionNavProminences
    }
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly inverse: SemanticToken
      readonly alternate: SemanticToken
    }
  }
}

export const actionTokens: ActionTokens = {
  action: {
    bg: {
      initial: {
        description: 'The default background color of the action.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.action.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description: 'The background color of the action when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.action.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.hover.$value,
            ).$value,
          },
        },
      },
      active: {
        description: 'The background color of the action when active.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.active.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.background.action.active.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.background.action.active.$value,
            ).$value,
          },
        },
      },
      100: {
        initial: {
          description:
            'The default alternative background color of the action.',
          value: {
            _cerberusTheme: {
              base: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.background.action['100'].$value,
              ).$value,
              _lightMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.light.background.action['100'].$value,
              ).$value,
              _darkMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.background.action['100'].$value,
              ).$value,
            },
          },
        },
        hover: {
          description:
            'The alternative background color of the action when hovered.',
          value: {
            _cerberusTheme: {
              base: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.background.action['100-hover']
                  .$value,
              ).$value,
              _lightMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.light.background.action['100-hover']
                  .$value,
              ).$value,
              _darkMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.background.action['100-hover']
                  .$value,
              ).$value,
            },
          },
        },
        active: {
          description:
            'The alternative background color of the action when active.',
          value: {
            _cerberusTheme: {
              base: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.background.action.active.$value,
              ).$value,
              _lightMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.light.background.action.active.$value,
              ).$value,
              _darkMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.background.action.active.$value,
              ).$value,
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
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.borders.action.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.borders.action.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.borders.action.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description: 'The default alternative border color of the action.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.borders.action['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.borders.action['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.borders.action['100'].$value,
            ).$value,
          },
        },
      },
      focus: {
        // This is an unofficial token
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
        description: 'The default color of the navigation links.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.navigation.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation.initial.$value,
            ).$value,
          },
        },
      },
      hover: {
        description:
          'The background color of the navigation action when hovered.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation.hover.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.navigation.hover.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation.hover.$value,
            ).$value,
          },
        },
      },
      visited: {
        description:
          'The background color of the navigation action when visited.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation.visited.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.navigation.visited.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.navigation.visited.$value,
            ).$value,
          },
        },
      },
      alternate: {
        initial: {
          description:
            'The default alternative background color of the navigation action.',
          value: {
            _cerberusTheme: {
              base: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.text.navigation[ALT_INITIAL]
                  .$value,
              ).$value,
              _lightMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.light.text.navigation[ALT_INITIAL]
                  .$value,
              ).$value,
              _darkMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.text.navigation[ALT_INITIAL]
                  .$value,
              ).$value,
            },
          },
        },
        hover: {
          description:
            'The alternative background color of the navigation action when hovered.',
          value: {
            _cerberusTheme: {
              base: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.text.navigation[ALT_HOVER].$value,
              ).$value,
              _lightMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.light.text.navigation[ALT_HOVER]
                  .$value,
              ).$value,
              _darkMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.text.navigation[ALT_HOVER].$value,
              ).$value,
            },
          },
        },
        visited: {
          description:
            'The alternative background color of the navigation action when visited.',
          value: {
            _cerberusTheme: {
              base: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.text.navigation[ALT_VISITED]
                  .$value,
              ).$value,
              _lightMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.light.text.navigation[ALT_VISITED]
                  .$value,
              ).$value,
              _darkMode: deepGetByPaths(
                colors,
                rawTokens.semanticColors.dark.text.navigation[ALT_VISITED]
                  .$value,
              ).$value,
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
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.initial.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action.initial.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.initial.$value,
            ).$value,
          },
        },
      },
      100: {
        description:
          'The text color of the action that uses a 100 background color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['100'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action['100'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['100'].$value,
            ).$value,
          },
        },
      },
      200: {
        description:
          'The text color of the action that uses a 200 background color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['200'].$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action['200'].$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action['200'].$value,
            ).$value,
          },
        },
      },
      inverse: {
        description:
          'The text color of the action when there needs to be a light mode text within the dark theme.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.inverse.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action.inverse.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.inverse.$value,
            ).$value,
          },
        },
      },
      alternate: {
        description:
          'The text color of the action that uses an alternate background color.',
        value: {
          _cerberusTheme: {
            base: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.alternate.$value,
            ).$value,
            _lightMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.light.text.action.alternate.$value,
            ).$value,
            _darkMode: deepGetByPaths(
              colors,
              rawTokens.semanticColors.dark.text.action.alternate.$value,
            ).$value,
          },
        },
      },
    },
  },
}
