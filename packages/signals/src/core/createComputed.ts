import type { Observable, Observer, Accessor } from './types'
import { activeObserver, pushObserver, popObserver } from './scheduler'

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

  const node: Observable & Observer = {
    observers: new Set(),
    dependencies: new Set(),
    execute() {
      if (isStale) return
      isStale = true
      const currentObservers = Array.from(node.observers)
      for (const observer of currentObservers) {
        observer.execute()
      }
    },
    cleanup() {
      for (const dep of node.dependencies) dep.observers.delete(node)
      node.dependencies.clear()
    },
  }

  const getter: Accessor<T> = () => {
    if (activeObserver) {
      node.observers.add(activeObserver)
      activeObserver.dependencies.add(node)
    }

    if (isStale) {
      node.cleanup()
      pushObserver(node)
      value = fn()
      popObserver()
      isStale = false
    }

    return value
  }

  return getter
}
