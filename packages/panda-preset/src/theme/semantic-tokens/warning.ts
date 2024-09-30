import type { Prominence, SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of warning tokens that are used to generate the theme.
 * @module warningTokens
 */

type Prominences = Exclude<Prominence, 300>

export interface WarningTokens {
  readonly warning: {
    readonly border: {
      readonly initial: SemanticToken
    }
    readonly bg: {
      readonly initial: SemanticToken
      readonly hover: SemanticToken
      readonly active: SemanticToken
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
      readonly [P in Prominences]: SemanticToken
    }
  }
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
