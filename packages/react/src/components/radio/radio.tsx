import type { RadioGroupItemProps } from '@ark-ui/react'
import { type RadioGroupVariantProps } from '@cerberus/styled-system/recipes'
import {
  RadioGroupItem,
  RadioGroupItemControl,
  RadioGroupItemHiddenInput,
  RadioGroupItemText,
} from './primitives'

/**
 * This module contains the Radio component.
 * @module
 */

export type RadioProps = RadioGroupVariantProps & RadioGroupItemProps

/**
 * The Radio component is used to allow users to select a single option from a list of options.
 * @see https://cerberus.digitalu.design/react/radio
 * @memberof module:Field
 * @example
 * ```tsx
 * <Radio value="option1">Option 1</Radio>
 * ```
 */
export function Radio(props: RadioProps) {
  const { size, children, ...groupProps } = props
  return (
    <RadioGroupItem {...groupProps}>
      <RadioGroupItemControl size={size} />
      <RadioGroupItemText size={size}>{children}</RadioGroupItemText>
      <RadioGroupItemHiddenInput />
    </RadioGroupItem>
  )
}
