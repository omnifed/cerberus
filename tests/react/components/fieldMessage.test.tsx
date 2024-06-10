import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, FieldMessage } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('FieldMessage', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a field message', () => {
    render(
      <Field>
        <FieldMessage id="test">Test Field Message</FieldMessage>
      </Field>,
    )
    expect(screen.getByText(/test field message/i)).toBeTruthy()
  })

  test('should render an invalid field message', () => {
    render(
      <Field invalid>
        <FieldMessage id="test">Test Field Message</FieldMessage>
      </Field>,
    )
    expect(screen.getByText(/test field message/i)).toBeTruthy()
    expect(
      screen
        .getByText(/test field message/i)
        .attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })
})
