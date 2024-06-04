'use strict'

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

export default tseslint.config(
  eslint.configs.recommended,
  sonarjs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    // Docs use local v8 lint checks
    ignores: [
      'docs/**/*',
      'packages/*/build/**/*',
      'packages/*/.tsup/**/*',
      'packages/styled-system/**/*',
    ],
  },

  {
    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.json',
          './packages/panda-preset/tsconfig.lint.json',
          './packages/icons/tsconfig.lint.json',
          './packages/react/tsconfig.lint.json',
          './configs/tsconfig.json',
          './tests/tsconfig.json',
          './docs/tsconfig.json',
        ],
        tsconfigRootDir: import.meta.dirname,
      },
    },
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
    name: '@cerberus-design/panda-preset',
    files: ['packages/panda-preset/**/*.ts'],
  },

  {
    name: '@cerberus-design/icons',
    files: ['packages/icons/**/*.ts'],
  },

  {
    name: '@cerberus-design/react',
    files: ['packages/react/**/*.ts', 'packages/react/**/*.tsx'],
    plugins: {
      react,
    },
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
)
