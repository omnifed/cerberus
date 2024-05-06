'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'
import { useTheme } from '../hooks/useTheme'

export type DefaultThemes = 'cerberus'
export type CustomThemes<K extends DefaultThemes> = 'cerberus' | K
export type ColorModes = 'light' | 'dark'

export interface ThemeContextValue<T extends DefaultThemes> {
  theme: CustomThemes<T>
  mode: ColorModes
  updateTheme: (theme: T) => void
  updateMode: () => void
}

export const THEME_KEY = 'cerberus-theme'
export const MODE_KEY = 'cerberus-mode'

const initialThemeState = {
  theme: 'cerberus' as const,
  mode: 'light' as const,
  updateTheme: () => {},
  updateMode: () => {},
}

const ThemeContext =
  createContext<ThemeContextValue<DefaultThemes>>(initialThemeState)

export function ThemeProvider(props: PropsWithChildren<Record<string, never>>) {
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
