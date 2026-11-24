import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Field,
  Input,
  Textarea,
  CerberusProvider,
  useField,
  type FieldProps,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('<Field />', () => {
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
        <Field.Root required>
          <Field.Label>
            Label
            <Field.RequiredIndicator />
          </Field.Label>
          <Field.InputRoot>
            <Field.StartIndicator>start</Field.StartIndicator>
            <Field.Input />
            <Field.EndIndicator>end</Field.EndIndicator>
          </Field.InputRoot>
          <Field.Textarea />
          <Field.Select>
            <option value="a">A</option>
          </Field.Select>
          <Field.HelperText>Helper Text</Field.HelperText>
          <Field.ErrorText>Error Text</Field.ErrorText>
          <Field.StatusIndicatorWithIcon fallback="fallback" />
        </Field.Root>
      </CerberusProvider>,
    )
    expect(screen.getByText(/Label/i)).toHaveClass('cerberus-field__label')
    expect(screen.getByText(/Helper Text/i)).toHaveClass(
      'cerberus-field__helperText',
    )
    // Ark's error text only renders when invalid
    expect(screen.queryByText(/Error Text/i)).not.toBeInTheDocument()
    // Ark's required indicator defaults to `*`
    expect(screen.getByText('*')).toHaveAttribute(
      'data-part',
      'required-indicator',
    )
    expect(screen.getByText('start')).toHaveAttribute(
      'data-part',
      'start-indicator',
    )
    expect(screen.getByText('start')).toHaveClass(
      'cerberus-field__startIndicator',
    )
    expect(screen.getByText('end')).toHaveClass('cerberus-field__endIndicator')
    expect(screen.getByText('fallback')).toHaveAttribute(
      'data-part',
      'end-indicator',
    )
    expect(screen.getByRole('combobox')).toHaveClass('cerberus-field__select')
    expect(screen.getAllByRole('textbox')).toHaveLength(2)
  })

  test('should render the status indicator with the invalid icon when invalid', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Field.Root invalid>
          <Field.StatusIndicatorWithIcon
            data-testid="status"
            fallback="fallback"
          />
        </Field.Root>
      </CerberusProvider>,
    )
    const status = screen.getByTestId('status')
    expect(status).toHaveAttribute('data-part', 'status-indicator')
    expect(status).toHaveAttribute('aria-hidden', 'true')
    expect(status).toHaveClass('cerberus-field__statusIndicator')
    expect(status.querySelector('svg')).toBeInTheDocument()
    expect(screen.queryByText('fallback')).not.toBeInTheDocument()
    expect(
      container.querySelector('[data-part="end-indicator"]'),
    ).not.toBeInTheDocument()
  })

  test('should render the abstraction from Field.El', () => {
    render(
      <Field.El label="el label">
        <Field.Textarea />
      </Field.El>,
    )
    expect(screen.getByLabelText('el label')).toBeInTheDocument()
  })

  test('should let part children override the abstraction parts', () => {
    render(
      <Test
        label="prop label"
        helperText="prop helper"
        errorText="prop error"
        required
      >
        <Field.Label data-testid="label" />
        <Field.RequiredIndicator>*</Field.RequiredIndicator>
        <Field.HelperText>custom helper</Field.HelperText>
        <Input />
      </Test>,
    )
    // empty part child: patches props, keeps the prop content
    expect(screen.getByTestId('label')).toHaveTextContent('prop label')
    // part child with children: replaces the content
    expect(screen.queryByText('(required)')).not.toBeInTheDocument()
    expect(screen.getByText('*')).toBeInTheDocument()
    expect(screen.queryByText('prop helper')).not.toBeInTheDocument()
    expect(screen.getByText('custom helper')).toBeInTheDocument()
    // overrides render once, in place of the default part
    expect(document.querySelectorAll('label')).toHaveLength(1)
    // the control renders as a non-part child
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('should let a Field.ErrorText child replace the error text', () => {
    render(
      <Test label="Label" errorText="prop error" invalid>
        <Field.ErrorText data-testid="error">custom error</Field.ErrorText>
        <Input />
      </Test>,
    )
    expect(screen.queryByText('prop error')).not.toBeInTheDocument()
    expect(screen.getByTestId('error')).toHaveTextContent('custom error')
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'aria-describedby',
      screen.getByTestId('error').id,
    )
  })

  test('should render a Field.Label child without a label prop', () => {
    render(
      <Test>
        <Field.Label>child label</Field.Label>
        <Input />
      </Test>,
    )
    expect(screen.getByLabelText('child label')).toBeInTheDocument()
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
    expect(screen.getByLabelText(/Search something/i)).toBeInTheDocument()
  })

  test('should hide a Field.Label child when hideLabel is true', () => {
    render(
      <Test hideLabel>
        <Field.Label>Hidden child label</Field.Label>
        <Input />
      </Test>,
    )
    expect(
      screen.getByText(/Hidden child label/i).classList.toString(),
    ).toContain('sr')
  })

  test('should hide a Field.Label primitive with the srOnly style prop', () => {
    render(
      <Field.Root>
        <Field.Label srOnly>Primitive label</Field.Label>
        <Field.Input />
      </Field.Root>,
    )
    expect(screen.getByText(/Primitive label/i).classList.toString()).toContain(
      'sr',
    )
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

  test('should allow primitive props', () => {
    render(
      <Test label="Styled Input" bgColor="blue" css={{ mb: '20px' }}>
        <Input name="styledInput" type="text" />
      </Test>,
    )
    const fieldRoot = screen.getByRole('group')

    expect(fieldRoot).toBeInTheDocument()
    expect(fieldRoot?.classList.toString()).toContain('cerberus-bg-c_blue')
    expect(fieldRoot?.classList.toString()).toContain('cerberus-mb_20px')
  })

  test('should cascade the size from the field to the input', () => {
    render(
      <Test label="Sized" size="sm">
        <Input />
      </Test>,
    )
    expect(screen.getByRole('textbox')).toHaveClass(
      'cerberus-field__input--size_sm',
    )
  })

  test('should render Root asChild with its context', () => {
    render(
      <Field.Root asChild invalid ids={{ control: 'aschild' }}>
        <section data-testid="root">
          <Field.Label>As child label</Field.Label>
          <Field.Input />
          <Field.HelperText>helper</Field.HelperText>
          <Field.ErrorText>error</Field.ErrorText>
        </section>
      </Field.Root>,
    )
    const root = screen.getByTestId('root')
    expect(root.tagName).toBe('SECTION')
    expect(root).toHaveAttribute('role', 'group')
    expect(root).toHaveAttribute('data-invalid')
    expect(root).toHaveClass('cerberus-field__root')

    const input = screen.getByLabelText('As child label')
    expect(input).toHaveAttribute('id', 'aschild')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toHaveClass('cerberus-field__input')
    const describedBy = input.getAttribute('aria-describedby') ?? ''
    expect(describedBy).toContain(screen.getByText('error').id)
    expect(describedBy).toContain(screen.getByText('helper').id)
  })

  test('should drive Field.RootProvider with useField', () => {
    function RootProviderTest() {
      const field = useField({ invalid: true, required: true })
      return (
        <Field.RootProvider value={field} size="md" data-testid="root">
          <Field.Label>Provided</Field.Label>
          <Field.InputGroup />
          <Field.ErrorText>provided error</Field.ErrorText>
        </Field.RootProvider>
      )
    }

    render(
      <CerberusProvider config={config}>
        <RootProviderTest />
      </CerberusProvider>,
    )
    expect(screen.getByTestId('root')).toHaveClass('cerberus-field__root')
    const input = screen.getByLabelText('Provided')
    expect(input).toHaveAttribute('aria-invalid', 'true')
    expect(input).toBeRequired()
    expect(input).toHaveClass('cerberus-field__input--size_md')
    expect(screen.getByText('provided error')).toBeInTheDocument()
  })

  test('should expose the field state through Field.Context', () => {
    render(
      <Field.Root invalid>
        <Field.Context>
          {(field) => <p>{field.invalid ? 'is invalid' : 'is valid'}</p>}
        </Field.Context>
      </Field.Root>,
    )
    expect(screen.getByText('is invalid')).toBeInTheDocument()
  })
})
