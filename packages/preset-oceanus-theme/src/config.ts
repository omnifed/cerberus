import { type RawThemes } from '@cerberus/tokens'
import { definePreset, type Preset } from '@pandacss/dev'
import { conditions } from './conditions'
import { theme } from './theme/index'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export function getThemeName(): RawThemes {
  return 'oceanus'
}

export const presetOceanusTheme: Preset = definePreset({
  name: '@cerberus/preset-oceanus-theme',

  presets: [],

  conditions,

  themes: {
    oceanus: theme,
  },

  // opt-into additional theme variants
  staticCss: {
    themes: [getThemeName()],
  },
})
