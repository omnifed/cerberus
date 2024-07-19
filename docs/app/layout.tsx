import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@cerberus-design/react'
import { css, cx } from '@cerberus/styled-system/css'
import { Nav } from './components/Nav'

import './globals.css'
import { description, openGraph } from './shared-metadata'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Cerberus Design System',
  description,
  openGraph,
}

interface RootProps {}

export default function RootLayout(props: PropsWithChildren<RootProps>) {
  return (
    <html lang="en" data-theme="cerberus" data-color-mode="light">
      <body
        className={cx(
          poppins.className,
          css({
            minW: '18.75rem',
          }),
        )}
      >
        <ThemeProvider>
          <Nav />
          {props.children}
        </ThemeProvider>
      </body>
    </html>
  )
}
