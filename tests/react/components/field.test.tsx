import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import {
  Field,
  Input,
  Textarea,
  CerberusProvider,
  FieldParts,
  type FieldProps,
} from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Field', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  function Test(props: FieldProps) {
    return (
      <CerberusProvider config={config}>
        <Field {...props} />
      </CerberusProvider>
    )
  }

  test('should render a field element', () => {
    render(
      <Test
        ids={{
          control: 'firstName',
        }}
        label="Label"
        helperText="This is what people will see on your profile."
        errorText="A first name is required to create an account."
      >
        <Input name="firstName" type="text" />
      </Test>,
    )
    expect(screen.getByText(/Label/i)).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(
      screen.getByText(/This is what people will see on your profile/i),
    ).toBeTruthy()
    expect(
      screen.queryByText(/A first name is required to create an account/i),
    ).toBeFalsy()
  })

  test('should render a field with error', () => {
    render(
      <Test
        ids={{
          control: 'firstName',
        }}
        label="Label"
        helperText="This is what people will see on your profile."
        errorText="A first name is required to create an account."
        invalid
      >
        <Input name="firstName" type="text" />
      </Test>,
    )
    expect(screen.getByText(/Label/i)).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(
      screen.getByText(/A first name is required to create an account/i),
    ).toBeTruthy()
    expect(
      screen.queryByText(/This is what people will see on your profile/i),
    ).toBeFalsy()
  })

  test('should display required on the label', () => {
    render(
      <Test
        ids={{
          control: 'firstName',
        }}
        label="Label"
        helperText="This is what people will see on your profile."
        errorText="A first name is required to create an account."
        required
      >
        <Input name="firstName" type="text" />
      </Test>,
    )
    expect(screen.getByText(/Label/i)).toBeTruthy()
    expect(screen.getByText(/(required)/i)).toBeTruthy()
  })

  test('should render a field with a textarea', () => {
    render(
      <Test
        ids={{
          control: 'firstName',
        }}
        label="Label"
        helperText="This is what people will see on your profile."
        errorText="A first name is required to create an account."
      >
        <Textarea name="firstName" />
      </Test>,
    )
    expect(screen.getByText(/Label/i)).toBeTruthy()
    expect(screen.getByRole('textbox')).toBeTruthy()
    expect(
      screen.getByText(/This is what people will see on your profile/i),
    ).toBeTruthy()
    expect(
      screen.queryByText(/A first name is required to create an account/i),
    ).toBeFalsy()
  })

  test('should render primitives', () => {
    render(
      <CerberusProvider config={config}>
        <FieldParts.Root>
          <FieldParts.Label>Label</FieldParts.Label>
          <FieldParts.Input />
          <FieldParts.Textarea />
          <FieldParts.HelperText>Helper Text</FieldParts.HelperText>
          <FieldParts.ErrorText>Error Text</FieldParts.ErrorText>
          <FieldParts.StartIndicator />
          <FieldParts.StatusIndicator />
          <FieldParts.RequiredIndicator />
        </FieldParts.Root>
      </CerberusProvider>,
    )
    expect(screen.getByText(/Label/i)).toBeTruthy()
    expect(screen.getByText(/Helper Text/i)).toBeTruthy()
  })
})
