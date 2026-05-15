import { describe, test, expect } from 'bun:test'
import { createComputed, createEffect, createSignal } from '@cerberus-design/signals'

describe('createComputed', () => {
  test('should return a computed value', () => {
    const [firstName, setFirstName] = createSignal<string>('John')
    const [lastName, setLastName] = createSignal<string>('Doe')

    const fullName = createComputed<string>(() => `${firstName()} ${lastName()}`)

    expect(fullName()).toBe('John Doe')
    setFirstName('Jane')
    expect(fullName()).toBe('Jane Doe')
    setLastName('Smith')
    expect(fullName()).toBe('Jane Smith')
  })

  test('should subscribe when returning non-primitive value', () => {
    const [value, setValue] = createSignal<number>(0)
    const [name, setName] = createSignal<string>('')

    type ComputedResult = {
      name: string
      value: number
      fullName: string
    }
    const computed = createComputed<ComputedResult>(() => {
      const n = name()
      const val = value()
      const fullName = `${n} ${val}`
      return {
        name: n,
        value: val,
        fullName,
      }
    })

    expect(computed()).toMatchObject({ name: '', value: 0, fullName: ' 0' })
    setName('John')
    expect(computed()).toMatchObject({ name: 'John', value: 0, fullName: 'John 0' })
    setValue(1)
    expect(computed()).toMatchObject({ name: 'John', value: 1, fullName: 'John 1' })
  })

  test('should subscribe when nested computeds are subscribed to the same signal', () => {
    const [value, setValue] = createSignal<number>(0)
    const computed = createComputed<string>(() => `${value()} units`)
    const nested = createComputed<string>(() => {
      const val = value()
      const str = computed()
      return `nested: ${str} (${val})`
    })
    expect(nested()).toBe('nested: 0 units (0)')
    setValue(1)
    expect(nested()).toBe('nested: 1 units (1)')
  })

  test('should PUSH updates to observers when returning a new object reference', () => {
    const [page, setPage] = createSignal(1)

    const currentPageRange = createComputed(() => {
      return { start: page() * 25, end: page() * 25 + 25 }
    })

    let effectRuns = 0
    let latestRange = null

    createEffect(() => {
      effectRuns++
      latestRange = currentPageRange()
    })

    // Mount
    expect(effectRuns).toBe(1)

    setPage(2)

    // ASSERTION: Did the computed PUSH the notification to the effect?
    // We do NOT call currentPageRange() manually here
    expect(effectRuns).toBe(2)
    expect(latestRange).toMatchObject({ start: 50, end: 75 })
  })
})
