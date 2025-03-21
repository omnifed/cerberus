import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from '@solidjs/start/config'
import tsconfigPaths from 'vite-tsconfig-paths'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  vite: {
    plugins: [tsconfigPaths()],

    resolve: {
      alias: {
        // Vite doesn't include dependency paths
        'styled-system': resolve(__dirname, './styled-system'),
      },
    },
  },
})
