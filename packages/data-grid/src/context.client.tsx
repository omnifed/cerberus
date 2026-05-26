'use client'

import { createStoreContext } from '@cerberus-design/signals'
import { PropsWithChildren } from 'react'
import type { GridStore } from './types'

const { StoreProvider, useStore } = createStoreContext<GridStore<any>>()

export function DataGridProvider<TData>(
  props: PropsWithChildren<{
    createStore: () => GridStore<TData>
  }>,
) {
  return <StoreProvider createStore={props.createStore}>{props.children}</StoreProvider>
}

export function useDataGridContext<TData>(): GridStore<TData> {
  return useStore() as GridStore<TData>
}
