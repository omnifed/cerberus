'use client'

import type { HTMLAttributes, PropsWithChildren } from 'react'
import { label, type LabelVariantProps } from '@cerberus/styled-system/recipes'
import { css, cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { useFieldContext } from '../../context/field'
import { Show } from '../Show'

/**
 * This module contains the Label component.
 * @module
 */
export interface LabelBaseProps extends HTMLAttributes<HTMLLabelElement> {
  /**
   * The unique identifier for the input element. Required for accessibility.
   */
  htmlFor: string
  /**
   * Used to hide the label from the UI while keeping it accessible to screen readers. Typically used for global search inputs that have no visible label.
   */
  hidden?: boolean
}
export type LabelProps = LabelBaseProps & LabelVariantProps

/**
 * @deprecated Use FieldLabel or FieldParts.Label instead.
 */
export function Label(props: PropsWithChildren<LabelProps>) {
  const { hidden, size, ...nativeProps } = props
  const { required, disabled } = useFieldContext()
  const usage = hidden ? 'hidden' : 'visible'

  return (
    <label
      {...nativeProps}
      {...(disabled && { 'data-disabled': true })}
      className={cx(
        nativeProps.className,
        label({ size, usage }),
        hstack({
          justify: 'space-between',
          w: 'full',
        }),
      )}
    >
      {props.children}
      <Show when={required}>
        <span
          className={css({
            color: 'page.text.100',
            fontSize: 'inherit',
          })}
        >
          (required)
        </span>
      </Show>
    </label>
  )
}
