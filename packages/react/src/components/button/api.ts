import { ButtonEl, ButtonIcon } from './button'
import { ButtonProvider } from './context'
import { ButtonRoot, ButtonGroup } from './primitives'

/**
 * ## Button
 *
 * The `Button` component provides a visual indicator for a user to make an
 * action of sorts, commonly used in forms, menus, and popovers.
 *
 * For a customizable Button, use the `Button` object to access the
 * individual primitives of the Button component, style props, or slots.
 *
 * ## Slots
 *
 * | Slot | Description |
 * |------|-------------|
 * | `Root` | The root element of the Button component. |
 * | `Indicator` | An optional visual indicator (e.g., icon) that optionally displays a spinner when pending. |
 * | `Group` | A flex row that spaces Buttons in a preferred manner. |
 * | `Provider` | The Context Provider used for the Button which holds the `pending` state |
 *
 * ## Reference
 *  @see [Button Docs](https://cerberus.digitalu.design/docs/components/button)
 */
export const Button = Object.assign(ButtonEl, {
  Provider: ButtonProvider,
  Root: ButtonRoot,
  Indicator: ButtonIcon,
  Group: ButtonGroup,
})

export { useButtonContext } from './context'
