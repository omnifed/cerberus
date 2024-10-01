import type { Prominence, SemanticToken } from '../../../theme/semantic-tokens'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface ContractWarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: object
    }
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly ghost: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly surface: {
      readonly initial: object
      readonly 100: object
      readonly 200: object
    }
    readonly text: {
      readonly [P in Prominences]: object
    }
  }
}

export const contractWarningTokens: ContractWarningTokens = {
  warning: {
    border: {
      initial: {},
    },

    bg: {
      initial: {},
      hover: {},
      active: {},
    },

    ghost: {
      initial: {},
      hover: {},
      active: {},
    },

    surface: {
      initial: {},
      100: {},
      200: {},
    },

    text: {
      initial: {},
      100: {},
      200: {},
      inverse: {},
      static: {},
    },
  },
}

export interface WarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly ghost: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly surface: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
    }
    readonly text: {
      readonly [P in Prominences]: SemanticToken
    }
  }
}

export const warningTokens: WarningTokens = {
  warning: {
    border: {
      initial: formatSemanticTokenValue('border.warning.initial', 'acheron'),
    },

    bg: {
      initial: formatSemanticTokenValue(
        'background.warning.initial',
        'acheron',
      ),
      hover: formatSemanticTokenValue('background.warning.hover', 'acheron'),
      active: formatSemanticTokenValue('background.warning.active', 'acheron'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.warning.initial', 'acheron'),
      hover: formatSemanticTokenValue('ghost.warning.hover', 'acheron'),
      active: formatSemanticTokenValue('ghost.warning.active', 'acheron'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.warning.initial', 'acheron'),
      100: formatSemanticTokenValue('surface.warning.100', 'acheron'),
      200: formatSemanticTokenValue('surface.warning.200', 'acheron'),
    },

    text: {
      initial: formatSemanticTokenValue('text.warning.initial', 'acheron'),
      100: formatSemanticTokenValue('text.warning.100', 'acheron'),
      200: formatSemanticTokenValue('text.warning.200', 'acheron'),
      inverse: formatSemanticTokenValue('text.warning.inverse', 'acheron'),
      static: formatSemanticTokenValue('text.warning.static', 'acheron'),
    },
  },
}
