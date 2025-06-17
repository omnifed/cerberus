'use client'

import { useCerberusContext } from '../../context/cerberus'
import { Show } from '../show/index'
import { CheckboxParts } from './parts'

/**
 * This module contains the Checkbox Icon component.
 * @module
 */

interface CheckboxIconProps {
  indeterminate?: boolean
}

/**
 * Checkbox component
 * @definition [ARIA Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html#:~:text=Understanding%20SC%202.5.,%3ATarget%20Size%20(Level%20AAA)&text=The%20size%20of%20the%20target,Equivalent)
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @see https://cerberus.digitalu.design/react/checkbox
 * @example
 * ```tsx
 * <Field>
 *   <Checkbox id="legal" checked={checked.legal} onChange={handleChange} />
 * </Field>
 * ```
 */
export function CheckboxIcon(props: CheckboxIconProps) {
  const { icons } = useCerberusContext()
  const { checkbox: CheckIcon, indeterminate: IndeterminateIcon } = icons

  return (
    <CheckboxParts.Indicator indeterminate={props.indeterminate}>
      <Show when={props.indeterminate} fallback={<CheckIcon />}>
        <IndeterminateIcon />
      </Show>
    </CheckboxParts.Indicator>
  )
}
