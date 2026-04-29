import { activeObserver, activeOwner, cleanNode, setActiveContext } from './scheduler'
import type { Observer } from './types'

/**
 * ## Reactive Side Effects
 *
 * Creates a reactive side effect that automatically tracks and subscribes to any
 * signals read during its execution. When those signals mutate, the effect is
 * scheduled to re-run topologically.
 *
 * ### Behavior
 * - **Auto-Tracking:** You do not pass a dependency array. The engine maps dependencies
 * dynamically based on the exact execution path of `fn()`.
 * - **Topological Execution:** Effects are terminal nodes. They are guaranteed to run
 * *after* all signals and derived computations (`createComputed`) have settled,
 * preventing torn state or redundant executions.
 * - **Dynamic Branching:** If an effect has conditional logic (`if (a()) b() else c()`),
 * it dynamically subscribes and unsubscribes from branches on every execution,
 * ensuring no memory leaks from inactive code paths.
 *
 * ### Memory Safety & Cleanup
 * The effect automatically cleans up its internal graph subscriptions before every
 * re-execution. If `fn` returns a teardown closure, it will be invoked immediately
 * before the next execution, or when the effect is manually destroyed.
 *
 * ### React Interop (Caveat)
 * `createEffect` lives completely outside the React reconciler. It runs *synchronously* * the moment a signal batch flushes. It should be used for pure graph logic, DOM
 * mutations outside React's purview, or bridging to external stores (like `useSyncExternalStore`).
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `fn`       | `() => void \| (() => void)` | The closure to execute. May optionally return a cleanup closure. |
 *
 * ## Resources
 * [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 */
// createEffect.ts

export function createEffect(fn: () => void | (() => void)): () => void {
  const effect: Observer = {
    dependencies: new Set(),
    depth: 0,
    owned: null,
    cleanups: null,

    execute() {
      cleanNode(effect)
      effect.cleanup()
      effect.depth = 0

      const prevObserver = activeObserver
      const prevOwner = activeOwner
      setActiveContext(effect, effect)

      try {
        const cleanupFn = fn()
        if (typeof cleanupFn === 'function') {
          if (effect.cleanups === null) effect.cleanups = []
          effect.cleanups.push(cleanupFn)
        }
      } finally {
        setActiveContext(prevObserver, prevOwner)
      }
    },
    cleanup() {
      for (const dep of effect.dependencies) dep.observers.delete(effect)
      effect.dependencies.clear()
    },
  }

  if (activeOwner !== null) {
    if (activeOwner.owned === null) activeOwner.owned = []
    activeOwner.owned.push(effect)
  }

  effect.execute()

  return () => {
    cleanNode(effect)
    effect.cleanup()
  }
}
