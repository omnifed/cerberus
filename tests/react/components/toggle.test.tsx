import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { ToggleParts } from '@cerberus-design/react'
import { setupStrictMode, user } from '@/utils'

describe('Toggle', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render', () => {
    render(
      <ToggleParts.Root>
        <ToggleParts.Indicator fallback={<>Off</>}>On</ToggleParts.Indicator>
      </ToggleParts.Root>,
    )
    expect(screen.getByText(/off/i)).toBeTruthy()
  })

  test('should render checked', async () => {
    render(
      <ToggleParts.Root defaultChecked>
        <ToggleParts.Indicator fallback={<>Off</>}>On</ToggleParts.Indicator>
      </ToggleParts.Root>,
    )
    expect(screen.getByText(/off/i)).toBeTruthy()
    await user.click(screen.getByText(/off/i))
    expect(screen.getByText(/on/i)).toBeTruthy()
  })
})
