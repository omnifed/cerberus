import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Toggle } from '@cerberus-design/react'
import { user } from '@/utils'

describe('Toggle', () => {
  test('should render', () => {
    render(
      <Toggle.Root>
        <Toggle.Indicator fallback={<>Off</>}>On</Toggle.Indicator>
      </Toggle.Root>,
    )
    expect(screen.getByText(/off/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute('data-scope', 'toggle')
  })

  test('should render as the Root when used as <Toggle>', () => {
    render(
      <Toggle>
        <Toggle.Indicator fallback={<>Off</>}>On</Toggle.Indicator>
      </Toggle>,
    )
    expect(screen.getByRole('button')).toHaveAttribute('data-part', 'root')
  })

  // Regression: a second asChild layer around Ark's Root skipped the provider, so the
  // Indicator threw "useToggleContext returned undefined" (the docs demo crashed)
  test('should provide its context when rendered asChild', async () => {
    render(
      <Toggle.Root asChild>
        <button type="button">
          <Toggle.Indicator fallback={<span>Off</span>}>On</Toggle.Indicator>
        </button>
      </Toggle.Root>,
    )
    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('data-scope', 'toggle')
    expect(screen.getByText('Off')).toBeInTheDocument()
    await user.click(button)
    expect(screen.getByText('On')).toBeInTheDocument()
  })

  test('should toggle pressed on click', async () => {
    render(
      <Toggle.Root>
        <Toggle.Indicator fallback={<>Off</>}>On</Toggle.Indicator>
      </Toggle.Root>,
    )
    expect(screen.getByText(/off/i)).toBeInTheDocument()
    await user.click(screen.getByText(/off/i))
    expect(screen.getByText(/on/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveAttribute('data-pressed')
  })

  test('should render pressed by default', () => {
    render(
      <Toggle.Root defaultPressed>
        <Toggle.Indicator fallback={<>Off</>}>On</Toggle.Indicator>
      </Toggle.Root>,
    )
    expect(screen.getByText(/on/i)).toBeInTheDocument()
  })

  test('should expose the state through Toggle.Context', async () => {
    render(
      <Toggle.Root>
        <Toggle.Context>
          {(toggle) => <>{toggle.pressed ? 'Pressed' : 'Released'}</>}
        </Toggle.Context>
      </Toggle.Root>,
    )
    expect(screen.getByText(/released/i)).toBeInTheDocument()
    await user.click(screen.getByRole('button'))
    expect(screen.getByText(/pressed/i)).toBeInTheDocument()
  })
})
