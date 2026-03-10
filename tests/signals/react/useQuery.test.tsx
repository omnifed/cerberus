import { describe, test, expect } from 'bun:test'
import { render, screen, waitFor } from '@testing-library/react'
import { createSignal, createQuery, useQuery } from '@cerberus-design/signals'

describe('useQuery', () => {
  type User = {
    id: number
    authenticated: boolean
  }

  const [userId] = createSignal<User['id']>(1)

  async function FakeFetcher(id: User['id']): Promise<User> {
    return { id, authenticated: true }
  }

  const query = createQuery(userId, FakeFetcher)

  function Test() {
    const data = useQuery(query)
    return <div>{data.id}</div>
  }

  test('fetches data on mount', async () => {
    render(<Test />)
    await waitFor(() => {
      expect(screen.getByText('1')).toBeInTheDocument()
    })
  })
})
