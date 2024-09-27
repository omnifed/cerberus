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
import { keyframes, textStyles, tokens } from './theme'
import { recipes, slotRecipes } from './recipes'
import { semanticTokens } from './theme/semantic-tokens/config'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export const cerberusPreset: Preset = definePreset({
  name: 'cerberus',

  globalCss,
  conditions,
  utilities,
  patterns,

  // main theme: cerberus
  theme: {
    tokens: {
      colors: {},
    },
    extend: {
      keyframes,
      recipes,
      slotRecipes,
      textStyles,
      tokens,
    },
    semanticTokens,
  },

  // additional themes
  themes: {},
})

export const cerberusConfig: Config = defineConfig({
  preflight: true,
  prefix: 'cerberus',

  jsxFramework: 'react',
  jsxFactory: 'cerberus',

  outdir: 'styled-system',
  importMap: '@cerberus/styled-system',
})

export * from './conditions'
export * from './patterns'
export * from './utilities'
export * from './theme/keyframes'
export * from './theme/textStyles'
export * from './theme/tokens'
export * from './theme/semantic-tokens/index'
export * from './recipes'
export * from './types'

export * from './recipes/shared/helpers'
export * from './recipes/shared/palettes'
export * from './recipes/shared/states'

export * from './tokens'
