import { useRead } from './useRead'
import type { Accessor } from '../core/types'
import type { QueryState } from '../core/query-cache'

export function useQuery<T>(queryAccessor: Accessor<QueryState<T>>): T {
  // 1. Reactively subscribe to the query state
  const state = useRead(queryAccessor)

  // 2. Integrate with React Suspense
  if (state.status === 'pending' && state.promise) {
    throw state.promise // Suspends the component
  }

  // 3. Integrate with React Error Boundaries
  if (state.status === 'error') {
    throw state.error // Triggers closest <ErrorBoundary>
  }

  // 4. Return the guaranteed data
  return state.data as T
}
