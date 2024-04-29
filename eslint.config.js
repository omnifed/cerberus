'use strict'

// import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'

const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

// TODO: Waiting on v9 support: https://github.com/eslint-recommended/eslint-config-typescript/issues/355

// const compat = new FlatCompat({
//   baseDir: import.meta.dirname,
// })

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  // ...compat.extends('plugin:sonarjs/recommended'),
  {
    languageOptions: {
      parserOptions: {
        project: [
          './tsconfig.json',
          './packages/panda-preset/tsconfig.lint.json',
          './configs/tsconfig.json',
          './tests/tsconfig.json',
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
