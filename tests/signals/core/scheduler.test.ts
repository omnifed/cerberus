import { describe, test, expect } from 'bun:test'
import {
  createSignal,
  createComputed,
  createEffect,
  batch,
  onCleanup,
  untrack,
} from '@cerberus-design/signals'

describe('Graph Execution & Topological Sorting', () => {
  test('resolves the Diamond Problem (no glitches or redundant executions)', () => {
    // 1. Setup the Diamond
    const [getA, setA] = createSignal(1)

    let bEvaluations = 0
    const getB = createComputed(() => {
      bEvaluations++
      return getA() * 2
    })

    let cEvaluations = 0
    const getC = createComputed(() => {
      cEvaluations++
      return getA() + 1
    })

    let dExecutions = 0
    let lastB = 0
    let lastC = 0

    // Effect D depends on both B and C
    createEffect(() => {
      dExecutions++
      lastB = getB()
      lastC = getC()
    })

    // --- INITIAL MOUNT ASSERTIONS ---
    expect(bEvaluations).toBe(1)
    expect(cEvaluations).toBe(1)
    expect(dExecutions).toBe(1)
    expect(lastB).toBe(2) // 1 * 2
    expect(lastC).toBe(2) // 1 + 1

    // --- THE MUTATION ---
    // This updates A. Without topological sorting, D would fire twice
    // (once when B updates, once when C updates).
    setA(2)

    // --- TOPOLOGICAL ASSERTIONS ---
    // The terminal node (Effect) must run exactly once per flush
    expect(dExecutions).toBe(2)

    // The derived nodes must evaluate exactly once
    expect(bEvaluations).toBe(2)
    expect(cEvaluations).toBe(2)

    // The state must be perfectly synchronized (no tearing)
    expect(lastB).toBe(4) // 2 * 2
    expect(lastC).toBe(3) // 2 + 1
  })

  test('batches multiple independent signal updates into a single execution', () => {
    const [getFirstName, setFirstName] = createSignal('John')
    const [getLastName, setLastName] = createSignal('Doe')
    const [getAge, setAge] = createSignal(30)

    let effectExecutions = 0
    let fullName = ''

    createEffect(() => {
      effectExecutions++
      // Reads all three signals
      fullName = `${getFirstName()} ${getLastName()} is ${getAge()}`
    })

    expect(effectExecutions).toBe(1)

    // --- MACRO BATCH ---
    // User-land batching of multiple signals
    batch(() => {
      setFirstName('Jane')
      setLastName('Smith')
      setAge(31)
    })

    // If batching failed, this would be 4. Because it works, it is 2.
    expect(effectExecutions).toBe(2)
    expect(fullName).toBe('Jane Smith is 31')
  })

  test('dynamically drops dependencies on conditional branches (Memory Safety)', () => {
    const [getCondition, setCondition] = createSignal(true)
    const [getTrueBranch, setTrueBranch] = createSignal('True')
    const [getFalseBranch, setFalseBranch] = createSignal('False')

    let effectExecutions = 0
    let result = ''

    createEffect(() => {
      effectExecutions++
      // If true, we NEVER read getFalseBranch().
      if (getCondition()) {
        result = getTrueBranch()
      } else {
        result = getFalseBranch()
      }
    })

    expect(effectExecutions).toBe(1)
    expect(result).toBe('True')

    // 1. Update the FALSE branch while condition is TRUE
    setFalseBranch('False Updated')

    // The effect should NOT run, because it dropped the false branch dependency!
    expect(effectExecutions).toBe(1)

    // 2. Flip the condition
    setCondition(false)

    // Now it runs and reads the updated false branch
    expect(effectExecutions).toBe(2)
    expect(result).toBe('False Updated')

    // 3. Update the TRUE branch while condition is FALSE
    setTrueBranch('True Updated')

    // The effect should NOT run, because it dropped the true branch dependency!
    expect(effectExecutions).toBe(2)
  })

  test('handles deeply nested computations sequentially', () => {
    const [getCount, setCount] = createSignal(0)

    // Depth 1
    const getPlusOne = createComputed(() => getCount() + 1)
    // Depth 2
    const getPlusTwo = createComputed(() => getPlusOne() + 1)
    // Depth 3
    const getPlusThree = createComputed(() => getPlusTwo() + 1)

    let finalValue = 0
    let effectExecutions = 0

    // Depth 4
    createEffect(() => {
      effectExecutions++
      finalValue = getPlusThree()
    })

    expect(finalValue).toBe(3)
    expect(effectExecutions).toBe(1)

    setCount(1)

    // Execution ripples perfectly down the depths
    expect(finalValue).toBe(4)
    expect(effectExecutions).toBe(2)
  })
})

