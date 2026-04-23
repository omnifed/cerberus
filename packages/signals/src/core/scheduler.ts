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

// Keep for backward compat if needed, but migrate internal usage
export const batchedObservers: Set<Observer> = new Set<Observer>()

const observerQueue: Set<Observer>[] = []
let maxDepth = 0
let isBatching: boolean = false
let isFlushing: boolean = false

/**
 * ## Batching Signal Setters
 *
 * Allows multiple signal setters to be batched together, ensuring they run in a
 * single update. This is useful when you want to update multiple signals at once,
 * without triggering multiple updates.
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `callback` | `() => void` | The callback to batch any signal updates into a single update. |
 */
export function batch<T>(fn: () => T): void {
  if (isBatching) {
    fn()
    return
  }
  isBatching = true
  try {
    fn()
  } finally {
    isBatching = false
    // Only flush if we aren't already in the middle of a flush cycle
    if (!isFlushing) flush()
  }
}

export function schedule(observer: Observer): void {
  const depth = observer.depth
  if (!observerQueue[depth]) {
    observerQueue[depth] = new Set()
  }

  observerQueue[depth].add(observer)
  if (depth > maxDepth) maxDepth = depth

  if (!isBatching && !isFlushing) flush()
}

function flush(): void {
  if (isFlushing) return
  isFlushing = true

  try {
    for (let i = 0; i <= maxDepth; i++) {
      const bucket = observerQueue[i]
      if (bucket && bucket.size > 0) {
        const queue = Array.from(bucket)
        bucket.clear()

        for (const observer of queue) {
          try {
            observer.execute()
          } catch (err) {
            console.error(
              'Cerberus Signals: Unhandled error in observer execution',
              err,
            )
          }
        }
      }
    }
  } finally {
    isFlushing = false
    maxDepth = 0
  }
}
