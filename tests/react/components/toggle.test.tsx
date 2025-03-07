import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { ToggleParts } from '@cerberus-design/react'
import { user } from '@/utils'

describe('Toggle', () => {
  test('should render', () => {
    render(
      <ToggleParts.Root>
        <ToggleParts.Indicator fallback={<>Off</>}>On</ToggleParts.Indicator>
      </ToggleParts.Root>,
    )
    expect(screen.getByText(/off/i)).toBeInTheDocument()
  })

  test('should render checked', async () => {
    render(
      <ToggleParts.Root defaultChecked>
        <ToggleParts.Indicator fallback={<>Off</>}>On</ToggleParts.Indicator>
      </ToggleParts.Root>,
    )
    expect(screen.getByText(/off/i)).toBeInTheDocument()
    await user.click(screen.getByText(/off/i))
    expect(screen.getByText(/on/i)).toBeInTheDocument()
  })
})
