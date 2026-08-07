import { setCookie } from '@/app/actions/cookies'
import { getCachedTheme } from '@/app/actions/theme'
import { getCodeTheme } from '@/app/utils/colors'
import { cx } from '@/styled-system/css'
import {
  cerberus,
  ThemeProvider,
  type ColorModes,
  type DefaultThemes,
} from '@cerberus-design/react'
import { Analytics } from '@vercel/analytics/react'
import { Poppins, Recursive } from 'next/font/google'
import Script from 'next/script'
import type { PropsWithChildren } from 'react'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})
const recursive = Recursive({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-recursive',
})

export async function CachedHTML(props: PropsWithChildren<object>) {
  const { themeName, colorModeName } = await getCachedTheme()
  const defaultThemeName = themeName || 'cerberus'
  const defaultColorModeName = colorModeName || 'light'

  const handleUpdateTheme = async (theme: DefaultThemes) => {
    'use server'
    await setCookie('theme', theme)
  }

  const handleUpdateMode = async (mode: ColorModes) => {
    'use server'
    await setCookie('colorMode', mode)
  }

  return (
    <html
      className={cx(poppins.variable, recursive.variable)}
      lang="en"
      data-panda-theme={defaultThemeName}
      data-color-mode={defaultColorModeName}
      data-theme={getCodeTheme(defaultColorModeName, defaultThemeName)}
    >
      <head>
        <link
          rel="preconnect"
          href="https://GH67DG1KS2-dsn.algolia.net"
          crossOrigin="anonymous"
        />
      </head>

      <cerberus.body
        css={{
          minW: '18.75rem',
          h: 'full',
        }}
      >
        <ThemeProvider
          defaultTheme={defaultThemeName}
          defaultColorMode={defaultColorModeName}
          updateTheme={handleUpdateTheme}
          updateMode={handleUpdateMode}
        >
          {props.children}
        </ThemeProvider>

        <Script
          src="https://context7.com/widget.js"
          data-library="/omnifed/cerberus"
          strategy="afterInteractive"
        />
        <Analytics />
      </cerberus.body>
    </html>
  )
}
