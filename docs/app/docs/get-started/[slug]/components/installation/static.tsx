export const DEMOS = {
  panda: `import {
  createCerberusConfig,
  createCerberusPreset,
} from '@cerberus/panda-preset'

export default createCerberusConfig({
  presets: [createCerberusPreset()],

  include: [
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
  "up:cerby:npm-deps": "pnpm install @cerberus/react@npm:@cerberus-design/react@latest",
  "up:cerby:jsr-deps": "pnpm add jsr:@cerberus/panda-preset && pnpm add jsr:@cerberus/preset-acheron-theme",
  "up:cerberus": "pnpm run up:cerby:npm-deps && pnpm run up:cerby:jsr-deps && pnpm up @pandacss/dev@latest"
}`,
  reactPanda: `import { createCerberusConfig, createCerberusPreset } from "@cerberus/panda-preset";

  export default createCerberusConfig({
    // ...your previous settings

    include: [
      "./node_modules/@cerberus/react/dist/panda.buildinfo.json",
      "./app/**/*.{ts,tsx,js,jsx}",
    ],
  });`,
  multiTheme: `import { createCerberusConfig, createCerberusPreset } from "@cerberus/panda-preset";
  import { presetAcheronTheme, getThemeName } from "@cerberus/preset-acheron-theme";

  export default createCerberusConfig({
    clean: true,
    preflight: true,

    presets: [createCerberusPreset(), presetAcheronTheme],

    include: [
      "./node_modules/@cerberus/react/dist/panda.buildinfo.json",
      "./app/**/*.{ts,tsx,js,jsx}",
    ],

    staticCss: {
      themes: ["cerberus", getThemeName()],
    },
  });`,
}
