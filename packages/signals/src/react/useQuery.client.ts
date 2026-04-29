'use client'

import { useEffect, useMemo } from 'react'
import type { QueryAccessor, QueryOptions } from '../core/createQuery'
import { releaseQuery, retainQuery } from '../core/query-cache'
import { useRead } from './useRead.client'

/**
 * ## Creating Queries in Components
 *
 * A hook that provides a convenient way to use queries in React components.
 * This hook simply deconstructs the query provided and utilizes `useRead`
 * to subscribe to the query's state.
 *
 * `useQuery` accepts the Accessor returned from `createQuery`.
 *
 * ## API
 *
 * | Parameters | Description |
 * |------------|-------------|
 * | `queryAccessor` |  The result from `createQuery`. |
 *
 * ## Return Properties
 *
 * | Property | Description |
 * | -------- | ----------- |
 * | `state`  | The current state of the query. |
 *
 * ## Resources
 * - [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 * - [createQuery](https://cerberus.digitalu.design/docs/signals/create-query)
 * - [useRead](https://cerberus.digitalu.design/docs/signals/use-read)
 */
export function useQuery<T>(
  queryAccessor: QueryAccessor<T>,
  options?: QueryOptions<T>,
): T {
  // oxlint-disable-next-line eslint-plugin-react-hooks/exhaustive-deps
  const stableAccessor = useMemo(() => queryAccessor, [queryAccessor.key])
  if (options?.initialData !== undefined) {
    stableAccessor(options)
  }

  useEffect(() => {
    retainQuery(stableAccessor.key)
    return () => releaseQuery(stableAccessor.key)
  }, [stableAccessor.key])

  const state = useRead(stableAccessor)

  // Integrate with React Suspense
  // STRICT BYPASS: If we have ANY data (optimistic or stale),
  // do NOT suspend. Let the UI show the data while the background fetch runs
  if (state.status === 'pending' && state.promise && state.data === undefined) {
    throw state.promise
  }

  // Integrate with React Error Boundaries
  if (state.status === 'error') {
    throw state.error
  }

  return state.data as T
}
