'use client'

import { Button, Menu } from '@cerberus-design/react'

export function GroupedDemo() {
  return (
    <Menu>
      <Menu.Trigger asChild>
        <Button>Grouped Menu</Button>
      </Menu.Trigger>
      <Menu.ContentGroup>
        <Menu.ItemGroup>
          <Menu.ItemGroupLabel>Group Label</Menu.ItemGroupLabel>
          <Menu.Separator />
          <Menu.Item value="item_1">Item 1</Menu.Item>
          <Menu.Item value="item_2">Item 2</Menu.Item>
        </Menu.ItemGroup>
      </Menu.ContentGroup>
    </Menu>
  )
}
