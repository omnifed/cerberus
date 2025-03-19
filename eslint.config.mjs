import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import sonarjs from 'eslint-plugin-sonarjs'
import react from 'eslint-plugin-react'
import reactRecommended from 'eslint-plugin-react/configs/recommended.js'
import reactHooks from 'eslint-plugin-react-hooks/cjs/eslint-plugin-react-hooks.development.js'
import solid from 'eslint-plugin-solid/configs/typescript'
import tseslint from 'typescript-eslint'

const OFF = 'off'
// const WARN = 'warn'
// const ERROR = 'error'

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,

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
      'packages/*/build/**/*',
      'packages/*/.tsup/**/*',
      // Docs use their own eslint config
      'docs/**/*',
      // non-TS files
      'packages/*/styled-system/**/*',
      'packages/styled-system/**/*',
      '**/*.mjs',
      // files that are rooted with JS not TS or that we don't need to lint
      // with hardcore TS rules
      'packages/*/tsup.config.ts',
      'tests/**/*',
      'figma/**/*',
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
    name: '@cerberus-design/panda-preset',
    files: ['packages/panda-preset/**/*.ts'],
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
    name: '@cerberus-design/solid',
    files: ['packages/solid/**/*.ts', 'packages/solid/**/*.tsx'],
    // sonarjs is biased to react for jsx so we don't include it here
    ...solid,
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

  {
    name: 'solid-tests',
    files: ['solid-tests/**/*.ts', 'solid-tests/**/*.tsx'],
    // sonarjs is biased to react for jsx so we don't include it here
    ...solid,
    rules: {},
  },

  // this must be last
  eslintConfigPrettier,
)
