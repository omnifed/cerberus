import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CerberusProvider, MenuItem, SplitButton } from '@cerberus-design/react'
import { makeConfig } from '@/utils'

describe('SplitButton', () => {
  const config = makeConfig()

  test('should render a basic split button', async () => {
    render(
      <CerberusProvider config={config}>
        <SplitButton actionText="action">
          <MenuItem value="item_1">Item 1</MenuItem>
          <MenuItem value="item_2">Item 2</MenuItem>
        </SplitButton>
      </CerberusProvider>,
    )

    expect(screen.getByText(/action/i)).toBeInTheDocument()
    await userEvent.click(screen.getByText(/action/i))
    await waitFor(() => {
      expect(screen.getByText(/item 1/i)).toBeInTheDocument()
      expect(screen.getByText(/item 2/i)).toBeInTheDocument()
    })
  })

  test('should open the menu when clicking the dropdown arrow', async () => {
    render(
      <CerberusProvider config={config}>
        <SplitButton actionText="action">
          <MenuItem value="item_1">Item 1</MenuItem>
          <MenuItem value="item_2">Item 2</MenuItem>
        </SplitButton>
      </CerberusProvider>,
    )

    const dropdownButton = screen.getByRole('button', { name: /more options/i })
    expect(dropdownButton).toBeInTheDocument()
    await userEvent.click(dropdownButton)
    await waitFor(() => {
      expect(screen.getByText(/item 1/i)).toBeInTheDocument()
      expect(screen.getByText(/item 2/i)).toBeInTheDocument()
    })
  })

  test('should render with pending state', () => {
    render(
      <CerberusProvider config={config}>
        <SplitButton actionText="action" pending>
          <MenuItem value="item_1">Item 1</MenuItem>
          <MenuItem value="item_2">Item 2</MenuItem>
        </SplitButton>
      </CerberusProvider>,
    )
    expect(screen.getByRole('button', { name: /action/i })).toBeDisabled()
  })
})
