import { createCerberusConfig, createCerberusPreset } from '@cerberus/panda-preset'

export default createCerberusConfig({
  clean: true,
  presets: [createCerberusPreset()],
  include: ['../react/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
})
