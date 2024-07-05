import type { HTMLAttributes, PropsWithChildren } from 'react'
import { Close } from '@cerberus/icons'
import { Show } from './Show'
import { css, cx } from '@cerberus/styled-system/css'
import { iconButton, tag } from '@cerberus/styled-system/recipes'
import type { ConditionalValue } from '@cerberus/styled-system/types'

/**
 * This module contains the tag component.
 * @module
 */

export type NonActionablePalette = ConditionalValue<
  'neutral' | 'info' | 'success' | 'warning' | 'danger'
>
export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  palette?: NonActionablePalette
  shape?: 'rounded' | 'pill'
  usage?: 'filled' | 'outline'
}
export interface ClickableTagProps extends HTMLAttributes<HTMLSpanElement> {
  palette?: NonActionablePalette
  shape?: 'pill'
  onClick: () => void
  usage?: 'filled'
}

/**
 * The Tag component is used to display a meta descriptions.
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function Tag(
  props: PropsWithChildren<TagProps | ClickableTagProps>,
): JSX.Element {
  const { palette, shape: initShape, onClick, usage, ...nativeProps } = props
  const isClosable = Boolean(onClick)
  const shape = isClosable ? 'pill' : initShape
  const closableStyles = isClosable
    ? css({
        bgColor: 'action.bg.active',
        color: 'action.text.initial',
        paddingInlineEnd: '0',
      })
    : ''

  return (
    <span
      {...nativeProps}
      className={cx(
        nativeProps.className,
        tag({
          palette,
          shape,
          usage,
        }),
        closableStyles,
      )}
    >
      {props.children}

      <Show when={isClosable}>
        <button
          aria-label="Close"
          className={iconButton({
            palette: 'action',
            usage: 'filled',
            size: 'sm',
          })}
          onClick={onClick}
        >
          <Close />
        </button>
      </Show>
    </span>
  )
}
