import type { HTMLAttributes, PropsWithChildren } from 'react'
import { label, type LabelVariantProps } from 'styled-system/recipes'
import { cx } from 'styled-system/css'
import { FieldLabel } from '../field'

/**
 * This module contains the Label component.
 * @module
 */
export type LabelBaseProps = HTMLAttributes<HTMLLabelElement>
export type LabelProps = LabelBaseProps & LabelVariantProps

/**
 * @deprecated Use FieldLabel or FieldParts.Label instead.
 */
export function Label(props: PropsWithChildren<LabelProps>) {
  const { size, ...nativeProps } = props
  return (
    <FieldLabel
      {...nativeProps}
      className={cx(label({ size }), props.className)}
    />
  )
}
