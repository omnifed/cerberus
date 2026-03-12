import { defineConfig } from '@pandacss/dev'

export default defineConfig({
  preflight: true,
  include: ['../react/**/*.{ts,tsx}', './src/**/*.{ts,tsx}'],
})
