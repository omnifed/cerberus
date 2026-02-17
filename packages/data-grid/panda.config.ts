import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus/panda-preset'

export default createCerberusConfig({
  clean: true,
  presets: [createCerberusPreset()],

  exclude: [],
  outdir: 'styled-system',
})
