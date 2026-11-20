import { describe, test, expect } from 'bun:test'
import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import {
  CerberusProvider,
  Input,
  Field,
  type FieldInputElProps,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Input', () => {
  const config = makeConfig()

  test('should render a input', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          required
        >
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
    expect(screen.getByText(/(required)/i)).toBeInTheDocument()
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('should render a input with error', () => {
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
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toHaveAttribute('aria-invalid', 'true')
  })

  test('should render a input with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          disabled
        >
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toBeDisabled()
  })

  test('should render a input with placeholder', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
          required
        >
          <Input placeholder="Test Placeholder" />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  test('should render a input with a sm size', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input size="sm" />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toHaveClass(
      'cerberus-field__input--size_sm',
    )
  })

  test('should render a input with a md size', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input size="md" />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toHaveClass(
      'cerberus-field__input--size_md',
    )
  })

  test('should render a input with a lg size', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input size="lg" />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByRole('textbox')).toHaveClass(
      'cerberus-field__input--size_lg',
    )
  })

  test('should forward a ref to the input', () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Input ref={ref} />
        </Field>
      </CerberusProvider>,
    )
    expect(ref.current).toBe(screen.getByRole('textbox'))
  })

  test('should alias Input to Field.InputGroup', () => {
    expect(Input).toBe(Field.InputGroup)
    const props: FieldInputElProps = { startIcon: 'icon', size: 'md' }
    expect(props.size).toBe('md')
  })

  test('should let the input size override the field size', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label" size="sm">
          <Field.InputGroup size="lg" className="custom" />
        </Field>
      </CerberusProvider>,
    )
    const input = screen.getByRole('textbox')
    expect(input).toHaveClass('cerberus-field__input--size_lg')
    expect(input).not.toHaveClass('cerberus-field__input--size_sm')
    expect(input).toHaveClass('custom')
  })

  test('should render the structure of Field.InputGroup', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Field.InputGroup
            startIcon={<span>start</span>}
            endIcon={<span>end</span>}
          />
        </Field>
      </CerberusProvider>,
    )
    const root = container.querySelector('[data-part="input-root"]')
    expect(root).toHaveClass('cerberus-field__inputRoot')
    expect(screen.getByText('start').parentElement).toHaveAttribute(
      'data-part',
      'start-indicator',
    )
    expect(screen.getByRole('textbox')).toHaveAttribute(
      'data-has',
      'start-indicator',
    )
    const end = screen.getByText('end').parentElement
    expect(end).toHaveAttribute('data-part', 'end-indicator')
    expect(end).toHaveAttribute('aria-hidden', 'true')
    expect(
      container.querySelector('[data-part="status-indicator"]'),
    ).not.toBeInTheDocument()
  })

  test('should not render a start indicator without a startIcon', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(
      container.querySelector('[data-part="start-indicator"]'),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('textbox')).not.toHaveAttribute('data-has')
  })

  test('should swap the endIcon for the invalid icon when invalid', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Field label="Test Label" invalid>
          <Input endIcon={<span>end</span>} />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.queryByText('end')).not.toBeInTheDocument()
    const status = container.querySelector('[data-part="status-indicator"]')
    expect(status).toHaveClass('cerberus-field__statusIndicator')
    expect(status).toHaveAttribute('aria-hidden', 'true')
    expect(status?.querySelector('svg')).toBeInTheDocument()
  })

  test('should let part children patch Field.InputGroup parts', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label" invalid>
          <Field.InputGroup startIcon={<span>prop start</span>}>
            <Field.InputRoot data-testid="input-root" />
            <Field.StartIndicator>child start</Field.StartIndicator>
            <Field.StatusIndicator data-testid="status">
              child status
            </Field.StatusIndicator>
            <span>extra content</span>
          </Field.InputGroup>
        </Field>
      </CerberusProvider>,
    )
    const root = screen.getByTestId('input-root')
    expect(root).toContainElement(screen.getByRole('textbox'))
    expect(screen.queryByText('prop start')).not.toBeInTheDocument()
    expect(screen.getByText('child start')).toBeInTheDocument()
    expect(screen.getByTestId('status')).toHaveTextContent('child status')
    expect(root).toContainElement(screen.getByText('extra content'))
  })

  test('should let a Field.EndIndicator child replace the endIcon', () => {
    render(
      <CerberusProvider config={config}>
        <Field label="Test Label">
          <Field.InputGroup endIcon={<span>prop end</span>}>
            <Field.EndIndicator data-testid="end">child end</Field.EndIndicator>
          </Field.InputGroup>
        </Field>
      </CerberusProvider>,
    )
    expect(screen.queryByText('prop end')).not.toBeInTheDocument()
    expect(screen.getByTestId('end')).toHaveTextContent('child end')
  })

  test('should render a input with a startIcon', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input startIcon={<div aria-label="calendar icon" />} />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeInTheDocument()
  })

  test('should render a input with a endIcon', () => {
    render(
      <CerberusProvider config={config}>
        <Field
          ids={{
            control: 'test',
          }}
          label="Test Label"
        >
          <Input endIcon={<div aria-label="calendar icon" />} />
        </Field>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/calendar icon/i)).toBeInTheDocument()
  })

  test('should render standalone, outside a Field, in its own Field.Root', () => {
    render(
      <CerberusProvider config={config}>
        <Input aria-label="Anchor" placeholder="Anchor..." size="sm" />
      </CerberusProvider>,
    )
    const input = screen.getByRole('textbox', { name: 'Anchor' })
    expect(input).toHaveAttribute('data-part', 'input')
    expect(input.className).toContain('size_sm')
    expect(
      input.closest('[data-scope="field"][data-part="root"]'),
    ).not.toBeNull()
  })

  test('should not add a second Field.Root inside a Field', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Field label="Name">
          <Input />
        </Field>
      </CerberusProvider>,
    )
    expect(
      container.querySelectorAll('[data-scope="field"][data-part="root"]'),
    ).toHaveLength(1)
  })
})
