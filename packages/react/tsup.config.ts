import { defineConfig, type Options } from 'tsup'
import { modernConfig, legacyConfig } from '@cerberus-design/configs'
import { devDependencies, peerDependencies } from './package.json'

const external = [
  ...Object.keys(devDependencies),
  ...Object.keys(peerDependencies),
  'react',
  'react-dom',
  '@cerberus/styled-system/css',
  '@cerberus/styled-system/patterns',
  '@cerberus/styled-system/recipes',
]

export default defineConfig([
  modernConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'], external }),
  legacyConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'], external }),
] as Options[])
