'use client'

import { useEffect, useMemo } from 'react'
import type { QueryAccessor } from '../core/createQuery'
import { releaseQuery, retainQuery } from '../core/query-cache'
import { useRead } from './useRead.client'

export function useQuery<T>(queryAccessor: QueryAccessor<T>): T {
  // 1. Stabilize the accessor using its deterministic key.
  // This completely eliminates the React 19 infinite loop error!
  // oxlint-disable-next-line eslint-plugin-react-hooks/exhaustive-deps
  const stableAccessor = useMemo(() => queryAccessor, [queryAccessor.key])

  // 2. Manage Garbage Collection reference counting
  useEffect(() => {
    retainQuery(stableAccessor.key)
    return () => releaseQuery(stableAccessor.key)
  }, [stableAccessor.key])

  // 3. Read the state via useSyncExternalStore
  const state = useRead(stableAccessor)

  // 4. Integrate with React Suspense
  // STRICT BYPASS: If 'streaming', we do NOT suspend. The UI receives partial data.
  if (state.status === 'pending' && state.promise) {
    throw state.promise
  }

  // 5. Integrate with React Error Boundaries
  if (state.status === 'error') {
    throw state.error
  }

  return state.data as T
}
