import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { Field, Textarea } from '@cerberus-design/react'

describe('Textarea', () => {
  test('should render a textarea', () => {
    render(
      <Field label="Test Label" required>
        <Textarea />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
    expect(screen.getByText(/(required)/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
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
    expect(screen.getByRole('textbox')).toBeInvalid()
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
    expect(screen.getByRole('textbox')).toBeDisabled()
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
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
