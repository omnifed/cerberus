import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import {
  CerberusProvider,
  NumberInputParts,
  NumberInput,
} from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('NumberInput', () => {
  const config = makeConfig()

  test('should render NumberInputParts', () => {
    render(
      <CerberusProvider config={config}>
        <NumberInputParts.Root>
          <NumberInputParts.Label>Test</NumberInputParts.Label>
          <NumberInputParts.Control>
            <NumberInputParts.Input />
            <NumberInputParts.IncrementTrigger>
              up
            </NumberInputParts.IncrementTrigger>
            <NumberInputParts.DecrementTrigger>
              down
            </NumberInputParts.DecrementTrigger>
          </NumberInputParts.Control>
        </NumberInputParts.Root>
      </CerberusProvider>,
    )
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
    expect(screen.getByLabelText(/test/i)).toBeInTheDocument()
  })

  test('should render NumberInput', () => {
    render(
      <CerberusProvider config={config}>
        <NumberInput />
      </CerberusProvider>,
    )
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })
})
