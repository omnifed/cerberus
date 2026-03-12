'use client'

import { createStoreContext } from '@cerberus-design/signals'
import type { ReactNode } from 'react'
import type { GridStore } from './types'

const { StoreProvider: BaseProvider, useStore: useBaseStore } =
  createStoreContext<GridStore<unknown>>()

export function DataGridProvider<TData>(props: {
  createStore: () => GridStore<TData>
  children: ReactNode
}) {
  return (
    <BaseProvider createStore={props.createStore as () => GridStore<unknown>}>
      {props.children}
    </BaseProvider>
  )
}

export function useDataGridContext<TData>(): GridStore<TData> {
  return useBaseStore() as GridStore<TData>
}
