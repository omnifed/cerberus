import { type RawThemes } from '@cerberus/tokens'
import { definePreset, type Preset } from '@pandacss/dev'
import { conditions } from './conditions'
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

  conditions,

  themes,

  staticCss: {
    themes: [getThemeName()],
  },
})
