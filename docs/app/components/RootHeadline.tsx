'use client'

import { css } from '@/styled-system/css'
import { useThemeContext } from '@cerberus-design/react'

const rootHeadlineText = {
  light: 'The cutest protector of brand consistency in the realm.',
  dark: 'The most vicious protector of brand consistency in the realm.',
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
