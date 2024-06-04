import { describe, test, expect, afterEach, spyOn } from 'bun:test'
import { render, screen, cleanup, renderHook } from '@testing-library/react'
import { Field, useFieldContext } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Field & useFieldContext', () => {
  setupStrictMode()
  afterEach(cleanup)

  function TestInput() {
    return (
      <label htmlFor="test">
        Name
        <input aria-describedby="help:test" name="test" />
        <small id="help:test">Enter your name</small>
      </label>
    )
  }

  test('should export a NavMenu', () => {
    render(<TestInput />, {
      wrapper: Field,
    })
    expect(screen.getByText(/enter your name/i)).toBeTruthy()
    expect(screen.getByLabelText(/name/i)).toBeTruthy()
  })

  test('should throw an error if used outside of NavMenu', () => {
    // don't clog up the console with errors
    spyOn(console, 'error').mockImplementation(() => null)
    expect(() => renderHook(() => useFieldContext())).toThrow(
      'useFieldContext must be used within a Field Provider',
    )
  })
})
