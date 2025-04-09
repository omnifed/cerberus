import {
  Menu,
  type MenuContentProps,
  type MenuItemGroupLabelProps,
  type MenuItemProps,
  type MenuSeparatorProps,
} from '@ark-ui/solid/menu'
import { menu } from 'styled-system/recipes'
import { css, cx } from 'styled-system/css'
import { splitProps } from 'solid-js'
import type { WithCss } from '../types'

/**
 * This module contains the Menu primitives.
 * @module Menu
 */

/**
 * The root Menu component which controls the menu.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>Trigger</MenuTrigger>
 * </Menu>
 */
export const MenuRoot = Menu.Root

/**
 * The MenuTrigger component opens/closes the Menu.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 * </Menu>
 */
export const MenuTrigger = Menu.Trigger

/**
 * The MenuPositioner component is the container for the menu content.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuItem value="item_1">Item 1</MenuItem>
 *   <MenuItem value="item_2">Item 2</MenuItem>
 *  </MenuContent>
 * </Menu>
 */
export const MenuPositioner = Menu.Positioner

/**
 * The MenuContent component is the container for the menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuItem value="item_1">Item 1</MenuItem>
 *   <MenuItem value="item_2">Item 2</MenuItem>
 *  </MenuContent>
 * </Menu>
 */
export function MenuContent(props: MenuContentProps & WithCss) {
  const [{ css: customCss }, contentProps] = splitProps(props, ['css'])
  const menuStyles = menu()
  return (
    <MenuPositioner>
      <Menu.Content
        {...contentProps}
        class={cx(menuStyles.content, css(customCss), contentProps.class)}
      />
    </MenuPositioner>
  )
}

/**
 * The MenuItem component is a single item in the menu.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuItem value="item_1">Item 1</MenuItem>
 *   <MenuItem value="item_2">Item 2</MenuItem>
 *  </MenuContent>
 * </Menu>
 */
export function MenuItem(props: MenuItemProps & WithCss) {
  const [{ css: customCss }, itemProps] = splitProps(props, ['css'])
  const menuStyles = menu()
  return (
    <Menu.Item
      {...itemProps}
      class={cx(menuStyles.item, css(customCss), itemProps.class)}
    />
  )
}

/**
 * The MenuItemGroup component is a group of menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuItemGroup>
 *    <MenuItem value="item_1">Item 1</MenuItem>
 *    <MenuItem value="item_2">Item 2</MenuItem>
 *   </MenuItemGroup>
 *  </MenuContent>
 * </Menu>
 */
export const MenuItemGroup = Menu.ItemGroup

/**
 * The MenuItemGroupLabel component is the label for a group of menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuItemGroup>
 *    <MenuItemGroupLabel>Group Label</MenuItemGroupLabel>
 *    <MenuItem value="item_1">Item 1</MenuItem>
 *    <MenuItem value="item_2">Item 2</MenuItem>
 *   </MenuItemGroup>
 *  </MenuContent>
 * </Menu>
 */
export function MenuGroupLabel(props: MenuItemGroupLabelProps & WithCss) {
  const [{ css: customCss }, groupLabelProps] = splitProps(props, ['css'])
  const menuStyles = menu()
  return (
    <Menu.ItemGroupLabel
      {...groupLabelProps}
      class={cx(
        menuStyles.itemGroupLabel,
        css(customCss),
        groupLabelProps.class,
      )}
    />
  )
}

/**
 * The MenuSeparator component is a visual divider between menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *    <MenuItemGroup>
 *      <MenuGroupLabel>Group Label</MenuGroupLabel>
 *      <MenuSeparator />
 *      <MenuItem value="item_1">Item 1</MenuItem>
 *      <MenuItem value="item_2">Item 2</MenuItem>
 *    </MenuItemGroup>
 *  </MenuContent>
 * </Menu>
 */
export function MenuSeparator(props: MenuSeparatorProps & WithCss) {
  const [{ css: customCss }, separatorProps] = splitProps(props, ['css'])
  const menuStyles = menu()
  return (
    <Menu.Separator
      {...separatorProps}
      class={cx(menuStyles.separator, css(customCss), separatorProps.class)}
    />
  )
}
