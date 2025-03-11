import { defineConfig, type Options } from 'tsup'
import { modernConfig, legacyConfig } from '@cerberus-design/configs'
import { devDependencies, peerDependencies } from './package.json'

const external = [
  ...Object.keys(devDependencies),
  ...Object.keys(peerDependencies),
  'react',
  'react-dom',
  'styled-system/css',
  'styled-system/jsx',
  'styled-system/patterns',
  'styled-system/recipes',
]

export default defineConfig([
  modernConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'], external }),
  legacyConfig({ entry: ['src/**/*.ts', 'src/**/*.tsx'], external }),
] as Options[])
