'use client'

import { useMemo } from 'react'
import { createSignal } from '../core/createSignal'
import type { Accessor, Setter } from '../core/types'
import { useRead } from './useRead.client'

/**
 * ## Creating Signals in Components
 *
 * A utility hook for creating signals within React components. This hook is
 * essentially a wrapper around `createSignal` and `useRead`.
 *
 * This allows the hook to return the Tuple from `createSignal` along with the
 * value from `useRead` for full access to both the signal value and the signal itself.
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `initialValue` | `T` | The initial value to set the signal to. |
 *
 * ### Value
 *
 * The first element of the returned tuple is the value from `useRead`, providing
 * access to the signal value within the React scope.
 *
 * ### Setter
 *
 * The second item in the tuple is the setter function provided from `createSignal`.
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `nextValue` | `T` | The value to set the signal to. |
 *
 *  ### Getter
 *
 * The third item in the tuple is the getter `Accessor` provided from `createSignal`.
 *
 * If you are interested in fine-grained reactivity, use the `ReactiveText`
 * component which will ensure only the JSX text content is updated when the signal
 * value changes.
 *
 * ## Resources
 * - [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 * - [createSignal](https://cerberus.digitalu.design/docs/signals/create-signal)
 * - [useRead](https://cerberus.digitalu.design/docs/signals/use-read)
 */
export function useSignal<T>(initialValue: T): [T, Setter<T>, Accessor<T>] {
  const [get, set] = useMemo(() => createSignal(initialValue), [initialValue])
  const value = useRead(get)
  return [value, set, get]
}
