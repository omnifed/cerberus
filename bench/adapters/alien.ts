import { signal, computed, effect } from 'alien-signals'
import type { SignalTuple } from '@cerberus-design/signals'

export const alien = {
  createSignal: <T>(val: T): SignalTuple<T> => {
    const s = signal(val)
    return [() => s(), (val: T | ((prev: T) => T)) => s(val as T)]
  },
  createComputed: computed,
  createEffect: effect,
}
