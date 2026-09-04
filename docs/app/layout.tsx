import { AppThemeProvider } from '@/components/app-theme-provider'
import CerberusConfig from '@/components/cerberus-config'
import { GlobalNav } from '@/components/global-nav'
import { getCodeTheme } from '@/lib/deprecated-colors'
import seoConfig from '@/seo.config'
import { cx } from '@/styled-system/css'
import { cerberus, NotificationCenter } from '@cerberus-design/react'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Poppins, Recursive } from 'next/font/google'
import Script from 'next/script'
import { Suspense, type PropsWithChildren } from 'react'
import './globals.css'

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

// Blocks the browser paint until the cookies are parsed and applied to the HTML tag
// Required to keep our site SSG
const themeScript = `
  try {
    var cookie = document.cookie;
    var theme = cookie.match(/(?:^|; )theme=([^;]*)/)?.[1] || 'cerberus';
    var mode = cookie.match(/(?:^|; )colorMode=([^;]*)/)?.[1] || 'light';
    document.documentElement.setAttribute('data-panda-theme', theme);
    document.documentElement.setAttribute('data-color-mode', mode);
  } catch (e) {}
`

export const metadata: Metadata = seoConfig

// Component

interface RootProps {}

export default async function RootLayout(props: PropsWithChildren<RootProps>) {
  // const { themeName, colorModeName } = await getCachedTheme()
  const defaultThemeName = 'cerberus'
  const defaultColorModeName = 'light'

  return (
    <html
      className={cx(poppins.variable, recursive.variable)}
      lang="en"
      data-panda-theme={defaultThemeName}
      data-color-mode={defaultColorModeName}
      data-theme={getCodeTheme(defaultColorModeName, defaultThemeName)}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <cerberus.body
        css={{
          minW: '18.75rem',
          h: 'full',
        }}
      >
        <AppThemeProvider
          cachedTheme={defaultThemeName}
          cachedMode={defaultColorModeName}
        >
          <CerberusConfig>
            <GlobalNav />

            <cerberus.main role="main" css={{ h: 'full', w: 'full' }}>
              <Suspense>{props.children}</Suspense>
            </cerberus.main>

            <NotificationCenter />
          </CerberusConfig>
        </AppThemeProvider>

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
