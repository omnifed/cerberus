'use client'

import { useRead } from './useRead.client'
import type { Accessor } from '../core/types'
import type { QueryState } from '../core/query-cache'

/**
 * ## Using Queries in Components
 *
 * A hook that subscribes to a query state and returns the cached or latest data.
 *
 * This hook also integrates with React Suspense and Error Boundaries to handle
 * loading and error states automatically.
 *
 * ### Fetching data
 *
 * When a query is passed to `useQuery`, the hook will subscribe to the query state
 * and automagically return the cached or latest data.
 *
 * ## API
 *
 * | Parameters | Description |
 * |------------|-------------|
 * | `queryAccessor` | The result from `createQuery`. |
 *
 * ## Return
 *
 * The return value is the cached or latest data from the query state.
 *
 * ## Resources
 * - [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 * - [createQuery](https://cerberus.digitalu.design/docs/signals/create-query)
 */
export function useQuery<T>(queryAccessor: Accessor<QueryState<T>>): T {
  const state = useRead(queryAccessor)

  // Integrate with React Suspense
  if (state.status === 'pending' && state.promise) {
    throw state.promise // Suspends the component
  }

  // Integrate with React Error Boundaries
  if (state.status === 'error') {
    throw state.error // Triggers closest <ErrorBoundary>
  }

  return state.data as T
}
