import { HStack } from '@/styled-system/jsx'
import {
  Button,
  Menu,
  MenuContent,
  MenuItem,
  MenuTrigger,
} from '@cerberus-design/react'

export function PositioningMenu() {
  return (
    <HStack justify="center" gap="6" w="1/3">
      <LeftMenu />
      <TopMenu />
      <RightMenu />
      <BottomMenu />
    </HStack>
  )
}

function RightMenu() {
  return (
    <Menu
      positioning={{
        placement: 'right',
      }}
    >
      <MenuTrigger>
        <Button>Right</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="item_1">Item 1</MenuItem>
        <MenuItem value="item_2">Item 2</MenuItem>
      </MenuContent>
    </Menu>
  )
}

function LeftMenu() {
  return (
    <Menu
      positioning={{
        placement: 'left',
      }}
    >
      <MenuTrigger>
        <Button>Left</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="item_1">Item 1</MenuItem>
        <MenuItem value="item_2">Item 2</MenuItem>
      </MenuContent>
    </Menu>
  )
}

function TopMenu() {
  return (
    <Menu
      positioning={{
        placement: 'top',
      }}
    >
      <MenuTrigger>
        <Button>Top</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="item_1">Item 1</MenuItem>
        <MenuItem value="item_2">Item 2</MenuItem>
      </MenuContent>
    </Menu>
  )
}

function BottomMenu() {
  return (
    <Menu
      positioning={{
        placement: 'bottom',
      }}
    >
      <MenuTrigger>
        <Button>Bottom</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="item_1">Item 1</MenuItem>
        <MenuItem value="item_2">Item 2</MenuItem>
      </MenuContent>
    </Menu>
  )
}
