'use client'

import { useMemo } from 'react'

/**
 * ## Using global stores within React components
 *
 * A utility hook for using a global store within a React component without being
 * affected by the component's re-rendering cycle.
 *
 * This is ideal for when you want to use a global store within a React component
 * to obtain a unique instance of the store per component.
 *
 * This is an alternative to using the `createSignalStore` factory to create a
 * reusable context provider of the store.
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `store` | `T` | The global store to use within the component. |
 *
 * ## Resources
 * - [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 * - [useStore](https://cerberus.digitalu.design/docs/signals/use-store)
 * - [createSignalStore](https://cerberus.digitalu.design/docs/signals/create-store-context)
 */
export function useStore<T>(store: () => T): T {
  // oxlint-disable-next-line eslint-plugin-react-hooks/exhaustive-deps
  return useMemo(() => store(), [])
}
