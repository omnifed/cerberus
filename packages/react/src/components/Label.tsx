'use client'

import type { HTMLAttributes, PropsWithChildren } from 'react'
import { label } from '@cerberus/styled-system/recipes'
import { css, cx, type RecipeVariantProps } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import { useFieldContext } from '../context/field'
import { Show } from './Show'

/**
 * This module contains the Label component.
 * @module
 */

export type LabelRecipeProps = RecipeVariantProps<typeof label>
export interface LabelBaseProps extends HTMLAttributes<HTMLLabelElement> {
  htmlFor: string
  hidden?: boolean
}
export type LabelProps = LabelBaseProps & LabelRecipeProps

/**
 * A screen ready friendly label component.
 * @definition [ARIA Forms](https://www.a11yproject.com/checklist/#forms)
 * @definition [Label docs](https://cerberus.digitalu.design/react/label)
 * @example
 * ```tsx
 * <Field required>
 *   <Label htmlFor="test">Test Label</Label>
 * </Field>
 * ```
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
            color: 'inherit',
            fontSize: 'inherit',
          })}
        >
          (required)
        </span>
      </Show>
    </label>
  )
}
