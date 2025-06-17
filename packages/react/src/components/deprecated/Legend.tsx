'use client'

import { useFieldContext } from '@ark-ui/react/field'
import { css, cx } from 'styled-system/css'
import { label, type LabelVariantProps } from 'styled-system/recipes'
import { hstack } from 'styled-system/patterns'
import { type HTMLAttributes } from 'react'
import { Show } from '../show/index'

/**
 * This module contains the Fieldset component.
 * @module Fieldset
 */

export type LegendProps = HTMLAttributes<HTMLLegendElement> & LabelVariantProps

/**
 * @deprecated use Fieldset instead
 */
export function Legend(props: LegendProps) {
  const { size, ...nativeProps } = props
  const { invalid, required } = useFieldContext()

  return (
    <legend
      {...nativeProps}
      {...(invalid && { 'aria-invalid': true })}
      className={cx(
        nativeProps.className,
        hstack({
          justify: 'space-between',
          w: 'full',
        }),
        label({
          size,
        }),
      )}
    >
      {nativeProps.children}
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
    </legend>
  )
}
