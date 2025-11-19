import { setCookie } from '@/app/actions/cookies'
import { getCachedTheme } from '@/app/actions/theme'
import { getCodeTheme } from '@/app/utils/colors'
import { cx } from '@/styled-system/css'
import { getTheme } from '@/styled-system/themes'
import {
  cerberus,
  ThemeProvider,
  type ColorModes,
  type DefaultThemes,
} from '@cerberus-design/react'
import { Analytics } from '@vercel/analytics/react'
import { Poppins, Recursive } from 'next/font/google'
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
  const theme = defaultThemeName && (await getTheme(defaultThemeName))

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
      {defaultThemeName && (
        <head>
          <style
            type="text/css"
            id={theme.id}
            dangerouslySetInnerHTML={{ __html: theme.css }}
          />
        </head>
      )}

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

        <Analytics />
      </cerberus.body>
    </html>
  )
}
