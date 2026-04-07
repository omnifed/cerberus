'use client'

import {
  PopoverParts,
  PopoverRootProps,
  Portal,
  useCerberusContext,
} from '@cerberus-design/react'
import { RefObject, type HTMLAttributes, type PropsWithChildren } from 'react'
import { HStack } from 'styled-system/jsx'

export function DGPopover(props: PropsWithChildren<PopoverRootProps>) {
  return <PopoverParts.Root {...props} />
}

export function DGPopoverAnchor(
  props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
) {
  return <PopoverParts.Anchor {...props} asChild />
}

interface DGPopoverContentProps {
  ref: RefObject<HTMLDivElement | null>
}

export function DGPopoverContent(props: DGPopoverContentProps) {
  const { icons } = useCerberusContext()
  const CloseIcon = icons?.close

  return (
    <Portal container={props.ref}>
      <PopoverParts.Positioner>
        <PopoverParts.Content>
          <PopoverParts.CloseTrigger>
            <CloseIcon />
          </PopoverParts.CloseTrigger>

          <PopoverParts.Title>Filter</PopoverParts.Title>
          <PopoverParts.Description>
            Filter the contents by the parameters set below.
          </PopoverParts.Description>

          <HStack gap="md" w="full">
            Add form here
          </HStack>
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </Portal>
  )
}
