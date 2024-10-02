'use client'

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'
import {
  type ColorModes,
  type CustomThemes,
  type DefaultThemes,
  type ThemeContextValue,
} from '../context/theme'

export const THEME_KEY = 'cerberus-theme'
export const MODE_KEY = 'cerberus-mode'

export interface UseThemeOptions<T extends string = DefaultThemes> {
  cache?: boolean
  updateTheme?: (theme: T) => void
  updateMode?: (mode: ColorModes) => void
}

export function useTheme<C extends string = DefaultThemes>(
  defaultTheme: CustomThemes<C> = 'cerberus',
  defaultColorMode: ColorModes = 'light',
  options: UseThemeOptions<C> = {},
): ThemeContextValue<C> {
  const { updateMode, updateTheme, cache } = options
  const [theme, setTheme] = useState<CustomThemes<C>>(defaultTheme)
  const [colorMode, setColorMode] = useState<ColorModes>(defaultColorMode)

  const handleThemeChange = useCallback(
    (newTheme: C) => {
      setTheme(newTheme)
      updateTheme?.(newTheme)
    },
    [updateTheme],
  )

  const handleColorModeChange = useCallback(
    (newMode: ColorModes) => {
      setColorMode(newMode)
      updateMode?.(newMode)
    },
    [updateMode],
  )

  useLayoutEffect(() => {
    const theme = localStorage.getItem(THEME_KEY)
    if (theme) {
      setTheme(theme as CustomThemes<C>)
    }
  }, [])

  useLayoutEffect(() => {
    const mode = localStorage.getItem(MODE_KEY)
    if (mode) {
      setColorMode(mode as ColorModes)
    }
  }, [])

  useEffect(() => {
    if (cache) {
      const root = document.documentElement
      root.dataset.pandaTheme = theme
      localStorage.setItem(THEME_KEY, theme)
    }
  }, [theme, cache])

  useEffect(() => {
    if (cache) {
      const root = document.documentElement
      root.dataset.colorMode = colorMode
      localStorage.setItem(MODE_KEY, colorMode)
    }
  }, [colorMode, cache])

  return useMemo(
    () => ({
      theme,
      mode: colorMode,
      updateTheme: handleThemeChange,
      updateMode: handleColorModeChange,
    }),
    [theme, colorMode, handleThemeChange, handleColorModeChange],
  )
}
