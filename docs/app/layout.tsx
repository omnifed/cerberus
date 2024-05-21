import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import type { PropsWithChildren } from 'react'
import { ThemeProvider } from '@cerberus-design/react'
import { css, cx } from '@cerberus-design/styled-system/css'
import { Nav } from './components/Nav'

import './globals.css'

const poppins = Poppins({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Cerberus Design System',
  description:
    'Guarding the brand integrity of the Digital University realm by creating a flexible and extensible design system.',
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
