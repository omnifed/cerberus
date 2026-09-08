'use client'

import { setCookie } from '@/app/actions/cookies'
import { ThemeName } from '@/styled-system/themes'
import {
  ThemeProvider,
  type ColorModes,
  type DefaultThemes,
} from '@cerberus-design/react'
import { useSignal } from '@cerberus-design/signals'
import type { PropsWithChildren } from 'react'

// Intentionally not using Next cookies which is for Dynamic routing
function getClientCookie(name: string, fallback: string) {
  if (typeof document === 'undefined') return fallback
  const match = document.cookie.match(new RegExp('(^|; )' + name + '=([^;]*)'))
  return match ? match[2] : fallback
}

type Props = {
  cachedTheme: ThemeName
  cachedMode: ColorModes | undefined
}

export function AppThemeProvider(props: PropsWithChildren<Props>) {
  const [theme, setTheme] = useSignal<DefaultThemes>(
    getClientCookie('theme', props.cachedTheme) as DefaultThemes,
  )
  const [mode, setMode] = useSignal<ColorModes>(
    getClientCookie('colorMode', props.cachedMode || 'light') as ColorModes,
  )

  const handleUpdateTheme = async (theme: DefaultThemes) => {
    setTheme(theme)
    document.cookie = `theme=${theme}; path=/; max-age=31536000`
    await setCookie('theme', theme)
  }

  const handleUpdateMode = async (mode: ColorModes) => {
    setMode(mode)
    document.cookie = `colorMode=${mode}; path=/; max-age=31536000`
    await setCookie('colorMode', mode)
  }

  return (
    <ThemeProvider
      defaultTheme={theme}
      defaultColorMode={mode}
      updateTheme={handleUpdateTheme}
      updateMode={handleUpdateMode}
    >
      {props.children}
    </ThemeProvider>
  )
}