describe('untrack API', () => {
  test('reads signal value without subscribing to updates', () => {
    const [getTracked, setTracked] = createSignal(1)
    const [getUntracked, setUntracked] = createSignal(10)

    let effectRuns = 0
    let latestTracked = 0
    let latestUntracked = 0

    createEffect(() => {
      effectRuns++
      latestTracked = getTracked()
      latestUntracked = untrack(() => getUntracked())
    })

    // Initial mount assertions
    expect(effectRuns).toBe(1)
    expect(latestTracked).toBe(1)
    expect(latestUntracked).toBe(10)

    // Update the UNTRACKED signal
    setUntracked(20)

    // The effect should NOT run because it did not subscribe to getUntracked
    expect(effectRuns).toBe(1)
    expect(latestUntracked).toBe(10) // State remains stale in the effect closure

    // Update the TRACKED signal
    setTracked(2)

    // The effect should run, and it should pick up the new untracked value
    expect(effectRuns).toBe(2)
    expect(latestTracked).toBe(2)
    expect(latestUntracked).toBe(20)
  })

  test('can be nested inside computeds', () => {
    const [getA, setA] = createSignal('A')
    const [getB, setB] = createSignal('B')

    let computedRuns = 0

    const getDerived = createComputed(() => {
      computedRuns++
      return `${getA()} + ${untrack(() => getB())}`
    })

    // Computeds are lazy, so we must read it to initialize
    expect(getDerived()).toBe('A + B')
    expect(computedRuns).toBe(1)

    // Updating B should not invalidate the computed
    setB('B-updated')
    expect(getDerived()).toBe('A + B') // Stale, because it wasn't re-evaluated
    expect(computedRuns).toBe(1)

    // Updating A should trigger a re-evaluation and grab the latest B
    setA('A-updated')
    expect(getDerived()).toBe('A-updated + B-updated')
    expect(computedRuns).toBe(2)
  })
})

describe('onCleanup API', () => {
  test('executes cleanup closure strictly before re-evaluation', () => {
    const [getCount, setCount] = createSignal(0)

    let cleanupRuns = 0
    let effectRuns = 0

    createEffect(() => {
      effectRuns++
      getCount() // Register dependency

      onCleanup(() => {
        cleanupRuns++
      })
    })

    // Mount
    expect(effectRuns).toBe(1)
    expect(cleanupRuns).toBe(0) // Has not cleaned up yet

    // First mutation
    setCount(1)
    expect(effectRuns).toBe(2)
    expect(cleanupRuns).toBe(1) // Cleaned up the first run prior to evaluating the second

    // Second mutation
    setCount(2)
    expect(effectRuns).toBe(3)
    expect(cleanupRuns).toBe(2) // Cleaned up the second run prior to evaluating the third
  })

  test('executes cleanup closure on explicit disposal', () => {
    let cleanupRuns = 0

    const dispose = createEffect(() => {
      onCleanup(() => {
        cleanupRuns++
      })
    })

    expect(cleanupRuns).toBe(0)

    // Manually teardown the effect
    dispose()
    expect(cleanupRuns).toBe(1)

    // Calling dispose again should be a no-op (memory safety check)
    dispose()
    expect(cleanupRuns).toBe(1)
  })

  test('handles multiple onCleanup calls in the same context', () => {
    const [getTrigger, setTrigger] = createSignal(false)
    const executionOrder: string[] = []

    createEffect(() => {
      getTrigger()

      onCleanup(() => executionOrder.push('cleanup-1'))
      onCleanup(() => executionOrder.push('cleanup-2'))
    })

    expect(executionOrder.length).toBe(0)

    setTrigger(true)

    // Both cleanups should fire in the order they were registered
    expect(executionOrder).toEqual(['cleanup-1', 'cleanup-2'])
  })

  test('safely ignores onCleanup when called outside an active owner context', () => {
    let didRun = false

    // Calling outside of createEffect or createComputed
    onCleanup(() => {
      didRun = true
    })

    // It should not throw, but it also shouldn't have an owner to attach to.
    // If it didn't throw, the test passes.
    expect(didRun).toBe(false)
  })
})
