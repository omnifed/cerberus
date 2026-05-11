import { describe, test, expect } from 'bun:test'
import { createSignal, createEffect } from '@cerberus-design/signals'

describe('createEffect', () => {
  test('should run the effect function', () => {
    const [get, set] = createSignal<boolean>(false)
    createEffect(() => {
      set(true)
    })
    expect(get()).toBe(true)
  })

  test('should allow nesting', () => {
    const [get, set] = createSignal<number>(0)
    createEffect(() => {
      set(1)
      createEffect(() => {
        set(2)
      })
    })
    expect(get()).toBe(2)
  })
})
