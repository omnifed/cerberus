'use client'

import { cx } from '@cerberus/styled-system/css'
import { hstack } from '@cerberus/styled-system/patterns'
import {
  select,
  type SelectVariantProps,
} from '@cerberus/styled-system/recipes'
import type { OptionHTMLAttributes, SelectHTMLAttributes } from 'react'
import { $cerberusIcons } from '../config/defineIcons'
import { useFieldContext } from '../context/field'
import { Show } from './Show'

/**
 * This module contains the select components.
 * @module
 */

export type SelectProps = Omit<
  SelectHTMLAttributes<HTMLSelectElement>,
  'size'
> &
  SelectVariantProps & {
    /**
     * The unique id of the select element. Required for accessibility.
     */
    id: string
    /**
     * The id of the FieldMessage that describes the select element.
     */
    describedBy?: string
  }

/**
 * Used to allow users to select a single option from a list of options.
 * @see https://cerberus.digitalu.design/react/select
 * @memberof module:Field
 * @example
 * ```tsx
 * <Field>
 *   <Select describedby="help:fruit" id="fruit">
 *    <Option value="">Choose option</Option>
 *    <Option value="one">Option 1</Option>
 *    <Option value="two">Option 2</Option>
 *    <Option value="three">Option 3</Option>
 *   </Select>
 * </Field>
 * ```
 */
export function Select(props: SelectProps) {
  const { describedBy, size, ...nativeProps } = props
  const { invalid, ...fieldStates } = useFieldContext()
  const { invalid: InvalidIcon, selectArrow: SelectArrow } = $cerberusIcons
  const styles = select({
    size,
  })

  return (
    <div className={styles.root}>
      <select
        {...nativeProps}
        {...fieldStates}
        {...(describedBy && { 'aria-describedby': describedBy })}
        {...(invalid && { 'aria-invalid': true })}
        className={styles.input}
      />
      <span
        className={cx(
          styles.iconStack,
          hstack({
            gap: '2',
          }),
        )}
      >
        <Show when={invalid}>
          <span
            {...(invalid && { 'data-invalid': true })}
            className={styles.stateIcon}
          >
            <InvalidIcon />
          </span>
        </Show>
        <span className={styles.arrowIcon}>
          <SelectArrow />
        </span>
      </span>
    </div>
  )
}

// We only export this component for consistency with the other components

export type OptionProps = OptionHTMLAttributes<HTMLOptionElement>

/**
 * Option component
 * props: OptionHTMLAttributes<HTMLOptionElement>
 * @example
 * ```tsx
 * <Option value="one">Option 1</Option>
 * ```
 */
export function Option(props: OptionProps) {
  return <option {...props} />
}
