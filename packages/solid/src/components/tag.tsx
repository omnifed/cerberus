import { ark, type HTMLArkProps } from '@ark-ui/solid/factory'
import { splitProps, type ParentProps } from 'solid-js'
import { cx } from 'styled-system/css'
import { tag, type TagVariantProps } from 'styled-system/recipes'

/**
 * This module contains the tag component.
 * @module
 */

export type TagProps = HTMLArkProps<'span'> & TagVariantProps

/**
 * The Tag component is used to display a meta descriptions.
 * @see https://cerberus.digitalu.design/components/tag
 * @example
 * ```tsx
 * <Tag>Tag</Tag>
 * ```
 */
export function Tag(props: ParentProps<TagProps>) {
  const [{ palette, shape, gradient, usage }, nativeProps] = splitProps(props, [
    'palette',
    'shape',
    'gradient',
    'onClick',
    'usage',
  ])

  return (
    <ark.span
      {...nativeProps}
      class={cx(
        nativeProps.class,
        tag({
          gradient,
          palette,
          shape,
          usage,
        }),
      )}
    >
      {props.children}
    </ark.span>
  )
}
