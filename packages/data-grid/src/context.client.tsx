'use client'

import { createContext, type PropsWithChildren, useContext } from 'react'
import type { GridStore } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const DataGridContext = createContext<GridStore<any> | null>(null)

// Provider

export function DataGridProvider<TData>(
  props: PropsWithChildren<{
    store: GridStore<TData>
  }>,
) {
  return (
    <DataGridContext.Provider value={props.store}>
      {props.children}
    </DataGridContext.Provider>
  )
}

// Hook

export function useDataGridContext<TData = unknown>(): GridStore<TData> {
  const context = useContext(DataGridContext)
  if (!context) {
    throw new Error('useDataGridContext must be used within a DataGrid')
  }
  return context as GridStore<TData>
}
