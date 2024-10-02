'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'
import { useTheme, type UseThemeOptions } from '../hooks/useTheme'

export type DefaultThemes = 'cerberus' | 'acheron'
export type CustomThemes<K extends string = DefaultThemes> = 'cerberus' | K
export type ColorModes = 'light' | 'dark' | 'system'

export interface ThemeContextValue<T extends string = DefaultThemes> {
  theme: CustomThemes<T>
  mode: ColorModes
  updateTheme: (theme: T) => void
  updateMode: (mode: ColorModes) => void
}

const ThemeContext = createContext<ThemeContextValue<DefaultThemes> | null>(
  null,
)

export interface ThemeProviderProps extends UseThemeOptions {
  defaultTheme?: DefaultThemes
  defaultColorMode?: ColorModes
}

/**
 * A context provider that allows the user to set the theme and mode of the application.
 * @example
 * ```tsx
 * <ThemeProvider>
 *  <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider(
  props: PropsWithChildren<ThemeProviderProps>,
): JSX.Element {
  const state = useTheme(props.defaultTheme, props.defaultColorMode, {
    cache: props.cache,
    updateMode: props.updateMode,
    updateTheme: props.updateTheme,
  }) as ThemeContextValue<DefaultThemes>

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
