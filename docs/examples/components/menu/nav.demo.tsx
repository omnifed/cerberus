import { cerberus } from '@/styled-system/jsx'
import { Logout, Menu } from '@carbon/icons-react'
import {
  Button,
  MenuContent,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
} from '@cerberus-design/react'
import Link from 'next/link'

const StyledLink = cerberus(Link)

export function NavDemo() {
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
        </MenuItem>
      </MenuContent>
    </Menu>
  )
}
