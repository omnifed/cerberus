import type {
  ContractDangerTokens,
  DangerTokens,
} from '../../../theme/semantic-tokens/danger'
import { formatSemanticTokenValue } from '../../../tokens'

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
      initial: formatSemanticTokenValue('background.danger.initial', 'acheron'),
      hover: formatSemanticTokenValue('background.danger.hover', 'acheron'),
      active: formatSemanticTokenValue('background.danger.active', 'acheron'),
    },

    border: {
      initial: formatSemanticTokenValue('border.danger.initial', 'acheron'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.danger.initial', 'acheron'),
      hover: formatSemanticTokenValue('ghost.danger.hover', 'acheron'),
      active: formatSemanticTokenValue('ghost.danger.active', 'acheron'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.danger.initial', 'acheron'),
      100: formatSemanticTokenValue('surface.danger.100', 'acheron'),
      200: formatSemanticTokenValue('surface.danger.200', 'acheron'),
    },

    text: {
      initial: formatSemanticTokenValue('text.danger.initial', 'acheron'),
      100: formatSemanticTokenValue('text.danger.100', 'acheron'),
      200: formatSemanticTokenValue('text.danger.200', 'acheron'),
      inverse: formatSemanticTokenValue('text.danger.inverse', 'acheron'),
      static: formatSemanticTokenValue('text.danger.static', 'acheron'),
    },
  },
}
