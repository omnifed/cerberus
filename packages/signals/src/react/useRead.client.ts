'use client'

import { useSyncExternalStore, useCallback } from 'react'
import { createEffect } from '../core/createEffect'
import type { Accessor } from '../core/types'

/**
 * ## Reading Global Signals
 *
 * A React hook that reads the value of a _global signal_ (e.g., a signal that is
 * defined outside the scope of the React tree).
 *
 * Internally, this wraps the signal in a React `useSyncExternalStore` hook to
 * subscribe to changes and keep the VDOM up-to-date.
 *
 * The hook accepts a signal `Accessor` function and returns the signal's _latest value_.
 * This means it is calling the accessor function on your behalf to get the current value.
 *
 * ### Local Signals
 * When defining signals within a component, use either `createSignal` or
 * `useSignal` instead.
 *
 * | Parameter | Type | Description |
 * | --- | --- | --- |
 * | `accessor` | `Accessor<T>` | The signal to read and subscribe to. |
 *
 * ## Resources
 * [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 */
export function useRead<T>(accessor: Accessor<T>): T {
  const subscribe = useCallback(
    (onStoreChange: () => void) => {
      let isFirstRun = true

      const unsubscribe = createEffect(() => {
        accessor() // Register dependency
        if (!isFirstRun) {
          onStoreChange()
        }
        isFirstRun = false
      })

      return unsubscribe
    },
    [accessor],
  )

  const getSnapshot = useCallback(() => {
    return accessor()
  }, [accessor])

  return useSyncExternalStore(subscribe, getSnapshot, getSnapshot)
}
