'use client'

import { PropsWithChildren } from 'react'
import { Portal } from '../portal'
import { PopoverParts } from './parts'
import { PopoverRootProps } from './primitives'

interface Props {
  positioning: PopoverRootProps['positioning']
}

export function PlacementContainer(props: PropsWithChildren<Props>) {
  if (!props.positioning) {
    return <PopoverParts.Positioner>{props.children}</PopoverParts.Positioner>
  }

  return (
    <Portal>
      <PopoverParts.Positioner>{props.children}</PopoverParts.Positioner>
    </Portal>
  )
}
