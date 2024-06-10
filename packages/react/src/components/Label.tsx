'use client'

import type { HTMLAttributes, PropsWithChildren } from 'react'
import { label } from '@cerberus/styled-system/recipes'
import { css, cx } from '@cerberus/styled-system/css'
import { useFieldContext } from '../context/field'
import { Show } from './Show'
import { hstack } from '@cerberus/styled-system/patterns'

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
 * <Field required>
 *   <Label htmlFor="test">Test Label</Label>
 * </Field>
 * ```
 */
export function Label(props: PropsWithChildren<LabelProps>) {
  const { hidden, ...nativeProps } = props
  const { required } = useFieldContext()
  const usage = hidden ? 'hidden' : 'visible'

  return (
    <label
      {...nativeProps}
      className={cx(
        nativeProps.className,
        label({ usage }),
        hstack({
          justify: 'space-between',
        }),
      )}
    >
      {props.children}
      <Show when={!required}>
        <span
          className={css({
            color: 'neutral.text.100',
            fontSize: 'inherit',
          })}
        >
          optional
        </span>
      </Show>
    </label>
  )
}
