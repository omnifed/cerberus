import {
  Tooltip as ArkTooltip,
  type TooltipContentProps,
} from '@ark-ui/react/tooltip'
import { cx } from '@cerberus/styled-system/css'
import { tooltip } from '@cerberus/styled-system/recipes'
import type { ReactNode } from 'react'

/**
 * This module contains the Tooltip component.
 * @module Tooltip
 */

export interface TooltipProps {
  /**
   * The text content to display in the tooltip.
   */
  content: ReactNode
  /**
   * The position of the tooltip relative to the trigger element.
   */
  position?: 'top' | 'right' | 'bottom' | 'left'
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
export function Tooltip(props: TooltipProps & TooltipContentProps) {
  const { content, children, ...nativeProps } = props
  const styles = tooltip()
  const position = {
    placement: props.position || 'top',
  }

  return (
    <ArkTooltip.Root openDelay={400} positioning={position}>
      <ArkTooltip.Trigger className={styles.trigger}>
        {children}
      </ArkTooltip.Trigger>

      <ArkTooltip.Positioner>
        <ArkTooltip.Content
          {...nativeProps}
          className={cx(nativeProps.className, styles.content)}
        >
          <ArkTooltip.Arrow className={styles.arrow}>
            <ArkTooltip.ArrowTip className={styles.arrowTip} />
          </ArkTooltip.Arrow>

          {content}
        </ArkTooltip.Content>
      </ArkTooltip.Positioner>
    </ArkTooltip.Root>
  )
}
