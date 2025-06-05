import { IconButtonRoot, type IconButtonRootProps } from './primitives'

/**
 * This module contains the Icon Button component.
 * @module
 */

export interface IconButtonProps extends IconButtonRootProps {
  /**
   * The aria-label attribute for the icon button.
   */
  ariaLabel: string
}

/**
 * A component that allows the user to perform actions using an icon
 * @see https://cerberus.digitalu.design/react/icon-button
 */
export function IconButton(props: IconButtonProps) {
  const { ariaLabel, ...rootProps } = props
  return (
    <IconButtonRoot {...rootProps} aria-label={ariaLabel ?? 'Icon Button'} />
  )
}
