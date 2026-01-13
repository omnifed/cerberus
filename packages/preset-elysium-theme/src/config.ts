import { definePreset, type Preset } from '@pandacss/dev'
import { type RawThemes } from '@cerberus/tokens'
import { theme } from './theme/index'
import { conditions } from './conditions'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export function getThemeName(): RawThemes {
  return 'elysium'
}

export const presetElysiumTheme: Preset = definePreset({
  name: '@cerberus/preset-elysium-theme',

  presets: [],

  conditions,

  themes: {
    elysium: theme,
  },

  // opt-into additional theme variants
  staticCss: {
    themes: [getThemeName()],
  },
})
