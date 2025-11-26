import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Field,
  Input,
  Textarea,
  CerberusProvider,
  FieldParts,
  type FieldProps,
  type CerberusPrimitiveProps,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('<Field />', () => {
  const config = makeConfig()

  function Test(props: CerberusPrimitiveProps<FieldProps>) {
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

  test('should render a secondaryHelperText when no helperText is provided', () => {
    render(
      <Test label="Label" secondaryHelperText="0/180">
        <Input name="firstName" type="text" />
      </Test>,
    )
    expect(screen.getByText(/Label/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
    expect(screen.getByText(/0\/180/i)).toBeInTheDocument()
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

  test('should hide label visually when hideLabel is true', () => {
    render(
      <Test
        ids={{
          control: 'searchInput',
        }}
        label="Search something"
        hideLabel
      >
        <Input name="searchInput" type="text" />
      </Test>,
    )
    const label = screen.getByText(/Search something/i)
    expect(label).toBeInTheDocument()
    // The label should have screen reader only styling applied
    expect(label.classList.toString()).toContain('sr')
  })

  test('should show label normally when hideLabel is false or undefined', () => {
    render(
      <Test
        ids={{
          control: 'normalInput',
        }}
        label="Normal Label"
        hideLabel={false}
      >
        <Input name="normalInput" type="text" />
      </Test>,
    )
    const label = screen.getByText(/Normal Label/i)
    expect(label).toBeInTheDocument()
    // The label should not have the hidden variant class
    expect(label.classList.toString()).not.toContain('sr')
  })

  test('should work with hideLabel and required fields', () => {
    render(
      <Test
        ids={{
          control: 'requiredSearch',
        }}
        label="Required Search Field"
        hideLabel
        required
      >
        <Input name="requiredSearch" type="text" />
      </Test>,
    )
    const label = screen.getByText(/Required Search Field/i)
    const requiredIndicators = screen.getAllByText(/(required)/i)

    expect(label).toBeInTheDocument()
    expect(requiredIndicators.length).toBeGreaterThan(0)
    expect(label.classList.toString()).toContain('sr')
  })

  test.only('should allow primitive props', () => {
    render(
      <Test label="Styled Input" bgColor="blue" css={{ mb: '20px' }}>
        <Input name="styledInput" type="text" />
      </Test>,
    )
    const fieldRoot = screen.getByText(/Styled Input/i).parentElement

    expect(fieldRoot).toBeInTheDocument()
    expect(fieldRoot?.classList.toString()).toContain('cerberus-bg-c_blue')
    expect(fieldRoot?.classList.toString()).toContain('cerberus-mb_20px')
  })
})
