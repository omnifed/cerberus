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
 * A square or circular button that renders only an icon. Pass an `ariaLabel`
 * (or `clipboard` for a clipboard trigger, labelled "Copy to clipboard").
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/icon-button)
 * @example
 * ```tsx
 * <IconButton ariaLabel="Add item"><Add /></IconButton>
 * ```
 */
export function ButtonIconButton(props: IconButtonProps) {
  const { ariaLabel, clipboard, ...rootProps } = props
  return (
    <IconButtonRoot
      {...rootProps}
      {...(!clipboard && { 'aria-label': ariaLabel })}
    />
  )
}

/**
 * An icon-only button; an alias of `Button.IconButton`.
 * @see {@link ButtonIconButton}
 */
export const IconButton = ButtonIconButton
