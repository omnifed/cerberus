'use client'

import { extractParts } from '../../internal/extract-parts'
import {
  MenuContent,
  MenuPositioner,
  type MenuContentProps,
} from './primitives'

const PARTS = {
  positioner: MenuPositioner,
}

export type MenuContentGroupProps = MenuContentProps

/**
 * The ContentGroup component is an abstraction of the `Menu.Content` primitive
 * that renders the content inside its `Menu.Positioner`, so the menu is placed
 * relative to its trigger (see the `positioning` prop of `Menu`). A direct
 * `Menu.Positioner` child overrides the positioner's props.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/menu)
 * @description [Ark Docs](https://ark-ui.com/docs/components/menu)
 * @example
 * ```tsx
 * <Menu>
 *   <Menu.Trigger asChild>
 *     <Button>Open</Button>
 *   </Menu.Trigger>
 *   <Menu.ContentGroup>
 *     <Menu.Item value="edit">Edit</Menu.Item>
 *     <Menu.Item value="delete">Delete</Menu.Item>
 *   </Menu.ContentGroup>
 * </Menu>
 * ```
 */
export function MenuContentGroup(props: MenuContentGroupProps) {
  const { children, ...contentProps } = props
  const { parts, content } = extractParts(children, PARTS)

  // The content always renders inside the positioner: a positioner child only
  // patches props, its own children are ignored
  return (
    <MenuPositioner {...parts.positioner}>
      <MenuContent {...contentProps}>{content}</MenuContent>
    </MenuPositioner>
  )
}
