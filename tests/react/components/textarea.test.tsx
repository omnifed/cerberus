import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Textarea } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Textarea', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a textarea', () => {
    render(
      <Field label="Test Label" required>
        <Textarea />
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
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should render a textarea with error', () => {
    render(
      <Field label="Test Label" required invalid>
        <Textarea />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a textarea with disabled', () => {
    render(
      <Field label="Test Label" disabled>
        <Textarea />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a textarea with placeholder', () => {
    render(
      <Field label="Test Label">
        <Textarea placeholder="Test Placeholder" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
