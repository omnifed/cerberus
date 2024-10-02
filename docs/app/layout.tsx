import type { Metadata } from 'next'
import { Poppins, Recursive } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { Nav } from './components/Nav'

import './globals.css'
import { base, openGraph } from './shared-metadata'

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

export const metadata: Metadata = {
  title: 'Cerberus Design System',
  ...base,
  openGraph,
}

interface RootProps {}

export default function RootLayout(props: PropsWithChildren<RootProps>) {
  return (
    <html
      className={cx(poppins.variable, recursive.variable)}
      lang="en"
      data-panda-theme="cerberus"
      data-color-mode="light"
    >
      <Analytics />
      <body
        className={css({
          minW: '18.75rem',
          h: 'full',
        })}
      >
        <ThemeProvider>
          <Nav />
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}
