'use client'

import { styled } from '@/styled-system/jsx'
import { Logout } from '@carbon/icons-react'
import { Button, Menu } from '@cerberus-design/react'
import Link from 'next/link'

const StyledLink = styled(Link)

export function NavDemo() {
  return (
    <Menu>
      <Menu.Trigger asChild>
        <Button>Nav Menu</Button>
      </Menu.Trigger>
      <Menu.ContentGroup>
        <Menu.Item value="item_1" asChild>
          <Link href="/">Item 1</Link>
        </Menu.Item>
        <Menu.Item value="item_2" asChild>
          <Link href="/">Item 2</Link>
        </Menu.Item>
        <Menu.Separator />
        <Menu.Item value="item_3" asChild>
          <StyledLink
            alignItems="center"
            color="danger.text.initial"
            colorPalette="danger"
            display="inline-flex"
            justifyContent="space-between"
            w="full"
            href="/"
          >
            Sign out
            <Logout />
          </StyledLink>
        </Menu.Item>
      </Menu.ContentGroup>
    </Menu>
  )
}
