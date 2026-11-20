'use client'

import { Box } from 'styled-system/jsx'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton, type IconButtonProps } from '../buttons/index'
import { Show } from '../show/show'
import { TagClosableRoot, type TagClosableRootProps } from './primitives'

export type ClosableTagProps = Omit<TagClosableRootProps, 'onClick'> & {
  /**
   * When true, disables the close button and marks the content as busy.
   */
  pending?: boolean
  gradient?: never
  /**
   * Called when the close button is clicked.
   */
  onClick?: IconButtonProps['onClick']
}

/**
 * A `Tag.ClosableRoot` with a close `IconButton` (labelled "Close tag") that
 * calls `onClick`. `pending` disables the button.
 * @example
 * ```tsx
 * <Tag.Closable onClick={handleClose}>Tag</Tag.Closable>
 * ```
 */
export function TagClosable(props: ClosableTagProps) {
  const { onClick, children, pending, palette, ...tagProps } = props

  const { icons } = useCerberusContext()
  const { close: Close } = icons

  return (
    <TagClosableRoot data-palette={palette} palette={palette} {...tagProps}>
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
    </TagClosableRoot>
  )
}

/**
 * A closable tag; an alias of `Tag.Closable`.
 * @see {@link TagClosable}
 */
export const ClosableTag = TagClosable
