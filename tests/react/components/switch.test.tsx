import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen } from '@testing-library/react'
import { Switch, SwitchParts } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'

describe('Switch', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a switch element', () => {
    render(<Switch>it works</Switch>)
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })

  test('should render the parts', () => {
    render(
      <SwitchParts.Root>
        <SwitchParts.Control>
          <SwitchParts.Thumb />
        </SwitchParts.Control>

        <SwitchParts.Label>it works</SwitchParts.Label>

        <SwitchParts.HiddenInput />
      </SwitchParts.Root>,
    )
    expect(screen.getByText(/it works/i)).toBeTruthy()
  })
})
