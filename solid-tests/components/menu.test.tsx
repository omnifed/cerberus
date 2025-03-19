import { describe, test, expect } from 'vitest'
import { render, screen, waitFor } from '@solidjs/testing-library'
import { Menu } from '@cerberus-design/solid'
import userEvent from '@testing-library/user-event'

describe('Menu', () => {
  test('should render a basic menu', async () => {
    render(() => (
      <Menu.Root>
        <Menu.Trigger>
          <button>Trigger</button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item value="item_1">Item 1</Menu.Item>
          <Menu.Item value="item_2">Item 2</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    ))

    expect(screen.getByText('Trigger')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
  })

  test('should render a menu with a group', async () => {
    render(() => (
      <Menu.Root>
        <Menu.Trigger>
          <button>Trigger</button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>Group Label</Menu.ItemGroupLabel>
            <Menu.Item value="item_1">Item 1</Menu.Item>
            <Menu.Item value="item_2">Item 2</Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Root>
    ))

    expect(screen.getByText('Trigger')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Group Label')).toBeInTheDocument()
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
  })

  test('should render a menu with a separator', async () => {
    render(() => (
      <Menu.Root>
        <Menu.Trigger>
          <button>Trigger</button>
        </Menu.Trigger>
        <Menu.Content>
          <Menu.Item value="item_1">Item 1</Menu.Item>
          <Menu.Separator />
          <Menu.Item value="item_2">Item 2</Menu.Item>
        </Menu.Content>
      </Menu.Root>
    ))

    expect(screen.getByText('Trigger')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
  })
})
