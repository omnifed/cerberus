'use client'

import {
  Select as ArkSelect,
  createListCollection,
  type SelectRootProps,
  type SelectItemProps,
  type SelectItemGroupProps,
  type SelectItemGroupLabelProps,
  type ListCollection,
  type SelectValueChangeDetails,
} from '@ark-ui/react/select'
import {
  select,
  type SelectVariantProps,
} from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'
import { HStack } from '@cerberus/styled-system/jsx'
import { useCerberusContext } from '../context/cerberus'
import { Portal } from './Portal'
import { Show } from './Show'
import { Text } from './Text'

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
  /**
   * The label of the select.
   */
  label: string
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
  const { collection, label, placeholder, size, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow, invalid: InvalidIcon } = icons

  const styles = select({ size })

  return (
    <ArkSelect.Root
      className={styles.root}
      collection={collection}
      {...rootProps}
    >
      <ArkSelect.Label className={styles.label}>
        {label}
        <Show when={props.required}>
          <Text as="span" color="page.text.100">
            (required)
          </Text>
        </Show>
      </ArkSelect.Label>

      <ArkSelect.Control className={styles.control}>
        <ArkSelect.Trigger className={styles.trigger}>
          <ArkSelect.ValueText placeholder={placeholder} />

          <HStack>
            <Show when={props.invalid}>
              <InvalidIcon data-part="invalid-icon" />
            </Show>
            <ArkSelect.Indicator className={styles.indicator}>
              <SelectArrow />
            </ArkSelect.Indicator>
          </HStack>
        </ArkSelect.Trigger>
      </ArkSelect.Control>

      <Portal>
        <ArkSelect.Positioner className={styles.positioner}>
          <ArkSelect.Content className={styles.content}>
            {props.children}
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Portal>

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
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

  const styles = select()

  return (
    <ArkSelect.Item {...itemProps} item={item} className={styles.item}>
      <ArkSelect.ItemText className={styles.itemText}>
        {item?.label}
      </ArkSelect.ItemText>
      <ArkSelect.ItemIndicator className={styles.itemIndicator}>
        <CheckedIcon />
      </ArkSelect.ItemIndicator>
    </ArkSelect.Item>
  )
}

/**
 * The OptionGroup component is a group of options in the dropdown list.
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 * @example
 * ```tsx
 * <OptionGroup>
 *  <OptionGroupLabel>Greek gods</OptionGroupLabel>
 *  ...
 * </OptionGroup>
 * ```
 */
export function OptionGroup(props: SelectItemGroupProps) {
  return <ArkSelect.ItemGroup {...props} />
}

/**
 * The OptionGroupLabel component is the label of the OptionGroup.
 * @definition [Select docs](https://cerberus.digitalu.design/react/select)
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/select)
 * @example
 * ```tsx
 * <OptionGroupLabel>Greek gods</OptionGroupLabel>
 * ```
 */
export function OptionGroupLabel(props: SelectItemGroupLabelProps) {
  const styles = select()
  return (
    <ArkSelect.ItemGroupLabel
      {...props}
      className={cx(props.className, styles.itemGroupLabel)}
    />
  )
}

/**
 * A helper function to create a SelectCollection object.
 * @param collection - An array of SelectCollectionItem objects that matches
 * the following shape:
 * ```ts
 * [{ label: 'Hades', value: 'hades', disabled?: true }]
 * ```
 */
export function createSelectCollection(
  collection: SelectCollectionItem[],
): ListCollection<SelectCollectionItem> {
  return createListCollection({
    items: collection,
  })
}

export type { SelectValueChangeDetails, ListCollection }
