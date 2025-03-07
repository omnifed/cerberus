import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Field,
  Input,
  Textarea,
  CerberusProvider,
  FieldParts,
  type FieldProps,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Field', () => {
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
    expect(screen.getByText(/Label/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(
      screen.getByText(/This is what people will see on your profile/i),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/A first name is required to create an account/i),
    ).not.toBeInTheDocument()
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
    expect(screen.getByText(/Label/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(
      screen.getByText(/A first name is required to create an account/i),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/This is what people will see on your profile/i),
    ).not.toBeInTheDocument()
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
    expect(screen.getByText(/Label/i)).toBeInTheDocument()
    expect(screen.getByText(/(required)/i)).toBeInTheDocument()
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
    expect(screen.getByText(/Label/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(
      screen.getByText(/This is what people will see on your profile/i),
    ).toBeInTheDocument()
    expect(
      screen.queryByText(/A first name is required to create an account/i),
    ).not.toBeInTheDocument()
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
    expect(screen.getByText(/Label/i)).toBeInTheDocument()
    expect(screen.getByText(/Helper Text/i)).toBeInTheDocument()
  })
})
