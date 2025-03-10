import { Logout, Strawberry } from '@carbon/icons-react'
import {
  Button,
  Menu,
  MenuContent,
  MenuGroupLabel,
  MenuItem,
  MenuItemGroup,
  MenuSeparator,
  MenuTrigger,
} from '@cerberus-design/react'
import { HStack } from '@cerberus-design/styled-system/jsx'
import { css } from 'styled-system/css'
import Link from 'next/link'

export function BasicMenu() {
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

export function GroupedMenu() {
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

export function NavMenu() {
  return (
    <Menu>
      <MenuTrigger>
        <Button>Nav Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="item_1" asChild>
          <Link href="/">Item 1</Link>
        </MenuItem>
        <MenuItem value="item_2" asChild>
          <Link href="/">Item 2</Link>
        </MenuItem>
        <MenuSeparator />
        <MenuItem value="item_3" asChild>
          <Link
            className={css({
              alignItems: 'center',
              color: 'danger.text.initial',
              colorPalette: 'danger',
              display: 'inline-flex',
              justifyContent: 'space-between',
              w: 'full',
            })}
            href="/"
          >
            Sign out
            <Logout />
          </Link>
        </MenuItem>
      </MenuContent>
    </Menu>
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

export function CustomMenu() {
  return (
    <Menu>
      <MenuTrigger>
        <Button
          className={css({
            color: 'black',
          })}
          palette="warning"
        >
          C.R.E.A.M.
        </Button>
      </MenuTrigger>
      <MenuContent
        className={css({
          bgColor: 'black',
          color: 'yellow',
        })}
      >
        <MenuItem
          className={css({
            colorPalette: 'warning',
            _hover: {
              color: 'black',
            },
          })}
          value="item_1"
        >
          Cash Rules Everything Around Me
        </MenuItem>
        <MenuItem
          className={css({
            colorPalette: 'warning',
            _hover: {
              color: 'black',
            },
          })}
          value="item_2"
        >
          Dolla dolla bills y&apos;all
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}

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

export function OverviewMenu() {
  return (
    <HStack justify="center" gap="6" w="1/3">
      <BasicMenu />
      <GroupedMenu />
      <NavMenu />
    </HStack>
  )
}
