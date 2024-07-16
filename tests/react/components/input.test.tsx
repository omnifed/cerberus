import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Label, Input } from '@cerberus-design/react'
import { Calendar } from '@cerberus-design/icons'
import { setupStrictMode } from '@/utils'

describe('Input', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a input', () => {
    render(
      <Field required>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" />
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

  test('should render a input with error', () => {
    render(
      <Field required invalid>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a input with disabled', () => {
    render(
      <Field disabled>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a input with placeholder', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" placeholder="Test Placeholder" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should render a input with describedBy', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" describedBy="test-description" />
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

  test('should render a input with a sm size', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" size="sm" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-input__input--size_sm'),
    ).toBeTruthy()
  })

  test('should render a input with a md size', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" size="md" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-input__input--size_md'),
    ).toBeTruthy()
  })

  test('should render a input with a lg size', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" size="lg" />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-input__input--size_lg'),
    ).toBeTruthy()
  })

  test('should render a input with a startIcon', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" startIcon={<Calendar aria-label="calendar icon" />} />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })

  test('should render a input with a endIcon', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Input id="test" endIcon={<Calendar aria-label="calendar icon" />} />
      </Field>,
      {
        wrapper: Field,
      },
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })
})
