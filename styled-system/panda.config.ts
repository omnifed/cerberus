import { createCerberusConfig, createCerberusPreset } from '@cerberus/panda-preset'

export default createCerberusConfig({
  presets: [createCerberusPreset()],

  exclude: [],
  outdir: '.',
})
