import type { ButtonHTMLAttributes } from 'react'
import { cx, type RecipeVariantProps } from '@cerberus/styled-system/css'
import { iconButton } from '@cerberus/styled-system/recipes'
import type { Positions } from '../types'

/**
 * This module contains the Icon Button component.
 * @module
 */

export interface IconButtonRawProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  tooltipPosition?: Positions
}
export type IconButtonRecipeProps = RecipeVariantProps<typeof iconButton>
export type IconButtonProps = IconButtonRawProps & IconButtonRecipeProps

/**
 * A component that allows the user to perform actions using an icon
 * @description https://github.com/omnifed/cerberus/blob/main/packages/react/src/components/IconButton.tsx
 */
export function IconButton(props: IconButtonProps): JSX.Element {
  const { ariaLabel, palette, usage, size, ...nativeProps } = props
  return (
    <button
      {...nativeProps}
      data-tooltip
      data-position={props.tooltipPosition ?? 'top'}
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
