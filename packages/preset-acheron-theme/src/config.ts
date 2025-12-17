import { definePreset, type Preset } from '@pandacss/dev'
import { type RawThemes } from '@cerberus/tokens'
import { theme } from './theme/index'
import { conditions } from './conditions'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export function getThemeName(): RawThemes {
  return 'acheron'
}

export const presetAcheronTheme: Preset = definePreset({
  name: '@cerberus/preset-acheron-theme',

  presets: [],

  conditions,

  themes: {
    acheron: theme,
  },

  // opt-into additional theme variants
  staticCss: {
    themes: ['acheron'],
  },
})
