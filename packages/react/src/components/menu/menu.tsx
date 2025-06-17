import {
  MenuContentEl,
  MenuItemEl,
  MenuItemGroupEl,
  MenuItemGroupLabelEl,
  MenuPositioner,
  MenuRoot,
  MenuSeparatorEl,
  MenuTriggerEl,
  type MenuContentProps,
  type MenuTriggerProps,
} from './primitives'

/**
 * This module contains the Menu named abstractions component.
 * @module @cerberus-design/react/components/menu
 */

/**
 * The root Menu component which controls the menu.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu/dev)
 *
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>Trigger</MenuTrigger>
 * </Menu>
 */
export const Menu = MenuRoot

/**
 * The MenuTrigger component opens/closes the Menu.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu/dev)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 * </Menu>
 */
export function MenuTrigger(props: MenuTriggerProps) {
  return <MenuTriggerEl {...props} asChild />
}

/**
 * The MenuContent component is the container for the menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu/dev)
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
export function MenuContent(props: MenuContentProps) {
  return (
    <MenuPositioner>
      <MenuContentEl {...props} />
    </MenuPositioner>
  )
}

/**
 * The MenuItem component is a single item in the menu.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu/dev)
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
export const MenuItem = MenuItemEl

/**
 * The MenuItemGroup component is a group of menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu/dev)
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
export const MenuItemGroup = MenuItemGroupEl

/**
 * The MenuItemGroupLabel component is the label for a group of menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu/dev)
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
export const MenuGroupLabel = MenuItemGroupLabelEl

/**
 * The MenuSeparator component is a visual divider between menu items.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu/dev)
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
export const MenuSeparator = MenuSeparatorEl
