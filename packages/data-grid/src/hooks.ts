import { PinnedState } from './types'

export function usePinnedState(pinned: PinnedState): 'pinned' | 'unpinned' {
  return pinned ? 'pinned' : 'unpinned'
}

export function usePinnedAttribute(
  pinned: PinnedState,
): { 'data-pinned': PinnedState } | undefined {
  return pinned ? { 'data-pinned': pinned } : undefined
}
