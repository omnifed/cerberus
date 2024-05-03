import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react'

// TODO: Add this to react package

export type DefaultThemes = 'cerberus'
export type CustomThemes<K extends DefaultThemes> = 'cerberus' | K
export type ColorModes = 'light' | 'dark'

export const THEME_KEY = 'cerberus-theme'
export const MODE_KEY = 'cerberus-mode'

export function useTheme<C extends DefaultThemes>(
  defaultTheme: CustomThemes<C> = 'cerberus',
  defaultColorMode: ColorModes = 'light',
) {
  const [theme, setTheme] = useState<CustomThemes<C>>(defaultTheme)
  const [colorMode, setColorMode] = useState<ColorModes>(defaultColorMode)

  const handleThemeChange = useCallback((newTheme: CustomThemes<C>) => {
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }, [])

  const handleColorModeChange = useCallback(() => {
    setColorMode((prev) => {
      const newMode = prev === 'light' ? 'dark' : 'light'
      localStorage.setItem(MODE_KEY, newMode)
      return newMode
    })
  }, [])

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
    const root = document.documentElement
    root.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const root = document.documentElement
    root.dataset.colorMode = colorMode
  }, [colorMode])

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
