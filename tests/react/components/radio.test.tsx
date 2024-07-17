import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Label, Radio } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Radio', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a radio', () => {
    render(
      <Field required>
        <Radio id="test">
          <Label htmlFor="test">Test Label</Label>,
        </Radio>
      </Field>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
    expect(
      screen.getByText(/test label/i).attributes.getNamedItem('for'),
    ).toBeTruthy()
    expect(screen.getByRole('radio')).toBeTruthy()
  })

  test('should render a radio with error', () => {
    render(
      <Field required invalid>
        <Radio id="test">
          <Label htmlFor="test">Test Label</Label>,
        </Radio>
      </Field>,
    )
    expect(
      screen.getByRole('radio').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a radio with disabled', () => {
    render(
      <Field disabled>
        <Radio id="test">
          <Label htmlFor="test">Test Label</Label>,
        </Radio>
      </Field>,
    )
    expect(
      screen.getByRole('radio').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a radio with a sm size', () => {
    render(
      <Radio id="test" size="sm">
        <Label htmlFor="test">Test Label</Label>,
      </Radio>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen
        .getByRole('radio')
        .classList.contains('cerberus-radio__input--size_sm'),
    ).toBeTruthy()
  })

  test('should render a radio with a md size', () => {
    render(
      <Radio id="test" size="md">
        <Label htmlFor="test">Test Label</Label>,
      </Radio>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen
        .getByRole('radio')
        .classList.contains('cerberus-radio__input--size_md'),
    ).toBeTruthy()
  })
})
