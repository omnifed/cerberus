import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Field, Label, Input, CerberusProvider } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Input', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a input', () => {
    render(
      <CerberusProvider config={config}>
        <Field required>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" />
        </Field>
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
        <Field required invalid>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" />
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
        <Field disabled>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" />
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
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" placeholder="Test Placeholder" />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toBeTruthy()
  })

  test('should render a input with describedBy', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" describedBy="test-description" />
          <span id="test-description">Test Description</span>
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('textbox').attributes.getNamedItem('aria-describedby'),
    ).toBeTruthy()
  })

  test('should render a input with a sm size', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" size="sm" />
        </Field>
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
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" size="md" />
        </Field>
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
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" size="lg" />
        </Field>
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
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" startIcon={<div aria-label="calendar icon" />} />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })

  test('should render a input with a endIcon', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Input id="test" endIcon={<div aria-label="calendar icon" />} />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeTruthy()
  })
})
