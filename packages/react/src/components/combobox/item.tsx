import type { ComboboxItemProps } from '@ark-ui/react'
import { ComboboxParts } from './parts'

/**
 * This module contains the ComboboxItemWithIndicator component.
 * @module 'combobox/item'
 */

/**
 * An abstraction of the ComboboxItem component that includes an indicator.
 * @description [Combobox Docs](https://cerberus.digitalu.design/react/combobox)
 * @description [Ark Docs](https://ark-ui.com/react/docs/components/combobox)
 */
export function ComboboxItemWithIndicator(props: ComboboxItemProps) {
  return (
    <ComboboxParts.Item {...props}>
      <ComboboxParts.ItemIndicator />
      {props.children}
    </ComboboxParts.Item>
  )
}
