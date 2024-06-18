import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Label, Textarea } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Textarea', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a textarea', () => {
    render(
      <Field required>
        <Label htmlFor="test">Test Label</Label>,
        <Textarea id="test" />
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
      <Field required invalid>
        <Label htmlFor="test">Test Label</Label>,
        <Textarea id="test" />
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
      <Field disabled>
        <Label htmlFor="test">Test Label</Label>,
        <Textarea id="test" />
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
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Textarea id="test" placeholder="Test Placeholder" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should render a textarea with describedBy', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Textarea id="test" describedBy="test-description" />
        <span id="test-description">Test Description</span>
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('aria-describedby'),
    ).toBeTruthy()
  })
})
