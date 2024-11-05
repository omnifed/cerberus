import type {
  HTMLAttributes,
  MouseEventHandler,
  PropsWithChildren,
} from 'react'
import { Show } from './Show'
import { css, cx } from '@cerberus/styled-system/css'
import {
  iconButton,
  tag,
  type TagVariantProps,
} from '@cerberus/styled-system/recipes'
import { $cerberusIcons } from '../config/defineIcons'

/**
 * This module contains the tag component.
 * @module
 */

export type StaticTagProps = HTMLAttributes<HTMLSpanElement> &
  TagVariantProps & {
    /**
     * The action to be performed when the tag is clicked. Not available when
     * the palette or gradient props are provided.
     */
    onClick?: never
  }

export type ClickableTagProps = HTMLAttributes<HTMLSpanElement> & {
  /**
   * The gradient to apply to the tag. Not available when the onClick prop is
   * provided.
   */
  gradient?: never
  /**
   * The palette to use for the tag. Not available when the onClick prop is
   * provided.
   */
  palette?: never
  /**
   * The action to be performed when the tag is clicked.
   */
  onClick: MouseEventHandler<HTMLSpanElement>
  /**
   * The shape of the tag. Not available when the onClick prop is provided.
   * @type 'pill' | 'rounded'
   * @default 'pill'
   */
  shape?: never
  /**
   * The usage of the tag. Not available when the onClick prop is provided.
   * @type 'filled' | 'outlined'
   * @default 'filled'
   */
  usage?: never
}

export type TagProps = StaticTagProps | ClickableTagProps

/**
 * The Tag component is used to display a meta descriptions.
 * @see https://cerberus.digitalu.design/react/tag
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function Tag(props: PropsWithChildren<TagProps>): JSX.Element {
  const { shape: initShape, gradient, onClick, usage, ...nativeProps } = props
  const palette = props?.palette ?? 'page'
  const isClosable = Boolean(onClick)
  const shape = isClosable ? 'pill' : initShape
  const closableStyles = isClosable ? closableCss : ''
  const { close: Close } = $cerberusIcons

  return (
    <span
      {...nativeProps}
      className={cx(
        nativeProps.className,
        tag({
          gradient,
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

const closableCss = css({
  bgColor: 'action.bg.active',
  color: 'action.text.initial',
  paddingInlineEnd: '0',
})
