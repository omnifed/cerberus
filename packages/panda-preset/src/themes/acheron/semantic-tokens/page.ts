import type {
  Prominence,
  SemanticToken,
} from '../../../theme/semantic-tokens/types'
import { formatSemanticTokenValue, themeTokens } from '../../../tokens'

/**
 * This module is a collection of page tokens that are used to generate the theme.
 * @module pageTokens
 */

type PageProminence = Exclude<Prominence, 'static'>

interface ContractPageTokens {
  readonly page: {
    readonly backdrop: {
      readonly initial: object
    }
    readonly bg: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly border: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly surface: {
      readonly [P in PageProminence]: object
    }
    readonly text: {
      readonly [P in PageProminence]: object
    }
  }
}

export interface PageTokens {
  readonly page: {
    readonly backdrop: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly surface: {
      readonly [P in PageProminence]: SemanticToken
    }
    readonly text: {
      readonly [P in PageProminence]: SemanticToken
    }
  }
}

export const contractPageTokens: ContractPageTokens = {
  page: {
    backdrop: {
      initial: {},
    },
    bg: {
      initial: {},
      100: {},
      200: {},
    },
    border: {
      initial: {},
      100: {},
      200: {},
    },
    surface: {
      initial: {},
      inverse: {},
      100: {},
      200: {},
      300: {},
    },
    text: {
      initial: {},
      inverse: {},
      100: {},
      200: {},
      300: {},
    },
  },
}

export const pageTokens: PageTokens = {
  page: {
    backdrop: {
      initial: {
        description:
          themeTokens.cerberus.dark.backdrop.page.initial.$description,
        value: {
          // Figma converts the rgba to a HEX value which removes the opacity
          base: 'rgba(27, 26, 25, 0.50)',
          _lightMode: 'rgba(106, 103, 100, 0.50)',
          _darkMode: 'rgba(27, 26, 25, 0.50)',
        },
      },
    },

    bg: {
      initial: formatSemanticTokenValue('background.page.initial', 'acheron'),
      100: formatSemanticTokenValue('background.page.100', 'acheron'),
      200: formatSemanticTokenValue('background.page.200', 'acheron'),
    },

    border: {
      initial: formatSemanticTokenValue('border.page.initial', 'acheron'),
      100: formatSemanticTokenValue('border.page.100', 'acheron'),
      200: formatSemanticTokenValue('border.page.200', 'acheron'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.page.initial', 'acheron'),
      100: formatSemanticTokenValue('surface.page.100', 'acheron'),
      200: formatSemanticTokenValue('surface.page.200', 'acheron'),
      300: formatSemanticTokenValue('surface.page.300', 'acheron'),
      inverse: formatSemanticTokenValue('surface.page.inverse', 'acheron'),
    },

    text: {
      initial: formatSemanticTokenValue('text.page.initial', 'acheron'),
      100: formatSemanticTokenValue('text.page.100', 'acheron'),
      200: formatSemanticTokenValue('text.page.200', 'acheron'),
      300: formatSemanticTokenValue('text.page.300', 'acheron'),
      inverse: formatSemanticTokenValue('text.page.inverse', 'acheron'),
    },
  },
}
