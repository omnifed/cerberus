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

  test('should render Field.Textarea inside a Field', () => {
    const { container } = render(
      <Field label="Test Label">
        <Textarea />
      </Field>,
    )
    expect(screen.getByLabelText(/test label/i)).toHaveClass(
      'cerberus-field__textarea',
    )
    // No extra Field.Root inside a Field
    expect(
      container.querySelectorAll('[data-scope="field"][data-part="root"]'),
    ).toHaveLength(1)
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

  test('should render standalone, outside a Field, in its own Field.Root', () => {
    render(<Textarea aria-label="Notes" />)
    const textarea = screen.getByRole('textbox', { name: 'Notes' })
    expect(textarea).toHaveAttribute('data-part', 'textarea')
    expect(
      textarea.closest('[data-scope="field"][data-part="root"]'),
    ).not.toBeNull()
  })
})
