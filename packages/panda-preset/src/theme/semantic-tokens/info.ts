import {
  type ContractInfoTokens,
  type InfoTokens,
  formatSemanticTokenValue,
} from '@cerberus/tokens'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

export const contractInfoTokens: ContractInfoTokens = {
  info: {
    border: {
      initial: {},
      100: {},
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
      static: {},
    },
  },
}

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: formatSemanticTokenValue('border.info.initial'),
      100: formatSemanticTokenValue('border.info.100'),
    },

    bg: {
      initial: formatSemanticTokenValue('background.info.initial'),
      hover: formatSemanticTokenValue('background.info.hover'),
      active: formatSemanticTokenValue('background.info.active'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.info.initial'),
      hover: formatSemanticTokenValue('ghost.info.hover'),
      active: formatSemanticTokenValue('ghost.info.active'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.info.initial'),
      100: formatSemanticTokenValue('surface.info.100'),
      200: formatSemanticTokenValue('surface.info.200'),
    },

    text: {
      initial: formatSemanticTokenValue('text.info.initial'),
      100: formatSemanticTokenValue('text.info.100'),
      200: formatSemanticTokenValue('text.info.200'),
      static: formatSemanticTokenValue('text.info.static'),
    },
  },
}
