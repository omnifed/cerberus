// Bun build configuration
// This mirrors the tsup configuration but for Bun's bundler

export const config = {
  // Entry patterns (same as tsup config)
  entryPatterns: ['src/**/*.ts', 'src/**/*.tsx'],

  // Files to ignore when collecting entry points
  ignorePatterns: ['src/**/*.test.ts', 'src/**/*.test.tsx'],

  // External dependencies that should not be bundled
  external: [
    'react',
    'react-dom',
    'styled-system/css',
    'styled-system/jsx',
    'styled-system/patterns',
    'styled-system/recipes',
  ],

  // Modern build configuration (ESM)
  modern: {
    outdir: './build/modern',
    target: 'browser', // chrome91,firefox90,edge91,safari15,ios15,opera77
    format: 'esm',
    splitting: false,
    sourcemap: 'external',
    minify: false,
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    naming: {
      entry: '[dir]/[name].js',
      chunk: 'chunk-[hash].js',
    },
  },

  // Legacy build configuration (CJS)
  legacy: {
    outdir: './build/legacy',
    target: 'node', // es2020,node16
    format: 'cjs',
    splitting: false,
    sourcemap: 'external',
    minify: false,
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    naming: {
      entry: '[dir]/[name].cjs',
      chunk: '[name]-[hash].cjs',
    },
  },

  // TypeScript declaration generation
  typescript: {
    modernOutDir: './build/modern',
    legacyOutDir: './build/legacy',
    project: './tsconfig.bun-es.json',
  },
}

export default config
