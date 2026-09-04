import { setCookie } from '@/app/actions/cookies'
import { ThemeName } from '@/styled-system/themes'
import {
  ThemeProvider,
  type ColorModes,
  type DefaultThemes,
} from '@cerberus-design/react'
import type { PropsWithChildren } from 'react'

type Props = {
  cachedTheme: ThemeName
  cachedMode: ColorModes | undefined
}

export function AppThemeProvider(props: PropsWithChildren<Props>) {
  const handleUpdateTheme = async (theme: DefaultThemes) => {
    'use server'
    await setCookie('theme', theme)
  }

  const handleUpdateMode = async (mode: ColorModes) => {
    'use server'
    await setCookie('colorMode', mode)
  }

  return (
    <ThemeProvider
      defaultTheme={props.cachedTheme}
      defaultColorMode={props.cachedMode}
      updateTheme={handleUpdateTheme}
      updateMode={handleUpdateMode}
    >
      {props.children}
    </ThemeProvider>
  )
}
