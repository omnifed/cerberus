import { defineSemanticTokens } from '@pandacss/dev'
import { pageTokens } from './page'
import { actionTokens } from './action'
import { secondaryActionTokens } from './secondary-action'
import { infoTokens } from './info'
import { successTokens } from './success'
import { warningTokens } from './warning'
import { dangerTokens } from './danger'
import { gradientTokens } from './gradient'
import { dataVizTokens } from './data-viz'

/**
 * This module contains the configuration for the semantic tokens.
 * @module
 */

export const semanticTokens = defineSemanticTokens({
  colors: {
    ...pageTokens,
    ...actionTokens,
    ...secondaryActionTokens,
    ...infoTokens,
    ...successTokens,
    ...warningTokens,
    ...dangerTokens,
    ...gradientTokens,
    ...dataVizTokens,
  },
})
