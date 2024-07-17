import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Label } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Label', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a visible label', () => {
    render(
      <Field required>
        <Label htmlFor="test">Test Label</Label>,
        <input id="test" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
    expect(
      screen.getByText(/test label/i).attributes.getNamedItem('for'),
    ).toBeTruthy()
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
      {
        wrapper: Field,
      },
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
  })

  test('should render an optional label', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>
        <input id="test" />
      </Field>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.queryByText(/(required)/i)).toBeNull()
  })

  test('should render a disabled label', () => {
    render(
      <Field disabled>
        <Label htmlFor="test">Test Label</Label>
        <input id="test" />
      </Field>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(
      screen.getByText(/test label/i).attributes.getNamedItem('data-disabled'),
    ).toBeTruthy()
  })
})
