'use client'

import { PropsWithChildren } from 'react'
import { Portal } from '../portal'

interface TooltipRendererProps {
  portal: boolean
}

export function TooltipRenderer(props: PropsWithChildren<TooltipRendererProps>) {
  if (props.portal) {
    return <Portal>{props.children}</Portal>
  }

  return <>{props.children}</>
}
