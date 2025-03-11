import { defineThemeContract } from '@pandacss/dev'
import {
  contractActionTokens,
  contractDangerTokens,
  contractDataVizTokens,
  contractInfoTokens,
  contractPageTokens,
  contractSecondaryActionTokens,
  contractSuccessTokens,
  contractWarningTokens,
} from './theme/semantic-tokens'
import type { SemanticTokens } from '@pandacss/types'

/**
 * This module is used to define the theme contract.
 * @module ThemeContract
 */

export interface ThemeVariant {
  semanticTokens: SemanticTokens
  extend: {
    keyframes: Record<string, string>
    recipes: Record<string, Record<string, string>>
    slotRecipes: Record<string, Record<string, string>>
    textStyles: Record<string, string>
    tokens: {
      colors: Record<string, string>
      fonts: Record<string, string>
      gradients: Record<string, string>
      spacing: Record<string, string>
      zIndex: Record<string, string>
    }
  }
}
export type DefinedTheme = ReturnType<typeof defineThemeContract>

/**
 * Define a variant theme to extend Cerberus in the panda.config.ts
 * @param {ThemeVariant} theme - The theme to define.
 * @returns {ThemeVariant} The defined theme.
 */
export const defineTheme: DefinedTheme = defineThemeContract<ThemeVariant>({
  semanticTokens: {
    ...contractPageTokens,
    ...contractActionTokens,
    ...contractSecondaryActionTokens,
    ...contractInfoTokens,
    ...contractSuccessTokens,
    ...contractWarningTokens,
    ...contractDangerTokens,
    ...contractDataVizTokens,
  } as SemanticTokens,

  extend: {
    keyframes: {},
    recipes: {},
    slotRecipes: {},
    textStyles: {},
    tokens: {
      colors: {},
      fonts: {},
      gradients: {},
      spacing: {},
      zIndex: {},
    },
  },
})
