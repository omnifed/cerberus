import { cx } from 'styled-system/css'
import { label, type LabelVariantProps } from 'styled-system/recipes'
import type { LabelProps } from './Label'

/**
 * This module contains the FieldsetLabel component.
 * @module FieldsetLabel
 */

export type FieldsetLabelProps = LabelProps &
  LabelVariantProps & {
    htmlFor?: string
  }

/**
 * @deprecated
 */
export function FieldsetLabel(props: FieldsetLabelProps) {
  const { size, usage, ...nativeProps } = props
  return (
    <label
      {...nativeProps}
      className={cx(
        nativeProps.className,
        label({
          size,
          usage,
        }),
      )}
    />
  )
}
