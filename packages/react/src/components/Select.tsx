'use client'

import {
  createListCollection,
  Select as ArkSelect,
  type SelectRootProps,
  type SelectItemProps,
} from '@ark-ui/react/select'
import { useCerberusContext } from '../context/cerberus'
import { Portal } from './Portal'
import { label, menu } from '@cerberus/styled-system/recipes'
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
  label: string
  size: LabelProps['size']
}

export function Select(
  props: SelectRootProps<SelectCollection> & BaseSelectProps,
) {
  const { collection, size, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow } = icons

  const styles = menu()

  return (
    <ArkSelect.Root collection={collection} {...rootProps}>
      <ArkSelect.Label
        className={label({
          size,
        })}
      >
        Framework
      </ArkSelect.Label>

      <ArkSelect.Control>
        <ArkSelect.Trigger>
          <ArkSelect.ValueText placeholder="Select a Framework" />
          <ArkSelect.Indicator>
            <SelectArrow />
          </ArkSelect.Indicator>
        </ArkSelect.Trigger>
      </ArkSelect.Control>

      <Portal>
        <ArkSelect.Positioner>
          <ArkSelect.Content className={styles.content}>
            {props.children}
          </ArkSelect.Content>
        </ArkSelect.Positioner>
      </Portal>

      <ArkSelect.HiddenSelect />
    </ArkSelect.Root>
  )
}

export function Option(props: SelectItemProps) {
  const { icons } = useCerberusContext()
  const { selectChecked: CheckedIcon } = icons

  return (
    <ArkSelect.Item {...props}>
      <ArkSelect.ItemText>{props.item}</ArkSelect.ItemText>
      <ArkSelect.ItemIndicator>
        <CheckedIcon />
      </ArkSelect.ItemIndicator>
    </ArkSelect.Item>
  )
}

export { createListCollection }
