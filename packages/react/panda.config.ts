import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['../../styled-system/**/*', './src/**/*.{ts,tsx}'],
})
