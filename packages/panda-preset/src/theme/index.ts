import { recipes, slotRecipes } from '../recipes'
import { defineTheme } from '../theme-contract'
import { animationStyles } from './animationStyles'
import { easings } from './easings'
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
    easings,
    tokens,
    keyframes,
    recipes,
    slotRecipes,
    textStyles,
    animationStyles,
  },
})

export * from './animationStyles'
export * from './easings'
export * from './keyframes'
export * from './tokens'
export * from './textStyles'
export * from './semantic-tokens/index'
export * from '../theme-contract'
