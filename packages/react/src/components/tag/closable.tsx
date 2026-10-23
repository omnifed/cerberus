'use client'

import { Box } from 'styled-system/jsx'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton, type IconButtonProps } from '../icon-button'
import { Show } from '../show/show'
import { ClosableTagProps, ClosableTagRoot } from './primitives'

export function ClosableTag(props: ClosableTagProps) {
  const { onClick, children, pending, palette, ...tagProps } = props

  const { icons } = useCerberusContext()
  const { close: Close } = icons

  return (
    <ClosableTagRoot data-palette={palette} palette={palette} {...tagProps}>
      <Show when={pending} fallback={children}>
        {() => (
          <Box aria-busy bgColor="secondaryAction.bg.hover" rounded="xs">
            {children}
          </Box>
        )}
      </Show>

      <IconButton
        ariaLabel="Close tag"
        disabled={pending}
        onClick={onClick}
        palette={palette as IconButtonProps['palette']}
        usage="filled"
        size="xs"
      >
        <Close />
      </IconButton>
    </ClosableTagRoot>
  )
}
