import { user } from '@/utils'
import {
  batch,
  createMutation,
  createQuery,
  createSignal,
  ReactiveText,
  setQueryData,
  useMutation,
  useQuery,
  useSignal,
} from '@cerberus-design/signals'
import { invalidateAllQueries } from '@cerberus-design/signals/src/core/query-cache'
import { render, screen, waitFor } from '@testing-library/react'
import { userEvent } from '@testing-library/user-event'
import { beforeEach, describe, expect, jest, test } from 'bun:test'
import { Suspense } from 'react'

describe('useMutation - Cache Invalidation & Optimistic Updates', () => {
  // Clear the global cache between tests to prevent bleed
  beforeEach(() => {
    invalidateAllQueries()
  })

  type User = { id: number; authenticated: boolean }
  let dbUser: User = { id: 0, authenticated: false }

  const api = jest.fn(async (id: number) => ({ ...dbUser, id }))

  const query = createQuery(api, 'test-mutation-query')

  const mutation = createMutation(
    async (newId: number) => {
      dbUser = { id: newId, authenticated: true } // Update "server"
      return dbUser
    },
    {
      onMutate: (id) => {
        setQueryData(query.key(id), (prev: User | undefined) => {
          if (prev) {
            return { ...prev, id }
          }
          return { id, authenticated: false }
        })
      },
      invalidate: (_data, vars) => [query.key(vars)],
    },
  )

  function Test() {
    const [viewedId, setViewedId] = useSignal(1)
    const data = useQuery(query(viewedId))
    const { mutate } = useMutation(mutation)

    return (
      <>
        <div data-testid="user-id">{data.id}</div>
        <button
          onClick={() => {
            batch(() => {
              setViewedId(2)
              mutate(2)
            })
          }}
        >
          next user
        </button>
      </>
    )
  }

  test('optimistically mutates data on button click', async () => {
    // Wrap in Suspense to handle the useQuery promise throw
    render(
      <Suspense fallback={<div>loading...</div>}>
        <Test />
      </Suspense>,
    )

    await waitFor(() => {
      expect(screen.getByTestId('user-id')).toHaveTextContent('1')
    })

    await user.click(screen.getByText('next user'))

    await waitFor(() => {
      expect(screen.getByTestId('user-id')).toHaveTextContent('2')
    })
  })
})

describe('useMutation - Signal Sync', () => {
  beforeEach(() => {
    invalidateAllQueries()
  })

  type User = { id: number; authenticated: boolean }
  let dbUser: User = { id: 0, authenticated: false }

  const [userId, setUserId] = createSignal(1)
  // Use strings instead of booleans so Testing Library can read it in the DOM
  const [success, setSuccess] = createSignal('pending')

  // Use a unique key for this suite
  const query = createQuery(
    async (id: number) => ({ ...dbUser, id }),
    'test-mutation-query-sync',
  )

  const mutation = createMutation(
    async (id: number) => {
      setUserId(id) // Update the global signal
      return id
    },
    {
      onMutate: (vars) => {
        setQueryData(query.key(vars), (prev: User | undefined) => {
          if (!prev) return { id: vars, authenticated: false }
          return { ...prev, id: vars }
        })
      },
      onSuccess: () => {
        setSuccess('success')
      },
    },
  )

  function Test() {
    // Passing the reactive accessor directly!
    const data = useQuery(query(userId))
    const { mutate } = useMutation(mutation)

    return (
      <>
        <div data-testid="user-id">{data.id}</div>
        <div data-testid="status">
          <ReactiveText data={success} />
        </div>
        <button onClick={() => mutate(2)}>next user</button>
      </>
    )
  }

  test('mutates data and syncs signals on button click', async () => {
    render(
      <Suspense fallback={<div>loading...</div>}>
        <Test />
      </Suspense>,
    )

    await waitFor(() => {
      expect(screen.getByTestId('user-id')).toHaveTextContent('1')
      expect(screen.getByTestId('status')).toHaveTextContent('pending')
    })

    const user = userEvent.setup()
    await user.click(screen.getByText('next user'))

    await waitFor(() => {
      expect(screen.getByTestId('user-id')).toHaveTextContent('2')
      expect(screen.getByTestId('status')).toHaveTextContent('success')
      expect(success()).toBe('success') // Double verify the signal itself
    })
  })
})
