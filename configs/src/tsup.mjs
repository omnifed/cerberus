export function modernConfig(options) {
  return {
    ...options,
    format: ['esm'],
    target: ['chrome91', 'firefox90', 'edge91', 'safari15', 'ios15', 'opera77'],
    outDir: 'build/modern',
    sourcemap: true,
    clean: true,
  }
}

export function legacyConfig(options) {
  return {
    ...options,
    format: ['cjs'],
    target: ['es2020', 'node16'],
    outDir: 'build/legacy',
    sourcemap: true,
    clean: true,
  }
}
