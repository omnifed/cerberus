import type { HTMLAttributes } from 'react'
import { label } from '@cerberus/styled-system/recipes'
import { cx } from '@cerberus/styled-system/css'

/**
 * This module contains the Label component.
 * @module
 */

export interface LabelProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  hidden?: boolean
}

/**
 * A screen ready friendly label component.
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Label docs](https://cerberus.digitalu.design/react/label)
 * @example
 * ```tsx
 * <Label htmlFor="test">Test Label</Label>
 * ```
 */
export function Label(props: LabelProps) {
  const { hidden, ...nativeProps } = props
  const usage = hidden ? 'hidden' : 'visible'

  return (
    <label
      {...nativeProps}
      className={cx(nativeProps.className, label({ usage }))}
    />
  )
}
