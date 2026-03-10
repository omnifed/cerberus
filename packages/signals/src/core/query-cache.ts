import { hashArgs } from './createQuery'
import { createSignal } from './createSignal'
import type { SignalTuple } from './types'

export type QueryStatus = 'pending' | 'success' | 'error'

export interface QueryState<T> {
  data: T | undefined
  error: unknown | undefined
  status: QueryStatus
  promise: Promise<T> | null
}

export const globalQueryCache = new Map<
  string,
  SignalTuple<QueryState<unknown>>
>()

// Version Cache

const queryVersions = new Map<string, ReturnType<typeof createSignal<number>>>()

export function invalidateQuery<T>(args: T) {
  const hashKey = hashArgs(args)

  globalQueryCache.delete(hashKey)

  const [getVersion, setVersion] = getQueryVersionSignal(hashKey)
  setVersion(getVersion() + 1)
}

export function invalidateAllQueries() {
  const allKeys = Array.from(globalQueryCache.keys())
  for (const key of allKeys) {
    const [getVersion, setVersion] = getQueryVersionSignal(key)
    globalQueryCache.delete(key)
    setVersion(getVersion() + 1) // Trigger refetches across the board
  }
}

export function getQueryVersionSignal(hashKey: string) {
  if (!queryVersions.has(hashKey)) {
    queryVersions.set(hashKey, createSignal(0))
  }
  return queryVersions.get(hashKey)!
}
