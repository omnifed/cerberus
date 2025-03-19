import { ark, type HTMLArkProps } from '@ark-ui/solid/factory'
import { splitProps } from 'solid-js'
import { cx } from 'styled-system/css'
import { iconButton, type IconButtonVariantProps } from 'styled-system/recipes'

/**
 * This module contains the Icon Button component.
 * @module
 */

export interface IconButtonRawProps extends HTMLArkProps<'button'> {
  /**
   * The aria-label attribute for the icon button.
   */
  ariaLabel: string
}
export type IconButtonProps = IconButtonRawProps & IconButtonVariantProps

/**
 * A component that allows the user to perform actions using an icon
 * @see https://cerberus.digitalu.design/components/icon-button
 */
export function IconButton(props: IconButtonProps) {
  const [{ palette, usage, size }, nativeProps] = splitProps(props, [
    'palette',
    'usage',
    'size',
  ])

  return (
    <ark.button
      {...nativeProps}
      aria-label={nativeProps.ariaLabel ?? 'Icon Button'}
      class={cx(
        props.class,
        iconButton({
          palette,
          usage,
          size,
        }),
      )}
    />
  )
}
