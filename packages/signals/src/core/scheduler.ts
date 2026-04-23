import type { Observer, Owner } from './types'

// Observers

export let activeObserver: Observer | null = null
export let activeOwner: Owner | null = null
const observerStack: Observer[] = []

export function setActiveContext(observer: Observer | null, owner: Owner | null) {
  activeObserver = observer
  activeOwner = owner
}

export function pushObserver(observer: Observer) {
  if (activeObserver) observerStack.push(activeObserver)
  activeObserver = observer
}

export function popObserver() {
  activeObserver = observerStack.pop() || null
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

export function cleanNode(owner: Owner) {
  if (owner.owned !== null) {
    for (let i = 0; i < owner.owned.length; i++) {
      const child = owner.owned[i]
      cleanNode(child)
      if ('cleanup' in child) (child as Observer).cleanup()
    }
    owner.owned = null
  }

  if (owner.cleanups !== null) {
    for (let i = 0; i < owner.cleanups.length; i++) {
      owner.cleanups[i]()
    }
    owner.cleanups = null
  }
}

// Batching

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

/**
 * ## Register a Cleanup Function
 * Registers a callback to be executed when the current computation is
 * re-evaluated or explicitly destroyed.
 */
export function onCleanup(fn: () => void) {
  if (activeOwner !== null) {
    if (activeOwner.cleanups === null) activeOwner.cleanups = []
    activeOwner.cleanups.push(fn)
  }
}

/**
 * ## Untrack Signal Dependencies
 * Executes a function without tracking any signals read within it.
 * Useful for reading the latest value of a signal without triggering
 * re-evaluations when that signal changes.
 */
export function untrack<T>(fn: () => T): T {
  const prevObserver = activeObserver
  setActiveContext(null, activeOwner) // Disable tracking, keep ownership

  try {
    return fn()
  } finally {
    setActiveContext(prevObserver, activeOwner)
  }
}

// Private

function flush(): void {
  if (isFlushing) return
  isFlushing = true

  try {
    for (let i = 0; i <= maxDepth; i++) {
      const bucket = observerQueue[i]
      if (bucket && bucket.size > 0) {
        for (const observer of bucket) {
          bucket.delete(observer)
          try {
            observer.execute()
          } catch (err) {
            console.error('Cerberus Signals: Unhandled error in observer', err)
          }
        }
      }
    }
  } finally {
    isFlushing = false
    maxDepth = 0
  }
}
