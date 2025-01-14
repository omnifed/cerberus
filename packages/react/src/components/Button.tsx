import type { ButtonHTMLAttributes } from 'react'
import { cx } from '@cerberus/styled-system/css'
import {
  button,
  type ButtonVariantProps,
} from '@cerberus/styled-system/recipes'

/**
 * This module contains the Button component.
 * @module
 */

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariantProps

/**
 * A component that allows the user to perform actions
 * @see https://cerberus.digitalu.design/react/button
 */
export function Button(props: ButtonProps): JSX.Element {
  const { palette, usage, shape, size, ...nativeProps } = props
  return (
    <button
      {...nativeProps}
      className={cx(
        nativeProps.className,
        button({
          palette,
          usage,
          shape,
          size,
        }),
      )}
    />
  )
}
