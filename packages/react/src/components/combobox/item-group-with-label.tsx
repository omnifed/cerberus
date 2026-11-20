'use client'

import { extractParts } from '../../internal/extract-parts'
import {
  ComboboxItemGroup,
  ComboboxItemGroupLabel,
  type ComboboxItemGroupProps,
} from './primitives'

const PARTS = {
  itemGroupLabel: ComboboxItemGroupLabel,
}

export type ComboboxItemGroupWithLabelProps = ComboboxItemGroupProps & {
  /**
   * The label that appears for the combobox item group.
   */
  label?: string
}

/**
 * The ItemGroupWithLabel component is an abstraction of the
 * `Combobox.ItemGroup` primitive that renders its `label` in a
 * `Combobox.ItemGroupLabel` before the items. A direct
 * `Combobox.ItemGroupLabel` child overrides the label; with children it
 * replaces the `label` text.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/combobox)
 * @description [Ark Docs](https://ark-ui.com/docs/components/combobox)
 * @example
 * ```tsx
 * <Combobox.ItemGroupWithLabel label="The fam">
 *   <For each={collection.items}>
 *     {(item) => (
 *       <Combobox.ItemWithIndicator key={item.value} item={item}>
 *         <Combobox.ItemText>{item.label}</Combobox.ItemText>
 *       </Combobox.ItemWithIndicator>
 *     )}
 *   </For>
 * </Combobox.ItemGroupWithLabel>
 * ```
 */
export function ComboboxItemGroupWithLabel(
  props: ComboboxItemGroupWithLabelProps,
) {
  const { label, children, ...groupProps } = props
  const { parts, content } = extractParts(children, PARTS)
  const { children: labelChildren, ...labelOverrideProps } =
    parts.itemGroupLabel ?? {}

  return (
    <ComboboxItemGroup {...groupProps}>
      <ComboboxItemGroupLabel {...labelOverrideProps}>
        {labelChildren ?? label}
      </ComboboxItemGroupLabel>
      {content}
    </ComboboxItemGroup>
  )
}
