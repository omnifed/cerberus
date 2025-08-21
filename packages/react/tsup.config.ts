import { defineConfig, type Options } from 'tsup'
import { modernConfig, legacyConfig } from '@cerberus-design/configs'
import { devDependencies, peerDependencies } from './package.json'

const entry = ['src/**/*.ts', 'src/**/*.tsx']

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

const sharedConfig = {
  entry,
  external,
}

export default defineConfig([
  modernConfig(sharedConfig),
  legacyConfig(sharedConfig),
] as Options[])
