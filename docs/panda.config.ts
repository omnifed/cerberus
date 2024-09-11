import { defineConfig, type Config } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { cerberusPreset, cerberusConfig } from '@cerberus-design/panda-preset'

const config: Config = {
  ...cerberusConfig,

  include: [
    './node_modules/@cerberus-design/react/src/**/*.{ts,tsx}',
    './mdx-components.tsx',
    './app/**/*.{ts,tsx}',
  ],
  exclude: [],

  presets: [pandaPreset, cerberusPreset],
}

export default defineConfig(config)
