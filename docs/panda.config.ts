import { createCerberusConfig, createCerberusPreset } from '@cerberus/panda-preset'
import { presetAcheronTheme } from '@cerberus/preset-acheron-theme'
import { presetElysiumTheme } from '@cerberus/preset-elysium-theme'
import { presetOceanusTheme } from '@cerberus/preset-oceanus-theme'
import { globalCss } from './system/global-css'

const isProd = process.env.NODE_ENV === 'production'

export default createCerberusConfig({
  presets: [
    createCerberusPreset(),
    presetAcheronTheme,
    presetElysiumTheme,
    presetOceanusTheme,
  ],

  include: [
    './node_modules/@cerberus-design/react/**/*.{ts,tsx,js,jsx}',
    './node_modules/@cerberus-design/data-grid/src/components/*.client.{ts,tsx}',
    './mdx-components.tsx',
    './**/*.{ts,tsx}',
  ],
  exclude: [],

  minify: isProd,
  optimize: {
    removeUnusedKeyframes: isProd,
    removeUnusedTokens: isProd,
    smartCompoundVariants: isProd,
    treeshakeDesignSystem: isProd,
  },

  globalCss,

  globalVars: {
    '--nav-height': '3.75rem',
    '--shiki-background': 'var(--cerberus-colors-page-surface-100)',
    '--shiki-foreground': 'var(--cerberus-colors-page-text-initial)',
    '--shiki-token-keyword': 'var(--cerberus-colors-secondary-action-text-initial)',
    '--shiki-token-function': 'var(--cerberus-colors-info-text-initial)',
    '--shiki-token-string': 'var(--cerberus-colors-success-text-initial)',
    '--shiki-token-constant': 'var(--cerberus-colors-warning-text-initial)',
    '--shiki-token-string-expression': 'var(--cerberus-colors-success-bg-active)',
    '--shiki-token-parameter': 'var(--cerberus-colors-page-text-initial)',
    '--shiki-token-punctuation': 'var(--cerberus-colors-page-text-100)',
    '--shiki-token-comment': 'var(--cerberus-colors-page-text-100)',
    '--shiki-token-link': 'var(--cerberus-colors-action-text-navigation-hover)',
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
