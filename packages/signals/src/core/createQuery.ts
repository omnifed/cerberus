import { createEffect } from './createEffect'
import { createSignal } from './createSignal'
import {
  getQueryVersionSignal,
  globalQueryCache,
  QueryState,
} from './query-cache'
import type { Accessor, SignalTuple } from './types'

export type QueryAccessor<T, Args> = Accessor<QueryState<T>> & {
  readonly key: string
  readonly currentArgs: Args
}

/**
 * ## Creating Querys
 *
 * A helper function to create a resource cache that subscribes to the signal store.
 * This is useful for fetching data from an API or other data source that depends
 * on signal arguments.
 *
 * This helper eliminates the need to use the React `useEffect` hook for fetching
 * and managing data state. By storing arguments into signals, the query will automatically
 * re-fetch when the signals change or invalidation is triggered by a mutation.
 *
 * On it's own - the query does not fetch data. It only manages the cache and subscribes
 * to signal changes. To fetch data, pass the query accessor to the `useQuery` hook.
 *
 * ### Fetching data
 *
 * To use a query within a component, pass the query accessor to the `useQuery`
 * hook which then returns the cahced or latest query state.
 *
 * ## API
 *
 * | Parameters | Description |
 * |------------|-------------|
 * | `fn`       |  The effect function to run when signals change. |
 *
 * Returns the query accessor which can be passed to the `useQuery` hook.
 *
 * ## Return Properties
 *
 * Along with the query accessor, additional properties can be accessed for invalidation.
 *
 * | Property | Description |
 * | -------- | ----------- |
 * | `key`    | An invalidation key to be used with `createMutation`. |
 *
 * ## Resources
 * - [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 * - [useQuery hook](https://cerberus.digitalu.design/docs/signals/use-query)
 */
export function createQuery<T, Args>(
  argsAccessor: Accessor<Args | null | undefined>,
  fetcher: (args: Args) => Promise<T>,
): QueryAccessor<T, Args> {
  const [getActiveState, setActiveState] = createSignal<QueryState<T>>({
    status: 'pending',
    data: undefined,
    error: undefined,
    promise: null,
  })

  createEffect(() => {
    const args = argsAccessor()
    const cacheKey = hashArgs(args)

    if (!args || !cacheKey) return

    // We must read the version signal here to register this effect
    // as a subscriber. When `invalidateQuery` increments this version,
    // this entire effect will re-run, see the cache is gone, and fetch anew.
    const [getVersion] = getQueryVersionSignal(cacheKey)
    getVersion()

    if (!globalQueryCache.has(cacheKey)) {
      const initialState: QueryState<T> = {
        status: 'pending',
        data: undefined,
        error: undefined,
        promise: null,
      }

      const cacheSignal = createSignal(initialState)
      globalQueryCache.set(
        cacheKey,
        cacheSignal as unknown as SignalTuple<QueryState<unknown>>,
      )

      const [, setCache] = cacheSignal

      const promise = fetcher(args)
        .then((data) => {
          setCache({ status: 'success', data, error: undefined, promise: null })
          return data
        })
        .catch((error) => {
          setCache({ status: 'error', data: undefined, error, promise: null })
          throw error
        })

      setCache({ ...initialState, promise })
    }

    const [getCache] = globalQueryCache.get(cacheKey)! as SignalTuple<
      QueryState<T>
    >

    // We run an inner effect to continuously sync the active state.
    createEffect(() => {
      setActiveState(getCache())
    })
  })

  const queryAccessor = getActiveState as QueryAccessor<T, Args>

  Object.defineProperties(queryAccessor, {
    key: {
      get: () => hashArgs(argsAccessor()),
      enumerable: true,
    },
    currentArgs: {
      get: () => argsAccessor(),
      enumerable: true,
    },
  })

  return queryAccessor
}

export function hashArgs(args: unknown): string {
  if (args === null || args === undefined) return ''

  if (Array.isArray(args)) {
    return JSON.stringify(args)
  }

  if (typeof args === 'object') {
    const sortedObj: Record<string, unknown> = {}
    const safeArgs = args as Record<string, unknown>

    Object.keys(safeArgs)
      .sort()
      .forEach((key) => {
        sortedObj[key] = safeArgs[key]
      })

    return JSON.stringify(sortedObj)
  }

  return String(args)
}
