import type { CheckboxRootProps } from '@ark-ui/react'
import { type CheckboxVariantProps } from 'styled-system/recipes'
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
 * Checkbox component is an abstraction of the primitives that displays a
 * controlled checkbox with a label.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/react/checkbox)
 * @description [Ark Docs](https://ark-ui.com/docs/components/checkbox)
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
