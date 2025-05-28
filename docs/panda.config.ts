import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus-design/panda-preset'

export default createCerberusConfig({
  clean: true,
  presets: [createCerberusPreset()],

  include: [
    './node_modules/@cerberus-design/react/**/*.{ts,tsx,js,jsx}',
    './mdx-components.tsx',
    './app/**/*.{ts,tsx}',
  ],
  exclude: [],
})
