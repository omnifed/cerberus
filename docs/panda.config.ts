import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus-design/panda-preset'
import { presetAcheronTheme } from '@cerberus-design/preset-acheron-theme'

export default createCerberusConfig({
  clean: true,
  minify: process.env.NODE_ENV === 'production',

  presets: [createCerberusPreset(), presetAcheronTheme],

  globalVars: {
    '--nav-height': '3.75rem',
  },

  include: [
    './node_modules/@cerberus-design/react/**/*.{ts,tsx,js,jsx}',
    './mdx-components.tsx',
    './app/**/*.{ts,tsx}',
  ],
  exclude: [],
})
