import { type PropsWithChildren, type ReactNode } from 'react'
import { Show } from '../show/show'
import { PopoverParts } from './parts'
import { PlacementContainer } from './placement-container'
import { PopoverRootProps } from './primitives'

export interface PopoverBaseProps extends PopoverRootProps {
  trigger: ReactNode
  usage?: 'default' | 'arrow'
}

export type PopoverProps = PropsWithChildren<PopoverBaseProps>

function PopoverRoot(props: PopoverProps) {
  const { trigger, anchor, children, size, usage, ...rootProps } = props
  const slots = { trigger, anchor, children }
  const variantProps = { size, usage }

  return (
    <PopoverParts.Root {...rootProps}>
      <PopoverParts.Trigger asChild>{slots.trigger}</PopoverParts.Trigger>

      <PlacementContainer
        positioning={(props as unknown as PopoverRootProps).positioning}
      >
        <PopoverParts.Content size={variantProps.size}>
          <Show when={variantProps.usage === 'arrow'}>
            {() => (
              <PopoverParts.Arrow>
                <PopoverParts.ArrowTip />
              </PopoverParts.Arrow>
            )}
          </Show>

          {slots.children}
        </PopoverParts.Content>
      </PlacementContainer>
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
