import type { ButtonHTMLAttributes } from 'react'
import { cx } from '@cerberus/styled-system/css'
import { iconButton } from '@cerberus/styled-system/recipes'
import type { ButtonProps } from './Button'

/**
 * This module contains the Icon Button component.
 * @module
 */

export type IconButtonUsage = Exclude<ButtonProps['usage'], 'outline'>
export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string
  palette?: ButtonProps['palette']
  usage?: IconButtonUsage
  shape?: 'circle'
  size?: 'sm' | 'lg'
  tooltipPosition?: 'top' | 'bottom' | 'left' | 'right'
}

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
