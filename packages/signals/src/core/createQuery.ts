// createQuery.ts
import { createSignal } from './createSignal'
import { untrack } from './scheduler' // Make sure you import untrack!
import { getQueryVersionSignal, globalQueryCache, type QueryState } from './query-cache'
import type { Accessor, SignalTuple } from './types'

export type FetcherContext<T> = {
  update: (updater: (prev: T | undefined) => T) => void
}

export type QueryAccessor<T> = Accessor<QueryState<T>> & {
  readonly key: string
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
  fetcher: (
    args: Args,
    context: FetcherContext<T>,
  ) => Promise<T> | AsyncGenerator<T, void, unknown>,
  baseKey: string,
) {
  const queryInvoker = (argsOrAccessor: Args | Accessor<Args>): QueryAccessor<T> => {
    // This is purely a getter. It has ZERO side effects when created
    const queryAccessor = () => {
      const isReactive = typeof argsOrAccessor === 'function'
      const args = isReactive ? (argsOrAccessor as Accessor<Args>)() : argsOrAccessor
      const hash = hashArgs([baseKey, args])

      // Subscribe to invalidations. Any tracking context (like useRead) reading this will auto-subscribe.
      const [getVersion] = getQueryVersionSignal(hash)
      getVersion()

      // UNTRACK the check and initialization so we don't cause infinite React rendering loops
      untrack(() => {
        if (!globalQueryCache.has(hash)) {
          initializeCacheNode(hash, args, fetcher)
        } else {
          const [getCache] = globalQueryCache.get(hash)!
          const state = getCache()
          // THE FIX: Trigger background fetch if invalidated!
          if (state.status === 'error' || state.isInvalidated) {
            executeFetch(hash, args, fetcher)
          }
        }
      })

      // Read and return the actual data OUTSIDE untrack, so useRead subscribes to it
      const [getCache] = globalQueryCache.get(hash)!
      return getCache()
    }

    Object.defineProperty(queryAccessor, 'key', {
      get: () => {
        const isReactive = typeof argsOrAccessor === 'function'
        const args = isReactive ? (argsOrAccessor as Accessor<Args>)() : argsOrAccessor
        return hashArgs([baseKey, args])
      },
      enumerable: true,
    })

    return queryAccessor as QueryAccessor<T>
  }

  queryInvoker.key = (args: Args) => hashArgs([baseKey, args])
  return queryInvoker
}

function initializeCacheNode<T, Args>(
  hashKey: string,
  args: Args,
  fetcher: (
    args: Args,
    ctx: FetcherContext<T>,
  ) => Promise<T> | AsyncGenerator<T, void, unknown>,
) {
  const initialState: QueryState<T> = {
    status: 'pending',
    data: undefined,
    error: undefined,
    promise: null,
    isInvalidated: false,
    version: 0,
  }
  const cacheSignal = createSignal(initialState)
  globalQueryCache.set(
    hashKey,
    cacheSignal as unknown as SignalTuple<QueryState<unknown>>,
  )
  executeFetch(hashKey, args, fetcher)
}

function executeFetch<T, Args>(
  hashKey: string,
  args: Args,
  fetcher: (
    args: Args,
    ctx: FetcherContext<T>,
  ) => Promise<T> | AsyncGenerator<T, void, unknown>,
) {
  const [getCache, setCache] = globalQueryCache.get(hashKey)! as SignalTuple<
    QueryState<T>
  >

  // THE FIX: Fallbacks ensure we never compare NaN
  const startingVersion = getCache().version || 0
  const isStale = () => (getCache().version || 0) !== startingVersion

  try {
    const result = fetcher(args, {
      update: (updater) => {
        if (isStale()) return
        setCache((prev) => ({ ...prev, status: 'streaming', data: updater(prev.data) }))
      },
    })

    // --- STREAMING LOGIC ---
    if (result != null && typeof (result as any)[Symbol.asyncIterator] === 'function') {
      const asyncIterable = result as AsyncGenerator<T, void, unknown>
      const iterator = asyncIterable[Symbol.asyncIterator]()

      const firstChunkPromise = iterator
        .next()
        .then((firstResult) => {
          if (isStale()) return getCache().data as T // ABORT if mutated!

          if (firstResult.done) {
            setCache((prev) => ({ ...prev, status: 'success', promise: null }))
            return firstResult.value as T
          }

          setCache((prev) => ({
            ...prev,
            status: 'streaming',
            data: firstResult.value,
            error: undefined,
            promise: null,
          }))

          ;(async () => {
            try {
              let next = await iterator.next()
              while (!next.done) {
                if (isStale()) return // ABORT mid-stream if mutated!
                setCache((prev) => ({
                  ...prev,
                  status: 'streaming',
                  data: next.value as T,
                  error: undefined,
                  promise: null,
                }))
                next = await iterator.next()
              }
              if (!isStale()) setCache((prev) => ({ ...prev, status: 'success' }))
            } catch (error) {
              if (!isStale())
                setCache((prev) => ({ ...prev, status: 'error', error, promise: null }))
            }
          })()

          return firstResult.value as T
        })
        .catch((error) => {
          if (!isStale())
            setCache((prev) => ({ ...prev, status: 'error', error, promise: null }))
          throw error
        })

      setCache((prev) => ({ ...prev, status: 'pending', promise: firstChunkPromise }))
      return
    }

    // --- STANDARD PROMISE LOGIC ---
    if (result instanceof Promise) {
      const promise = result
        .then((data) => {
          if (isStale()) return getCache().data as T
          setCache((prev) => ({
            ...prev,
            status: 'success',
            data,
            error: undefined,
            promise: null,
          }))
          return data
        })
        .catch((error) => {
          if (isStale()) return
          setCache((prev) => ({
            ...prev,
            status: 'error',
            data: undefined,
            error,
            promise: null,
          }))
          throw error
        })

      setCache((prev) => ({
        ...prev,
        status: 'pending',
        promise: promise as Promise<T>,
        isInvalidated: false,
      }))
    }
  } catch (error) {
    if (!isStale())
      setCache((prev) => ({
        ...prev,
        status: 'error',
        data: undefined,
        error,
        promise: null,
        isInvalidated: false,
      }))
  }
}

export function hashArgs(args: unknown): string {
  if (args === null || args === undefined) return ''
  if (typeof args !== 'object') return String(args)
  if (Array.isArray(args)) {
    let res = '['
    for (let i = 0; i < args.length; i++) res += (i > 0 ? ',' : '') + hashArgs(args[i])
    return res + ']'
  }
  const keys = Object.keys(args as Record<string, unknown>).sort()
  let res = '{'
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    res +=
      (i > 0 ? ',' : '') +
      '"' +
      key +
      '":' +
      hashArgs((args as Record<string, unknown>)[key])
  }
  return res + '}'
}
