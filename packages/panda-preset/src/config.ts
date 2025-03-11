import {
  defineConfig,
  definePreset,
  type Config,
  type Preset,
} from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import { baseTheme, type RawThemes } from './theme'
import { acheronTheme } from './themes/acheron'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

const cerberusPreset: Preset = definePreset({
  name: 'cerberus',

  presets: ['@pandacss/dev/presets'],

  globalCss,
  conditions,
  utilities,
  patterns,

  // default theme: cerberus
  theme: baseTheme,

  // optional themes
  themes: {
    cerberus: baseTheme,
    acheron: acheronTheme,
  },

  // opt-into additional theme variants
  staticCss: {
    themes: ['cerberus', 'acheron'],
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
export function createCerberusPreset(options?: Preset): Preset {
  return definePreset({
    ...cerberusPreset,
    ...options,
  })
}

/**
 * The built-in themes supported by Cerberus.
 */
export const supportedThemes: RawThemes[] = ['cerberus', 'acheron']
