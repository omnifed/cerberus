import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  Field,
  Input,
  Radio,
  RadioGroup,
  Fieldset,
  FieldsetParts,
  CerberusProvider,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Fieldset & FieldsetParts', () => {
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
        <FieldsetParts.Root>
          <FieldsetParts.Legend>test legend</FieldsetParts.Legend>
          <FieldsetParts.HelperText>Helper text</FieldsetParts.HelperText>
          <Field label="test label">
            <Input />
          </Field>
          <FieldsetParts.ErrorText>Error text</FieldsetParts.ErrorText>
        </FieldsetParts.Root>
      </CerberusProvider>,
    )
    expect(screen.getByText('test legend')).toBeInTheDocument()
    expect(screen.getByText('Helper text')).toBeInTheDocument()
    expect(screen.getByText('test label')).toBeInTheDocument()
  })
})
