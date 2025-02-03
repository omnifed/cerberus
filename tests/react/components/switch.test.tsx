import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { CerberusProvider, Switch, SwitchParts } from '@cerberus-design/react'
import { makeConfig, setupStrictMode } from '@/utils'

describe('Switch', () => {
  setupStrictMode()
  afterEach(cleanup)

  const config = makeConfig()

  test('should render a switch element', () => {
    render(
      <CerberusProvider config={config}>
        <Switch>it works</Switch>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })

  test('should render the parts', () => {
    render(
      <CerberusProvider config={config}>
        <SwitchParts.Root>
          <SwitchParts.Control>
            <SwitchParts.Thumb />
          </SwitchParts.Control>

          <SwitchParts.Label>it works</SwitchParts.Label>

          <SwitchParts.HiddenInput />
        </SwitchParts.Root>
      </CerberusProvider>,
    )
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })
})
