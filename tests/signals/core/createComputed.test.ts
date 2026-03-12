import { describe, test, expect } from 'bun:test'
import { createComputed, createSignal } from '@cerberus-design/signals'

describe('createComputed', () => {
  test('should return a computed value', () => {
    const [firstName, setFirstName] = createSignal<string>('John')
    const [lastName, setLastName] = createSignal<string>('Doe')
    const fullName = createComputed<string>(
      () => `${firstName()} ${lastName()}`,
    )

    expect(fullName()).toBe('John Doe')
    setFirstName('Jane')
    expect(fullName()).toBe('Jane Doe')
    setLastName('Smith')
    expect(fullName()).toBe('Jane Smith')
  })
})
