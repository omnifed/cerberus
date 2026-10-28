import { presetCerberusTheme } from '@cerberus/preset-cerberus-theme'
import { definePreset, type Preset } from '@pandacss/dev'
import { conditions } from './conditions'
import { globalCss } from './globalCss'
import { globalVars } from './globalVars'
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
    themes: presetCerberusTheme.staticCss?.themes,
    css: [
      {
        properties: {
          colorPalette: ['*'],
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
export function createCerberusPreset(options?: PresetOptions): Preset {
  return definePreset({
    ...basePreset,

    globalVars: {
      '--font-display': options?.displayFont ?? 'var(--global-font-body)',
      '--font-sans': options?.sansFont ?? 'var(--global-font-body)',
      '--font-mono': options?.monoFont ?? 'var(--global-font-mono)',
      ...basePreset.globalVars,
    },
  })
}
