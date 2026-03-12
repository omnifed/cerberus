import { createCerberusConfig, createCerberusPreset } from '@cerberus/panda-preset'

export default createCerberusConfig({
  clean: true,
  presets: [createCerberusPreset()],
  include: ['./src/**/*.{ts,tsx}'],
})
