import { presetCerberusTheme } from '@cerberus/preset-cerberus-theme'
import { definePreset, type Preset } from '@pandacss/dev'
import { conditions } from './conditions'
import { globalCss } from './globalCss'
import { globalVars } from './globalVars'
import { patterns } from './patterns'
import { baseTheme } from './theme'
import { utilities } from './utilities'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

const basePreset: Preset = definePreset({
  name: '@cerberus/preset-base',

  presets: ['@pandacss/preset-base', '@pandacss/preset-panda', presetCerberusTheme],

  globalCss,
  globalVars,

  conditions,
  utilities,
  patterns,

  theme: {
    extend: baseTheme,
  },

  staticCss: {
    css: [
      {
        properties: {
          colorPalette: ['*'],
        },
      },
    ],
    recipes: '*',
    themes: presetCerberusTheme.staticCss?.themes,
  },
})

export type PresetOptions = {}

/**
 * A function to easily define a PandaCSS preset with Cerberus settings.
 * @param options PandaCSS preset options
 * @returns PandaCSS preset with Cerberus settings
 *
 * @example
 * ```typescript
 * import { createCerberusConfig, createCerberusPreset } from '@cerberus/panda-preset'
 *
 * export default createCerberusConfig({
 *   clean: true,
 *   exclude: [],
 *
 *  presets: [createCerberusPreset({
 *   // custom preset options
 *  })],
 * })
 * ```
 */
export function createCerberusPreset(_options?: PresetOptions): Preset {
  return definePreset({
    ...basePreset,
  })
}
