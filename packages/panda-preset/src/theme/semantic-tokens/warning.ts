import type { Prominence, SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

type WarningTextProminences = Exclude<Prominence, 300 | 400>

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
      readonly [P in WarningTextProminences]: object
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
      readonly [P in WarningTextProminences]: SemanticToken
    }
  }
}

export const warningTokens: WarningTokens = {
  warning: {
    border: {
      initial: formatSemanticTokenValue('border.warning.initial'),
    },

    bg: {
      initial: formatSemanticTokenValue('background.warning.initial'),
      hover: formatSemanticTokenValue('background.warning.hover'),
      active: formatSemanticTokenValue('background.warning.active'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.warning.initial'),
      hover: formatSemanticTokenValue('ghost.warning.hover'),
      active: formatSemanticTokenValue('ghost.warning.active'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.warning.initial'),
      100: formatSemanticTokenValue('surface.warning.100'),
      200: formatSemanticTokenValue('surface.warning.200'),
    },

    text: {
      initial: formatSemanticTokenValue('text.warning.initial'),
      100: formatSemanticTokenValue('text.warning.100'),
      200: formatSemanticTokenValue('text.warning.200'),
      inverse: formatSemanticTokenValue('text.warning.inverse'),
      static: formatSemanticTokenValue('text.warning.static'),
    },
  },
}
