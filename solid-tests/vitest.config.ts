import solid from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'
// import { resolve } from 'node:path'

export default defineConfig({
  plugins: [solid(), tsconfigPaths()],

  resolve: {
    conditions: ['development', 'browser'],
    // preserveSymlinks: true,
    // alias: {
    //   'styled-system/css': resolve(
    //     __dirname,
    //     '../packages/solid/styled-system/css',
    //   ),
    //   'styled-system/recipes': resolve(
    //     __dirname,
    //     '../packages/solid/styled-system/recipes',
    //   ),
    // },
  },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['setup-test.ts'],
  },
})
