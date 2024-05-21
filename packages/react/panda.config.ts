import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { cerberusPreset, cerberusConfig } from '@cerberus-design/panda-preset'

export default defineConfig({
  ...cerberusConfig,

  include: ['./src/**/*.{tsx}'],
  exclude: [],

  presets: [pandaPreset, cerberusPreset],
})
