import { describe, test, expect } from 'bun:test'
import {
  batch,
  createComputed,
  createEffect,
  createSignal,
} from '@cerberus-design/signals'

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

describe('createEffect disposal', () => {
  test('should stop running once disposed', () => {
    const [count, setCount] = createSignal<number>(0)
    let runs = 0
    const dispose = createEffect(() => {
      count()
      runs++
    })

    setCount(1)
    expect(runs).toBe(2)

    dispose()
    setCount(2)
    expect(runs).toBe(2)
  })

  test('should not run when disposed while queued in a batch', () => {
    const [count, setCount] = createSignal<number>(0)
    let runs = 0
    const dispose = createEffect(() => {
      count()
      runs++
    })

    batch(() => {
      setCount(1)
      dispose()
    })
    expect(runs).toBe(1)
  })

  test('should stop running when disposed during its own run', () => {
    const [count, setCount] = createSignal<number>(0)
    let runs = 0
    let dispose: () => void = () => {}
    dispose = createEffect(() => {
      if (count() > 0) dispose()
      runs++
    })

    setCount(1)
    expect(runs).toBe(2)
    setCount(2)
    expect(runs).toBe(2)
  })

  test('should dispose nested effects when the parent re-runs', () => {
    const [parent, setParent] = createSignal<number>(0)
    const [child, setChild] = createSignal<number>(0)
    let childRuns = 0
    createEffect(() => {
      parent()
      createEffect(() => {
        child()
        childRuns++
      })
    })

    setParent(1)
    setParent(2)
    childRuns = 0
    setChild(1)
    // Only the child created by the latest parent run is alive
    expect(childRuns).toBe(1)
  })

  test('should dispose nested computeds when the parent re-runs', () => {
    const [parent, setParent] = createSignal<number>(0)
    const [source, setSource] = createSignal<number>(0)
    let evaluations = 0
    let latest: () => number = () => 0
    createEffect(() => {
      parent()
      const doubled = createComputed(() => {
        evaluations++
        return source() * 2
      })
      latest = doubled
      createEffect(() => {
        doubled()
      })
    })

    setParent(1)
    evaluations = 0
    setSource(1)
    // The computed from the first parent run no longer re-evaluates
    expect(evaluations).toBe(1)
    expect(latest()).toBe(2)
  })
})
