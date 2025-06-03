import {
  Checkbox,
  type CheckboxControlProps as ArkCheckboxControlProps,
  type CheckboxGroupProps as ArkCheckboxGroupProps,
  type CheckboxIndicatorProps as ArkCheckboxIndicatorProps,
  type CheckboxLabelProps as ArkCheckboxLabelProps,
  type CheckboxRootProps as ArkCheckboxRootProps,
  type CheckboxHiddenInputProps as ArkCheckboxHiddenInputProps,
} from '@ark-ui/react'
import { checkbox, type CheckboxVariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system'

/**
 * This module contains the Checkbox primitives.
 * @module 'react/checkbox'
 */

const { withSlotRecipe, withNoRecipe } = createCerberusPrimitive(checkbox)

/**
 * Checkbox Root component used to provide the context to all other checkbox
 * primitives.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */

// @ts-expect-error there is a type mismatch here, but it works in practice
export const CheckboxRoot = withSlotRecipe<CheckboxRootProps>(
  Checkbox.Root,
  'root',
)
export type CheckboxRootProps = CerberusPrimitiveProps<ArkCheckboxRootProps>

/**
 * Checkbox Label component used to display the label of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export const CheckboxLabel = withSlotRecipe<CheckboxLabelProps>(
  Checkbox.Label,
  'label',
)
export type CheckboxLabelProps = CerberusPrimitiveProps<
  ArkCheckboxLabelProps & CheckboxVariantProps
>

/**
 * Checkbox Control component used to display the control of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export const CheckboxControl = withSlotRecipe<CheckboxControlProps>(
  Checkbox.Control,
  'control',
)
export type CheckboxControlProps = CerberusPrimitiveProps<
  ArkCheckboxControlProps & CheckboxVariantProps
>

/**
 * Checkbox Indicator component used to display the indicator of the checkbox.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export const CheckboxIndicator = withSlotRecipe<CheckboxIndicatorProps>(
  Checkbox.Indicator,
  'indicator',
)
export type CheckboxIndicatorProps =
  CerberusPrimitiveProps<ArkCheckboxIndicatorProps>

// export function CheckboxIndicator(props: CheckboxIndicatorProps) {
//   const styles = checkbox()
//   return (
//     <Checkbox.Indicator
//       {...props}
//       className={cx(styles.indicator, props.className)}
//     />
//   )
// }

/**
 * Checkbox HiddenInput component used to provide the native checkbox input.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export const CheckboxHiddenInput = withNoRecipe<CheckboxHiddenInputProps>(
  Checkbox.HiddenInput,
)
export type CheckboxHiddenInputProps =
  CerberusPrimitiveProps<ArkCheckboxHiddenInputProps>

/**
 * Checkbox Group is used to group checkboxes together in a consistently styled
 * way.
 * @definition [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @definition [Primitive Docs](https://ark-ui.com/react/docs/components/checkbox)
 */
export const CheckboxGroup = withSlotRecipe<CheckboxGroupProps>(
  Checkbox.Group,
  'group',
)
export type CheckboxGroupProps = CerberusPrimitiveProps<ArkCheckboxGroupProps>
