import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Toggle } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Toggle', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a toggle', () => {
    render(
      <Field>
        <Toggle id="test" value="test" />
      </Field>,
    )
    expect(screen.getByRole('switch')).toBeTruthy()
  })

  test('should render a toggle with error', () => {
    render(
      <Field required invalid>
        <Toggle id="test" value="test" />
      </Field>,
    )
    expect(
      screen.getByRole('switch').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a toggle with disabled', () => {
    render(
      <Field disabled>
        <Toggle id="test" value="test" />
      </Field>,
    )
    expect(
      screen.getByRole('switch').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a Toggle with a sm size', () => {
    render(<Toggle id="test" size="sm" value="test" />, {
      wrapper: Field,
    })
    expect(
      screen
        .getByRole('switch')
        .classList.contains('cerberus-toggle__input--size_sm'),
    ).toBeTruthy()
  })

  test('should render a radio with a lg size', () => {
    render(<Toggle id="test" size="lg" value="test" />, {
      wrapper: Field,
    })
    expect(
      screen
        .getByRole('switch')
        .classList.contains('cerberus-toggle__input--size_lg'),
    ).toBeTruthy()
  })
})
