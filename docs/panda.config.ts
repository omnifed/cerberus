import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus/panda-preset'
import {
  presetAcheronTheme,
  getThemeName as getAcheronThemeName,
} from '@cerberus/preset-acheron-theme'
import {
  presetElysiumTheme,
  getThemeName as getElysiumThemeName,
} from '@cerberus/preset-elysium-theme'

export default createCerberusConfig({
  clean: true,
  minify: process.env.NODE_ENV === 'production',

  include: [
    './node_modules/@cerberus-design/react/**/*.{ts,tsx,js,jsx}',
    './mdx-components.tsx',
    './app/**/*.{ts,tsx}',
  ],
  exclude: [],

  presets: [createCerberusPreset(), presetAcheronTheme, presetElysiumTheme],

  globalVars: {
    '--nav-height': '3.75rem',
  },

  staticCss: {
    themes: ['cerberus', getAcheronThemeName(), getElysiumThemeName()],
  },
})
