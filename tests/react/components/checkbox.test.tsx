import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Label, Checkbox } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Checkbox', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a checkbox', () => {
    render(
      <Field required>
        <Label htmlFor="test">Test Label</Label>,
        <Checkbox id="test" />
      </Field>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
    expect(
      screen.getByText(/test label/i).attributes.getNamedItem('for'),
    ).toBeTruthy()
    expect(screen.getByRole('checkbox')).toBeTruthy()
  })

  test('should render a checkbox with error', () => {
    render(
      <Field required invalid>
        <Label htmlFor="test">Test Label</Label>,
        <Checkbox id="test" />
      </Field>,
    )
    expect(
      screen.getByRole('checkbox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a checkbox with disabled', () => {
    render(
      <Field disabled>
        <Label htmlFor="test">Test Label</Label>,
        <Checkbox id="test" />
      </Field>,
    )
    expect(
      screen.getByRole('checkbox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a checkbox with describedBy', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Checkbox id="test" describedBy="test" />
      </Field>,
    )
    expect(
      screen.getByRole('checkbox').attributes.getNamedItem('aria-describedby'),
    ).toBeTruthy()
  })

  test('should render a checkbox with a md size', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Checkbox id="test" size="md" />
      </Field>,
    )
    expect(
      screen
        .getByRole('checkbox')
        .classList.contains('cerberus-checkbox__input--size_md'),
    ).toBeTruthy()
  })

  test('should render a checkbox with a lg size', () => {
    render(
      <Field>
        <Label htmlFor="test">Test Label</Label>,
        <Checkbox id="test" size="lg" />
      </Field>,
    )
    expect(
      screen
        .getByRole('checkbox')
        .classList.contains('cerberus-checkbox__input--size_lg'),
    ).toBeTruthy()
  })
})
