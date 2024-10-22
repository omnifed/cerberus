'use client'

import { css, cx } from '@cerberus/styled-system/css'
import type { HTMLAttributes } from 'react'
import { useFieldContext } from '../context/field'

/**
 * This module contains the Fieldset component.
 * @module Fieldset
 */

export type LegendProps = HTMLAttributes<HTMLLegendElement>

/**
 * A component to provide a global label for a group of related elements in a form (for accessibility).
 * @memberof Fieldset
 * @see https://cerberus.digitalu.com/react/fieldset
 * @description [A11y Form Checklist](https://www.a11yproject.com/checklist/#forms)
 * @description [MDN Web Docs: Legend](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/legend)
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
 *          <Label htmlFor="yes">Yes</Label>
 *        </Field>
 *      </Hstack>
 *      <Hstack>
 *        <Field>
 *         <Radio id="no" name="cats" value="no" />
 *         <Label htmlFor="no">No</Label>
 *        </Field>
 *      </Hstack>
 *     </Fieldset>
 *    </form>
 *   )
 * }
 */
export function Legend(props: LegendProps) {
  const { invalid, ...formState } = useFieldContext()

  return (
    <legend
      {...props}
      {...formState}
      {...(invalid && { 'aria-invalid': true })}
      className={cx(
        props.className,
        css({
          textStyle: 'label-sm',
        }),
      )}
    />
  )
}
