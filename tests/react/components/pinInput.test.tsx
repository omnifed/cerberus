import { describe, test, expect, beforeEach, jest } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { PinInputParts, PinInput } from '@cerberus-design/react'

describe('PinInput', () => {
  beforeEach(() => {
    // Don't clog the test output with unnecessary logs
    jest.spyOn(console, 'error').mockImplementation(() => {})
  })

  test('should render PinInputParts', () => {
    render(
      <PinInputParts.Root>
        <PinInputParts.Control>
          {Array.from({ length: 3 }, (_, index) => (
            <PinInputParts.Input key={index} index={index} />
          ))}
        </PinInputParts.Control>
        <PinInputParts.HiddenInput />
      </PinInputParts.Root>,
    )
    expect(screen.getAllByRole('textbox').length).toBe(3)
  })

  test('should render PinInput', () => {
    render(<PinInput />)
    expect(screen.getAllByRole('textbox').length).toBe(3)
  })
})
