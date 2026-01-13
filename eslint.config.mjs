import { defineConfig } from 'eslint/config'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import sonarjs from 'eslint-plugin-sonarjs'
import react from 'eslint-plugin-react'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactHooks from 'eslint-plugin-react-hooks/cjs/eslint-plugin-react-hooks.development.js'
import tseslint from 'typescript-eslint'

const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

export default defineConfig([
  eslint.configs.recommended,
  tseslint.configs.recommended,

  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  {
    ignores: [
      'packages/*/dist/**/*',
      'packages/*/styled-system/**/*',
      'packages/tokens/src/data/**/*', // Generated files
      'packages/figma/code-connect/**/*', // DEPRECATED
      // Docs use their own eslint config
      'docs/**/*',
      // non-TS files
      'eslint.config.mjs',
      // We don't need to lint these
      'tests/**/*',
      'configs/**/*', // we will kill once we fully move to JSR'
    ],
  },

  {
    name: 'global rules',
    files: ['**/*'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
    },
    rules: {
      '@typescript-eslint/space-before-function-paren': OFF,
    },
  },

  {
    name: '@cerberus/figma',
    files: ['packages/figma/**/*.ts'],
    ...sonarjs.recommended,
  },

  {
    name: '@cerberus-design/panda-preset',
    files: ['packages/panda-preset/**/*.ts'],
    ...sonarjs.recommended,
  },

  {
    name: '@cerberus/preset-acheron-theme',
    files: ['packages/preset-acheron-theme/**/*.ts'],
    ...sonarjs.recommended,
  },

  {
    name: '@cerberus/preset-cerberus-theme',
    files: ['packages/preset-cerberus-theme/**/*.ts'],
    ...sonarjs.recommended,
  },

  {
    name: '@cerberus/preset-elysium-theme',
    files: ['packages/preset-elysium-theme/**/*.ts'],
    ...sonarjs.recommended,
  },

  {
    name: '@cerberus-design/react',
    files: ['packages/react/**/*.ts', 'packages/react/**/*.tsx'],
    plugins: {
      react,
    },
    ...sonarjs.recommended,
    ...reactRecommended,
    ...reactHooks.recommended,
    rules: {},
  },

  {
    name: '@cerberus-design/configs',
    files: ['configs/**/*.mjs', 'configs/**/*.ts'],
    rules: {
      '@typescript-eslint/explicit-function-return-type': OFF,
    },
  },

  {
    name: 'tests',
    files: ['tests/**/*.ts', 'tests/**/*.tsx'],
  },

  // this must be last
  eslintConfigPrettier,
])
