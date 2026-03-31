import { type PropsWithChildren, type ReactNode } from 'react'
import { splitProps } from '../../utils/index'
import { Show } from '../show/show'
import { PopoverParts } from './parts'
import { PopoverRootProps } from './primitives'

export interface PopoverBaseProps extends PopoverRootProps {
  trigger: ReactNode
  anchor?: ReactNode
}

export type PopoverProps = PropsWithChildren<PopoverBaseProps>

function PopoverRoot(props: PopoverRootProps) {
  const [slots, variantProps, ...rootProps] = splitProps(
    props,
    ['trigger', 'anchor', 'children'],
    ['size'],
  )

  return (
    <PopoverParts.Root {...rootProps}>
      <PopoverParts.Trigger asChild>{slots.trigger}</PopoverParts.Trigger>

      <Show when={slots.anchor}>
        {() => <PopoverParts.Anchor>{slots.anchor}</PopoverParts.Anchor>}
      </Show>

      <PopoverParts.Positioner>
        <PopoverParts.Content size={variantProps.size}>
          {slots.children}
        </PopoverParts.Content>
      </PopoverParts.Positioner>
    </PopoverParts.Root>
  )
}

// Public API

export function Popover(props: PopoverProps) {
  return <PopoverRoot {...props} />
}

Popover.Title = PopoverParts.Title
Popover.Description = PopoverParts.Description
Popover.Header = PopoverParts.Header
Popover.Body = PopoverParts.Body
Popover.Footer = PopoverParts.Footer
