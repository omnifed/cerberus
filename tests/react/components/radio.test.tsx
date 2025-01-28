import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { FieldRoot, FieldLabel, Radio } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Radio', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a radio', () => {
    render(
      <FieldRoot required>
        <Radio id="test">
          <FieldLabel htmlFor="test">Test label</FieldLabel>
        </Radio>
      </FieldRoot>,
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
      <FieldRoot required invalid>
        <Radio id="test">
          <FieldLabel>Test Label</FieldLabel>,
        </Radio>
      </FieldRoot>,
    )
    expect(
      screen.getByRole('radio').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a radio with disabled', () => {
    render(
      <FieldRoot disabled>
        <Radio id="test">
          <FieldLabel>Test Label</FieldLabel>,
        </Radio>
      </FieldRoot>,
    )
    expect(
      screen.getByRole('radio').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a radio with a sm size', () => {
    render(
      <Radio id="test" size="sm">
        <FieldLabel htmlFor="test">Test Label</FieldLabel>,
      </Radio>,
      {
        wrapper: FieldRoot,
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
        <FieldLabel htmlFor="test">Test Label</FieldLabel>,
      </Radio>,
      {
        wrapper: FieldRoot,
      },
    )
    expect(
      screen
        .getByRole('radio')
        .classList.contains('cerberus-radio__input--size_md'),
    ).toBeTruthy()
  })
})
