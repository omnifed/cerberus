import { describe, test, expect } from 'bun:test'
import { createSignal } from '@cerberus-design/signals'

describe('createSignal', () => {
  test('should return an accessor function', () => {
    const [get] = createSignal<string>('1')
    expect(typeof get).toBe('function')
    expect(get()).toBe('1')
  })

  test('should return a setter function', () => {
    const [, set] = createSignal<string>('1')
    expect(typeof set).toBe('function')
  })

  test('should update the value', () => {
    const [get, set] = createSignal<string>('1')
    expect(get()).toBe('1')
    set('2')
    expect(get()).toBe('2')
    set((prev) => prev + '3')
    expect(get()).toBe('23')
  })
})
