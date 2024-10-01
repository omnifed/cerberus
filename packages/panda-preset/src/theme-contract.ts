import { defineThemeContract } from '@pandacss/dev'
import {
  contractActionTokens,
  contractDangerTokens,
  contractInfoTokens,
  contractPageTokens,
  contractSecondaryActionTokens,
  contractSuccessTokens,
  contractWarningTokens,
} from './theme/semantic-tokens'
import type { SemanticTokens } from '@pandacss/types'

export const defineTheme = defineThemeContract({
  semanticTokens: {
    ...contractPageTokens,
    ...contractActionTokens,
    ...contractSecondaryActionTokens,
    ...contractInfoTokens,
    ...contractSuccessTokens,
    ...contractWarningTokens,
    ...contractDangerTokens,
  } as SemanticTokens,

  extend: {
    keyframes: {},
    recipes: {},
    slotRecipes: {},
    textStyles: {},
    tokens: {
      fonts: {},
      zIndex: {},
    },
  },
})
