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

  test('should properly update sibling branches when one branch is read early (Sibling Cleansing)', () => {
    const [getSource, setSource] = createSignal(1)

    // The shared dependency (represents `filteredRows`)
    let filterEvaluations = 0
    const getFiltered = createComputed(() => {
      filterEvaluations++
      return getSource() * 10
    })

    // Sibling 1: The Early Reader (represents `rowCount` pulled by `GridViewport`)
    let rowCountEvaluations = 0
    const getRowCount = createComputed(() => {
      rowCountEvaluations++
      return getFiltered() + 1
    })

    // Sibling 2: The Delayed Pipeline (represents `sortedRows` pulled later by `TableRows`)
    let sortEvaluations = 0
    const getSorted = createComputed(() => {
      sortEvaluations++
      return getFiltered() + 2
    })

    const getVisible = createComputed(() => getSorted() + 3)

    // --- INITIAL MOUNT ---
    expect(getRowCount()).toBe(11) // 10 + 1
    expect(getVisible()).toBe(15) // 10 + 2 + 3

    expect(filterEvaluations).toBe(1)
    expect(rowCountEvaluations).toBe(1)
    expect(sortEvaluations).toBe(1)

    // --- THE MUTATION ---
    setSource(2)

    // --- THE EARLY READ ---
    // React renders GridViewport first, which reads rowCount.
    // This forces getFiltered to evaluate and become "clean".
    expect(getRowCount()).toBe(21) // 20 + 1

    // --- THE DELAYED READ ---
    // React renders TableRows later, which reads visibleRows.
    // If the bug exists, getSorted won't know getFiltered changed,
    // and getVisible will incorrectly return 15 instead of 25.
    expect(getVisible()).toBe(25) // 20 + 2 + 3

    // Ensure it actually re-evaluated the sorted pipeline
    expect(sortEvaluations).toBe(2)
    expect(filterEvaluations).toBe(2)
  })
})
