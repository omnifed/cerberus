import { defineTheme } from '../theme-contract'
import { recipes, slotRecipes } from '../recipes'
import { animationStyles } from './animationStyles'
import { easings } from './easings'
import { keyframes } from './keyframes'
import { textStyles } from './textStyles'
import { tokens } from './tokens'

/**
 * This module contains the Cerberus theme and configuration options.
 * @module
 */

export const baseTheme = defineTheme({
  easings,
  tokens,
  keyframes,
  recipes,
  slotRecipes,
  textStyles,
  animationStyles,
})

export * from './animationStyles'
export * from './easings'
export * from './keyframes'
export * from './tokens'
export * from './textStyles'
