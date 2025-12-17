import {
  defineConfig,
  definePreset,
  type Config,
  type Preset,
} from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { presetCerberusTheme } from '@cerberus-design/preset-cerberus-theme'
import { type RawThemes } from '@cerberus/tokens'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import { baseTheme } from './theme'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

const cerberusPreset: Preset = definePreset({
  name: '@cerberus/preset-base',

  presets: [pandaPreset, presetCerberusTheme],

  globalCss,
  conditions,
  utilities,
  patterns,

  theme: {
    extend: baseTheme,
  },
})

const cerberusConfig: Config = defineConfig({
  preflight: true,
  prefix: 'cerberus',

  jsxFramework: 'react',
  jsxFactory: 'cerberus',

  outdir: 'styled-system',
})

/**
 * A function to easily define a PandaCSS configuration with Cerberus settings.
 * @param options PandaCSS configuration options
 * @returns PandaCSS configuration with Cerberus settings
 *
 * @example
 * ```typescript
 * import { createCerberusConfig } from '@cerberus/panda-preset'
 *
 * export default createCerberusConfig({
 *   clean: true,
 *   exclude: [],
 * })
 * ```
 */
export function createCerberusConfig(options?: Config): Config {
  return defineConfig({
    ...cerberusConfig,
    ...options,
  })
}

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
    ...cerberusPreset,

    globalVars: {
      '--font-display': options?.displayFont ?? 'Poppins, sans-serif',
      '--font-sans': options?.sansFont ?? 'Poppins, sans-serif',
      '--font-mono': options?.monoFont ?? 'Recursive, monospace',
    },
  })
}

/**
 * The built-in themes supported by Cerberus.
 */
export const supportedThemes: RawThemes[] = ['cerberus', 'acheron']
