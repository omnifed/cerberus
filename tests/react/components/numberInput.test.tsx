import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { CerberusProvider, NumberInput } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('NumberInput', () => {
  const config = makeConfig()

  test('should render the NumberInput primitives', () => {
    render(
      <CerberusProvider config={config}>
        <NumberInput.Root>
          <NumberInput.Label>Test</NumberInput.Label>
          <NumberInput.Control>
            <NumberInput.Input />
            <NumberInput.IncrementTrigger>up</NumberInput.IncrementTrigger>
            <NumberInput.DecrementTrigger>down</NumberInput.DecrementTrigger>
          </NumberInput.Control>
        </NumberInput.Root>
      </CerberusProvider>,
    )
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
    expect(screen.getByText('up')).toBeInTheDocument()
    expect(screen.getByText('down')).toBeInTheDocument()
  })

  test('should render NumberInput', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <NumberInput />
      </CerberusProvider>,
    )
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    expect(
      container.querySelector('[data-part="increment-trigger"] svg'),
    ).toBeInTheDocument()
    expect(
      container.querySelector('[data-part="decrement-trigger"] svg'),
    ).toBeInTheDocument()
    expect(container.querySelector('[data-part="scrubber"]')).toBeNull()
    expect(container.querySelector('[data-part="label"]')).toBeNull()
  })

  test('should render the scrubber with the scrubber prop', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <NumberInput scrubber />
      </CerberusProvider>,
    )
    expect(
      container.querySelector('[data-part="scrubber"]'),
    ).toBeInTheDocument()
  })

  test('NumberInput.El is the default export', () => {
    expect(NumberInput.El).toBe(NumberInput)
  })

  test('should apply direct part children as overrides', () => {
    const { container } = render(
      <CerberusProvider config={config}>
        <NumberInput defaultValue="3">
          <NumberInput.Label>Quantity</NumberInput.Label>
          <NumberInput.Scrubber data-testid="scrubber" />
          <NumberInput.Input data-testid="input" />
          <NumberInput.IncrementTrigger data-testid="inc">
            more
          </NumberInput.IncrementTrigger>
          <NumberInput.DecrementTrigger data-testid="dec" />
          <span>extra content</span>
        </NumberInput>
      </CerberusProvider>,
    )

    // Label renders only when passed, and labels the input
    expect(screen.getByLabelText(/quantity/i)).toBe(screen.getByTestId('input'))
    expect(screen.getByRole('spinbutton')).toHaveValue('3')
    // A Scrubber child shows the scrubber without the prop
    expect(screen.getByTestId('scrubber')).toBeInTheDocument()
    // Children replace the default icon; a self-closing part only patches props
    expect(screen.getByTestId('inc')).toHaveTextContent('more')
    expect(screen.getByTestId('inc').querySelector('svg')).toBeNull()
    expect(screen.getByTestId('dec').querySelector('svg')).toBeInTheDocument()
    // Non-part children render inside the root
    expect(screen.getByText('extra content')).toBeInTheDocument()
    expect(container.querySelectorAll('[data-part="input"]')).toHaveLength(1)
  })

  test('should replace the default control content with Control children', () => {
    render(
      <CerberusProvider config={config}>
        <NumberInput>
          <NumberInput.Control data-testid="control">
            <NumberInput.Input />
          </NumberInput.Control>
        </NumberInput>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('control')).toBeInTheDocument()
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  test('should expose the value through NumberInput.Context', () => {
    render(
      <CerberusProvider config={config}>
        <NumberInput.Root defaultValue="7">
          <NumberInput.Control>
            <NumberInput.Input />
          </NumberInput.Control>
          <NumberInput.Context>
            {(api) => <span data-testid="value">{api.value}</span>}
          </NumberInput.Context>
          <NumberInput.ValueText data-testid="value-text" />
        </NumberInput.Root>
      </CerberusProvider>,
    )
    expect(screen.getByTestId('value')).toHaveTextContent('7')
    expect(screen.getByTestId('value-text')).toBeInTheDocument()
  })
})
