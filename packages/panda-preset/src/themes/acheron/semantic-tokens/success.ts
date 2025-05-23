import type { SuccessTokens } from '../../../theme/semantic-tokens'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of success tokens that are used to generate the theme.
 * @module successTokens
 */

export const successTokens: SuccessTokens = {
  success: {
    border: {
      initial: formatSemanticTokenValue('border.success.initial', 'acheron'),
    },

    bg: {
      initial: formatSemanticTokenValue(
        'background.success.initial',
        'acheron',
      ),
      hover: formatSemanticTokenValue('background.success.hover', 'acheron'),
      active: formatSemanticTokenValue('background.success.active', 'acheron'),
    },

    ghost: {
      initial: formatSemanticTokenValue('ghost.success.initial', 'acheron'),
      hover: formatSemanticTokenValue('ghost.success.hover', 'acheron'),
      active: formatSemanticTokenValue('ghost.success.active', 'acheron'),
    },

    surface: {
      initial: formatSemanticTokenValue('surface.success.initial', 'acheron'),
      100: formatSemanticTokenValue('surface.success.100', 'acheron'),
      200: formatSemanticTokenValue('surface.success.200', 'acheron'),
    },

    text: {
      initial: formatSemanticTokenValue('text.success.initial', 'acheron'),
      100: formatSemanticTokenValue('text.success.100', 'acheron'),
      200: formatSemanticTokenValue('text.success.200', 'acheron'),
      inverse: formatSemanticTokenValue('text.success.inverse', 'acheron'),
      static: formatSemanticTokenValue('text.success.static', 'acheron'),
    },
  },
}
