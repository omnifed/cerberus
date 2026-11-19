'use client'

import { HStack } from '@/styled-system/jsx'
import { Button, Menu } from '@cerberus-design/react'

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
      <Menu.Trigger asChild>
        <Button>Right</Button>
      </Menu.Trigger>
      <Menu.ContentGroup>
        <Menu.Item value="item_1">Item 1</Menu.Item>
        <Menu.Item value="item_2">Item 2</Menu.Item>
      </Menu.ContentGroup>
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
      <Menu.Trigger asChild>
        <Button>Left</Button>
      </Menu.Trigger>
      <Menu.ContentGroup>
        <Menu.Item value="item_1">Item 1</Menu.Item>
        <Menu.Item value="item_2">Item 2</Menu.Item>
      </Menu.ContentGroup>
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
      <Menu.Trigger asChild>
        <Button>Top</Button>
      </Menu.Trigger>
      <Menu.ContentGroup>
        <Menu.Item value="item_1">Item 1</Menu.Item>
        <Menu.Item value="item_2">Item 2</Menu.Item>
      </Menu.ContentGroup>
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
      <Menu.Trigger asChild>
        <Button>Bottom</Button>
      </Menu.Trigger>
      <Menu.ContentGroup>
        <Menu.Item value="item_1">Item 1</Menu.Item>
        <Menu.Item value="item_2">Item 2</Menu.Item>
      </Menu.ContentGroup>
    </Menu>
  )
}
