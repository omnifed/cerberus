import { defineConfig, type Config } from '@pandacss/dev'

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
  const userHooks = options?.hooks ?? {}
  const userPresets = options?.presets ?? []
  const mergedStaticCssThemes: string[] = []

  // Automatically collect all `themes` objects across synchronous presets
  const mergedThemes = userPresets.reduce<Record<string, any>>((acc, preset: any) => {
    if (!preset) return acc
    const isObj = typeof preset === 'object'
    if (isObj && preset.staticCss?.themes) {
      mergedStaticCssThemes.push(...preset.staticCss.themes)
    }
    if (isObj && preset.themes) {
      return { ...acc, ...preset.themes }
    }
    return acc
  }, {})

  // Automatically register all detected theme names
  const existingStaticThemes = options?.staticCss?.themes ?? []
  const staticThemes = Array.from(
    new Set([...mergedStaticCssThemes, ...existingStaticThemes]),
  )

  return defineConfig({
    ...baseConfig,
    ...options,

    themes: {
      ...mergedThemes,
      ...options?.themes,
    },

    staticCss: {
      ...options?.staticCss,
      themes: staticThemes.length > 0 ? staticThemes : undefined,
    },

    hooks: {
      'preset:resolved': ({ utils, preset, name }) => {
        if (name === '@pandacss/preset-panda') {
          return utils.omit(preset, ['theme.tokens.colors'])
        }
        return preset
      },
      // Let the user override omiting panda colors if they want to keep them
      ...userHooks,
    },
  })
}
