import {
  Fieldset,
  type FieldsetHelperTextProps,
  type FieldsetLegendProps,
  type FieldsetRootProps,
} from '@ark-ui/react/fieldset'
import { cx } from '@cerberus/styled-system/css'
import { fieldset } from '@cerberus/styled-system/recipes'

/**
 * This module contains all the primitives of the Fieldset component.
 * @module 'react/fieldset'
 */

/**
 * The context & container for the Fieldset components.
 * @description [Fieldset Docs](https://cerberus.digitalu.design/react/fieldset)
 * @description [Primitive Docs](https://ark-ui.com/react/docs/components/fieldset)
 */
export function FieldsetRoot(props: FieldsetRootProps) {
  const styles = fieldset()
  return (
    <Fieldset.Root {...props} className={cx(styles.root, props.className)} />
  )
}

/**
 * The legend element for the Fieldset group.
 * @description [Fieldset Docs](https://cerberus.digitalu.design/react/fieldset)
 * @description [Primitive Docs](https://ark-ui.com/react/docs/components/fieldset)
 */
export function FieldsetLegend(props: FieldsetLegendProps) {
  const styles = fieldset()
  return (
    <Fieldset.Legend
      {...props}
      className={cx(styles.legend, props.className)}
    />
  )
}

/**
 * The description element for the Fieldset group.
 * @description [Fieldset Docs](https://cerberus.digitalu.design/react/fieldset)
 * @description [Primitive Docs](https://ark-ui.com/react/docs/components/fieldset)
 */
export function FieldsetHelperText(props: FieldsetHelperTextProps) {
  const styles = fieldset()
  return (
    <Fieldset.HelperText
      {...props}
      className={cx(styles.helperText, props.className)}
    />
  )
}

/**
 * The error text element for the Fieldset group.
 * @description [Fieldset Docs](https://cerberus.digitalu.design/react/fieldset)
 * @description [Primitive Docs](https://ark-ui.com/react/docs/components/fieldset)
 */
export function FieldsetErrorText(props: FieldsetHelperTextProps) {
  const styles = fieldset()
  return (
    <Fieldset.ErrorText
      {...props}
      className={cx(styles.errorText, props.className)}
    />
  )
}
