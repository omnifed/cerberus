import type { HTMLAttributes, PropsWithChildren } from 'react'
import { Close } from '@cerberus/icons'
import { Show } from './Show'
import { css, cx } from '@cerberus/styled-system/css'
import { iconButton, tag } from '@cerberus/styled-system/recipes'
import type { RecipeVariantProps } from '@cerberus/styled-system/types'

/**
 * This module contains the tag component.
 * @module
 */

export type TagRecipeProps = RecipeVariantProps<typeof tag>

export type StaticTagProps = HTMLAttributes<HTMLSpanElement> &
  TagRecipeProps & {
    onClick?: never
  }

export type ClickableTagProps = HTMLAttributes<HTMLSpanElement> & {
  gradient?: never
  palette?: never
  onClick: () => void
  shape: 'pill'
  usage: 'filled'
}

export type TagProps = StaticTagProps | ClickableTagProps

/**
 * The Tag component is used to display a meta descriptions.
 * @definition [Tag docs](https://cerberus.digitalu.design/react/tags)
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function Tag(props: PropsWithChildren<TagProps>): JSX.Element {
  const { shape: initShape, gradient, onClick, usage, ...nativeProps } = props
  const palette = props?.palette ?? 'neutral'
  const isClosable = Boolean(onClick)
  const shape = isClosable ? 'pill' : initShape
  const closableStyles = isClosable ? closableCss : ''

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
