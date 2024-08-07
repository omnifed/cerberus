import type { ButtonHTMLAttributes } from 'react'
import { cx, type RecipeVariantProps } from '@cerberus/styled-system/css'
import { button } from '@cerberus/styled-system/recipes'

/**
 * This module contains the Button component.
 * @module
 */

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  RecipeVariantProps<typeof button>

/**
 * A component that allows the user to perform actions
 * @description https://github.com/omnifed/cerberus/blob/main/packages/react/src/components/Button.tsx
 */
export function Button(props: ButtonProps): JSX.Element {
  const { palette, usage, shape, ...nativeProps } = props
  return (
    <button
      {...nativeProps}
      className={cx(
        nativeProps.className,
        button({
          palette,
          usage,
          shape,
        }),
      )}
    />
  )
}
