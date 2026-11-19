'use client'

import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import { Portal } from '../portal/index'
import {
  TooltipArrow,
  TooltipArrowTip,
  TooltipContent,
  TooltipPositioner,
  TooltipRoot,
  type TooltipRootProps,
  TooltipTrigger,
} from './primitives'

const PARTS = {
  trigger: TooltipTrigger,
  positioner: TooltipPositioner,
  content: TooltipContent,
  arrow: TooltipArrow,
  arrowTip: TooltipArrowTip,
}

export interface TooltipProps extends Omit<TooltipRootProps, 'content'> {
  /**
   * The content to display in the tooltip bubble.
   */
  content: ReactNode
  /**
   * Whether to render the positioner and content within a Portal.
   * @default false
   */
  portal?: boolean
}

/**
 * The Tooltip component is an abstraction of the primitives that wraps its
 * child in `Tooltip.Trigger` (with `asChild`) and renders `content` in a
 * positioned bubble with an arrow. It opens on the `top` placement after a
 * 400ms delay unless `positioning` or `openDelay` say otherwise, and renders
 * the bubble in a Portal when `portal` is set. Direct `Tooltip.Trigger`,
 * `Tooltip.Positioner`, `Tooltip.Content`, `Tooltip.Arrow` or
 * `Tooltip.ArrowTip` children override that part. A part child with children
 * replaces its default content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/tooltip)
 * @description [Ark Docs](https://ark-ui.com/docs/components/tooltip)
 * @example
 * ```tsx
 * <Tooltip content="This is a tooltip">
 *   <Information />
 * </Tooltip>
 * ```
 */
export function TooltipEl(props: TooltipProps) {
  const { content, children, portal, positioning, ...rootProps } = props

  const { parts, content: triggerContent } = extractParts(children, PARTS)

  const { children: triggerChildren, ...triggerOverrideProps } =
    parts.trigger ?? {}
  const { children: contentChildren, ...contentOverrideProps } =
    parts.content ?? {}
  const { children: arrowChildren, ...arrowOverrideProps } = parts.arrow ?? {}

  const bubble = (
    <TooltipPositioner {...parts.positioner}>
      <TooltipContent {...contentOverrideProps}>
        <TooltipArrow {...arrowOverrideProps}>
          {arrowChildren ?? <TooltipArrowTip {...parts.arrowTip} />}
        </TooltipArrow>
        {contentChildren ?? content}
      </TooltipContent>
    </TooltipPositioner>
  )

  return (
    <TooltipRoot
      openDelay={400}
      positioning={{ placement: 'top', ...positioning }}
      {...rootProps}
    >
      <TooltipTrigger asChild {...triggerOverrideProps}>
        {triggerChildren ?? triggerContent}
      </TooltipTrigger>

      {portal ? <Portal>{bubble}</Portal> : bubble}
    </TooltipRoot>
  )
}
