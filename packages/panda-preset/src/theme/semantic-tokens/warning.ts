import {
  type ContractWarningTokens,
  type WarningTokens,
  formatSemanticTokenValue,
} from '@cerberus/tokens'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

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
