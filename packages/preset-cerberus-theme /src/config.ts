import { definePreset, type Preset } from '@pandacss/dev'
import { type RawThemes } from '@cerberus/tokens'
import { theme } from './theme/index'
import { conditions } from './conditions'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export function getThemeName(): RawThemes {
  return 'cerberus'
}

export const presetCerberusTheme: Preset = definePreset({
  name: '@cerberus/preset-cerberus-theme',

  conditions,

  // We include this since it's used as the base theme to allow virtual colors
  // to work with all other preset themes.
  theme,

  themes: {
    cerberus: theme,
  },

  staticCss: {
    themes: ['cerberus'],
  },
})
