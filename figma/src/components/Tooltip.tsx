import type { PropsWithChildren } from 'react'

/**
 * This module is a fake Tooltip to prevent errors in Figma code connect
 * publishing. It should support native elements, but it is not.
 */

interface TooltipProps {
  position: 'top' | 'right' | 'bottom' | 'left'
  text: string
}

export function Tooltip(props: PropsWithChildren<TooltipProps>) {
  return (
    <span aria-label={props.text} data-tooltip data-position={props.position}>
      {props.children}
    </span>
  )
}
