import type { ReactNode } from 'react'
import type { FieldVariantProps } from 'styled-system/recipes'
import { FieldStartIndicator } from './start-indicator'
import { FieldStatusIndicator } from './status-indicator'
import {
  FieldInputRoot,
  FieldInput as PrimitiveInput,
  type FieldInputProps as PrimitiveInputProps,
} from './primitives'
import { splitProps } from '../../utils/index'

/**
 * This module contains an abstraction of the Field.Input component.
 * @module 'field/input'
 */

export interface FieldInputProps
  extends Omit<PrimitiveInputProps, 'size'>,
    FieldVariantProps {
  /**
   * An optional icon to display at the start of the input.
   */
  startIcon?: ReactNode
  /**
   * An optional icon to display at the end of the input.
   */
  endIcon?: ReactNode
}

export function CerberusFieldInput(props: FieldInputProps) {
  const [{ startIcon, endIcon }, fieldProps] = splitProps(props, [
    'startIcon',
    'endIcon',
  ])
  const hasStartIcon = Boolean(startIcon)

  return (
    <FieldInputRoot>
      <FieldStartIndicator>{startIcon}</FieldStartIndicator>
      <PrimitiveInput
        {...(fieldProps as Omit<FieldInputProps, 'size'>)}
        {...(hasStartIcon && { 'data-has': 'start-indicator' })}
      />
      <FieldStatusIndicator fallback={endIcon} />
    </FieldInputRoot>
  )
}
