'use client'

import { useEffect } from 'react'
import type { QueryAccessor } from '../core/createQuery'
import { releaseQuery, retainQuery } from '../core/query-cache'
import { useRead } from './useRead.client'

export function useQuery<T>(queryAccessor: QueryAccessor<T>): T {
  // Manage Garbage Collection reference counting
  useEffect(() => {
    retainQuery(queryAccessor.key)
    return () => releaseQuery(queryAccessor.key)
  }, [queryAccessor.key])

  const state = useRead(queryAccessor)

  // STRICT BYPASS: If 'streaming', we do NOT suspend. The UI receives partial data.
  if (state.status === 'pending' && state.promise) {
    throw state.promise
  }

  if (state.status === 'error') {
    throw state.error
  }

  return state.data as T
}
