'use client'

import { createContext, useContext, type PropsWithChildren } from 'react'

export type ButtonContextValue = {
  /**
   * When true, replaces the `Button.Indicator` icon with a Spinner.
   */
  pending: boolean
}

export const ButtonContext = createContext<ButtonContextValue>({
  pending: false,
})

export function ButtonProvider(props: PropsWithChildren<ButtonContextValue>) {
  const value = {
    pending: props.pending ?? false,
  }

  return (
    <ButtonContext.Provider value={value}>
      {props.children}
    </ButtonContext.Provider>
  )
}

export function useButtonContext() {
  const ctx = useContext(ButtonContext)
  if (!ctx) {
    throw new Error('useButtonContext must be used within a Button.Provider')
  }
  return ctx
}
