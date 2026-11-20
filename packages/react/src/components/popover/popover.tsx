'use client'

import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import { Portal } from '../portal/index'
import { Show } from '../show/show'
import {
  PopoverArrow,
  PopoverArrowTip,
  PopoverContent,
  PopoverPositioner,
  PopoverRoot,
  PopoverTrigger,
  type PopoverRootProps,
} from './primitives'

const PARTS = {
  trigger: PopoverTrigger,
  positioner: PopoverPositioner,
  content: PopoverContent,
  arrow: PopoverArrow,
  arrowTip: PopoverArrowTip,
}

export type PopoverProps = PopoverRootProps & {
  /**
   * The element that toggles the popover. It is rendered as the trigger
   * (`Popover.Trigger asChild`), so pass a single element such as a `Button`.
   */
  trigger?: ReactNode
  /**
   * Set to `arrow` to show an arrow tip pointing at the trigger.
   * @default 'default'
   */
  usage?: 'default' | 'arrow'
}

/**
 * The Popover component is an abstraction of the primitives that renders the
 * `trigger` element as the trigger, then the positioner and the content, with
 * an arrow tip when `usage="arrow"`. The positioner is portalled when
 * `positioning` is set. Non-part children render inside the content; direct
 * `Popover.Trigger`, `Popover.Positioner`, `Popover.Content`, `Popover.Arrow`
 * or `Popover.ArrowTip` children override that part. A `Popover.Trigger` or
 * `Popover.Content` child with children replaces its default content, and a
 * `Popover.Arrow` or `Popover.ArrowTip` child shows the arrow.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/popover)
 * @description [Ark Docs](https://ark-ui.com/docs/components/popover)
 * @example
 * ```tsx
 * <Popover trigger={<Button>Open</Button>} size="lg">
 *   <Popover.Header>
 *     <Popover.Title>Title</Popover.Title>
 *   </Popover.Header>
 *   <Popover.Body>Content</Popover.Body>
 * </Popover>
 * ```
 */
export function PopoverEl(props: PopoverProps) {
  const { trigger, usage, children, ...rootProps } = props
  const { parts, content } = extractParts(children, PARTS)

  const { children: triggerChildren, ...triggerOverrideProps } =
    parts.trigger ?? {}
  const { children: _positionerChildren, ...positionerOverrideProps } =
    parts.positioner ?? {}
  const { children: contentChildren, ...contentOverrideProps } =
    parts.content ?? {}
  const { children: arrowChildren, ...arrowOverrideProps } = parts.arrow ?? {}

  const showArrow =
    usage === 'arrow' || parts.arrow != null || parts.arrowTip != null

  const positioner = (
    <PopoverPositioner {...positionerOverrideProps}>
      <PopoverContent {...contentOverrideProps}>
        <Show when={showArrow}>
          {() => (
            <PopoverArrow {...arrowOverrideProps}>
              {arrowChildren ?? <PopoverArrowTip {...parts.arrowTip} />}
            </PopoverArrow>
          )}
        </Show>

        {contentChildren ?? content}
      </PopoverContent>
    </PopoverPositioner>
  )

  return (
    <PopoverRoot {...rootProps}>
      <Show when={triggerChildren != null}>
        {() => (
          <PopoverTrigger {...triggerOverrideProps}>
            {triggerChildren}
          </PopoverTrigger>
        )}
      </Show>
      <Show when={triggerChildren == null && trigger != null}>
        {() => (
          <PopoverTrigger asChild {...triggerOverrideProps}>
            {trigger}
          </PopoverTrigger>
        )}
      </Show>

      {rootProps.positioning ? <Portal>{positioner}</Portal> : positioner}
    </PopoverRoot>
  )
}
