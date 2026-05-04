import type { ReactNode } from 'react'
import { TooltipParts } from './parts'
import type { TooltipRootProps } from './primitives'
import { TooltipRenderer } from './renderer'

/**
 * This module contains the Tooltip component.
 * @module Tooltip
 */

export interface TooltipProps extends Omit<TooltipRootProps, 'content'> {
  /**
   * The text content to display in the tooltip.
   */
  content: ReactNode
  /**
   * Whether to render the content within a Portal or not. Default is set to **false**.
   */
  portal?: boolean
}

/**
 * The Tooltip component is used to provide additional information about an element when it is hovered over.
 * @definition [Tooltip docs](https://cerberus.digitalu.design/react/tooltip)
 * @example
 * ```tsx
 * <Tooltip content="This is a tooltip">
 *   <Information />
 * </Tooltip>
 */
export function Tooltip(props: TooltipProps) {
  const { content, children, portal, ...rootProps } = props
  const position = {
    placement: props.positioning || 'top',
  }

  return (
    <TooltipParts.Root openDelay={400} positioning={position} {...rootProps}>
      <TooltipParts.Trigger asChild>{children}</TooltipParts.Trigger>

      <TooltipRenderer portal={Boolean(portal)}>
        <TooltipParts.Positioner>
          <TooltipParts.Content>
            <TooltipParts.Arrow>
              <TooltipParts.ArrowTip />
            </TooltipParts.Arrow>
            {content}
          </TooltipParts.Content>
        </TooltipParts.Positioner>
      </TooltipRenderer>
    </TooltipParts.Root>
  )
}
