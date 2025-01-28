import {
  Checkbox,
  type CheckboxControlProps,
  type CheckboxIndicatorProps,
  type CheckboxLabelProps,
  type CheckboxRootProps,
} from '@ark-ui/react'

/**
 * This module contains the Checkbox primitives.
 * @module 'react/checkbox'
 */

/**
 * Checkbox Root component used to provide the context to all other checkbox
 * primitives.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxRoot(props: CheckboxRootProps) {
  return <Checkbox.Root {...props} />
}

/**
 * Checkbox Label component used to display the label of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxLabel(props: CheckboxLabelProps) {
  return <Checkbox.Label {...props} />
}

/**
 * Checkbox Control component used to display the control of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxControl(props: CheckboxControlProps) {
  return <Checkbox.Control {...props} />
}

/**
 * Checkbox Indicator component used to display the indicator of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxIndicator(props: CheckboxIndicatorProps) {
  return <Checkbox.Indicator {...props} />
}

/**
 * Checkbox HiddenInput component used to provide the native checkbox input.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export function CheckboxHiddenInput(props: CheckboxControlProps) {
  return <Checkbox.HiddenInput {...props} />
}
