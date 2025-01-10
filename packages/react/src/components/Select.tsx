'use client'

import {
  createListCollection,
  Select as ArkSelect,
  type SelectRootProps,
  type SelectItemProps,
} from '@ark-ui/react/select'
import { select } from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../context/cerberus'
import { Portal } from './Portal'
import type { LabelProps } from './Label'

export interface SelectCollectionItem {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectCollection {
  items: SelectCollectionItem[]
}

export interface BaseSelectProps {
  placeholder?: string
  label: string
  size?: LabelProps['size']
}

export function Select(
  props: SelectRootProps<SelectCollection> & BaseSelectProps,
) {
  const { collection, label, placeholder, size, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow } = icons

  const styles = select({ size })

  return (
    <ArkSelect.Root
      className={styles.root}
      collection={collection}
      {...rootProps}
    >
      <ArkSelect.Label className={styles.label}>{label}</ArkSelect.Label>

      <ArkSelect.Control className={styles.control}>
        <ArkSelect.Trigger className={styles.trigger}>
          <ArkSelect.ValueText placeholder={placeholder} />
          <ArkSelect.Indicator className={styles.indicator}>
            <SelectArrow />
          </ArkSelect.Indicator>
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
  item: SelectCollectionItem
  size?: LabelProps['size']
}

export function Option(props: OptionProps) {
  const { size, item, ...itemProps } = props

  const { icons } = useCerberusContext()
  const { selectChecked: CheckedIcon } = icons

  const styles = select({ size })

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

export { createListCollection }
