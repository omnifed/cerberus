import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Label } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Label', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a visible label', () => {
    render(
      <>
        <Label htmlFor="test">Test Label</Label>,
        <input id="test" />
      </>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
  })

  test('should render a hidden label', () => {
    render(
      <>
        <Label htmlFor="test" hidden>
          Test Label
        </Label>
        ,
        <input id="test" />
      </>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
  })
})
