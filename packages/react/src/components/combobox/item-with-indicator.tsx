'use client'

import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import {
  ComboboxItem,
  ComboboxItemIndicator,
  type ComboboxItemProps,
} from './primitives'

const PARTS = {
  itemIndicator: ComboboxItemIndicator,
}

export type ComboboxItemWithIndicatorProps = ComboboxItemProps

/**
 * The ItemWithIndicator component is an abstraction of the `Combobox.Item`
 * primitive that renders a `Combobox.ItemIndicator` with the Cerberus
 * `selectChecked` icon before its children. A direct `Combobox.ItemIndicator`
 * child overrides the indicator; with children it replaces the icon.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/combobox)
 * @description [Ark Docs](https://ark-ui.com/docs/components/combobox)
 * @example
 * ```tsx
 * <Combobox.ItemWithIndicator item={item}>
 *   <Combobox.ItemText>{item.label}</Combobox.ItemText>
 * </Combobox.ItemWithIndicator>
 * ```
 */
export function ComboboxItemWithIndicator(
  props: ComboboxItemWithIndicatorProps,
) {
  const { children, ...itemProps } = props
  const { icons } = useCerberusContext()
  const { selectChecked: CheckedIcon } = icons

  const { parts, content } = extractParts(children, PARTS)
  const { children: indicatorChildren, ...indicatorOverrideProps } =
    parts.itemIndicator ?? {}

  return (
    <ComboboxItem {...itemProps}>
      <ComboboxItemIndicator {...indicatorOverrideProps}>
        {indicatorChildren ?? <CheckedIcon />}
      </ComboboxItemIndicator>

      {content}
    </ComboboxItem>
  )
}
