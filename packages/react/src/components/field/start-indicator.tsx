import { cx } from 'styled-system/css'
import { field } from 'styled-system/recipes'
import type { HTMLAttributes } from 'react'

export type FieldIndicatorProps = HTMLAttributes<HTMLSpanElement>

/**
 * The start indicator displays an indicator at the start of the Input.
 * @description [Field Docs](https://cerberus.digitalu.design/react/field)
 */
export function FieldStartIndicator(props: FieldIndicatorProps) {
  const styles = field()

  if (!props.children) return null

  return (
    <span
      {...props}
      data-part="start-indicator"
      className={cx(props.className, styles.startIndicator)}
    />
  )
}
