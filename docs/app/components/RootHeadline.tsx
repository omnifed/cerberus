'use client'

import { css, cx } from '@cerberus-design/styled-system/css'
import { Show, useThemeContext } from '@cerberus-design/react'
import { Splash } from 'next/font/google'

const splash = Splash({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400'],
})

export default function RootHeadline() {
  const { mode } = useThemeContext()

  return (
    <h1
      className={css({
        lineHeight: '135%',
        textStyle: 'display-lg',
        textWrap: 'pretty',
      })}
    >
      <Show
        when={mode === 'dark'}
        fallback={<>The cutest protector of brand consistency in the realm.</>}
      >
        The{' '}
        <span
          className={cx(
            splash.className,
            css({
              color: 'danger.bg.initial',
              fontSize: '7rem',
            }),
          )}
        >
          most vicious
        </span>{' '}
        protector of brand consistency in the realm.
      </Show>
    </h1>
  )
}
