import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { cerberusPreset, cerberusConfig } from '@cerberus-design/panda-preset'

export default defineConfig({
  ...cerberusConfig,

  include: ['./app/**/*.{ts,tsx}'],
  exclude: [],

  presets: [pandaPreset, cerberusPreset],
})
