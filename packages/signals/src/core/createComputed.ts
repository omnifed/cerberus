import {
  activeObserver,
  activeOwner,
  cleanNode,
  schedule,
  setActiveContext,
} from './scheduler'
import type { Accessor, Observable, Observer } from './types'

/**
 * ## Creating a Computed Value
 *
 * This function allows you to create a computed value that depends on other signals.
 * This is useful for creating derived information from one or multiple signals.
 *
 * To use create computed, pass a function that returns the value you want to compute.
 *
 * ### Performance
 *
 * Create computed tracks the signals it depends on and recomputes only when
 * those signals change. It is similar to `useMemo` in React without the need
 * for a dependency array.
 *
 * | Parameter | Type | Description |
 * |-----------|------|-------------|
 * | `fn`      | `() => T` | The function that computes the value. |
 *
 * ## Resources
 * [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 */
export function createComputed<T>(fn: () => T): Accessor<T> {
  let value: T
  let isStale: boolean = true
  let isEvaluating: boolean = false

  const node: Observable & Observer = {
    observers: new Set(),
    dependencies: new Set(),
    depth: 0,
    owned: null,
    cleanups: null,
    execute() {
      if (isStale) return
      isStale = true
      const currentObservers = Array.from(node.observers)
      for (const observer of currentObservers) {
        schedule(observer)
      }
    },
    cleanup() {
      for (const dep of node.dependencies) dep.observers.delete(node)
      node.dependencies.clear()
    },
  }

  // Link to active parent owner immediately
  if (activeOwner !== null) {
    if (activeOwner.owned === null) activeOwner.owned = []
    activeOwner.owned.push(node)
  }

  const getter: Accessor<T> = () => {
    if (activeObserver) {
      node.observers.add(activeObserver)
      activeObserver.dependencies.add(node)
      if (activeObserver.depth <= node.depth) {
        activeObserver.depth = node.depth + 1
      }
    }

    if (isEvaluating) {
      throw new Error('Cerberus Signals: Circular dependency detected in computed.')
    }

    if (isStale) {
      cleanNode(node) // Clean previous run's children
      node.cleanup() // Clear old dependencies
      node.depth = 0

      const prevObserver = activeObserver
      const prevOwner = activeOwner
      setActiveContext(node, node)
      isEvaluating = true

      try {
        value = fn()
        isStale = false
      } finally {
        isEvaluating = false
        setActiveContext(prevObserver, prevOwner)
      }
    }
    return value
  }

  return getter
}
