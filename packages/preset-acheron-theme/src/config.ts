import { type RawThemes } from '@cerberus/tokens'
import { definePreset, type Preset } from '@pandacss/dev'
import { conditions } from './conditions'
import { themes } from './theme/index'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export function getThemeName(): RawThemes {
  return 'acheron'
}

export const presetAcheronTheme: Preset = definePreset({
  name: '@cerberus/preset-acheron-theme',

  conditions,

  themes,

  staticCss: {
    themes: [getThemeName()],
  },
})
