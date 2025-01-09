'use client'

// Error boundaries must be Client Components

import { Poppins, Recursive } from 'next/font/google'
import { vstack } from '@cerberus-design/styled-system/patterns'
import { css, cx } from '@cerberus-design/styled-system/css'
import { Button } from '@cerberus-design/react'
import BrokenBoneIcon from './components/icons/broken-bone-icon'
import { getCodeTheme } from './utils/colors'

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

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const defaultThemeName = 'cerberus'
  const defaultColorModeName = 'dark'

  // global-error must include html and body tags
  return (
    <html
      className={cx(poppins.variable, recursive.variable)}
      lang="en"
      data-panda-theme={defaultThemeName}
      data-color-mode={defaultColorModeName}
      data-code-theme={getCodeTheme(defaultColorModeName, defaultThemeName)}
    >
      <body>
        <div
          className={vstack({
            justify: 'center',
            h: '100dvh',
            pxi: '6',
            textAlign: 'center',
          })}
        >
          <span
            className={css({
              color: 'page.surface.100',
              maxW: '12rem',
              mb: 6,
              w: '1/3',
              lg: {
                mb: 10,
              },
            })}
          >
            <BrokenBoneIcon />
          </span>

          <h2
            className={css({
              textStyle: 'h1',
            })}
          >
            Cerb your enthusiasm!
          </h2>
          <p
            className={css({
              color: 'page.text.100',
              maxW: '66ch',
              pb: 8,
              textWrap: 'pretty',
            })}
          >
            Something went wrong. Cerberus has sounded the alarm and our demons
            are ready for action.
          </p>

          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </body>
    </html>
  )
}
