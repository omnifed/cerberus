import {
  type SecondaryActionTokens,
  formatSemanticTokenValue,
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
      initial: formatSemanticTokenValue(
        'background.secondary-action.initial',
        THEME,
      ),
      hover: formatSemanticTokenValue(
        'background.secondary-action.hover',
        THEME,
      ),
      active: formatSemanticTokenValue(
        'background.secondary-action.active',
        THEME,
      ),
    },

    border: {
      initial: formatSemanticTokenValue(
        'border.secondary-action.initial',
        THEME,
      ),
      100: formatSemanticTokenValue('border.secondary-action.100', THEME),
    },

    ghost: {
      initial: formatSemanticTokenValue(
        'ghost.secondary-action.initial',
        THEME,
      ),
      hover: formatSemanticTokenValue('ghost.secondary-action.hover', THEME),
      active: formatSemanticTokenValue('ghost.secondary-action.active', THEME),
    },

    navigation: {
      initial: formatSemanticTokenValue(
        'text.secondary-action.navigation.initial',
        THEME,
      ),
      hover: formatSemanticTokenValue('text.secondary-action.navigation.hover'),
      visited: formatSemanticTokenValue(
        'text.secondary-action.navigation.visited',
        THEME,
      ),
    },

    text: {
      initial: formatSemanticTokenValue('text.secondary-action.initial', THEME),
      100: formatSemanticTokenValue('text.secondary-action.100', THEME),
      200: formatSemanticTokenValue('text.secondary-action.200', THEME),
      static: formatSemanticTokenValue('text.secondary-action.static', THEME),
    },
  },
}
