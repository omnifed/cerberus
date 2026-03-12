import type { Observer } from './types'

export let activeObserver: Observer | null = null
const observerStack: Observer[] = []

export function pushObserver(observer: Observer) {
  if (activeObserver) observerStack.push(activeObserver)
  activeObserver = observer
}

export function popObserver() {
  activeObserver = observerStack.pop() || null
}

// Batching State
export let batchDepth = 0
export const batchedObservers = new Set<Observer>()

export function batch<T>(fn: () => T): T {
  batchDepth++
  try {
    return fn()
  } finally {
    batchDepth--
    if (batchDepth === 0) {
      flush()
    }
  }
}

function flush() {
  const observersToRun = Array.from(batchedObservers)
  batchedObservers.clear()
  for (const observer of observersToRun) {
    observer.execute()
  }
}
