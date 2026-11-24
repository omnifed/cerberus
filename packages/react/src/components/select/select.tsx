'use client'

import type { CollectionItem } from '@ark-ui/react/collection'
import { HStack } from 'styled-system/jsx'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { Show } from '../show/show'
import {
  SelectClearTrigger,
  SelectContent,
  SelectControl,
  SelectHiddenSelect,
  SelectIndicator,
  SelectLabel,
  SelectPositioner,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  type SelectRootProps,
} from './primitives'

/**
 * This module contains the default Select abstraction.
 * @module 'react/select'
 */

// `use-stateful-collection` (combobox) imports the item type from here
export type { SelectCollectionItem } from './collection'

const PARTS = {
  label: SelectLabel,
  control: SelectControl,
  trigger: SelectTrigger,
  valueText: SelectValueText,
  indicator: SelectIndicator,
  clearTrigger: SelectClearTrigger,
  positioner: SelectPositioner,
  content: SelectContent,
  hiddenSelect: SelectHiddenSelect,
}

export type SelectProps<T extends CollectionItem = CollectionItem> =
  SelectRootProps<T> & {
    /**
     * The placeholder text when no option is selected.
     */
    placeholder?: string
  }

/**
 * The Select component is an abstraction of the primitives that renders the
 * control with the trigger, its value text (with the `placeholder`) and the
 * Cerberus `selectArrow` indicator (plus the `invalid` icon when `invalid`),
 * the positioned dropdown content and the hidden native select. It is
 * generic over the collection item type. Non-part children render inside
 * the content; direct `Select.Control`, `Select.Trigger`, `Select.ValueText`,
 * `Select.Indicator`, `Select.Positioner`, `Select.Content` or
 * `Select.HiddenSelect` children override that part. A part child with
 * children replaces its default content. `Select.Label` and
 * `Select.ClearTrigger` children render only when given (the label before
 * the control, the clear trigger after the trigger).
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/select)
 * @description [Ark Docs](https://ark-ui.com/docs/components/select)
 * @example
 * ```tsx
 * const collection = createSelectCollection([
 *   { label: 'Hades', value: 'hades' },
 *   { label: 'Persephone', value: 'persephone' },
 *   { label: 'Zeus', value: 'zeus', disabled: true },
 * ])
 *
 * <Field label="Select Relative">
 *   <Select collection={collection} placeholder="Choose option">
 *     <For each={collection.items}>
 *       {(item) => <Select.ItemWithIndicator key={item.value} item={item} />}
 *     </For>
 *   </Select>
 * </Field>
 * ```
 */
export function SelectEl<T extends CollectionItem = CollectionItem>(
  props: SelectProps<T>,
) {
  const { placeholder, children, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow, invalid: InvalidIcon } = icons

  const { parts, content } = extractParts(children, PARTS)

  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const { children: triggerChildren, ...triggerOverrideProps } =
    parts.trigger ?? {}
  const { children: indicatorChildren, ...indicatorOverrideProps } =
    parts.indicator ?? {}
  const { children: _positionerChildren, ...positionerOverrideProps } =
    parts.positioner ?? {}
  const { children: contentChildren, ...contentOverrideProps } =
    parts.content ?? {}

  return (
    <SelectRoot {...rootProps}>
      <Show when={Boolean(parts.label)}>
        {() => <SelectLabel {...parts.label} />}
      </Show>

      <SelectControl {...controlOverrideProps}>
        {controlChildren ?? (
          <>
            <SelectTrigger {...triggerOverrideProps}>
              {triggerChildren ?? (
                <>
                  <SelectValueText
                    placeholder={placeholder}
                    {...parts.valueText}
                  />

                  <HStack>
                    <Show when={props.invalid}>
                      <InvalidIcon data-part="invalid-icon" />
                    </Show>
                    <SelectIndicator {...indicatorOverrideProps}>
                      {indicatorChildren ?? <SelectArrow />}
                    </SelectIndicator>
                  </HStack>
                </>
              )}
            </SelectTrigger>

            <Show when={Boolean(parts.clearTrigger)}>
              {() => <SelectClearTrigger {...parts.clearTrigger} />}
            </Show>
          </>
        )}
      </SelectControl>

      <SelectPositioner {...positionerOverrideProps}>
        <SelectContent {...contentOverrideProps}>
          {contentChildren ?? content}
        </SelectContent>
      </SelectPositioner>

      <SelectHiddenSelect {...parts.hiddenSelect} />
    </SelectRoot>
  )
}
