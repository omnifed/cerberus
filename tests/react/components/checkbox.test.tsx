import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { CerberusProvider, Field, Checkbox } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Checkbox', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a checkbox', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test label"
          required
        >
          <Checkbox />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
    expect(screen.getByRole('checkbox')).toBeTruthy()
  })

  test('should render a checkbox with error', () => {
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
          <Checkbox id="test" />
        </Field>
        ,
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('checkbox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a checkbox with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          disabled
        >
          <Checkbox />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('checkbox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a checkbox with a md size', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Checkbox size="md" />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('checkbox')
        .classList.contains('cerberus-checkbox__input--size_md'),
    ).toBeTruthy()
  })

  test('should render a checkbox with a lg size', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Checkbox size="lg" />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('checkbox')
        .classList.contains('cerberus-checkbox__input--size_lg'),
    ).toBeTruthy()
  })

  test('should render a checkbox icon when checked', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Checkbox checked />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeTruthy()
  })

  test('should render a mixed icon when mixed', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Checkbox mixed />
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('img', {
        hidden: true,
      }),
    ).toBeTruthy()
  })
})
