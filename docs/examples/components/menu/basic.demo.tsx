'use client'

import { Menu, Strawberry } from '@carbon/icons-react'
import { Button, MenuContent, MenuItem, MenuTrigger } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Trigger</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="item_1">
          <Strawberry />
          Item 1
        </MenuItem>
        <MenuItem value="item_2">
          <Strawberry />
          Item 2
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
