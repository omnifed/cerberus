import {
  type SecondaryActionTokens,
  createSemanticToken,
} from '@cerberus/tokens'
import { getThemeName } from '../../config'

/**
 * This module is a collection of action tokens that are used to generate the theme.
 * @module secondaryActionTokens
 */

const THEME = getThemeName()

export const secondaryActionTokens: SecondaryActionTokens = {
  secondaryAction: {
    bg: {
      initial: createSemanticToken(
        THEME,
        'secondary-action.background.initial',
      ),
      hover: createSemanticToken(THEME, 'secondary-action.background.hover'),
      active: createSemanticToken(THEME, 'secondary-action.background.active'),
    },

    border: {
      initial: createSemanticToken(THEME, 'secondary-action.border.initial'),
      100: createSemanticToken(THEME, 'secondary-action.border.100'),
    },

    ghost: {
      initial: createSemanticToken(THEME, 'secondary-action.ghost.initial'),
      hover: createSemanticToken(THEME, 'secondary-action.ghost.hover'),
      active: createSemanticToken(THEME, 'secondary-action.ghost.active'),
    },

    navigation: {
      initial: createSemanticToken(
        THEME,
        'secondary-action.text.navigation.initial',
      ),
      hover: createSemanticToken(
        THEME,
        'secondary-action.text.navigation.hover',
      ),
      visited: createSemanticToken(
        THEME,
        'secondary-action.text.navigation.visited',
      ),
    },

    text: {
      initial: createSemanticToken(THEME, 'secondary-action.text.initial'),
      100: createSemanticToken(THEME, 'secondary-action.text.100'),
      200: createSemanticToken(THEME, 'secondary-action.text.200'),
      static: createSemanticToken(THEME, 'secondary-action.text.static'),
    },
  },
}
