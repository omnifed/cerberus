import { SignalTuple } from '@cerberus-design/signals'
import { reactive } from '@reactively/core'

export const reactively = {
  createSignal: <T>(val: T): SignalTuple<T> => {
    const s = reactive(val)
    return [() => s.get(), (newVal: T) => s.set(newVal)] as SignalTuple<T>
  },
  createComputed: reactive,
  createEffect: (fn: () => void) => {
    return reactive(fn)
  },
}
