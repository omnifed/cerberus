import { describe, test, expect } from 'bun:test'
import { createMutation } from '@cerberus-design/signals'

describe('createMutation', () => {
  test('should return a Tuple', () => {
    const mutation = createMutation(() => Promise.resolve())
    const [mutate, getState] = mutation

    expect(typeof mutate).toBe('function')
    expect(typeof getState).toBe('function')
  })
})
