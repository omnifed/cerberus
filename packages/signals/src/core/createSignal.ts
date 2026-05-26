import { activeObserver, batch, propagate, trackDep } from './scheduler'
import type { Accessor, Setter, SignalNode, SignalTuple } from './types'

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
  const node: SignalNode<T> = {
    value: initialValue,
    subs: null,
    subsTail: null,
  }

  const getter: Accessor<T> = () => {
    // Register dependency if inside a reactive context
    if (activeObserver !== null) {
      trackDep(node as SignalNode<unknown>, activeObserver)
    }
    return node.value
  }

  const setter: Setter<T> = (nextValue) => {
    const newValue =
      typeof nextValue === 'function'
        ? (nextValue as (prev: T) => T)(node.value)
        : nextValue

    if (newValue !== node.value) {
      node.value = newValue
      // Zero allocation — linked list traversal
      batch(() => propagate(node as SignalNode<unknown>))
    }
  }

  return [getter, setter]
}
