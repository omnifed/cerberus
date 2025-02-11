'use client'

import type { ComboboxItemProps } from '@ark-ui/react'
import { useCerberusContext } from '../../context/cerberus'
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
  const { icons } = useCerberusContext()
  const { selectChecked: CheckedIcon } = icons

  return (
    <ComboboxParts.Item {...props}>
      <ComboboxParts.ItemIndicator>
        <CheckedIcon />
      </ComboboxParts.ItemIndicator>

      {props.children}
    </ComboboxParts.Item>
  )
}
