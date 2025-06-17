'use client'

import { ark, type HTMLArkProps } from '@ark-ui/react/factory'
import type { MouseEventHandler, PropsWithChildren } from 'react'
import { css, cx } from 'styled-system/css'
import { tag, type TagVariantProps } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import { IconButton } from '../icon-button/index'
import { Show } from '../show/show'

/**
 * This module contains the tag component.
 * @module
 */

export type StaticTagProps = HTMLArkProps<'span'> &
  TagVariantProps & {
    /**
     * The action to be performed when the tag is clicked. Not available when
     * the palette or gradient props are provided.
     */
    onClick?: never
  }

export type ClickableTagProps = HTMLArkProps<'span'> & {
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
export function Tag(props: PropsWithChildren<TagProps>) {
  const { shape: initShape, gradient, onClick, usage, ...nativeProps } = props
  const palette = props?.palette ?? 'page'
  const isClosable = Boolean(onClick)
  const shape = isClosable ? 'pill' : initShape
  const closableStyles = isClosable ? closableCss : ''
  const { icons } = useCerberusContext()
  const { close: Close } = icons

  return (
    <ark.span
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
        <IconButton
          ariaLabel="Close"
          onClick={onClick}
          palette="action"
          usage="filled"
          size="sm"
        >
          <Close />
        </IconButton>
      </Show>
    </ark.span>
  )
}

const closableCss = css({
  bgColor: 'action.bg.active',
  color: 'action.text.initial',
  paddingInlineEnd: '0',
})
