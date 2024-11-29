import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import { Tooltip } from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Tooltip', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a tooltip element', async () => {
    render(<Tooltip content="It works">trigger</Tooltip>)
    await userEvent.hover(screen.getByText(/trigger/i))
    await waitFor(() => {
      expect(screen.getByText(/it works/i)).toBeTruthy()
    })
  })

  test('should render a tooltip with a custom position', async () => {
    render(
      <Tooltip content="It works" position="bottom">
        trigger
      </Tooltip>,
    )
    await userEvent.hover(screen.getByText(/trigger/i))
    await waitFor(() => {
      expect(screen.getByText(/it works/i).getAttribute('data-placement')).toBe(
        'bottom',
      )
    })
  })
})
