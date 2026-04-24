'use client'

import type { MutationStatus, MutationTuple } from '../core/createMutation'
import { useRead } from './useRead.client'

type MutationReturn<T, V> = {
  status: MutationStatus
  data: T | undefined
  error: unknown | undefined
  mutate: (variables: V) => Promise<T>
}

export function useMutation<T, V>(
  mutationTuple: MutationTuple<T, V>,
): MutationReturn<T, V> {
  const [mutate, getState] = mutationTuple
  const state = useRead(getState)

  return { mutate, ...state }
}
