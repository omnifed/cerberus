'use client'

import { useSyncExternalStore } from 'react'

const noopSubscribe = () => () => {}

/** False on the server and during hydration, true after. */
export function useHydrated() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  )
}

const REDUCE = '(prefers-reduced-motion: reduce)'

function subscribeReduce(onChange: () => void) {
  const query = window.matchMedia(REDUCE)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

/**
 * Whether motion is allowed. The server and the first client render say no,
 * so the static frame always renders first and nothing is hidden early.
 */
export function useMotionAllowed() {
  return useSyncExternalStore(
    subscribeReduce,
    () => !window.matchMedia(REDUCE).matches,
    () => false,
  )
}

const WIDE = '(min-width: 64rem)'

function subscribeWide(onChange: () => void) {
  const query = window.matchMedia(WIDE)
  query.addEventListener('change', onChange)
  return () => query.removeEventListener('change', onChange)
}

/** Whether the viewport is at least the `lg` breakpoint (64rem). */
export function useWide() {
  return useSyncExternalStore(
    subscribeWide,
    () => window.matchMedia(WIDE).matches,
    () => false,
  )
}
