import {
  type ContractDangerTokens,
  type DangerTokens,
  formatSemanticTokenValue,
} from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of danger tokens that are used to generate the theme.
 * @module dangerTokens
 */

const THEME = getThemeName()

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
      initial: formatSemanticTokenValue('background.danger.initial', THEME),
      hover: formatSemanticTokenValue('background.danger.hover', THEME),
      active: formatSemanticTokenValue('background.danger.active', THEME),
    },

    border: {
      initial: formatSemanticTokenValue('border.danger.initial', THEME),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.danger.initial', THEME),
      hover: formatSemanticTokenValue('ghost.danger.hover', THEME),
      active: formatSemanticTokenValue('ghost.danger.active', THEME),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.danger.initial', THEME),
      100: formatSemanticTokenValue('surface.danger.100', THEME),
      200: formatSemanticTokenValue('surface.danger.200', THEME),
    },

    text: {
      initial: formatSemanticTokenValue('text.danger.initial', THEME),
      100: formatSemanticTokenValue('text.danger.100', THEME),
      200: formatSemanticTokenValue('text.danger.200', THEME),
      inverse: formatSemanticTokenValue('text.danger.inverse', THEME),
      static: formatSemanticTokenValue('text.danger.static', THEME),
    },
  },
}
