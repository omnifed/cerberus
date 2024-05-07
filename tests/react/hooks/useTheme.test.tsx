import { describe, test, expect, afterEach } from 'bun:test'
import { render, screen, cleanup } from '@testing-library/react'
import { useTheme } from '@cerberus-design/react'
import { user } from '@/utils'

describe('useTheme', () => {
  function ThemeTest() {
    const state = useTheme()

    function toggleMode() {
      state.updateMode()
    }

    return (
      <div>
        <p>{state.theme}</p>
        <p>{state.mode}</p>
        <button onClick={toggleMode}>Toggle Mode</button>
      </div>
    )
  }

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
    await user.click(screen.getByText(/toggle mode/i))
    expect(screen.getByText('dark')).toBeTruthy()
  })
})
