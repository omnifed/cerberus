import { defineConfig, type Config } from '@pandacss/dev'
import type { CssRule, Preset } from '@pandacss/types'

/**
 * This module contains the Cerberus configuration options.
 * @module
 **/

const baseConfig: Config = defineConfig({
  preflight: true,
  prefix: 'cerberus',

  jsxFramework: 'react',
  jsxFactory: 'cerberus',

  outdir: 'styled-system',
})

/**
 * ## createCerberusConfig
 * A function to define a PandaCSS configuration with built-in Cerberus settings.
 *
 * This helper will automatically merge themes from passed presets and register static
 * themes for CSS emission.
 *
 * ### Props
 *
 * | Prop | Type | Description |
 * | --- | --- | --- |
 * | options | Config  | A PandaCSS configuration object. |
 *
 * ### Returns
 * A PandaCSS configuration object with options provided merged with Cerberus settings.
 *
 * ### Example
 *
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
  const userPresets: Config['presets'] = options?.presets ?? []
  const userPlugins: Config['plugins'] = options?.plugins ?? []

  const mergedStaticCssThemes: string[] = []
  const mergedStaticCssCss: CssRule[] = []

  // Automatically collect all `themes` objects across synchronous presets
  const mergedThemes = userPresets.reduce<Record<string, any>>(
    async (acc, preset: string | Preset | Promise<Preset>) => {
      if (!preset) return acc
      if (typeof preset === 'string') return acc

      const isPromise = preset instanceof Promise
      const usablePreset = isPromise ? await preset : preset

      if (usablePreset.staticCss?.themes) {
        mergedStaticCssThemes.push(...usablePreset.staticCss.themes)
      }
      if (usablePreset.staticCss?.css?.length) {
        mergedStaticCssCss.push(...usablePreset.staticCss.css)
      }
      if (usablePreset.themes) {
        return { ...acc, ...usablePreset.themes }
      }
      return acc
    },
    {},
  )

  // Automatically register all detected theme names
  const existingStaticThemes = options?.staticCss?.themes ?? []
  const staticThemes = Array.from(
    new Set([...mergedStaticCssThemes, ...existingStaticThemes]),
  )

  const exsitingStaticCss = options?.staticCss?.css ?? []
  const staticCss = Array.from(new Set([...mergedStaticCssCss, ...exsitingStaticCss]))

  return defineConfig({
    ...baseConfig,
    ...options,

    plugins: [
      {
        name: 'clean-panda-colors',
        hooks: {
          'preset:resolved': ({ utils, preset, name }) => {
            if (name === '@pandacss/preset-panda') {
              return utils.omit(preset, ['theme.tokens.colors'])
            }
            return preset
          },
        },
      },
      // Let the user override omiting panda colors if they want to keep them
      ...userPlugins,
    ],

    themes: {
      ...mergedThemes,
      ...options?.themes,
    },

    staticCss: {
      ...options?.staticCss,
      themes: staticThemes.length > 0 ? staticThemes : undefined,
      css: staticCss,
    },
  })
}
