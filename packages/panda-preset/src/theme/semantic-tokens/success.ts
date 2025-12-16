import {
  type ContractSuccessTokens,
  type SuccessTokens,
  formatSemanticTokenValue,
} from '@cerberus/tokens'

/**
 * This module is a collection of success tokens that are used to generate the theme.
 * @module successTokens
 */

export const contractSuccessTokens: ContractSuccessTokens = {
  success: {
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

export const successTokens: SuccessTokens = {
  success: {
    border: {
      initial: formatSemanticTokenValue('border.success.initial'),
    },

    bg: {
      initial: formatSemanticTokenValue('background.success.initial'),
      hover: formatSemanticTokenValue('background.success.hover'),
      active: formatSemanticTokenValue('background.success.active'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.success.initial'),
      hover: formatSemanticTokenValue('ghost.success.hover'),
      active: formatSemanticTokenValue('ghost.success.active'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.success.initial'),
      100: formatSemanticTokenValue('surface.success.100'),
      200: formatSemanticTokenValue('surface.success.200'),
    },

    text: {
      initial: formatSemanticTokenValue('text.success.initial'),
      100: formatSemanticTokenValue('text.success.100'),
      200: formatSemanticTokenValue('text.success.200'),
      inverse: formatSemanticTokenValue('text.success.inverse'),
      static: formatSemanticTokenValue('text.success.static'),
    },
  },
}
