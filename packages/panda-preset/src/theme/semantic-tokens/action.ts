import {
  type ActionTokens,
  type ContractActionTokens,
  formatSemanticTokenValue,
} from '@cerberus/tokens'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module actionTokens
 */

export const contractActionTokens: ContractActionTokens = {
  action: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },
    border: {
      initial: {},
      100: {},
      focus: {},
    },
    ghost: {
      initial: {},
      hover: {},
      active: {},
    },
    navigation: {
      initial: {},
      hover: {},
      visited: {},
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

export const actionTokens: ActionTokens = {
  action: {
    bg: {
      initial: formatSemanticTokenValue('background.action.initial'),
      hover: formatSemanticTokenValue('background.action.hover'),
      active: formatSemanticTokenValue('background.action.active'),
    },

    border: {
      initial: formatSemanticTokenValue('border.action.initial'),
      100: formatSemanticTokenValue('border.action.100'),
      focus: formatSemanticTokenValue('border.action.focus'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.action.initial'),
      hover: formatSemanticTokenValue('ghost.action.hover'),
      active: formatSemanticTokenValue('ghost.action.active'),
    },

    navigation: {
      initial: formatSemanticTokenValue('text.action.navigation.initial'),
      hover: formatSemanticTokenValue('text.action.navigation.hover'),
      visited: formatSemanticTokenValue('text.action.navigation.visited'),
    },

    text: {
      initial: formatSemanticTokenValue('text.action.initial'),
      100: formatSemanticTokenValue('text.action.100'),
      200: formatSemanticTokenValue('text.action.200'),
      inverse: formatSemanticTokenValue('text.action.inverse'),
      static: formatSemanticTokenValue('text.action.static'),
    },
  },
}
