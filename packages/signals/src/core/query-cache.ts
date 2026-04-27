import { hashArgs } from './createQuery'
import { createSignal } from './createSignal'
import type { SignalTuple } from './types'

export type QueryStatus = 'pending' | 'streaming' | 'success' | 'error'

export interface QueryState<T> {
  data: T | undefined
  error: unknown | undefined
  status: QueryStatus
  promise: Promise<T> | null
}

export const globalQueryCache = new Map<string, SignalTuple<QueryState<unknown>>>()
const queryVersions = new Map<string, ReturnType<typeof createSignal<number>>>()

// --- Garbage Collection Maps ---
const querySubscribers = new Map<string, number>()
const queryGCTimers = new Map<string, ReturnType<typeof setTimeout>>()
const GC_TIME = 1000 * 60 * 5 // 5 minutes

export function getQueryVersionSignal(hashKey: string) {
  if (!queryVersions.has(hashKey)) {
    queryVersions.set(hashKey, createSignal(0))
  }
  return queryVersions.get(hashKey)!
}

export function invalidateQuery(hashKey: string) {
  globalQueryCache.delete(hashKey)
  const [getVersion, setVersion] = getQueryVersionSignal(hashKey)
  setVersion(getVersion() + 1)
}

export function invalidateAllQueries() {
  const allKeys = Array.from(globalQueryCache.keys())
  for (const key of allKeys) {
    const [getVersion, setVersion] = getQueryVersionSignal(key)
    globalQueryCache.delete(key)
    setVersion(getVersion() + 1)
  }
}

export function setQueryData<T>(hashKey: string, updater: (prev: T | undefined) => T) {
  let cacheHit = globalQueryCache.get(hashKey) as SignalTuple<QueryState<T>> | undefined

  // If it doesn't exist yet, seamlessly create it for the optimistic data
  if (!cacheHit) {
    const initialState: QueryState<T> = {
      status: 'success',
      data: updater(undefined),
      error: undefined,
      promise: null,
    }
    globalQueryCache.set(
      hashKey,
      createSignal(initialState) as unknown as SignalTuple<QueryState<unknown>>,
    )
    return
  }

  const [getCache, setCache] = cacheHit
  const currentState = getCache()

  setCache({
    ...currentState,
    data: updater(currentState.data),
    status: 'success',
    promise: null,
  })
}

export function retainQuery(hashKey: string) {
  const count = querySubscribers.get(hashKey) || 0
  querySubscribers.set(hashKey, count + 1)

  // Clear pending deletion if a component remounts
  if (queryGCTimers.has(hashKey)) {
    clearTimeout(queryGCTimers.get(hashKey))
    queryGCTimers.delete(hashKey)
  }
}

export function releaseQuery(hashKey: string) {
  const count = (querySubscribers.get(hashKey) || 1) - 1
  querySubscribers.set(hashKey, Math.max(0, count))

  if (count <= 0) {
    const timer = setTimeout(() => {
      globalQueryCache.delete(hashKey)
      queryVersions.delete(hashKey)
      querySubscribers.delete(hashKey)
      queryGCTimers.delete(hashKey)
    }, GC_TIME)
    queryGCTimers.set(hashKey, timer)
  }
}
