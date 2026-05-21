import { signal, computed, effect } from '@preact/signals-core'
import { SignalTuple } from '@cerberus-design/signals'

export const preact = {
  createSignal: <T>(val: T): SignalTuple<T> => {
    const s = signal(val)
    return [() => s.value, (newVal: T) => (s.value = newVal)] as SignalTuple<T>
  },
  createComputed: computed,
  createEffect: effect,
}
