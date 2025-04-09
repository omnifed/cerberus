import { ark, type HTMLArkProps } from '@ark-ui/solid/factory'
import { splitProps, type ParentProps } from 'solid-js'
import { css, cx } from 'styled-system/css'
import { tag, type TagVariantProps } from 'styled-system/recipes'
import type { WithCss } from '../types'

/**
 * This module contains the tag component.
 * @module
 */

export type TagProps = HTMLArkProps<'span'> & TagVariantProps & WithCss

/**
 * The Tag component is used to display a meta descriptions.
 * @see https://cerberus.digitalu.design/components/tag
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function Tag(props: ParentProps<TagProps>) {
  const [{ palette, shape, gradient, usage, css: customCss }, nativeProps] =
    splitProps(props, [
      'palette',
      'shape',
      'gradient',
      'onClick',
      'usage',
      'css',
    ])

  return (
    <ark.span
      {...nativeProps}
      class={cx(
        tag({
          gradient,
          palette,
          shape,
          usage,
        }),
        css(customCss),
      )}
    >
      {props.children}
    </ark.span>
  )
}
