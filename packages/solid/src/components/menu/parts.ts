import type { JSX } from 'solid-js'
import {
  MenuItemGroupLabel,
  type MenuContentProps,
  type MenuItemGroupLabelProps,
  type MenuItemGroupProps,
  type MenuItemProps,
  type MenuRootProps,
  type MenuSeparatorProps,
  type MenuTriggerProps,
} from '@ark-ui/solid/menu'
import {
  MenuContent,
  MenuItem,
  MenuItemGroup,
  MenuRoot,
  MenuSeparator,
  MenuTrigger,
} from './primitives'

/**
 * This module contains the parts of the Button component.
 * @module 'button/parts'
 */

interface MenuPartsValue {
  /**
   * The context provider of the button.
   */
  Root: (props: MenuRootProps) => JSX.Element
  /**
   * The trigger that toggles the Menu.
   */
  Trigger: (props: MenuTriggerProps) => JSX.Element
  /**
   * The menu content.
   */
  Content: (props: MenuContentProps) => JSX.Element
  /**
   * The container for menu items.
   */
  ItemGroup: (props: MenuItemGroupProps) => JSX.Element
  /**
   * A menu item label.
   */
  ItemGroupLabel: (props: MenuItemGroupLabelProps) => JSX.Element
  /**
   * A menu item.
   */
  Item: (props: MenuItemProps) => JSX.Element
  /**
   * A menu item separator line.
   */
  Separator: (props: MenuSeparatorProps) => JSX.Element
}

/**
 * An Object containing the parts of the Button component. For users that
 * prefer Object component syntax.
 *
 * @remarks
 *
 * When using object component syntax, you import the MenuParts object and
 * the entire family of components vs. only what you use.
 */
export const Menu: MenuPartsValue = {
  Root: MenuRoot,
  Trigger: MenuTrigger,
  Content: MenuContent,
  ItemGroup: MenuItemGroup,
  ItemGroupLabel: MenuItemGroupLabel,
  Item: MenuItem,
  Separator: MenuSeparator,
}
