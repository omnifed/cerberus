'use client'

import { Strawberry } from '@carbon/icons-react'
import { Button, Menu } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Menu>
      <Menu.Trigger asChild>
        <Button>Trigger</Button>
      </Menu.Trigger>
      <Menu.ContentGroup>
        <Menu.Item value="item_1">
          <Strawberry />
          Item 1
        </Menu.Item>
        <Menu.Item value="item_2">
          <Strawberry />
          Item 2
        </Menu.Item>
      </Menu.ContentGroup>
    </Menu>
  )
}
