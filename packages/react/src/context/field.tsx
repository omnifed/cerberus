'use client'

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from 'react'

export interface FieldContextValue {
  disabled?: boolean
  readonly?: boolean
  required?: boolean
  invalid?: boolean
}

const FieldContext = createContext<FieldContextValue | null>(null)

export function Field(
  props: PropsWithChildren<FieldContextValue>,
): JSX.Element {
  const value = useMemo(
    () => ({
      disabled: props.disabled,
      readonly: props.readonly,
      required: props.required,
      invalid: props.invalid,
    }),
    [props.disabled, props.readonly, props.required, props.invalid],
  )

  return (
    <FieldContext.Provider value={value}>
      {props.children}
    </FieldContext.Provider>
  )
}

export function useFieldContext(): FieldContextValue {
  const context = useContext(FieldContext)
  if (!context) {
    throw new Error('useFieldContext must be used within a Field Provider.')
  }
  return context
}
