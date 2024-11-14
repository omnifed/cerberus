import { recipes, slotRecipes } from '../recipes'
import { defineTheme } from '../theme-contract'
import { motionStyles } from './motionStyles'
import { keyframes } from './keyframes'
import { semanticTokens } from './semantic-tokens/config'
import { textStyles } from './textStyles'
import { tokens } from './tokens'

/**
 * This module contains the Cerberus theme and configuration options.
 * @module
 */

export const baseTheme = defineTheme({
  semanticTokens,
  extend: {
    tokens,
    keyframes,
    recipes,
    slotRecipes,
    textStyles,
    motionStyles,
  },
})

export * from './keyframes'
export * from './tokens'
export * from './textStyles'
export * from './semantic-tokens/index'
export * from '../theme-contract'
