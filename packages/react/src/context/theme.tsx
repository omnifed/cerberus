'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'
import { useTheme } from '../hooks/useTheme'

export type DefaultThemes = 'cerberus' | 'acheron'
export type CustomThemes<K extends string = DefaultThemes> = 'cerberus' | K
export type ColorModes = 'light' | 'dark'

export interface ThemeContextValue<T extends string = DefaultThemes> {
  theme: CustomThemes<T>
  mode: ColorModes
  updateTheme: (theme: T) => void
  updateMode: () => void
}

export const THEME_KEY = 'cerberus-theme'
export const MODE_KEY = 'cerberus-mode'

const ThemeContext = createContext<ThemeContextValue<DefaultThemes> | null>(
  null,
)

/**
 * A context provider that allows the user to set the theme and mode of the application.
 * @example
 * ```tsx
 * <ThemeProvider>
 *  <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider(props: PropsWithChildren<unknown>): JSX.Element {
  const state = useTheme()
  return (
    <ThemeContext.Provider value={state}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext(): ThemeContextValue<DefaultThemes> {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
