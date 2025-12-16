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
      initial: formatSemanticTokenValue('border.info.initial', 'acheron'),
      100: formatSemanticTokenValue('border.info.100', 'acheron'),
    },

    bg: {
      initial: formatSemanticTokenValue('background.info.initial', 'acheron'),
      hover: formatSemanticTokenValue('background.info.hover', 'acheron'),
      active: formatSemanticTokenValue('background.info.active', 'acheron'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.info.initial', 'acheron'),
      hover: formatSemanticTokenValue('ghost.info.hover', 'acheron'),
      active: formatSemanticTokenValue('ghost.info.active', 'acheron'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.info.initial', 'acheron'),
      100: formatSemanticTokenValue('surface.info.100', 'acheron'),
      200: formatSemanticTokenValue('surface.info.200', 'acheron'),
    },

    text: {
      initial: formatSemanticTokenValue('text.info.initial', 'acheron'),
      100: formatSemanticTokenValue('text.info.100', 'acheron'),
      200: formatSemanticTokenValue('text.info.200', 'acheron'),
      static: formatSemanticTokenValue('text.info.static', 'acheron'),
    },
  },
}
