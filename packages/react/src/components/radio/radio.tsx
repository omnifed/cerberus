'use client'

import { cx } from 'styled-system/css'
import { radioGroup, type RadioGroupVariantProps } from 'styled-system/recipes'
import { extractParts } from '../../internal/extract-parts'
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
  RadioGroupItemText,
  type RadioGroupItemProps,
} from './primitives'

const PARTS = {
  itemControl: RadioGroupItemControl,
  itemText: RadioGroupItemText,
  itemHiddenInput: RadioGroupItemHiddenInput,
}

export interface RadioProps extends RadioGroupItemProps {
  /**
   * The size of this radio's control and text. Defaults to the `size` of the
   * parent `RadioGroup`.
   */
  size?: RadioGroupVariantProps['size']
}

/**
 * The Radio component is an abstraction of the primitives that displays a
 * single labeled radio item with the Cerberus control and its hidden input.
 * It must render inside a `RadioGroup`. Non-part children render as the item
 * text; direct `RadioGroup.ItemControl`, `RadioGroup.ItemText` or
 * `RadioGroup.ItemHiddenInput` children override that part. A part child with
 * children replaces its default content.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/radio)
 * @description [Ark Docs](https://ark-ui.com/docs/components/radio-group)
 * @example
 * ```tsx
 * <RadioGroup defaultValue="cerberus">
 *   <Radio value="cerberus">Cerberus</Radio>
 *   <Radio value="hades" size="md">Hades</Radio>
 * </RadioGroup>
 * ```
 */
export function RadioGroupRadio(props: RadioProps) {
  const { size, children, ...itemProps } = props

  const { parts, content } = extractParts(children, PARTS)

  const { children: controlChildren, ...controlOverrideProps } =
    parts.itemControl ?? {}
  const { children: textChildren, ...textOverrideProps } = parts.itemText ?? {}

  // The group provides its size to every item. A radio with its own `size`
  // drops the group's styles for its control and text and applies its own
  const sized = size ? radioGroup({ size }) : null

  return (
    <RadioGroupItem {...itemProps}>
      <RadioGroupItemControl
        {...controlOverrideProps}
        {...(sized && {
          unstyled: true,
          className: cx(sized.itemControl, controlOverrideProps.className),
        })}
      >
        {controlChildren}
      </RadioGroupItemControl>

      <RadioGroupItemText
        {...textOverrideProps}
        {...(sized && {
          unstyled: true,
          className: cx(sized.itemText, textOverrideProps.className),
        })}
      >
        {textChildren ?? content}
      </RadioGroupItemText>

      <RadioGroupItemHiddenInput {...parts.itemHiddenInput} />
    </RadioGroupItem>
  )
}

/**
 * A single labeled radio item; an alias of `RadioGroup.Radio`.
 * @see {@link RadioGroupRadio}
 */
export const Radio = RadioGroupRadio
