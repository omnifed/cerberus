'use client'

import type { FieldRootProps } from '@ark-ui/react'
import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from 'react'
import { FieldRoot } from '../components/field/primitives'

/**
 * This module provides a context and hook for the field.
 * @module Field
 */

export interface FieldContextValue {
  /**
   * Whether the field is disabled.
   * @description [Moz Input Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes)
   */
  disabled?: boolean
  /**
   * Whether the field is read-only.
   */
  readOnly?: boolean
  /**
   * Whether the field is required.
   */
  required?: boolean
  /**
   * Whether the field is invalid.
   */
  invalid?: boolean
}

const FieldContext = createContext<FieldContextValue | null>(null)

/**
 * @deprecated use FieldRoot or FieldParts instead
 */
export function FieldProvider(props: PropsWithChildren<FieldRootProps>) {
  const value = useMemo(
    () => ({
      disabled: props.disabled,
      readOnly: props.readOnly,
      required: props.required,
      invalid: props.invalid,
    }),
    [props.disabled, props.readOnly, props.required, props.invalid],
  )

  return (
    <FieldContext.Provider value={value}>
      <FieldRoot {...props} />
    </FieldContext.Provider>
  )
}

/**
 * Used to access the field context.
 * @returns The field context.
 */
export function useFieldContext(): FieldContextValue {
  const context = useContext(FieldContext)
  if (!context) {
    throw new Error('useFieldContext must be used within a Field Provider.')
  }
  return context
}
