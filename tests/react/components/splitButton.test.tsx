import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuItem, SplitButton } from '@cerberus-design/react'

describe('SplitButton', () => {
  test('should render a basic split button', async () => {
    render(
      <SplitButton>
        <MenuItem value="item_1">Item 1</MenuItem>
        <MenuItem value="item_2">Item 2</MenuItem>
      </SplitButton>,
    )

    expect(screen.getByText(/action/i)).toBeInTheDocument()
    await userEvent.click(screen.getByText(/action/i))
    await waitFor(() => {
      expect(screen.getByText(/item 1/i)).toBeInTheDocument()
      expect(screen.getByText(/item 2/i)).toBeInTheDocument()
    })
  })
})
