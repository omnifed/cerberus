import type { HTMLAttributes, PropsWithChildren } from 'react'
import { Close } from '@cerberus/icons'
import { type Sentiment } from '@cerberus/panda-preset'
import { Show } from './Show'
import { css, cx } from '@cerberus/styled-system/css'
import { iconButton, tag } from '@cerberus/styled-system/recipes'

/**
 * This module contains the tag component.
 * @module
 */

export interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  palette?: Sentiment
  shape?: 'rounded' | 'pill'
  usage?: 'filled' | 'outline'
}
export interface ClickableTagProps extends HTMLAttributes<HTMLSpanElement> {
  palette?: Sentiment
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
  const {
    palette: initPalette,
    shape: initShape,
    onClick,
    usage,
    ...nativeProps
  } = props
  const isClosable = Boolean(onClick)
  const shape = isClosable ? 'pill' : initShape
  const palette = isClosable ? 'action' : initPalette
  const closableStyles = isClosable
    ? css({
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
          })}
          onClick={onClick}
        >
          <Close />
        </button>
      </Show>
    </span>
  )
}
