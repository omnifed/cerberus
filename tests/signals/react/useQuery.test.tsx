import { createQuery, createSignal, useQuery } from '@cerberus-design/signals'
import { act, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, jest, test } from 'bun:test'

describe('useQuery', () => {
  type User = {
    id: number
    authenticated: boolean
  }

  const [userId, setUserId] = createSignal<User['id']>(1)

  const api = jest.fn(async (id: User['id']): Promise<User> => {
    return { id, authenticated: true }
  })

  const query = createQuery(api, 'test-use-query')

  function Test() {
    const data = useQuery(query(userId))
    return <div>{data.id}</div>
  }

  test('fetches data on mount', async () => {
    render(<Test />)
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument()
    })
  })

  test('fetches data on dependency change', async () => {
    render(<Test />)
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument()
    })
    act(() => {
      setUserId(2)
    })
    await waitFor(() => {
      expect(screen.getByText('2')).toBeInTheDocument()
    })
  })
})
