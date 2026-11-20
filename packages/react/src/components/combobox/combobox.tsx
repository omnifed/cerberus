'use client'

import type { CollectionItem } from '@ark-ui/react/combobox'
import type { ReactNode } from 'react'
import { useCerberusContext } from '../../context/cerberus'
import { extractParts } from '../../internal/extract-parts'
import { Show } from '../show/show'
import {
  ComboboxClearTrigger,
  ComboboxContent,
  ComboboxControl,
  ComboboxInput,
  ComboboxLabel,
  ComboboxPositioner,
  ComboboxRoot,
  ComboboxStartIcon,
  ComboboxTrigger,
  type ComboboxRootProps,
} from './primitives'

const PARTS = {
  label: ComboboxLabel,
  control: ComboboxControl,
  startIcon: ComboboxStartIcon,
  input: ComboboxInput,
  clearTrigger: ComboboxClearTrigger,
  trigger: ComboboxTrigger,
  positioner: ComboboxPositioner,
  content: ComboboxContent,
}

export type ComboboxProps<T extends CollectionItem = CollectionItem> =
  ComboboxRootProps<T> & {
    /**
     * The label that appears above the combobox input.
     */
    label?: string
    /**
     * The icon that appears at the start of the combobox input.
     */
    startIcon?: ReactNode
  }

/**
 * The Combobox component is an abstraction of the primitives that renders the
 * `label`, the control with an optional `startIcon`, the input, the Cerberus
 * `close` clear trigger and `selectArrow` trigger, and the positioned dropdown
 * content. It is generic over the collection item type. Non-part children
 * render inside the content; direct `Combobox.Label`, `Combobox.Control`,
 * `Combobox.StartIcon`, `Combobox.Input`, `Combobox.ClearTrigger`,
 * `Combobox.Trigger`, `Combobox.Positioner` or `Combobox.Content` children
 * override that part. A part child with children replaces its default content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/combobox)
 * @description [Ark Docs](https://ark-ui.com/docs/components/combobox)
 * @example
 * ```tsx
 * const { collection, handleInputChange } = useStatefulCollection(items)
 *
 * <Combobox
 *   collection={collection}
 *   label="Select Relative"
 *   onInputValueChange={handleInputChange}
 * >
 *   <For each={collection.items}>
 *     {(item) => (
 *       <Combobox.ItemWithIndicator key={item.value} item={item}>
 *         <Combobox.ItemText>{item.label}</Combobox.ItemText>
 *       </Combobox.ItemWithIndicator>
 *     )}
 *   </For>
 * </Combobox>
 * ```
 */
export function ComboboxEl<T extends CollectionItem = CollectionItem>(
  props: ComboboxProps<T>,
) {
  const { label, startIcon, children, ...rootProps } = props
  const { icons } = useCerberusContext()
  const { selectArrow: SelectArrow, close: CloseIcon } = icons

  const { parts, content } = extractParts(children, PARTS)

  const { children: labelChildren, ...labelOverrideProps } = parts.label ?? {}
  const { children: controlChildren, ...controlOverrideProps } =
    parts.control ?? {}
  const { children: startIconChildren, ...startIconOverrideProps } =
    parts.startIcon ?? {}
  const { children: clearChildren, ...clearOverrideProps } =
    parts.clearTrigger ?? {}
  const { children: triggerChildren, ...triggerOverrideProps } =
    parts.trigger ?? {}
  const { children: _positionerChildren, ...positionerOverrideProps } =
    parts.positioner ?? {}
  const { children: contentChildren, ...contentOverrideProps } =
    parts.content ?? {}

  const labelContent = labelChildren ?? label
  const startIconContent = startIconChildren ?? startIcon
  const hasStartIcon = Boolean(startIconContent)

  return (
    <ComboboxRoot {...rootProps}>
      <Show when={Boolean(labelContent)}>
        {() => (
          <ComboboxLabel {...labelOverrideProps}>{labelContent}</ComboboxLabel>
        )}
      </Show>

      <ComboboxControl {...controlOverrideProps}>
        {controlChildren ?? (
          <>
            <Show when={hasStartIcon}>
              {() => (
                <ComboboxStartIcon {...startIconOverrideProps}>
                  {startIconContent}
                </ComboboxStartIcon>
              )}
            </Show>

            <ComboboxInput
              {...(hasStartIcon && { 'data-has': 'start-indicator' })}
              {...parts.input}
            />

            <ComboboxClearTrigger {...clearOverrideProps}>
              {clearChildren ?? <CloseIcon />}
            </ComboboxClearTrigger>
            <ComboboxTrigger {...triggerOverrideProps}>
              {triggerChildren ?? <SelectArrow />}
            </ComboboxTrigger>
          </>
        )}
      </ComboboxControl>

      <ComboboxPositioner {...positionerOverrideProps}>
        <ComboboxContent {...contentOverrideProps}>
          {contentChildren ?? content}
        </ComboboxContent>
      </ComboboxPositioner>
    </ComboboxRoot>
  )
}
