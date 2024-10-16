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

export interface ThemeVariant {
  semanticTokens: SemanticTokens
  extend: {
    keyframes: Record<string, string>
    recipes: Record<string, Record<string, string>>
    slotRecipes: Record<string, Record<string, string>>
    textStyles: Record<string, string>
    tokens: {
      fonts: Record<string, string>
      zIndex: Record<string, string>
    }
  }
}
export type definedTheme = ReturnType<typeof defineThemeContract>

export const defineTheme: definedTheme = defineThemeContract<ThemeVariant>({
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
