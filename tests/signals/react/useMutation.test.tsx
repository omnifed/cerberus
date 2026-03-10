import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import {
  createSignal,
  createQuery,
  createMutation,
  useQuery,
  useMutation,
} from '@cerberus-design/signals'
import { user } from '@/utils'

describe('useMutation - Cache Invalidation', () => {
  let dbUser = { id: 1, authenticated: true }

  const query = createQuery(
    () => 'currentUser',
    async () => dbUser,
  )

  const mutation = createMutation(
    async (newId: number) => {
      dbUser = { id: newId, authenticated: true } // Update "server"
      return dbUser
    },
    {
      invalidate: () => [query.key],
    },
  )

  function Test() {
    const data = useQuery(query)
    const { mutate } = useMutation(mutation)

    return (
      <>
        <div>{data.id}</div>
        <button onClick={() => mutate(2)}>next user</button>
      </>
    )
  }

  test('mutates data on button click', async () => {
    render(<Test />)
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument()
    })
    await user.click(screen.getByText('next user'))
    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })
})

describe('useMutation - Signal Sync', () => {
  const [userId, setUserId] = createSignal(1)

  async function FakeFetcher(id: number) {
    return { id, authenticated: true }
  }

  const query = createQuery(userId, FakeFetcher)

  const mutation = createMutation(async (id: number) => await FakeFetcher(id), {
    onSuccess: (_, variables) => {
      setUserId(variables)
    },
  })

  function Test() {
    const data = useQuery(query)
    const { mutate } = useMutation(mutation)

    return (
      <>
        <div>{data.id}</div>
        <button onClick={() => mutate(2)}>next user</button>
      </>
    )
  }

  test('mutates data on button click', async () => {
    render(<Test />)
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument()
    })

    await user.click(screen.getByText('next user'))
    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })
})
