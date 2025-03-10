import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus-design/panda-preset'

export default createCerberusConfig({
  clean: true,
  presets: [createCerberusPreset()],

  include: ['./mdx-components.tsx', './app/**/*.{ts,tsx}'],
  exclude: [],
})
