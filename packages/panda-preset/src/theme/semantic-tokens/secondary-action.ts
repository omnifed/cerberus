import type { SemanticToken } from './types'
import { formatSemanticTokenValue } from '../../tokens'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module secondaryActionTokens
 */

export type SecondaryActionProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly active: SemanticToken
}
export type SecondaryActionNavProminences = {
  readonly initial: SemanticToken
  readonly hover: SemanticToken
  readonly visited: SemanticToken
}

export interface SecondaryActionTokens {
  readonly secondaryAction: {
    readonly bg: SecondaryActionProminences
    readonly border: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
    }
    readonly ghost: SecondaryActionProminences
    readonly navigation: SecondaryActionNavProminences
    readonly text: {
      readonly initial: SemanticToken
      readonly 100: SemanticToken
      readonly 200: SemanticToken
      readonly static: SemanticToken
    }
  }
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
