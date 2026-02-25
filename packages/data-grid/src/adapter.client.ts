'use client'

import { type Signal } from '@preact/signals-core'
import { useSyncExternalStore } from 'react'

/**
 * Safely reads a signal in React without tearing or zombie child issues
 * @param signal
 * @returns synced store value
 */
export function useSignalValue<T>(
  signal: Signal<T> | { value: T; subscribe: (cb: () => void) => () => void },
): T {
  return useSyncExternalStore(
    (cb) => signal.subscribe(cb),
    () => signal.value,
    () => signal.value,
  )
}
