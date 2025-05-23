import type { InfoTokens } from '../../../theme/semantic-tokens/info'
import { formatSemanticTokenValue } from '../../../tokens'

/**
 * This module is a collection of info tokens that are used to generate the theme.
 * @module infoTokens
 */

export const infoTokens: InfoTokens = {
  info: {
    border: {
      initial: formatSemanticTokenValue('border.info.initial', 'acheron'),
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
