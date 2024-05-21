import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@cerberus-design/configs'

export default defineConfig([
  modernConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'] }),
  legacyConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'] }),
])
