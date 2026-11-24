import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { CerberusProvider, Switch } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('Switch', () => {
  const config = makeConfig()

  test('should render a switch element', () => {
    render(
      <CerberusProvider config={config}>
        <Switch>it works</Switch>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
  })

  test('should render the parts', () => {
    render(
      <CerberusProvider config={config}>
        <Switch.Root>
          <Switch.Control>
            <Switch.Thumb />
          </Switch.Control>

          <Switch.Label>it works</Switch.Label>

          <Switch.HiddenInput />
        </Switch.Root>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toBeInTheDocument()
  })
})
