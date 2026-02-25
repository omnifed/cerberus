'use client'

import { type ReactNode, type CSSProperties } from 'react'
import type { InternalColumn, PinnedState } from './types'

export function usePinnedState(pinned: PinnedState): 'pinned' | 'unpinned' {
  return pinned ? 'pinned' : 'unpinned'
}

export function usePinnedAttribute(
  pinned: PinnedState,
): { 'data-pinned': PinnedState } | undefined {
  return pinned ? { 'data-pinned': pinned } : undefined
}

export function useColumnStyles(
  column: InternalColumn<unknown> | InternalColumn<ReactNode>,
  pinnedVal: PinnedState,
): CSSProperties {
  const styles: CSSProperties = {
    order: `var(--col-${column.id}-order)`,
    left: pinnedVal === 'left' ? `var(--col-${column.id}-left)` : undefined,
    right: pinnedVal === 'right' ? `var(--col-${column.id}-right)` : undefined,
    width: `var(--col-${column.id}-width)`,
  }
  return styles
}
