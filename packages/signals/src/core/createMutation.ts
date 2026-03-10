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

/**
 * ## Creating Mutations
 *
 * Mutate data and declaratively invalidate cache keys using the dynamic `.key`
 * property on your queries.
 *
 * `createMutation` accepts a mutation function and an `options` object.
 *
 * This helper eliminates the need to use the React `useEffect` hook for fetching
 * and managing data state. By storing arguments into signals, the query will automatically
 * re-fetch when the signals change or invalidation is triggered by a mutation.
 *
 * On it's own - the mutation does not fetch data. It only manages the cache and subscribes
 * to signal changes. To fetch data, pass the mutation accessor to the `useMutation` hook.
 *
 * ### Updating data
 *
 * To mutate the state of a query, call the `mutate` function returned by the
 * `useMutation` hook. This will trigger the mutation function passed to `createMutation`.
 *
 * ### Invalidating the cache
 *
 * When a mutation is triggered, the list of `query.key` keys specified in the
 * `options.invalidate` array will be invalidated. This will cause the query to
 * re-fetch the data next time it is accessed.
 *
 * In the event where you want to invalidate all queries, you can pass `"all"` as
 * an array value to `options.invalidate: () => ["all"]`.
 *
 * **Caution**: Passing `"all"` will invalidate all queries that exist in the application
 * state. Depending on the size our your application, this might cause a performance issue.
 * We highly recommend being explicit about the `query.key` you want to invalidate.
 *
 * ## API
 *
 * | Parameters | Description |
 * |------------|-------------|
 * | `fn`       |  The effect function to run when signals change. |
 * | `options`  |  Options for the mutation including explicit invalidation keys. |
 *
 * Returns the mutation accessor which can be passed to the `useMutation` hook.
 *
 * ## Return Properties
 *
 * | Property | Description |
 * | -------- | ----------- |
 * | `mutate`    | The mutation function to call when invalidation is triggered. |
 * | `status` | A Promise typed status of the state of the mutation. |
 *
 * ## Resources
 * - [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 * - [useMutation hook](https://cerberus.digitalu.design/docs/signals/use-mutation)
 */
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
