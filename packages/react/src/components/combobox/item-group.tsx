import type { ComboboxItemGroupProps } from '@ark-ui/react'
import { ComboboxItemGroup, ComboboxItemGroupLabel } from './primitives'

export interface ComboItemGroupProps extends ComboboxItemGroupProps {
  /**
   * The label that appears for the combobox item group.
   */
  label?: string
}

export function ComboItemGroup(props: ComboItemGroupProps) {
  const { label, children, ...groupProps } = props

  return (
    <ComboboxItemGroup {...groupProps}>
      <ComboboxItemGroupLabel>{label}</ComboboxItemGroupLabel>
      {children}
    </ComboboxItemGroup>
  )
}
