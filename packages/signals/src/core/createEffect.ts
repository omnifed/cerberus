import {
  activeObserver,
  activeOwner,
  cleanNode,
  endTracking,
  setActiveContext,
} from './scheduler'
import { EffectNode, NodeFlags, Owner } from './types'

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
export function createEffect(fn: () => void | (() => void)): () => void {
  const effect: EffectNode = {
    deps: null,
    depsTail: null,
    flags: NodeFlags.Dirty, // start dirty — run immediately
    height: 0,
    owned: null,
    cleanups: null,
    fn,
  }

  if (activeOwner !== null) {
    if (activeOwner.owned === null) activeOwner.owned = []
    activeOwner.owned.push(effect)
  }

  // Immediate first run (outside scheduler — same as v1.3)
  runEffect(effect)

  return () => {
    cleanNode(effect)
    endTracking(effect)
  }
}

// Internal — called by the scheduler flush and on first run

export function runEffect(effect: EffectNode): void {
  effect.depsTail = null

  const prevObserver = activeObserver
  const prevOwner = activeOwner
  setActiveContext(effect, effect as Owner)

  effect.flags =
    (effect.flags & ~(NodeFlags.Dirty | NodeFlags.Check)) | NodeFlags.Running

  try {
    const cleanup = effect.fn()
    if (typeof cleanup === 'function') {
      if (effect.cleanups === null) effect.cleanups = []
      effect.cleanups.push(cleanup)
    }
  } finally {
    effect.flags &= ~NodeFlags.Running
    setActiveContext(prevObserver, prevOwner)
  }

  endTracking(effect)
}
