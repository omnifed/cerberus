'use client'

import { extractParts } from '../../internal/extract-parts'
import { Show } from '../show/show'
import {
  SelectItemGroup,
  SelectItemGroupLabel,
  type SelectItemGroupProps,
} from './primitives'

const PARTS = {
  itemGroupLabel: SelectItemGroupLabel,
}

export type SelectItemGroupWithLabelProps = SelectItemGroupProps & {
  /**
   * The label that appears for the select item group.
   */
  label?: string
}

/**
 * The ItemGroupWithLabel component is an abstraction of the `Select.ItemGroup`
 * primitive that renders its `label` in a `Select.ItemGroupLabel` before the
 * items. A direct `Select.ItemGroupLabel` child overrides the label; with
 * children it replaces the `label` text. Without either, no label renders.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/select)
 * @description [Ark Docs](https://ark-ui.com/docs/components/select)
 * @example
 * ```tsx
 * <Select.ItemGroupWithLabel label="The fam">
 *   <For each={collection.items}>
 *     {(item) => <Select.ItemWithIndicator key={item.value} item={item} />}
 *   </For>
 * </Select.ItemGroupWithLabel>
 * ```
 */
export function SelectItemGroupWithLabel(props: SelectItemGroupWithLabelProps) {
  const { label, children, ...groupProps } = props
  const { parts, content } = extractParts(children, PARTS)
  const { children: labelChildren, ...labelOverrideProps } =
    parts.itemGroupLabel ?? {}
  const labelContent = labelChildren ?? label

  return (
    <SelectItemGroup {...groupProps}>
      <Show when={labelContent != null}>
        {() => (
          <SelectItemGroupLabel {...labelOverrideProps}>
            {labelContent}
          </SelectItemGroupLabel>
        )}
      </Show>
      {content}
    </SelectItemGroup>
  )
}

/**
 * A group of options; an alias of `Select.ItemGroupWithLabel`.
 * @see {@link SelectItemGroupWithLabel}
 */
export const OptionGroup = SelectItemGroupWithLabel

/**
 * The label of an `OptionGroup`; an alias of the `Select.ItemGroupLabel`
 * part. As a direct child of `OptionGroup` it renders as the group label.
 * Prefer the `label` prop of `Select.ItemGroupWithLabel`.
 */
export const OptionGroupLabel = SelectItemGroupLabel
