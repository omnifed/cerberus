import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Toggle, CerberusProvider } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Toggle', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test.only('should render a toggle', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Toggle id="test" value="test" />
        </Field>
      </CerberusProvider>,
    )
    screen.debug()
    expect(screen.getByRole('switch')).toBeTruthy()
  })

  test('should render a toggle with error', () => {
    render(
      <CerberusProvider config={config}>
        <Field required invalid>
          <Toggle id="test" value="test" />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('switch').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a toggle with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <Field disabled>
          <Toggle id="test" value="test" />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('switch').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a Toggle with a sm size', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Toggle id="test" size="sm" value="test" />
        </Field>
      </CerberusProvider>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen
        .getByRole('switch')
        .classList.contains('cerberus-toggle__input--size_sm'),
    ).toBeTruthy()
  })

  test('should render a radio with a lg size', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Toggle id="test" size="lg" value="test" />
        </Field>
      </CerberusProvider>,
      {
        wrapper: Field,
      },
    )
    expect(
      screen
        .getByRole('switch')
        .classList.contains('cerberus-toggle__input--size_lg'),
    ).toBeTruthy()
  })
})
