import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { cerberusPreset, cerberusConfig } from '@cerberus-design/panda-preset'

export default defineConfig({
  ...cerberusConfig,

  include: [
    './node_modules/@cerberus-design/react/src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  exclude: [],

  presets: [pandaPreset, cerberusPreset],
})
