'use client'

import { useFieldContext } from '@ark-ui/react'
import { cx } from '@cerberus/styled-system/css'
import { field } from '@cerberus/styled-system/recipes'
import { useCerberusContext } from '../../context/cerberus'
import type { HTMLAttributes, ReactNode } from 'react'

export interface FieldStatusIndicatorProps
  extends HTMLAttributes<HTMLSpanElement> {
  /**
   * The fallback content to display when the field is valid.
   */
  fallback?: ReactNode
}

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
  const { fallback, ...nativeProps } = props
  const styles = field()
  const fieldContext = useFieldContext()

  const { icons } = useCerberusContext()
  const { invalid: InvalidIcon } = icons

  if (fieldContext.invalid) {
    return (
      <span
        {...nativeProps}
        aria-hidden="true"
        data-invalid
        className={cx(nativeProps.className, styles.statusIndicator)}
      >
        <InvalidIcon />
      </span>
    )
  }

  return (
    <span
      {...nativeProps}
      aria-hidden="true"
      data-part="end-indicator"
      className={cx(nativeProps.className, styles.endIndicator)}
    >
      {fallback}
    </span>
  )
}
