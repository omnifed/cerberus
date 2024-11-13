import { describe, test, expect, afterEach } from 'bun:test'
import { cleanup, render, screen, waitFor } from '@testing-library/react'
import {
  Menu,
  MenuTrigger,
  MenuContent,
  MenuGroupLabel,
  MenuItem,
  MenuSeparator,
  MenuItemGroup,
} from '@cerberus-design/react'
import { setupStrictMode } from '@/utils'
import userEvent from '@testing-library/user-event'

describe('Menu', () => {
  setupStrictMode()
  afterEach(cleanup)

  test('should render a basic menu', async () => {
    render(
      <Menu>
        <MenuTrigger>
          <button>Trigger</button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="item_1">Item 1</MenuItem>
          <MenuItem value="item_2">Item 2</MenuItem>
        </MenuContent>
      </Menu>,
    )

    expect(screen.getByText('Trigger')).toBeTruthy()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeTruthy()
      expect(screen.getByText('Item 2')).toBeTruthy()
    })
  })

  test('should render a menu with a group', async () => {
    render(
      <Menu>
        <MenuTrigger>
          <button>Trigger</button>
        </MenuTrigger>
        <MenuContent>
          <MenuItemGroup>
            <MenuGroupLabel>Group Label</MenuGroupLabel>
            <MenuItem value="item_1">Item 1</MenuItem>
            <MenuItem value="item_2">Item 2</MenuItem>
          </MenuItemGroup>
        </MenuContent>
      </Menu>,
    )

    expect(screen.getByText('Trigger')).toBeTruthy()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Group Label')).toBeTruthy()
      expect(screen.getByText('Item 1')).toBeTruthy()
      expect(screen.getByText('Item 2')).toBeTruthy()
    })
  })

  test('should render a menu with a separator', async () => {
    render(
      <Menu>
        <MenuTrigger>
          <button>Trigger</button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="item_1">Item 1</MenuItem>
          <MenuSeparator />
          <MenuItem value="item_2">Item 2</MenuItem>
        </MenuContent>
      </Menu>,
    )

    expect(screen.getByText('Trigger')).toBeTruthy()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeTruthy()
      expect(screen.getByText('Item 2')).toBeTruthy()
    })
  })
})
