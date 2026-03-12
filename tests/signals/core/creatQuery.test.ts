import { describe, test, expect } from 'bun:test'
import { createSignal, createQuery } from '@cerberus-design/signals'

describe('createQuery', () => {
  type User = {
    id: number
    authenticated: boolean
  }

  async function FakeFetcher(id: User['id']): Promise<User> {
    return { id, authenticated: true }
  }

  test('fetches data when args change', async () => {
    const [args] = createSignal<User['id']>(1)
    const query = createQuery(args, FakeFetcher)
    expect(query).toHaveProperty('key')
    expect(query.key).toBe('1')
  })
})
