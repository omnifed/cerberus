import type { Observable, Observer, Accessor } from './types'
import { activeObserver, pushObserver, popObserver } from './scheduler'

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
