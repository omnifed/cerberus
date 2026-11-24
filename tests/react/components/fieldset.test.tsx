import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Field,
  Input,
  Radio,
  RadioGroup,
  Fieldset,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Fieldset', () => {
  const config = makeConfig()

  function TestFormGroup(props: { invalid?: boolean }) {
    return (
      <Fieldset
        legend="test legend"
        helperText="Helper text"
        errorText="Error text"
        usage="formSection"
        {...props}
      >
        <Field label="test label">
          <Input />
        </Field>
      </Fieldset>
    )
  }

  test('should render a fieldset for a form section', () => {
    render(
      <CerberusProvider config={config}>
        <TestFormGroup />
      </CerberusProvider>,
    )
    expect(screen.getByText('test legend')).toBeInTheDocument()
    expect(screen.getByText('Helper text')).toBeInTheDocument()
    expect(screen.getByText('test label')).toBeInTheDocument()
  })

  test('should render a fieldset for a form section with error', () => {
    render(
      <CerberusProvider config={config}>
        <TestFormGroup invalid />
      </CerberusProvider>,
    )
    expect(screen.getByText('Error text')).toBeInTheDocument()
  })

  test('should render a fieldset for a field group', () => {
    render(
      <CerberusProvider config={config}>
        <Fieldset legend="test legend">
          <RadioGroup name="test group" defaultValue="1">
            <Radio value="1">one</Radio>
            <Radio value="2">two</Radio>
          </RadioGroup>
        </Fieldset>
      </CerberusProvider>,
    )
    expect(screen.getByText('test legend')).toBeInTheDocument()
    expect(screen.getByText('one')).toBeInTheDocument()
    expect(screen.getByText('two')).toBeInTheDocument()
  })

  test('should render Fieldset parts', () => {
    render(
      <CerberusProvider config={config}>
        <Fieldset.Root>
          <Fieldset.Legend>test legend</Fieldset.Legend>
          <Fieldset.HelperText>Helper text</Fieldset.HelperText>
          <Field label="test label">
            <Input />
          </Field>
          <Fieldset.ErrorText>Error text</Fieldset.ErrorText>
        </Fieldset.Root>
      </CerberusProvider>,
    )
    expect(screen.getByText('test legend')).toBeInTheDocument()
    expect(screen.getByText('Helper text')).toBeInTheDocument()
    expect(screen.getByText('test label')).toBeInTheDocument()
  })

  test('should render the abstraction from Fieldset.El', () => {
    render(
      <CerberusProvider config={config}>
        <Fieldset.El legend="el legend">
          <Field label="test label">
            <Input />
          </Field>
        </Fieldset.El>
      </CerberusProvider>,
    )
    expect(screen.getByText('el legend')).toBeInTheDocument()
    expect(screen.getByText('test label')).toBeInTheDocument()
  })

  test('should let part children override the abstraction parts', () => {
    render(
      <CerberusProvider config={config}>
        <Fieldset legend="prop legend" helperText="prop helper" invalid>
          <Fieldset.Legend data-testid="legend" />
          <Fieldset.HelperText>custom helper</Fieldset.HelperText>
          <Fieldset.ErrorText data-testid="error">
            custom error
          </Fieldset.ErrorText>
          <Field label="test label">
            <Input />
          </Field>
        </Fieldset>
      </CerberusProvider>,
    )
    // empty part child: patches props, keeps the prop content
    expect(screen.getByTestId('legend')).toHaveTextContent('prop legend')
    // part child with children: replaces the content
    expect(screen.queryByText('prop helper')).not.toBeInTheDocument()
    expect(screen.getByText('custom helper')).toBeInTheDocument()
    expect(screen.getByTestId('error')).toHaveTextContent('custom error')
    // overrides render once, in place of the default part
    expect(document.querySelectorAll('legend')).toHaveLength(1)
    expect(screen.getByText('test label')).toBeInTheDocument()
  })

  test('should expose the fieldset state through Fieldset.Context', () => {
    render(
      <CerberusProvider config={config}>
        <Fieldset.Root invalid>
          <Fieldset.Context>
            {(fieldset) => (
              <p>{fieldset.invalid ? 'is invalid' : 'is valid'}</p>
            )}
          </Fieldset.Context>
        </Fieldset.Root>
      </CerberusProvider>,
    )
    expect(screen.getByText('is invalid')).toBeInTheDocument()
  })
})
