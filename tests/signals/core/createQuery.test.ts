import { createQuery } from '@cerberus-design/signals'
import { describe, expect, jest, test } from 'bun:test'

describe('createQuery', () => {
  type User = {
    id: number
    authenticated: boolean
  }

  const api = jest.fn(async (id: User['id']): Promise<User> => {
    return { id, authenticated: true }
  })

  const query = createQuery(api, 'test-query')

  test('it returns a query tuple', () => {
    expect(query).toEqual(expect.any(Function))
    expect(query).toHaveProperty('key')
    expect(query.key(1)).toBe('[test-query,1]')
  })
})
