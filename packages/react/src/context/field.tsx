'use client'

import {
  createContext,
  useContext,
  useMemo,
  type PropsWithChildren,
} from 'react'

export interface FieldContextValue {
  disabled?: boolean
  readOnly?: boolean
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
      readOnly: props.readOnly,
      required: props.required,
      invalid: props.invalid,
    }),
    [props.disabled, props.readOnly, props.required, props.invalid],
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
