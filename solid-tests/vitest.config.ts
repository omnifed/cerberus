import solid from 'vite-plugin-solid'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [solid(), tsconfigPaths()],

  resolve: {
    conditions: ['development', 'browser'],
  },

  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['setup-test.ts'],
    deps: {
      inline: ['@ark-ui/solid'],
    },
  },
})
