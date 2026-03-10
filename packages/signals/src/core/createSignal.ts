import type { Observable, Accessor, Setter, SignalTuple } from './types'
import { activeObserver, batchDepth, batchedObservers } from './scheduler'

export function createSignal<T>(initialValue: T): SignalTuple<T> {
  let value = initialValue
  const node: Observable = { observers: new Set() }

  const getter: Accessor<T> = () => {
    if (activeObserver) {
      node.observers.add(activeObserver)
      activeObserver.dependencies.add(node)
    }
    return value
  }

  const setter: Setter<T> = (nextValue): void => {
    const newValue =
      typeof nextValue === 'function'
        ? (nextValue as Setter<T>)(value)
        : nextValue

    if (newValue !== value) {
      value = newValue as T
      const currentObservers = Array.from(node.observers)

      if (batchDepth > 0) {
        for (const observer of currentObservers) batchedObservers.add(observer)
      } else {
        for (const observer of currentObservers) observer.execute()
      }
    }
  }

  return [getter, setter]
}
