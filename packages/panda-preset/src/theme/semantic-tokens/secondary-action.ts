import {
  type ContractSecondaryActionTokens,
  type SecondaryActionTokens,
  formatSemanticTokenValue,
} from '@cerberus/tokens'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module secondaryActionTokens
 */

export const contractSecondaryActionTokens: ContractSecondaryActionTokens = {
  secondaryAction: {
    bg: {
      initial: {},
      hover: {},
      active: {},
    },

    border: {
      initial: {},
      100: {},
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
      static: {},
    },
  },
}

export const secondaryActionTokens: SecondaryActionTokens = {
  secondaryAction: {
    bg: {
      initial: formatSemanticTokenValue('background.secondary-action.initial'),
      hover: formatSemanticTokenValue('background.secondary-action.hover'),
      active: formatSemanticTokenValue('background.secondary-action.active'),
    },

    border: {
      initial: formatSemanticTokenValue('border.secondary-action.initial'),
      100: formatSemanticTokenValue('border.secondary-action.100'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.secondary-action.initial'),
      hover: formatSemanticTokenValue('ghost.secondary-action.hover'),
      active: formatSemanticTokenValue('ghost.secondary-action.active'),
    },

    navigation: {
      initial: formatSemanticTokenValue(
        'text.secondary-action.navigation.initial',
      ),
      hover: formatSemanticTokenValue('text.secondary-action.navigation.hover'),
      visited: formatSemanticTokenValue(
        'text.secondary-action.navigation.visited',
      ),
    },

    text: {
      initial: formatSemanticTokenValue('text.secondary-action.initial'),
      100: formatSemanticTokenValue('text.secondary-action.100'),
      200: formatSemanticTokenValue('text.secondary-action.200'),
      static: formatSemanticTokenValue('text.secondary-action.static'),
    },
  },
}
