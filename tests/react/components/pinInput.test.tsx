import { describe, test, expect, beforeEach, jest } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { PinInput } from '@cerberus-design/react'

describe('PinInput', () => {
  beforeEach(() => {
    // Don't clog the test output with unnecessary logs
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  test('should render the PinInput primitives', () => {
    render(
      <PinInput.Root>
        <PinInput.Control>
          {Array.from({ length: 3 }, (_, index) => (
            <PinInput.Input key={index} index={index} />
          ))}
        </PinInput.Control>
      </PinInput.Root>,
    )
    expect(screen.getAllByRole('textbox').length).toBe(3)
  })

  test('should render PinInput', () => {
    render(<PinInput />)
    expect(screen.getAllByRole('textbox').length).toBe(3)
  })

  test('should render a hidden input for form submission', () => {
    const { container } = render(<PinInput name="otp" count={4} />)
    expect(screen.getAllByRole('textbox').length).toBe(4)
    expect(
      container.querySelector('input[aria-hidden="true"][name="otp"]'),
    ).toBeTruthy()
  })

  test('should apply direct part overrides', () => {
    render(
      <PinInput>
        <PinInput.Label>Verification code</PinInput.Label>
        {/* The index of an Input override is ignored: it patches every input */}
        <PinInput.Input index={0} data-testid="pin" />
      </PinInput>,
    )
    expect(screen.getByText('Verification code')).toBeTruthy()
    expect(screen.getAllByTestId('pin').length).toBe(3)
  })
})
