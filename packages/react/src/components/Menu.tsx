import { Menu as ArkMenu } from '@ark-ui/react'
import { menu } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'

/**
 * This module contains the Menu component family.
 * @module Menu
 */

const menuStyles = menu()

/**
 * The root Menu component which controls the menu.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>Trigger</MenuTrigger>
 * </Menu>
 */
export const Menu = ArkMenu.Root

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
export function MenuTrigger(props: ArkMenu.TriggerProps) {
  return <ArkMenu.Trigger {...props} asChild />
}

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
export function MenuContent(props: ArkMenu.ContentProps) {
  return (
    <ArkMenu.Positioner>
      <ArkMenu.Content
        {...props}
        className={cx(props.className, menuStyles.content)}
      />
    </ArkMenu.Positioner>
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
export function MenuItem(props: ArkMenu.ItemProps) {
  return (
    <ArkMenu.Item {...props} className={cx(props.className, menuStyles.item)} />
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
export const MenuItemGroup = ArkMenu.ItemGroup

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
export function MenuGroupLabel(props: ArkMenu.ItemGroupLabelProps) {
  return (
    <ArkMenu.ItemGroupLabel
      {...props}
      className={cx(props.className, menuStyles.itemGroupLabel)}
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
export function MenuSeparator(props: ArkMenu.SeparatorProps) {
  return (
    <ArkMenu.Separator
      {...props}
      className={cx(props.className, menuStyles.separator)}
    />
  )
}

/**
 * The MenuCheckboxItem component is a menu item with a checkbox.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuCheckboxItem
 *     checked={checked}
 *     onCheckedChange={setChecked}
 *     value="checked"
 *   >
 *    <MenuItemIndicator>✅</MenuItemIndicator>
 *    <MenuItemText>Check me</MenuItemText>
 *   </MenuCheckboxItem>
 * </MenuContent>
 */
// export function MenuCheckboxItem(props: ArkMenu.CheckboxItemProps) {
//   return (
//     <ArkMenu.CheckboxItem
//       {...props}
//       className={cx(props.className, menuStyles.item)}
//     />
//   )
// }

/**
 * The MenuItemText component is the text for a grouped menu item.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuCheckboxItem
 *     checked={checked}
 *     onCheckedChange={setChecked}
 *     value="checked"
 *   >
 *    <MenuItemText>Item 1</MenuItemText>
 *   </MenuCheckboxItem>
 *  </MenuContent>
 * </Menu>
 */
// export function MenuItemText(props: ArkMenu.ItemTextProps) {
//   return (
//     <ArkMenu.ItemText
//       {...props}
//       className={cx(props.className, menuStyles.itemText)}
//     />
//   )
// }

/**
 * The MenuItemIndicator component is the indicator for a grouped menu item.
 * @definition [Cerberus docs](https://cerberus.digitalu.design/react/menu)
 * @example
 * ```tsx
 * <Menu>
 *  <MenuTrigger>
 *   <Button>Trigger</Button>
 *  </MenuTrigger>
 *  <MenuContent>
 *   <MenuCheckboxItem
 *    checked={checked}
 *    onCheckedChange={setChecked}
 *    value="checked"
 *   >
 *    <MenuItemIndicator>✅</MenuItemIndicator>
 *    <MenuItemText>Check me</MenuItemText>
 *   </MenuCheckboxItem>
 *  </MenuContent>
 */
// export function MenuItemIndicator(props: ArkMenu.ItemIndicatorProps) {
//   return (
//     <ArkMenu.ItemIndicator
//       {...props}
//       className={cx(props.className, menuStyles.itemIndicator)}
//     />
//   )
// }
