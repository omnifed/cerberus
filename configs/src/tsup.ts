import { esbuildPluginFilePathExtensions } from 'esbuild-plugin-file-path-extensions'
import type { Options } from 'tsup'

export function modernConfig(options: Options) {
  return {
    ...options,
    format: ['cjs', 'esm'],
    target: ['chrome91', 'firefox90', 'edge91', 'safari15', 'ios15', 'opera77'],
    outDir: 'build/modern',
    sourcemap: true,
    clean: true,
    esbuildPlugins: [esbuildPluginFilePathExtensions({ esmExtension: 'js' })],
  }
}

export function legacyConfig(options: Options) {
  return {
    ...options,
    format: ['cjs', 'esm'],
    target: ['es2020', 'node16'],
    outDir: 'build/legacy',
    sourcemap: true,
    clean: true,
    esbuildPlugins: [esbuildPluginFilePathExtensions({ esmExtension: 'js' })],
  }
}
