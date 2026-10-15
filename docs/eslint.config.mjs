import { defineConfig, globalIgnores } from 'eslint/config'
import nextVitals from 'eslint-config-next/core-web-vitals'
import panda from '@pandacss/eslint-plugin'

const eslintConfig = defineConfig([
  ...nextVitals,
  await panda.configs.recommended({ configPath: './panda.config.ts' }),

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'styled-system/**',
  ]),
])

export default eslintConfig
