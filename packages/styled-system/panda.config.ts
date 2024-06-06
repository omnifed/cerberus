import { defineConfig } from '@pandacss/dev'
import pandaPreset from '@pandacss/preset-panda'
import { cerberusPreset, cerberusConfig } from '@cerberus-design/panda-preset'

export default defineConfig({
  ...cerberusConfig,

  exclude: [],
  outdir: '.',

  clean: true,

  presets: [pandaPreset, cerberusPreset],
})
