import { defineThemeContract } from '@pandacss/dev'
import type { SemanticTokens } from '@pandacss/types'
import {
  contractActionTokens,
  contractDangerTokens,
  contractDataVizTokens,
  contractGradientTokens,
  contractInfoTokens,
  contractPageTokens,
  contractSecondaryActionTokens,
  contractSuccessTokens,
  contractWarningTokens,
} from './theme-contract'

// Token Contracts

const semanticTokens = {
  ...contractPageTokens,
  ...contractActionTokens,
  ...contractSecondaryActionTokens,
  ...contractInfoTokens,
  ...contractSuccessTokens,
  ...contractWarningTokens,
  ...contractDangerTokens,
  ...contractDataVizTokens,
  ...contractGradientTokens,
} as SemanticTokens

// Contract

export type DefinedTheme = ReturnType<typeof defineThemeContract>

/**
 * Define a variant theme to extend Cerberus in the panda.config.ts
 * @param {ThemeVariant} theme - The theme to define.
 * @returns {ThemeVariant} The defined theme.
 */
export const defineTheme: DefinedTheme = defineThemeContract({
  semanticTokens,
})
