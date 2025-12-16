import { definePreset, type Preset } from '@pandacss/dev'
import { theme } from './theme/index'
import { conditions } from './conditions'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

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
