'use client'

import type { ComboboxRootProps } from '@ark-ui/react/combobox'
import { useCerberusContext } from '../../context/cerberus'
import type { SelectCollectionItem } from '../select/select'
import { Input, type FieldInputProps } from '../field/index'
import { Portal } from '../Portal'
import { Show } from '../Show'
import { ComboboxParts } from './parts'

export interface ComboboxProps extends ComboboxRootProps<SelectCollectionItem> {
  /**
   * The label that appears above the combobox input.
   */
  label?: string
  /**
   * The icon that appears at the start of the combobox input.
   */
  startIcon?: FieldInputProps['startIcon']
}

export function Combobox(props: ComboboxProps) {
  const { label, children, ...rootProps } = props

  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow, close: CloseIcon } = icons

  return (
    <ComboboxParts.Root {...rootProps}>
      <Show when={Boolean(label)}>
        <ComboboxParts.Label>{label}</ComboboxParts.Label>
      </Show>

      <ComboboxParts.Control>
        <ComboboxParts.Input asChild>
          <Input startIcon={props.startIcon} />
        </ComboboxParts.Input>

        <ComboboxParts.ClearTrigger>
          <CloseIcon />
        </ComboboxParts.ClearTrigger>
        <ComboboxParts.Trigger>
          <SelectArrow />
        </ComboboxParts.Trigger>
      </ComboboxParts.Control>

      <Portal>
        <ComboboxParts.Positioner>
          <ComboboxParts.Content>{children}</ComboboxParts.Content>
        </ComboboxParts.Positioner>
      </Portal>
    </ComboboxParts.Root>
  )
}
