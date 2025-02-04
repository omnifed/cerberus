'use client'

import type { SelectItemProps, SelectRootProps } from '@ark-ui/react/select'
import { type SelectVariantProps } from '@cerberus/styled-system/recipes'
import { HStack } from '@cerberus/styled-system/jsx'
import { useCerberusContext } from '../../context/cerberus'
import { Portal } from '../Portal'
import { Show } from '../Show'
import { SelectParts } from './parts'

/**
 * This module contains the Select components.
 * @module 'react/select'
 */

export interface SelectCollectionItem {
  /**
   * What is displayed in the dropdown list.
   */
  label: string
  /**
   * The value of the selected item used in the form.
   */
  value: string
  /**
   * If the item is disabled.
   */
  disabled?: boolean
}

export interface SelectCollection {
  /**
   * The items to be displayed in the dropdown list.
   */
  items: SelectCollectionItem[]
}

export interface BaseSelectProps {
  /**
   * The placeholder text when no option is selected.
   */
  placeholder?: string
}

export type SelectProps = SelectRootProps<SelectCollectionItem> &
  BaseSelectProps &
  SelectVariantProps

/**
 * The Select component is a dropdown list that allows users to select an
 * option from a list.
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 * @example
 * ```tsx
 * import { Select, Option, createListCollection } from '@cerberus-design/react'
 *
 * export function SelectBasicPreview() {
 *  const collection = createListCollection({
 *   items: [
 *    { label: 'Hades', value: 'hades' },
 *    { label: 'Persephone', value: 'persephone' },
 *    { label: 'Zeus', value: 'zeus', disabled: true },
 *   ]
 *  })
 *
 *  return (
 *   <Select
 *    collection={collection}
 *    label="Select Relative"
 *    placeholder="Choose option"
 *   >
 *   {collection.items.map((item) => (
 *    <Option key={item.value} item={item} />
 *   ))}
 *  </Select>
 *  )
 * }
 */
export function Select(props: SelectProps) {
  const { collection, placeholder, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow, invalid: InvalidIcon } = icons

  return (
    <SelectParts.Root collection={collection} {...rootProps}>
      <SelectParts.Control>
        <SelectParts.Trigger>
          <SelectParts.ValueText placeholder={placeholder} />

          <HStack>
            <Show when={props.invalid}>
              <InvalidIcon data-part="invalid-icon" />
            </Show>
            <SelectParts.Indicator>
              <SelectArrow />
            </SelectParts.Indicator>
          </HStack>
        </SelectParts.Trigger>
      </SelectParts.Control>

      <Portal>
        <SelectParts.Positioner>
          <SelectParts.Content size={rootProps.size}>
            {props.children}
          </SelectParts.Content>
        </SelectParts.Positioner>
      </Portal>

      <SelectParts.HiddenSelect />
    </SelectParts.Root>
  )
}

export interface OptionProps extends SelectItemProps {
  /**
   * The CollectionListItem to be displayed in the dropdown list.
   */
  item: SelectCollectionItem
}

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
