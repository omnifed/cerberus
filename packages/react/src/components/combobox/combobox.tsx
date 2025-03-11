'use client'

import type { ComboboxRootProps } from '@ark-ui/react/combobox'
import type { ComboboxVariantProps } from 'styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import type { SelectCollectionItem } from '../select/select'
import { type FieldInputProps } from '../field/index'
import { Portal } from '../Portal'
import { Show } from '../Show'
import { ComboboxParts } from './parts'
import { ComboboxStartIcon } from './primitives'

export interface ComboboxProps
  extends ComboboxRootProps<SelectCollectionItem>,
    ComboboxVariantProps {
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
  const { label, children, startIcon, ...rootProps } = props

  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow, close: CloseIcon } = icons

  const hasStartIcon = Boolean(startIcon)

  return (
    <ComboboxParts.Root {...rootProps}>
      <Show when={label}>
        <ComboboxParts.Label>{label}</ComboboxParts.Label>
      </Show>

      <ComboboxParts.Control>
        <Show when={hasStartIcon}>
          <ComboboxStartIcon>{startIcon}</ComboboxStartIcon>
        </Show>

        <ComboboxParts.Input
          {...(hasStartIcon && { 'data-has': 'start-indicator' })}
        />

        <ComboboxParts.ClearTrigger>
          <CloseIcon />
        </ComboboxParts.ClearTrigger>
        <ComboboxParts.Trigger>
          <SelectArrow />
        </ComboboxParts.Trigger>
      </ComboboxParts.Control>

      <Portal>
        <ComboboxParts.Positioner>
          <ComboboxParts.Content size={rootProps.size}>
            {children}
          </ComboboxParts.Content>
        </ComboboxParts.Positioner>
      </Portal>
    </ComboboxParts.Root>
  )
}
