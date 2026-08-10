import { presetCerberusTheme } from '@cerberus/preset-cerberus-theme'
import { definePreset, type Preset } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { conditions } from './conditions'
import { globalCss } from './globalCss'
import { patterns } from './patterns'
import { createStaticRecipeList } from './scripts'
import { baseTheme } from './theme'
import { utilities } from './utilities'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

const staticRecipes = createStaticRecipeList()

const basePreset: Preset = definePreset({
  name: '@cerberus/preset-base',

  presets: [pandaPreset, presetCerberusTheme],

  globalCss,
  conditions,
  utilities,
  patterns,

  theme: {
    ...presetCerberusTheme.theme,
    extend: baseTheme,
  },

  staticCss: {
    themes: presetCerberusTheme.staticCss.themes,
    css: [
      {
        properties: {
          colorPalette: [
            'page',
            'action',
            'secondary-action',
            'secondaryAction',
            'info',
            'success',
            'warning',
            'danger',
          ],
          layerStyle: ['*'],
        },
      },
    ],
    recipes: staticRecipes,
  },
})

export interface PresetOptions {
  /**
   * The fontFamily to use for Display textStyles.
   * @default 'Poppins, sans-serif'
   */
  displayFont?: string
  /**
   * The fontFamily to use for non-display textStyles.
   * @default 'Poppins, sans-serif'
   */
  sansFont?: string
  /**
   * The fontFamily to use for Mono textStyles.
   * @default 'Recursive, monospace'
   */
  monoFont?: string
}

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
export async function createCerberusPreset(options?: PresetOptions): Promise<Preset> {
  return definePreset({
    ...basePreset,

    globalVars: {
      '--font-display': options?.displayFont ?? 'Poppins, sans-serif',
      '--font-sans': options?.sansFont ?? 'Poppins, sans-serif',
      '--font-mono': options?.monoFont ?? 'Recursive, monospace',
    },
  })
}
