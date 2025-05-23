import type { Prominence, SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of danger tokens that are used to generate the theme.
 * @module dangerTokens
 */

type DangerProminences = Exclude<Prominence, 300 | 400>
type DangerTextProminence = Exclude<DangerProminences, 400>

export interface ContractDangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: object
      readonly hover: object
      readonly active: object
    }
    readonly border: {
      readonly initial: object
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
      readonly [P in DangerTextProminence]: object
    }
  }
}

export const contractDangerTokens: ContractDangerTokens = {
  danger: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },

    border: {
      initial: {},
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

export interface DangerTokens {
  readonly danger: {
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
    }
    readonly border: {
      readonly initial: SemanticToken
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
      readonly [P in DangerTextProminence]: SemanticToken
    }
  }
}

export const dangerTokens: DangerTokens = {
  danger: {
    bg: {
      initial: formatSemanticTokenValue('background.danger.initial'),
      hover: formatSemanticTokenValue('background.danger.hover'),
      active: formatSemanticTokenValue('background.danger.active'),
    },

    border: {
      initial: formatSemanticTokenValue('border.danger.initial'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.danger.initial'),
      hover: formatSemanticTokenValue('ghost.danger.hover'),
      active: formatSemanticTokenValue('ghost.danger.active'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.danger.initial'),
      100: formatSemanticTokenValue('surface.danger.100'),
      200: formatSemanticTokenValue('surface.danger.200'),
    },

    text: {
      initial: formatSemanticTokenValue('text.danger.initial'),
      100: formatSemanticTokenValue('text.danger.100'),
      200: formatSemanticTokenValue('text.danger.200'),
      inverse: formatSemanticTokenValue('text.danger.inverse'),
      static: formatSemanticTokenValue('text.danger.static'),
    },
  },
}
