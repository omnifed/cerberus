import { type RawThemes } from '@cerberus/tokens'
import { definePreset, type Preset } from '@pandacss/dev'
import { conditions } from './conditions'
import { theme, themes } from './theme/index'

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
  // to work with all other preset themes. This allows Panda to understand the
  // theme structure and apply virtual colors correctly for multiple themes.
  theme,

  themes,

  staticCss: {
    themes: [getThemeName()],
  },
})
