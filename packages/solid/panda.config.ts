import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus-design/panda-preset'

export default createCerberusConfig({
  clean: true,
  presets: [createCerberusPreset()],

  exclude: [],
  outdir: 'styled-system',
})
