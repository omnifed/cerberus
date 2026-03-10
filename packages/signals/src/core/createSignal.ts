import type { Observable, Accessor, Setter, SignalTuple } from './types'
import { activeObserver, batchDepth, batchedObservers } from './scheduler'

/**
 * ## Create Signal
 *
 * Creates a reactive signal with an intial value which returns a Tuple Array with
 * a getter and setter function. A signal can be created outside a component for
 * global state management or within a component for local state.
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `initialValue` | `T` | The initial value to set the signal to. |
 *
 * ### Getter
 *
 * The getter value is an `Accessor` function that returns the current signal value
 * when called. Creating a signal by nature **does not** trigger React re-renders.
 *
 * Once the signal accessor has been called - the JSX block rendering it will
 * update when the signal value changes.
 *
 * If you are interested in fine-grained reactivity, use the `ReactiveText`
 * component which will ensure only the JSX text content is updated when the signal
 * value changes.
 *
 * ### Setter
 *
 * The setter value is a `Setter` function that updates the signal value and notifies
 * any observers of the change. Setting a signal value **will not** trigger React
 * re-renders _unless_ the Accessor is called within a React JSX block.
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `nextValue` | `T` | The value to set the signal to. |
 *
 * ## Resources
 * [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 */
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
