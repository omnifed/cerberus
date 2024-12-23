import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Field,
  Label,
  Select,
  Option,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Select', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a select', () => {
    render(
      <CerberusProvider config={config}>
        <Field required>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test">
            <Option value="">Choose option</Option>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
    expect(
      screen.getByText(/test label/i).attributes.getNamedItem('for'),
    ).toBeTruthy()
    expect(screen.getByRole('combobox')).toBeTruthy()
  })

  test('should render a input with error', () => {
    render(
      <CerberusProvider config={config}>
        <Field required invalid>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test">
            <Option value="">Choose option</Option>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('combobox').attributes.getNamedItem('aria-invalid'),
    ).toBeTruthy()
  })

  test('should render a input with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <Field disabled>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test">
            <Option value="">Choose option</Option>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('combobox').attributes.getNamedItem('disabled'),
    ).toBeTruthy()
  })

  test('should render a input with placeholder', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test">
            <Option value="">Choose option</Option>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('combobox')).toBeTruthy()
  })

  test('should render a input with describedBy', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test" describedBy="test-description">
            <Option value="">Choose option</Option>
          </Select>
          <span id="test-description">Test Description</span>
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen.getByRole('combobox').attributes.getNamedItem('aria-describedby'),
    ).toBeTruthy()
  })

  test('should render a input with a sm size', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test" size="sm">
            <Option value="">Choose option</Option>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    screen.debug()
    expect(
      screen
        .getByRole('combobox')
        .classList.contains('cerberus-select__input--size_sm'),
    ).toBeTruthy()
  })

  test('should render a input with a md size', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test" size="md">
            <Option value="">Choose option</Option>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('combobox')
        .classList.contains('cerberus-select__input--size_md'),
    ).toBeTruthy()
  })

  test('should render a input with a lg size', () => {
    render(
      <CerberusProvider config={config}>
        <Field>
          <Label htmlFor="test">Test Label</Label>,
          <Select id="test" size="lg">
            <Option value="">Choose option</Option>
          </Select>
        </Field>
      </CerberusProvider>,
    )
    expect(
      screen
        .getByRole('combobox')
        .classList.contains('cerberus-select__input--size_lg'),
    ).toBeTruthy()
  })
})
