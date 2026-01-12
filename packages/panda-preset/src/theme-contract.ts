import { defineThemeContract } from '@pandacss/dev'

/**
 * This module is used to define the theme contract.
 * @module ThemeContract
 */

export type DefinedTheme = ReturnType<typeof defineThemeContract>

/**
 * Define a variant theme to extend Cerberus in the panda.config.ts
 * @param {ThemeVariant} theme - The theme to define.
 * @returns {ThemeVariant} The defined theme.
 */
export const defineTheme: DefinedTheme = defineThemeContract({
  keyframes: {},
  recipes: {},
  slotRecipes: {},
  textStyles: {},
  tokens: {
    colors: {},
    fonts: {},
    gradients: {},
    spacing: {},
    shadows: {},
    zIndex: {},
  },
})
