import { createSignal } from './createSignal'
import { invalidateQuery, invalidateAllQueries } from './query-cache'
import type { Accessor } from './types'

export type MutationStatus = 'idle' | 'pending' | 'success' | 'error'

export interface MutationState<T> {
  status: MutationStatus
  data: T | undefined
  error: unknown | undefined
}

interface MutationOptions<T, V> {
  onSuccess?: (data: T, variables: V) => void
  onError?: (error: unknown, variables: V) => void
  invalidate?: 'all' | ((data: T, variables: V) => unknown[])
}

type MutationReturn<T, V> = [
  mutate: (variables: V) => Promise<T>,
  getState: Accessor<MutationState<T>>,
]

export function createMutation<T, V>(
  mutator: (variables: V) => Promise<T>,
  options?: MutationOptions<T, V>,
): MutationReturn<T, V> {
  const [getState, setState] = createSignal<MutationState<T>>({
    status: 'idle',
    data: undefined,
    error: undefined,
  })

  const mutate = async (variables: V): Promise<T> => {
    setState({ status: 'pending', data: undefined, error: undefined })

    try {
      const data = await mutator(variables)
      setState({ status: 'success', data, error: undefined })

      // --- Declarative Invalidation Logic ---
      if (options?.invalidate) {
        if (options.invalidate === 'all') {
          invalidateAllQueries()
        } else {
          // Execute the function to get the fresh keys at the exact moment of success
          const keysToInvalidate = options.invalidate(data, variables)
          for (const key of keysToInvalidate) {
            invalidateQuery(key)
          }
        }
      }

      if (options?.onSuccess) options.onSuccess(data, variables)
      return data
    } catch (error) {
      setState({ status: 'error', data: undefined, error })
      if (options?.onError) options.onError(error, variables)
      throw error
    }
  }

  return [mutate, getState]
}
