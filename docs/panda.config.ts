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
    '--shiki-background': 'var(--cerberus-colors-page-surface-100)',
    '--shiki-foreground': 'var(--cerberus-colors-page-text-initial)',
    '--shiki-token-keyword':
      'var(--cerberus-colors-secondary-action-text-initial)',
    '--shiki-token-function': 'var(--cerberus-colors-info-text-initial)',
    '--shiki-token-string': 'var(--cerberus-colors-success-text-initial)',
    '--shiki-token-constant': 'var(--cerberus-colors-warning-text-initial)',
    '--shiki-token-string-expression':
      'var(--cerberus-colors-success-bg-active)',
    '--shiki-token-parameter': 'var(--cerberus-colors-page-text-initial)',
    '--shiki-token-punctuation': 'var(--cerberus-colors-page-text-100)',
    '--shiki-token-comment': 'var(--cerberus-colors-page-text-100)',
    '--shiki-token-link': 'var(--cerberus-colors-action-text-navigation-hover)',
  },

  staticCss: {
    themes: ['cerberus', getAcheronThemeName(), getElysiumThemeName()],
  },

  theme: {
    extend: {
      recipes: {
        button: {
          defaultVariants: {
            shape: 'default',
          },
        },
      },
    },
  },
})
