import { useRead } from './useRead'
import type { Accessor } from '../core/types'
import { type MutationState } from 'src/core/createMutation'

/**
 * ## Creating Mutations in Components
 *
 * A hook that provides a convenient way to use mutations in React components.
 * This hook simply deconstructs the mutation provided and utilizes `useRead`
 * to subscribe to the mutation's state.
 *
 * `useMutation` accepts the Accessor returned from `createMutation`.
 *
 * ## API
 *
 * | Parameters | Description |
 * |------------|-------------|
 * | `mutationTuple` |  The result from `createMutation`. |
 *
 * ## Return Properties
 *
 * | Property | Description |
 * | -------- | ----------- |
 * | `mutate` | The mutation function to call when invalidation is triggered. |
 * | `state` | The current state of the mutation. |
 *
 * ## Resources
 * - [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 * - [createMutation](https://cerberus.digitalu.design/docs/signals/create-mutation)
 * - [useRead](https://cerberus.digitalu.design/docs/signals/use-read)
 */
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
