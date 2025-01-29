import type { CheckboxRootProps } from '@ark-ui/react'
import { type CheckboxVariantProps } from '@cerberus/styled-system/recipes'
import { Show } from '../Show'
import { Text } from '../Text'
import { CheckboxParts } from './parts'
import { CheckboxIcon } from './checkbox-icon'

/**
 * This module contains the Checkbox component.
 * @module
 */

export type CheckboxProps = CheckboxVariantProps & CheckboxRootProps

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
export function Checkbox(props: CheckboxProps) {
  const { size, children, ...rootProps } = props

  return (
    <CheckboxParts.Root {...rootProps}>
      <CheckboxParts.Control size={size}>
        <CheckboxIcon indeterminate={rootProps.checked === 'indeterminate'} />
      </CheckboxParts.Control>

      <CheckboxParts.Label size={size}>
        {children}
        <Show when={props.required}>
          <Text as="span" data-part="required-indicator">
            (required)
          </Text>
        </Show>
      </CheckboxParts.Label>

      <CheckboxParts.HiddenInput />
    </CheckboxParts.Root>
  )
}
