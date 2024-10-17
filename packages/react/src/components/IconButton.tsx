import type { ButtonHTMLAttributes } from 'react'
import { cx } from '@cerberus/styled-system/css'
import {
  iconButton,
  type IconButtonVariantProps,
} from '@cerberus/styled-system/recipes'

/**
 * This module contains the Icon Button component.
 * @module
 */

export interface IconButtonRawProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The aria-label attribute for the icon button.
   */
  ariaLabel: string
}
export type IconButtonProps = IconButtonRawProps & IconButtonVariantProps

/**
 * A component that allows the user to perform actions using an icon
 * @see https://cerberus.digitalu.design/react/icon-button
 */
export function IconButton(props: IconButtonProps): JSX.Element {
  const { ariaLabel, palette, usage, size, ...nativeProps } = props
  return (
    <button
      {...nativeProps}
      aria-label={ariaLabel ?? 'Icon Button'}
      className={cx(
        nativeProps.className,
        iconButton({
          palette,
          usage,
          size,
        }),
      )}
    />
  )
}
