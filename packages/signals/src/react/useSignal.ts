import { useMemo } from 'react'
import { createSignal } from '../core/createSignal'
import { useRead } from './useRead'
import type { Accessor, Setter } from '../core/types'

export function useSignal<T>(initialValue: T): [T, Setter<T>, Accessor<T>] {
  const [get, set] = useMemo(() => createSignal(initialValue), [])
  const value = useRead(get)

  return [value, set, get]
}
