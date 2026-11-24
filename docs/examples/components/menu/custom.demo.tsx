'use client'

import { Button, Menu } from '@cerberus-design/react'

export function CustomDemo() {
  return (
    <Menu>
      <Menu.Trigger asChild>
        <Button color="black" palette="danger">
          Hades R00lz
        </Button>
      </Menu.Trigger>
      <Menu.ContentGroup bgColor="black" color="danger.text.initial">
        <Menu.Item
          colorPalette="warning"
          _hover={{
            color: 'black',
          }}
          value="item_1"
        >
          Hades am I
        </Menu.Item>
        <Menu.Item
          colorPalette="warning"
          _hover={{
            color: 'black',
          }}
          value="item_2"
        >
          Hades is also where I live
        </Menu.Item>
      </Menu.ContentGroup>
    </Menu>
  )
}
