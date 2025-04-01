import { describe, test, expect } from 'vitest'
import { render, screen } from '@solidjs/testing-library'
import { Avatar, AvatarRoot } from '@cerberus-design/solid'

describe('Avatar', () => {
  test('should render an image element', () => {
    render(() => (
      <Avatar
        alt="Protector Cerberus"
        src="https://cerberus.digitalu.design/logo.svg"
      />
    ))
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeInTheDocument()
  })

  test('should render a fallback icon if no src or label', () => {
    render(() => <Avatar fallback={<p>TB</p>} />)
    expect(screen.getByText(/tb/i)).toBeInTheDocument()
  })

  test('should allow a custom element', () => {
    render(() => (
      <AvatarRoot
        asChild={(props) => (
          <div data-testid="custom-element" {...props}>
            Custom Element
          </div>
        )}
      />
    ))
    expect(screen.getByTestId('custom-element')).toBeInTheDocument()
  })
})
