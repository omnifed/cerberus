import { useRead } from './useRead'
import type { Accessor } from '../core/types'
import { type MutationState } from 'src/core/createMutation'

export function useMutation<T, V>(
  mutationTuple: [
    mutate: (variables: V) => Promise<T>,
    getState: Accessor<MutationState<T>>,
  ],
) {
  const [mutate, getState] = mutationTuple
  const state = useRead(getState)

  return { mutate, ...state }
}
