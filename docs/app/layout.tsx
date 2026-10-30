import { AppThemeProvider } from '@/components/app-theme-provider'
import CerberusConfig from '@/components/cerberus-config'
import { GlobalNav } from '@/components/global-nav'
import seoConfig from '@/seo.config'
import { cx } from '@/styled-system/css'
import { cerberus } from '@/styled-system/jsx'
import { NotificationCenter } from '@cerberus-design/react'
import { Analytics } from '@vercel/analytics/react'
import { Metadata } from 'next'
import { Poppins, Recursive } from 'next/font/google'
import Script from 'next/script'
import { Suspense, type PropsWithChildren } from 'react'
import './globals.css'

const poppins = Poppins({
  display: 'swap',
  preload: true,
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-body',
})
const recursive = Recursive({
  axes: ['CASL', 'MONO', 'CRSV', 'slnt'],
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-mono',
})

// Blocks the browser paint until the cookies are parsed and applied to the HTML tag
// Required to keep our site SSG
const themeScript = `
  try {
    var modeClasses = ['light', 'dark', 'system']
    var cookie = document.cookie;
    var theme = cookie.match(/(?:^|; )theme=([^;]*)/)?.[1] || 'cerberus';
    var mode = cookie.match(/(?:^|; )colorMode=([^;]*)/)?.[1] || 'light';
    var html = document.documentElement;
    html.setAttribute('data-panda-theme', theme);
    html.classList.remove(...modeClasses)
    html.classList.add(mode)
  } catch (e) {}
`

export const metadata: Metadata = seoConfig

// Component

interface RootProps {}

export default async function RootLayout(props: PropsWithChildren<RootProps>) {
  const defaultTheme = 'cerberus'
  const defaultColorMode = 'light'

  return (
    <html
      lang="en"
      className={cx(poppins.variable, recursive.variable, defaultColorMode)}
      data-panda-theme={defaultTheme}
      suppressHydrationWarning
    >
      <head>
        <Script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>

      <AppThemeProvider cachedTheme={defaultTheme} cachedMode={defaultColorMode}>
        <cerberus.body minW="48rem" h="full" suppressHydrationWarning>
          <CerberusConfig>
            <GlobalNav />

            <cerberus.main role="main" css={{ h: 'full', w: 'full' }}>
              <Suspense>{props.children}</Suspense>
            </cerberus.main>

            <NotificationCenter />
          </CerberusConfig>

          <Script
            src="https://context7.com/widget.js"
            data-library="/omnifed/cerberus"
            strategy="afterInteractive"
          />
          <Analytics />
        </cerberus.body>
      </AppThemeProvider>
    </html>
  )
}
