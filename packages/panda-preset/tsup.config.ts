import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@cerberus/configs'

export default defineConfig([
  modernConfig({ entry: ['src/**/*.ts'] }),
  legacyConfig({ entry: ['src/**/*.ts'] }),
])
