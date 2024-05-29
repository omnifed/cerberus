import {
  NavMenu,
  NavMenuLink,
  NavMenuList,
  NavMenuTrigger,
} from '@cerberus-design/react'

export function BasicNavMenuPreview() {
  return (
    <NavMenu>
      <NavMenuTrigger controls="basic:nav">Features</NavMenuTrigger>
      <NavMenuList id="basic:nav">
        <NavMenuLink>Something</NavMenuLink>
      </NavMenuList>
    </NavMenu>
  )
}
