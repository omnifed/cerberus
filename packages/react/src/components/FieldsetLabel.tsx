import { cx } from '@cerberus/styled-system/css'
import { label, type LabelVariantProps } from '@cerberus/styled-system/recipes'
import type { LabelProps } from './Label'

/**
 * This module contains the FieldsetLabel component.
 * @module FieldsetLabel
 */

export type FieldsetLabelProps = LabelProps & LabelVariantProps

/**
 * Used for labeling inputs that are children of a Fieldset group.
 * @memberof Fieldset
 * @see https://cerberus.digitalu.design/react/fieldset
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @example
 * ```tsx
 * import { Fieldset, Legend, Field, Radio, Label } from '@cerberus/react'
 * import { Hstack } from '@cerberus/styled-system/jsx'
 *
 * function SomeForm() {
 *   return (
 *    <form>
 *     <Fieldset>
 *      <Legend>Do you like cats?</Legend>
 *      <Hstack>
 *        <Field>
 *          <Radio id="yes" name="cats" value="yes" />
 *          <FieldsetLabel htmlFor="yes">Yes</FieldsetLabel>
 *        </Field>
 *      </Hstack>
 *      <Hstack>
 *        <Field>
 *         <Radio id="no" name="cats" value="no" />
 *         <FieldsetLabel htmlFor="no">No</FieldsetLabel>
 *        </Field>
 *      </Hstack>
 *     </Fieldset>
 *    </form>
 *   )
 * }
 * ```
 */
export function FieldsetLabel(props: FieldsetLabelProps) {
  const { size, usage, ...nativeProps } = props
  return (
    <label
      {...nativeProps}
      className={cx(
        nativeProps.className,
        label({
          size,
          usage,
        }),
      )}
    />
  )
}
