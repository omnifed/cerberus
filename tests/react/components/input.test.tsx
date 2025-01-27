import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { CerberusProvider, Input, Field } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Input', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a input', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          required
        >
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should render a input with error', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          required
          invalid
        >
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a input with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          disabled
        >
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a input with placeholder', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          required
        >
          <Input placeholder="Test Placeholder" />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should render a input with a sm size', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input size="sm" />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-field__input--size_sm'),
    ).toBeTruthy()
  })

  test('should render a input with a md size', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input size="md" />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-field__input--size_md'),
    ).toBeTruthy()
  })

  test('should render a input with a lg size', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input size="lg" />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-field__input--size_lg'),
    ).toBeTruthy()
  })

  test('should render a input with a startIcon', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input startIcon={<div aria-label="calendar icon" />} />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })

  test('should render a input with a endIcon', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input endIcon={<div aria-label="calendar icon" />} />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })
})
