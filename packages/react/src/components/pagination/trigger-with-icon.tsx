'use client'

import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import type { GroupProps } from '../group/index'
import { IconButtonRoot } from '../icon-button/index'
import {
  PaginationNextTrigger,
  PaginationPrevTrigger,
  type PaginationNextTriggerProps,
  type PaginationPrevTriggerProps,
} from './primitives'

interface TriggerWithIconOptions {
  /**
   * The layout of the Group the trigger renders in. `attached` renders an
   * `outlined-subtle` IconButton so it matches the attached items.
   * @default 'default'
   */
  layout?: GroupProps['layout']
}

export type PaginationPrevTriggerWithIconProps = Omit<
  PaginationPrevTriggerProps,
  'asChild' | keyof IconButtonVariantProps
> &
  IconButtonVariantProps &
  TriggerWithIconOptions

export type PaginationNextTriggerWithIconProps = Omit<
  PaginationNextTriggerProps,
  'asChild' | keyof IconButtonVariantProps
> &
  IconButtonVariantProps &
  TriggerWithIconOptions

/** v1 rendered the triggers as `outlined-subtle` only in an attached Group */
function getLayoutVariants(
  layout: GroupProps['layout'],
): IconButtonVariantProps {
  return {
    shape: 'square',
    ...(layout === 'attached' && { usage: 'outlined-subtle' }),
  }
}

/**
 * The PrevTriggerWithIcon component is an abstraction of
 * `Pagination.PrevTrigger` rendered as a square IconButton with the Cerberus
 * `calendarPrev` icon. Its accessible name comes from Zag ("previous page",
 * see the root's `translations`). IconButton variant props (`size`, `usage`,
 * `palette`, `shape`) style the button; other props go to the trigger.
 * Children replace the icon.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @description [Ark Docs](https://ark-ui.com/docs/components/pagination)
 * @example
 * ```tsx
 * <Pagination.Root count={100} pageSize={10}>
 *   <Pagination.PrevTriggerWithIcon size="sm" />
 * </Pagination.Root>
 * ```
 */
export function PaginationPrevTriggerWithIcon(
  props: PaginationPrevTriggerWithIconProps,
) {
  const { children, layout, ...rest } = props
  const [variantProps, triggerProps] = iconButton.splitVariantProps(rest)
  const { icons } = useCerberusContext()
  const { calendarPrev: Icon } = icons

  return (
    <PaginationPrevTrigger {...triggerProps} asChild>
      <IconButtonRoot {...getLayoutVariants(layout)} {...variantProps}>
        {children ?? <Icon />}
      </IconButtonRoot>
    </PaginationPrevTrigger>
  )
}

/**
 * The NextTriggerWithIcon component is an abstraction of
 * `Pagination.NextTrigger` rendered as a square IconButton with the Cerberus
 * `calendarNext` icon. Its accessible name comes from Zag ("next page", see
 * the root's `translations`). IconButton variant props (`size`, `usage`,
 * `palette`, `shape`) style the button; other props go to the trigger.
 * Children replace the icon.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/pagination)
 * @description [Ark Docs](https://ark-ui.com/docs/components/pagination)
 * @example
 * ```tsx
 * <Pagination.Root count={100} pageSize={10}>
 *   <Pagination.NextTriggerWithIcon size="sm" />
 * </Pagination.Root>
 * ```
 */
export function PaginationNextTriggerWithIcon(
  props: PaginationNextTriggerWithIconProps,
) {
  const { children, layout, ...rest } = props
  const [variantProps, triggerProps] = iconButton.splitVariantProps(rest)
  const { icons } = useCerberusContext()
  const { calendarNext: Icon } = icons

  return (
    <PaginationNextTrigger {...triggerProps} asChild>
      <IconButtonRoot {...getLayoutVariants(layout)} {...variantProps}>
        {children ?? <Icon />}
      </IconButtonRoot>
    </PaginationNextTrigger>
  )
}
