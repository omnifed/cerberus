import { defineConfig } from 'tsup'
import { modernConfig, legacyConfig } from '@cerberus-design/configs'
import { devDependencies, peerDependencies } from './package.json'

const externals = [
  ...Object.keys(devDependencies),
  ...Object.keys(peerDependencies),
  'react',
  'react-dom',
  '@cerberus/styled-system/css',
  '@cerberus/styled-system/patterns',
  '@cerberus/styled-system/recipes',
]

export default defineConfig([
  modernConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'], externals }),
  legacyConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'], externals }),
])
