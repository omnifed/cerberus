'use client'

import { useFieldContext } from '@ark-ui/react'
import { cx } from '@cerberus/styled-system/css'
import { field } from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import type { HTMLAttributes } from 'react'

export type FieldStatusIndicatorProps = HTMLAttributes<HTMLSpanElement>

/**
 * The invalid status indicator for the Field component.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 * @example
 * ```tsx
 * <FieldRoot>
 *   <FieldStatusIndicator />
 * </FieldRoot>
 * ```
 */
export function FieldStatusIndicator(props: FieldStatusIndicatorProps) {
  const styles = field()
  const fieldContext = useFieldContext()

  const { icons } = useCerberusContext()
  const { invalid: InvalidIcon } = icons

  if (!fieldContext.invalid) return null

  return (
    <span
      {...props}
      aria-hidden="true"
      data-part="status-indicator"
      className={cx(props.className, styles.statusIndicator)}
    >
      <InvalidIcon />
    </span>
  )
}
