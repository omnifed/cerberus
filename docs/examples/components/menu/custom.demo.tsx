'use client'

import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Menu>
      <MenuTrigger>
        <Button color="black" palette="danger">
          Hades R00lz
        </Button>
      </MenuTrigger>
      <MenuContent bgColor="black" color="danger.text.initial">
        <MenuItem
          colorPalette="warning"
          _hover={{
            color: 'black',
          }}
          value="item_1"
        >
          Hades am I
        </MenuItem>
        <MenuItem
          colorPalette="warning"
          _hover={{
            color: 'black',
          }}
          value="item_2"
        >
          Hades is also where I live
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
