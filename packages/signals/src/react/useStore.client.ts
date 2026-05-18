'use client'

import { useRef } from 'react'

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
 * > **Note:** This hook expects the store to be created in the global scope. Creating
 * stores within a component is highly volatile due to React's fragile reconciliation process.
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
export function useStore<T>(storeFactory: () => T): T {
  const storeRef = useRef<T | null>(null)

  if (storeRef.current === null) {
    storeRef.current = storeFactory()
  }

  return storeRef.current as T
}
