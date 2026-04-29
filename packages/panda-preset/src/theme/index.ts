import { recipes, slotRecipes } from '../recipes'
import { defineTheme } from '../theme-contract'
import { animationStyles } from './animationStyles'
import { easings } from './easings'
import { keyframes } from './keyframes'
import { layerStyles } from './layerStyles'
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
  layerStyles,
  slotRecipes,
  textStyles,
  animationStyles,
  colorPalette: {
    include: [
      'page.*',
      'action.*',
      'secondary-action.*',
      'info.*',
      'success.*',
      'warning.*',
      'danger.*',
    ],
  },
})

export * from './animationStyles'
export * from './easings'
export * from './keyframes'
export * from './layerStyles'
export * from './textStyles'
export * from './tokens'
