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
} from './theme/semantic-tokens/index'
import type { SemanticTokens } from '@pandacss/types'

/**
 * This module is used to define the theme contract.
 * @module ThemeContract
 */

export interface ThemeVariant {
  semanticTokens: SemanticTokens
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
})
