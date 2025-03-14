import { solidPlugin } from 'esbuild-plugin-solid'
import { type Options, defineConfig } from 'tsup'
import { devDependencies, peerDependencies } from './package.json'

const external = [
  ...Object.keys(devDependencies),
  ...Object.keys(peerDependencies),
  'styled-system/css',
  'styled-system/jsx',
  'styled-system/patterns',
  'styled-system/recipes',
]

function generateConfig(jsx: boolean): Options {
  return {
    target: 'esnext',
    platform: 'browser',
    format: 'esm',
    clean: true,
    dts: !jsx,
    entry: ['src/index.ts', 'src/**/*/index.ts'],
    external,
    outDir: 'build/',
    treeshake: { preset: 'smallest' },
    replaceNodeEnv: true,
    esbuildOptions(options) {
      if (jsx) {
        options.jsx = 'preserve'
      }
      options.chunkNames = '[name]/[hash]'
      options.drop = ['console', 'debugger']
    },
    outExtension() {
      return jsx ? { js: '.jsx' } : {}
    },
    esbuildPlugins: !jsx ? [solidPlugin({ solid: { generate: 'dom' } })] : [],
  }
}

export default defineConfig([generateConfig(false), generateConfig(true)])
