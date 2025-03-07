'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'
import { useTheme, type UseThemeOptions } from '../hooks/useTheme'

/**
 * This module provides a context and hook for the theme.
 * @module Theme
 */

export type DefaultThemes = 'cerberus' | 'acheron'
export type CustomThemes<K extends string = DefaultThemes> = 'cerberus' | K
export type ColorModes = 'light' | 'dark' | 'system'

export interface ThemeContextValue<T extends string = DefaultThemes> {
  /**
   * The current theme.
   */
  theme: CustomThemes<T>
  /**
   * The current color mode.
   */
  mode: ColorModes
  /**
   * Called when the theme is updated.
   */
  updateTheme: (theme: T) => void
  /**
   * Called when the color mode is updated.
   */
  updateMode: (mode: ColorModes) => void
}

const ThemeContext = createContext<ThemeContextValue<DefaultThemes> | null>(
  null,
)

export interface ThemeProviderProps extends UseThemeOptions {
  /**
   * The default theme.
   */
  defaultTheme?: DefaultThemes
  /**
   * The default color mode.
   */
  defaultColorMode?: ColorModes
}

/**
 * A context provider that allows the user to set the theme and mode of the
 * application.
 * @see https://cerberus.digitalu.design/react/use-theme-context
 * @example
 * ```tsx
 * <ThemeProvider>
 *  <App />
 * </ThemeProvider>
 * ```
 */
export function ThemeProvider(props: PropsWithChildren<ThemeProviderProps>) {
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

/**
 * Used to access the theme context.
 */
export function useThemeContext(): ThemeContextValue<DefaultThemes> {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
