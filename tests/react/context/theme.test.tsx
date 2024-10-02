import { describe, test, expect, afterEach, beforeEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import {
  useThemeContext,
  ThemeProvider,
  THEME_KEY,
  MODE_KEY,
  type ColorModes,
  type CustomThemes,
} from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'
import { type MouseEvent } from 'react'

describe('useThemeContext', () => {
  setupStrictMode()

  function ThemeTest() {
    const state = useThemeContext()

    function toggleMode(e: MouseEvent<HTMLButtonElement>) {
      const mode = e.currentTarget.value as ColorModes
      state.updateMode(mode === 'light' ? 'dark' : 'light')
    }

    function updateTheme() {
      state.updateTheme('du-ui' as 'cerberus')
    }

    return (
      <div>
        <p>{state.theme}</p>
        <p>{state.mode}</p>
        <button onClick={toggleMode} value={state.mode}>
          Toggle Mode
        </button>
        <button onClick={updateTheme}>Update Theme</button>
      </div>
    )
  }

  beforeEach(() => {
    localStorage.clear()
  })

  afterEach(cleanup)

  test('should export a THEME_KEY', () => {
    expect(THEME_KEY).toBe('cerberus-theme')
  })

  test('should export a MODE_KEY', () => {
    expect(MODE_KEY).toBe('cerberus-mode')
  })

  test('should export a theme', () => {
    render(<ThemeTest />, { wrapper: ThemeProvider })
    expect(screen.getByText('cerberus')).toBeTruthy()
  })

  test('should export a mode', () => {
    render(<ThemeTest />, { wrapper: ThemeProvider })
    expect(screen.getByText('light')).toBeTruthy()
  })

  test('should toggle mode', async () => {
    render(
      <ThemeProvider cache defaultColorMode="light">
        <ThemeTest />
      </ThemeProvider>,
    )
    await user.click(screen.getByText(/toggle mode/i))
    expect(screen.getByText('dark')).toBeTruthy()
    expect(localStorage.getItem(MODE_KEY)).toBe('dark')
  })

  test('should update the theme', async () => {
    render(
      <ThemeProvider cache>
        <ThemeTest />
      </ThemeProvider>,
    )
    await user.click(screen.getByText(/update theme/i))
    expect(screen.getByText('du-ui')).toBeTruthy()
    expect(localStorage.getItem(THEME_KEY)).toBe('du-ui')
  })

  test('should set the theme from local storage', () => {
    const theme = 'du-ui' as CustomThemes
    localStorage.setItem(THEME_KEY, theme)
    render(
      <ThemeProvider defaultTheme={theme} cache>
        <ThemeTest />
      </ThemeProvider>,
    )
    expect(screen.getByText(theme)).toBeTruthy()
  })

  test('should set the mode from local storage', () => {
    localStorage.setItem(MODE_KEY, 'dark')
    render(
      <ThemeProvider defaultColorMode="dark" cache>
        <ThemeTest />
      </ThemeProvider>,
    )
    expect(screen.getByText('dark')).toBeTruthy()
  })

  test('should throw an error if used outside of ThemeProvider', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useThemeContext())).toThrow(
      'useThemeContext must be used within a ThemeProvider',
    )
  })
})
