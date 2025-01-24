import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  FieldRoot,
  Input,
  CerberusProvider,
  FieldLabel,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Input', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a input', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
          required
        >
          <FieldLabel>Test label</FieldLabel>
          <Input id="test" />
        </FieldRoot>
      </CerberusProvider>,
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
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
          required
          invalid
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a input with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
          disabled
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a input with placeholder', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
          required
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input placeholder="Test Placeholder" />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should render a input with a sm size', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input size="sm" />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-input__input--size_sm'),
    ).toBeTruthy()
  })

  test('should render a input with a md size', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input size="md" />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-input__input--size_md'),
    ).toBeTruthy()
  })

  test('should render a input with a lg size', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input size="lg" />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('textbox')
        .classList.contains('cerberus-input__input--size_lg'),
    ).toBeTruthy()
  })

  test('should render a input with a startIcon', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input startIcon={<div aria-label="calendar icon" />} />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })

  test('should render a input with a endIcon', () => {
    render(
      <CerberusProvider config={config}>
        <FieldRoot
          ids={{
            control: 'test',
          }}
        >
          <FieldLabel>Test Label</FieldLabel>,
          <Input endIcon={<div aria-label="calendar icon" />} />
        </FieldRoot>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })
})
