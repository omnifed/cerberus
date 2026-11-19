import { describe, test, expect, mock } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import { Menu, type MenuSelectionDetails } from '@cerberus-design/react'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

describe('Menu', () => {
  test('should render a basic menu', async () => {
    render(
      <Menu>
        <Menu.Trigger asChild>
          <button>Trigger</button>
        </Menu.Trigger>
        <Menu.ContentGroup>
          <Menu.Item value="item_1">Item 1</Menu.Item>
          <Menu.Item value="item_2">Item 2</Menu.Item>
        </Menu.ContentGroup>
      </Menu>,
    )

    expect(screen.getByText('Trigger')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
  })

  test('should render a menu with a group', async () => {
    render(
      <Menu>
        <Menu.Trigger asChild>
          <button>Trigger</button>
        </Menu.Trigger>
        <Menu.ContentGroup>
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel>Group Label</Menu.ItemGroupLabel>
            <Menu.Item value="item_1">Item 1</Menu.Item>
            <Menu.Item value="item_2">Item 2</Menu.Item>
          </Menu.ItemGroup>
        </Menu.ContentGroup>
      </Menu>,
    )

    expect(screen.getByText('Trigger')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Group Label')).toBeInTheDocument()
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
    expect(screen.getByRole('group')).toHaveAttribute(
      'aria-labelledby',
      screen.getByText('Group Label').id,
    )
  })

  test('should render a menu with a separator', async () => {
    render(
      <Menu>
        <Menu.Trigger asChild>
          <button>Trigger</button>
        </Menu.Trigger>
        <Menu.ContentGroup>
          <Menu.Item value="item_1">Item 1</Menu.Item>
          <Menu.Separator />
          <Menu.Item value="item_2">Item 2</Menu.Item>
        </Menu.ContentGroup>
      </Menu>,
    )

    expect(screen.getByText('Trigger')).toBeInTheDocument()
    await userEvent.click(screen.getByText('Trigger'))
    await waitFor(() => {
      expect(screen.getByText('Item 1')).toBeInTheDocument()
      expect(screen.getByText('Item 2')).toBeInTheDocument()
    })
    expect(screen.getByRole('separator')).toHaveAttribute(
      'data-part',
      'separator',
    )
  })

  test('Menu is Menu.Root, which renders no element', () => {
    expect(Menu.Root).toBe(Menu)
    const { container } = render(
      <Menu>
        <Menu.Trigger data-testid="trigger">Trigger</Menu.Trigger>
      </Menu>,
    )
    expect(container.firstElementChild).toBe(screen.getByTestId('trigger'))
  })

  test('Menu.Trigger asChild renders the child as the trigger', () => {
    render(
      <Menu>
        <Menu.Trigger asChild>
          <button data-testid="custom">Open</button>
        </Menu.Trigger>
      </Menu>,
    )

    const trigger = screen.getByRole('button', { name: 'Open' })
    expect(trigger).toBe(screen.getByTestId('custom'))
    expect(trigger).toHaveAttribute('data-scope', 'menu')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
    expect(trigger).toHaveAttribute('aria-haspopup', 'menu')
    expect(trigger.querySelector('button')).toBeNull()
  })

  test('Menu.Trigger without asChild renders its own button', () => {
    render(
      <Menu>
        <Menu.Trigger>Open</Menu.Trigger>
      </Menu>,
    )

    const trigger = screen.getByRole('button', { name: 'Open' })
    expect(trigger.tagName).toBe('BUTTON')
    expect(trigger).toHaveAttribute('data-part', 'trigger')
  })

  test('ContentGroup renders the content inside its positioner', async () => {
    render(
      <Menu>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.ContentGroup data-testid="content" mt="md">
          <Menu.Item value="item_1">Item 1</Menu.Item>
        </Menu.ContentGroup>
      </Menu>,
    )

    await userEvent.click(screen.getByText('Open'))
    const content = await screen.findByRole('menu')
    expect(content).toBe(screen.getByTestId('content'))
    expect(content).toHaveAttribute('data-part', 'content')
    expect(content).toHaveAttribute('data-state', 'open')
    expect(content).toHaveClass('cerberus-mt_md')
    expect(content.parentElement).toHaveAttribute('data-part', 'positioner')
    expect(screen.getByRole('menuitem', { name: 'Item 1' })).toHaveAttribute(
      'data-part',
      'item',
    )
  })

  test('a Positioner child patches the ContentGroup positioner', async () => {
    render(
      <Menu>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.ContentGroup>
          <Menu.Positioner data-testid="positioner" />
          <Menu.Item value="item_1">Item 1</Menu.Item>
        </Menu.ContentGroup>
      </Menu>,
    )

    await userEvent.click(screen.getByText('Open'))
    const content = await screen.findByRole('menu')
    const positioner = screen.getByTestId('positioner')
    expect(positioner).toHaveAttribute('data-part', 'positioner')
    expect(content.parentElement).toBe(positioner)
    expect(screen.getAllByRole('menuitem')).toHaveLength(1)
  })

  test('onSelect receives the selected item value', async () => {
    const onSelect = mock((_details: MenuSelectionDetails) => {})
    render(
      <Menu onSelect={onSelect}>
        <Menu.Trigger>Open</Menu.Trigger>
        <Menu.ContentGroup>
          <Menu.Item value="edit">Edit</Menu.Item>
          <Menu.Item value="delete">Delete</Menu.Item>
        </Menu.ContentGroup>
      </Menu>,
    )

    await userEvent.click(screen.getByText('Open'))
    await userEvent.click(await screen.findByText('Delete'))
    expect(onSelect).toHaveBeenCalledTimes(1)
    expect(onSelect.mock.calls[0][0].value).toBe('delete')
  })

  test('CheckboxItem is a checkable item styled like an item', async () => {
    function CheckboxMenu() {
      const [checked, setChecked] = useState(false)
      return (
        <Menu closeOnSelect={false}>
          <Menu.Trigger>Open</Menu.Trigger>
          <Menu.ContentGroup>
            <Menu.Item value="plain">Plain</Menu.Item>
            <Menu.CheckboxItem
              value="wrap"
              checked={checked}
              onCheckedChange={setChecked}
            >
              <Menu.ItemIndicator>✓</Menu.ItemIndicator>
              <Menu.ItemText>Word wrap</Menu.ItemText>
            </Menu.CheckboxItem>
          </Menu.ContentGroup>
        </Menu>
      )
    }
    render(<CheckboxMenu />)

    await userEvent.click(screen.getByText('Open'))
    const item = await screen.findByRole('menuitemcheckbox')
    expect(item).toHaveAttribute('data-part', 'item')
    expect(item).toHaveAttribute('aria-checked', 'false')
    // Shares the recipe's `item` slot class with a plain item
    const itemClass = [
      ...screen.getByRole('menuitem', { name: 'Plain' }).classList,
    ].find((c) => c.includes('menu__item'))
    expect(itemClass).toBeDefined()
    expect(item).toHaveClass(itemClass!)

    await userEvent.click(item)
    await waitFor(() => expect(item).toHaveAttribute('aria-checked', 'true'))
  })

  test('RadioItemGroup and RadioItem select a single value', async () => {
    function RadioMenu() {
      const [value, setValue] = useState('asc')
      return (
        <Menu closeOnSelect={false}>
          <Menu.Trigger>Open</Menu.Trigger>
          <Menu.ContentGroup>
            <Menu.RadioItemGroup
              data-testid="radio-group"
              value={value}
              onValueChange={(details) => setValue(details.value)}
            >
              <Menu.ItemGroupLabel>Sort</Menu.ItemGroupLabel>
              <Menu.RadioItem value="asc">
                <Menu.ItemText>Ascending</Menu.ItemText>
              </Menu.RadioItem>
              <Menu.RadioItem value="desc">
                <Menu.ItemText>Descending</Menu.ItemText>
              </Menu.RadioItem>
            </Menu.RadioItemGroup>
          </Menu.ContentGroup>
        </Menu>
      )
    }
    render(<RadioMenu />)

    await userEvent.click(screen.getByText('Open'))
    const [asc, desc] = await screen.findAllByRole('menuitemradio')
    expect(screen.getByTestId('radio-group')).toHaveAttribute(
      'data-part',
      'item-group',
    )
    expect(asc).toHaveAttribute('data-part', 'item')
    expect(asc).toHaveAttribute('aria-checked', 'true')
    expect(desc).toHaveAttribute('aria-checked', 'false')

    await userEvent.click(desc)
    await waitFor(() => {
      expect(desc).toHaveAttribute('aria-checked', 'true')
      expect(asc).toHaveAttribute('aria-checked', 'false')
    })
  })
})
