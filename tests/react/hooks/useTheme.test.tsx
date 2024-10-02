import { describe, test, expect, afterEach, beforeEach } from 'bun:test'
import { render, screen, cleanup } from '@testing-library/react'
import { useTheme, type ColorModes } from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'
import type { MouseEvent } from 'react'

type TestThemes = 'du-ui'

describe('useTheme', () => {
  setupStrictMode()

  function ThemeTest() {
    const state = useTheme<TestThemes>('cerberus', 'light', {
      cache: true,
    })

    function toggleMode(e: MouseEvent<HTMLButtonElement>) {
      const mode = e.currentTarget.value as ColorModes
      state.updateMode(mode === 'light' ? 'dark' : 'light')
    }

    function updateTheme() {
      state.updateTheme('du-ui')
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

  test('should export a theme', () => {
    render(<ThemeTest />)
    expect(screen.getByText('cerberus')).toBeTruthy()
  })

  test('should export a mode', () => {
    render(<ThemeTest />)
    expect(screen.getByText('light')).toBeTruthy()
  })

  test('should toggle mode', async () => {
    render(<ThemeTest />)
    expect(screen.getByText('light')).toBeTruthy()
    await user.click(screen.getByText(/toggle mode/i))
    expect(screen.getByText('dark')).toBeTruthy()
    expect(localStorage.getItem('cerberus-mode')).toBe('dark')
  })

  test('should update the theme', async () => {
    render(<ThemeTest />)
    await user.click(screen.getByText(/update theme/i))
    expect(screen.getByText('du-ui')).toBeTruthy()
    expect(localStorage.getItem('cerberus-theme')).toBe('du-ui')
  })

  test('should set the theme from local storage if cache is true', async () => {
    localStorage.setItem('cerberus-theme', 'cerberus')
    render(<ThemeTest />)
    await user.click(screen.getByText(/update theme/i))
    expect(screen.getByText('du-ui')).toBeTruthy()
  })

  test('should set the mode from local storage if cache is true', () => {
    localStorage.setItem('cerberus-mode', 'light')
    render(<ThemeTest />)
    expect(screen.getByText('light')).toBeTruthy()
  })
})
