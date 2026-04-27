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
  const [, setCache] = globalQueryCache.get(hashKey)! as SignalTuple<QueryState<T>>

  const context: FetcherContext<T> = {
    update: (updater) =>
      setCache((prev) => ({ ...prev, status: 'streaming', data: updater(prev.data) })),
  }

  try {
    const result = fetcher(args, context)

    if (result != null && typeof (result as any)[Symbol.asyncIterator] === 'function') {
      const asyncIterable = result as AsyncGenerator<T, void, unknown>
      const promise = (async () => {
        try {
          for await (const nextState of asyncIterable) {
            setCache((prev) => ({
              ...prev,
              status: 'streaming',
              data: nextState,
              error: undefined,
              promise: null,
            }))
          }
          setCache((prev) => ({ ...prev, status: 'success' }))
        } catch (error) {
          setCache((prev) => ({ ...prev, status: 'error', error, promise: null }))
          throw error
        }
      })() as Promise<T>
      setCache((prev) => ({ ...prev, status: 'pending', promise }))
      return
    }

    if (result instanceof Promise) {
      const promise = result
        .then((data) => {
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
        promise,
        isInvalidated: false, // Reset flag
      }))
    }
  } catch (error) {
    setCache((prev) => ({
      ...prev,
      status: 'error',
      data: undefined,
      error,
      promise: null,
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
