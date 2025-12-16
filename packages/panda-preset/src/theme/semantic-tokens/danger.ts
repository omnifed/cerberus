import {
  type ContractDangerTokens,
  type DangerTokens,
  formatSemanticTokenValue,
} from '@cerberus/tokens'

/**
 * This module is a collection of danger tokens that are used to generate the theme.
 * @module dangerTokens
 */

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
