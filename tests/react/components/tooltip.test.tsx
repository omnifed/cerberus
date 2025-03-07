import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import { Tooltip } from '@cerberus-design/react'
import userEvent from '@testing-library/user-event'

describe('Tooltip', () => {
  test('should render a tooltip element', async () => {
    render(<Tooltip content="It works">trigger</Tooltip>)
    await userEvent.hover(screen.getByText(/trigger/i))
    await waitFor(() => {
      expect(screen.getByText(/it works/i)).toBeInTheDocument()
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
      expect(screen.getByText(/it works/i)).toHaveAttribute(
        'data-placement',
        'bottom',
      )
    })
  })
})
