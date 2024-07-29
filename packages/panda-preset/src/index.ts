import {
  defineConfig,
  definePreset,
  defineSemanticTokens,
  type Config,
  type Preset,
} from '@pandacss/dev'
import { globalCss } from './globalCss'
import { conditions } from './conditions'
import { utilities } from './utilities'
import { patterns } from './patterns'
import {
  actionTokens,
  dangerTokens,
  infoTokens,
  keyframes,
  neutralTokens,
  secondaryActionTokens,
  successTokens,
  textStyles,
  tokens,
  warningTokens,
} from './theme/index'
import { recipes, slotRecipes } from './recipes'

/**
 * This module contains the Cerberus preset and configuration options.
 * @module
 **/

export const cerberusPreset: Preset = definePreset({
  globalCss,
  conditions,
  utilities,
  patterns,

  theme: {
    extend: {
      keyframes,
      recipes,
      slotRecipes,
      textStyles,
      tokens,
    },

    semanticTokens: defineSemanticTokens({
      colors: {
        ...neutralTokens,
        ...actionTokens,
        ...secondaryActionTokens,
        ...infoTokens,
        ...successTokens,
        ...warningTokens,
        ...dangerTokens,
      },
    }),
  },
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
