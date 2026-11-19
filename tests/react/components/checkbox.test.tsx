import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { CerberusProvider, Checkbox, useCheckbox } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Checkbox', () => {
  const config = makeConfig()

  test('should render a checkbox', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox
          ids={{
            control: 'test',
          }}
          required
        >
          Test label
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test label/i)).toBeInTheDocument()
    expect(screen.getByText(/(required)/i)).toBeInTheDocument()
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  test('should not render the required notice by default', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox>Test label</Checkbox>
      </CerberusProvider>,
    )
    expect(screen.queryByText(/(required)/i)).not.toBeInTheDocument()
  })

  test('should render a checkbox with error', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox
          ids={{
            control: 'test',
          }}
          required
          invalid
        >
          Test Label
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute('aria-invalid', 'true')
  })

  test('should render a checkbox with disabled', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox
          ids={{
            control: 'test',
          }}
          disabled
        >
          Test Label
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByRole('checkbox')).toHaveAttribute('disabled')
  })

  test('should render the check icon when checked', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Checkbox defaultChecked>Test Label</Checkbox>
      </CerberusProvider>,
    )
    const indicator = container.querySelector('[data-part="indicator"]')
    expect(indicator).not.toBeNull()
    expect(indicator).not.toHaveAttribute('hidden')
    expect(indicator).toHaveAttribute('data-state', 'checked')
    expect(indicator?.querySelector('svg')).not.toBeNull()
  })

  test('should render the indeterminate icon when indeterminate', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Checkbox defaultChecked="indeterminate">Test Label</Checkbox>
      </CerberusProvider>,
    )
    const indicator = container.querySelector('[data-part="indicator"]')
    expect(indicator).not.toHaveAttribute('hidden')
    expect(indicator).toHaveAttribute('data-state', 'indeterminate')
    expect(indicator?.querySelector('svg')).not.toBeNull()
  })

  test('should hide the indicator when unchecked', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Checkbox>Test Label</Checkbox>
      </CerberusProvider>,
    )
    expect(container.querySelector('[data-part="indicator"]')).toHaveAttribute(
      'hidden',
    )
  })

  test('should render a group of checkboxes', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox.Group name="test" data-testid="group">
          <Checkbox
            ids={{
              control: 'test1',
            }}
          >
            Test 1
          </Checkbox>
          <Checkbox
            ids={{
              control: 'test2',
            }}
          >
            Test 2
          </Checkbox>
        </Checkbox.Group>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/test 1/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/test 2/i)).toBeInTheDocument()
    expect(screen.getByTestId('group')).toHaveAttribute('role', 'group')
  })

  test('should contain all the parts', () => {
    expect(Checkbox).toBeDefined()
    expect(Checkbox.El).toBe(Checkbox)
    expect(Checkbox.Root).not.toBeNull()
    expect(Checkbox.Label).not.toBeNull()
    expect(Checkbox.Control).not.toBeNull()
    expect(Checkbox.Group).not.toBeNull()
    expect(Checkbox.Indicator).not.toBeNull()
    expect(Checkbox.HiddenInput).not.toBeNull()
    expect(Checkbox.RootProvider).not.toBeNull()
    expect(Checkbox.Context).not.toBeNull()
  })

  test('should render the primitives', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox.Root defaultChecked>
          <Checkbox.Control>
            <Checkbox.Indicator data-testid="indicator">x</Checkbox.Indicator>
          </Checkbox.Control>
          <Checkbox.Label>Primitive label</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.Root>
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/primitive label/i)).toBeChecked()
    expect(screen.getByTestId('indicator')).toHaveTextContent('x')
  })

  test('should render a RootProvider driven by useCheckbox', () => {
    function Controlled() {
      const checkbox = useCheckbox({ defaultChecked: true })
      return (
        <Checkbox.RootProvider value={checkbox}>
          <Checkbox.Control />
          <Checkbox.Label>Provided label</Checkbox.Label>
          <Checkbox.HiddenInput />
        </Checkbox.RootProvider>
      )
    }
    render(
      <CerberusProvider config={config}>
        <Controlled />
      </CerberusProvider>,
    )
    expect(screen.getByLabelText(/provided label/i)).toBeChecked()
  })

  test('should patch parts with empty part children', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Checkbox defaultChecked>
          <Checkbox.Control data-testid="control" />
          <Checkbox.Indicator data-testid="indicator" />
          <Checkbox.Label data-testid="label" />
          <Checkbox.HiddenInput data-testid="input" />
          Patched label
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('control')).toHaveAttribute(
      'data-part',
      'control',
    )
    expect(screen.getByTestId('label')).toHaveTextContent('Patched label')
    expect(screen.getByTestId('input')).toBeChecked()
    // The default icon is kept
    expect(screen.getByTestId('indicator').querySelector('svg')).not.toBeNull()
    expect(container.querySelectorAll('[data-part="indicator"]')).toHaveLength(
      1,
    )
  })

  test('should replace part content with part children', () => {
    render(
      <CerberusProvider config={config}>
        <Checkbox defaultChecked required>
          <Checkbox.Indicator data-testid="indicator">
            <span>custom icon</span>
          </Checkbox.Indicator>
          <Checkbox.Label>Custom label</Checkbox.Label>
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('indicator')).toHaveTextContent('custom icon')
    expect(screen.getByTestId('indicator').querySelector('svg')).toBeNull()
    expect(screen.getByLabelText(/custom label/i)).toBeInTheDocument()
    expect(screen.getByText(/(required)/i)).toBeInTheDocument()
  })

  test('should replace the control content with control children', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <Checkbox>
          <Checkbox.Control>
            <span>custom control</span>
          </Checkbox.Control>
          Test label
        </Checkbox>
      </CerberusProvider>,
    )
    expect(screen.getByText(/custom control/i)).toBeInTheDocument()
    expect(container.querySelector('[data-part="indicator"]')).toBeNull()
  })
})
