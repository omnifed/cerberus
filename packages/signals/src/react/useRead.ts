import { useSyncExternalStore, useCallback } from 'react'
import { createEffect } from '../core/createEffect'
import type { Accessor } from '../core/types'

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

  return useSyncExternalStore(subscribe, getSnapshot)
}
