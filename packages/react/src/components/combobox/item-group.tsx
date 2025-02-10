import type { ComboboxItemGroupProps } from '@ark-ui/react/combobox'
import { ComboboxParts } from './parts'

export interface ComboItemGroupProps extends ComboboxItemGroupProps {
  /**
   * The label that appears for the combobox item group.
   */
  label?: string
}

export function ComboItemGroup(props: ComboItemGroupProps) {
  const { label, children, ...groupProps } = props
  return (
    <ComboboxParts.ItemGroup {...groupProps}>
      <ComboboxParts.ItemGroupLabel>{label}</ComboboxParts.ItemGroupLabel>
      {children}
    </ComboboxParts.ItemGroup>
  )
}
