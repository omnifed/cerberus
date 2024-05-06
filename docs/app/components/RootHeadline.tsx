'use client'

import { css } from '@/styled-system/css'
import { useTheme } from '../hooks/useTheme'
import { useThemeContext } from '../context/theme'

const rootHeadlineText = {
  light: 'The cutest protector of brand consistency of the realm.',
  dark: 'The most vicious protector of brand consistency of the realm.',
}

export default function RootHeadline() {
  const { mode } = useThemeContext()

  return (
    <h1
      className={css({
        lineHeight: '135%',
        textStyle: 'display-lg',
      })}
    >
      {rootHeadlineText[mode]}
    </h1>
  )
}
