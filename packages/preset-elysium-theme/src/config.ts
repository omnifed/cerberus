import { type RawThemes } from '@cerberus/tokens'
import { definePreset, type Preset } from '@pandacss/dev'
import { themes } from './theme'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export function getThemeName(): RawThemes {
  return 'elysium'
}

export const presetElysiumTheme: Preset = definePreset({
  name: '@cerberus/preset-elysium-theme',

  themes,

  staticCss: {
    themes: [getThemeName()],
  },
})
