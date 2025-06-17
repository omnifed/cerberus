'use client'

import { useCerberusContext } from '../../context/cerberus'
import { SelectParts } from './parts'
import type { SelectItemProps } from './primitives'
import type { SelectCollectionItem } from './select'

/**
 * This module contains the Option component for the Select dropdown.
 * @module 'react/select/option'
 */

export interface OptionProps extends SelectItemProps {
  /**
   * The CollectionListItem to be displayed in the dropdown list.
   */
  item: SelectCollectionItem
}

/**
 * The Option component is used to render an individual item in the Select
 * dropdown. It is an abstraction of the Select Item, ItemText, and
 * ItemIndicator primitives that also displays a Checked icon when the item is
 * selected.
 *
 * @definition [Select docs](https://cerberus.digitalu.design/react/select/dev)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 */
export function Option(props: OptionProps) {
  const { item, ...itemProps } = props
  const { icons } = useCerberusContext()
  const { selectChecked: CheckedIcon } = icons

  return (
    <SelectParts.Item {...itemProps} item={item}>
      <SelectParts.ItemText>{item?.label}</SelectParts.ItemText>
      <SelectParts.ItemIndicator>
        <CheckedIcon />
      </SelectParts.ItemIndicator>
    </SelectParts.Item>
  )
}
