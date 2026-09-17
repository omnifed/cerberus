'use client'

import { Menu } from '@carbon/icons-react'
import {
  Button,
  MenuContent,
  MenuGroupLabel,
  MenuItem,
  MenuItemGroup,
  MenuSeparator,
  MenuTrigger,
} from '@cerberus-design/react'

export function GroupedDemo() {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Grouped Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItemGroup>
          <MenuGroupLabel>Group Label</MenuGroupLabel>
          <MenuSeparator />
          <MenuItem value="item_1">Item 1</MenuItem>
          <MenuItem value="item_2">Item 2</MenuItem>
        </MenuItemGroup>
      </MenuContent>
    </Menu>
  )
}
