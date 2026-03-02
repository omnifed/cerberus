export const DEMOS = {
  panda: `import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus/panda-preset'

export default createCerberusConfig({
  presets: [createCerberusPreset()],

  include: [
    './node_modules/@cerberus/react/**/*.{ts,tsx,js,jsx}', // track @cerberus/react components
    './app/**/*.{ts,tsx}'
  ],
  exclude: [],
})`,
  layout: `function RootLayout({ children }) {
    return (
      <html lang="en" data-panda-theme="cerberus" data-color-mode="light">
        <body>{children}</body>
      </html>
    )
  }`,
  config: `// tsconfig.json
  {
    "compilerOptions": {
      "baseUrl": ".",
      // ...your config options
    }
  }`,
  fonts: `import { Poppins, Recursive } from 'next/font/google'

  const poppins = Poppins({
    display: 'swap',
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-sans',
  })
  const recursive = Recursive({
    display: 'swap',
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-mono',
  })`,
  tips: `"scripts": {
    "up:cerberus": "pnpm up @cerberus/react@latest && pnpm dlx jsr add @cerberus/panda-preset && pnpm up @pandacss/dev@latest"
  }`,
}
