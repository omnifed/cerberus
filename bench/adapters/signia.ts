import { atom, computed } from 'signia'
import { type SignalTuple } from '@cerberus-design/signals'

export const signia = {
  createSignal: <T>(val: T): SignalTuple<T> => {
    const s = atom('signal', val)
    return [() => s.value, (newVal: T) => s.set(newVal)] as SignalTuple<T>
  },
  createComputed: <T>(fn: () => T) => {
    const c = computed('computed', fn)
    return () => c.value
  },
}
