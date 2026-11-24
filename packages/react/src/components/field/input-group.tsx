'use client'

import { useFieldContext } from '@ark-ui/react/field'
import type { ReactNode } from 'react'
import { cx } from 'styled-system/css'
import { field, type FieldVariantProps } from 'styled-system/recipes'
import { extractParts } from '../../internal/extract-parts'
import {
  FieldEndIndicator,
  FieldInput,
  FieldInputRoot,
  FieldRoot,
  FieldStartIndicator,
  FieldStatusIndicator,
  type FieldInputProps,
} from './primitives'
import { StatusSlot } from './status-indicator-with-icon'

const PARTS = {
  inputRoot: FieldInputRoot,
  startIndicator: FieldStartIndicator,
  endIndicator: FieldEndIndicator,
  statusIndicator: FieldStatusIndicator,
}

export interface FieldInputGroupProps extends Omit<FieldInputProps, 'size'> {
  /**
   * The size of this input. Defaults to the `size` of the parent `Field`.
   */
  size?: FieldVariantProps['size']
  /**
   * An optional icon to display at the start of the input.
   */
  startIcon?: ReactNode
  /**
   * An optional icon to display at the end of the input while the field is
   * valid. The Cerberus `invalid` icon replaces it when the field is invalid.
   */
  endIcon?: ReactNode
}

/**
 * The InputGroup component is an abstraction of the primitives that renders
 * the `Field.InputRoot` with a `Field.StartIndicator` (when there is a
 * `startIcon`), the `Field.Input`, and a `Field.StatusIndicator` with the
 * Cerberus `invalid` icon when the field is invalid, else a
 * `Field.EndIndicator` with the `endIcon`. Its props go to the input. A direct
 * `Field.InputRoot` child patches the root's props; a `Field.StartIndicator`,
 * `Field.EndIndicator` or `Field.StatusIndicator` child patches that part,
 * and with children replaces its icon. Other children render inside the root
 * after the input. Outside a `Field`, it renders its own `Field.Root` (with
 * its `size`), so a standalone `<Input>` keeps working as in v1.
 * @description [Cerberus Docs](https://cerberus.digitalu.design/docs/components/field)
 * @description [Ark Docs](https://ark-ui.com/docs/components/field)
 * @example
 * ```tsx
 * <Field label="Search" size="md">
 *   <Field.InputGroup name="search" startIcon={<Search />} />
 * </Field>
 * ```
 */
export function FieldInputGroup(props: FieldInputGroupProps) {
  // The parts read the recipe from a Field; without one, provide it here
  if (!useFieldContext()) {
    return (
      <FieldRoot size={props.size}>
        <FieldInputGroup {...props} />
      </FieldRoot>
    )
  }
  return <FieldInputGroupContent {...props} />
}

function FieldInputGroupContent(props: FieldInputGroupProps) {
  const { size, startIcon, endIcon, children, ...inputProps } = props

  const { parts, content } = extractParts(children, PARTS)
  // The root always renders the indicators and input; a root child only
  // patches props
  const { children: _rootChildren, ...rootProps } = parts.inputRoot ?? {}
  const { children: startChildren, ...startProps } = parts.startIndicator ?? {}
  const { children: endChildren, ...endProps } = parts.endIndicator ?? {}
  const { children: statusChildren, ...statusProps } =
    parts.statusIndicator ?? {}

  const startContent = startChildren ?? startIcon
  const hasStart = Boolean(startContent)

  // The field provides its size to the input. An input with its own `size`
  // drops the field's input styles and applies its own
  const sized = size ? field({ size }) : null

  return (
    <FieldInputRoot {...rootProps}>
      {hasStart && (
        <FieldStartIndicator {...startProps}>
          {startContent}
        </FieldStartIndicator>
      )}

      <FieldInput
        {...inputProps}
        {...(hasStart && { 'data-has': 'start-indicator' })}
        {...(sized && {
          unstyled: true,
          className: cx(sized.input, inputProps.className),
        })}
      />

      <StatusSlot
        statusProps={{ ...statusProps, children: statusChildren }}
        endProps={{ ...endProps, children: endChildren ?? endIcon }}
      />

      {content}
    </FieldInputRoot>
  )
}

/**
 * The props of `Input`, an alias of `FieldInputGroupProps`.
 */
export type FieldInputElProps = FieldInputGroupProps

/**
 * An input with optional start and end icons and the Cerberus invalid icon;
 * an alias of `Field.InputGroup`.
 * @see {@link FieldInputGroup}
 * @example
 * ```tsx
 * import { Field, Input } from '@cerberus/react'
 *
 * <Field
 *   label="Enter your email"
 *   helperText="We'll never share your email with anyone else."
 *   errorText="Email is required."
 *   required
 * >
 *   <Input type="email" />
 * </Field>
 * ```
 */
export const Input = FieldInputGroup
