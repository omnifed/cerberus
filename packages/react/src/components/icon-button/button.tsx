import { IconButtonRoot, type IconButtonRootProps } from './primitives'

/**
 * This module contains the Icon Button component.
 * @module
 */

type NonClipboardIconButtonProps = {
  /**
   * The aria-label attribute for the icon button.
   */
  ariaLabel: string
  clipboard?: never
}

type ClipboardIconButtonProps = {
  ariaLabel?: never
  /**
   * If true, the icon button is used as a clipboard trigger.
   * In this case, the aria-label defaults to "Copy to clipboard".
   */
  clipboard: true
}

export type IconButtonProps = IconButtonRootProps &
  (NonClipboardIconButtonProps | ClipboardIconButtonProps)
/**
 * A component that allows the user to perform actions using an icon
 * @see https://cerberus.digitalu.design/react/icon-button
 */
export function IconButton(props: IconButtonProps) {
  const { ariaLabel, clipboard, ...rootProps } = props
  return (
    <IconButtonRoot
      {...rootProps}
      {...(!clipboard && { 'aria-label': ariaLabel })}
      data-scope="icon-button"
      data-part="root"
    />
  )
}
