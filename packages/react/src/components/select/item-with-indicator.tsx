'use client'

import { useSelectContext } from '@ark-ui/react/select'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  type SelectItemProps,
} from './primitives'

const PARTS = {
  itemText: SelectItemText,
  itemIndicator: SelectItemIndicator,
}

export type SelectItemWithIndicatorProps = SelectItemProps

/**
 * The ItemWithIndicator component is an abstraction of the `Select.Item`
 * primitive that renders a `Select.ItemText` followed by a
 * `Select.ItemIndicator` with the Cerberus `selectChecked` icon. The text
 * defaults to the item's label (the collection's `itemToString`); non-part
 * children replace it. A direct `Select.ItemText` or `Select.ItemIndicator`
 * child overrides that part; with children it replaces its default content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/select)
 * @description [Ark Docs](https://ark-ui.com/docs/components/select)
 * @example
 * ```tsx
 * <Select collection={collection} placeholder="Choose option">
 *   <For each={collection.items}>
 *     {(item) => <Select.ItemWithIndicator key={item.value} item={item} />}
 *   </For>
 * </Select>
 * ```
 */
export function SelectItemWithIndicator(props: SelectItemWithIndicatorProps) {
  const { children, ...itemProps } = props
  const { collection } = useSelectContext()
  const { icons } = useCerberusContext()
  const { selectChecked: CheckedIcon } = icons

  const { parts, content } = extractParts(children, PARTS)
  const { children: textChildren, ...textOverrideProps } = parts.itemText ?? {}
  const { children: indicatorChildren, ...indicatorOverrideProps } =
    parts.itemIndicator ?? {}

  return (
    <SelectItem {...itemProps}>
      <SelectItemText {...textOverrideProps}>
        {textChildren ?? content ?? collection.stringifyItem(itemProps.item)}
      </SelectItemText>

      <SelectItemIndicator {...indicatorOverrideProps}>
        {indicatorChildren ?? <CheckedIcon />}
      </SelectItemIndicator>
    </SelectItem>
  )
}

export type OptionProps = SelectItemWithIndicatorProps

/**
 * A single option with the Cerberus check indicator; an alias of
 * `Select.ItemWithIndicator`.
 * @see {@link SelectItemWithIndicator}
 */
export const Option = SelectItemWithIndicator
