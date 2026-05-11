import {
  activeObserver,
  activeOwner,
  endTracking,
  propagate,
  setActiveContext,
  trackDep,
} from './scheduler'
import {
  NodeFlags,
  type Accessor,
  type ComputedNode,
  type EffectNode,
  type Owner,
} from './types'

/**
 * ## Creating a Computed Value
 *
 * This function allows you to create a computed value that depends on other signals.
 * This is useful for creating derived information from one or multiple signals.
 *
 * To use create computed, pass a function that returns the value you want to compute.
 *
 * ### Performance
 *
 * Create computed tracks the signals it depends on and recomputes only when
 * those signals change. It is similar to `useMemo` in React without the need
 * for a dependency array.
 *
 * | Parameter | Type | Description |
 * |-----------|------|-------------|
 * | `fn`      | `() => T` | The function that computes the value. |
 *
 * ## Resources
 * [Cerberus Signals Docs](https://cerberus.digitalu.design/docs/signals/overview)
 */
export function createComputed<T>(fn: () => T): Accessor<T> {
  const node: ComputedNode<T> = {
    value: undefined as T,
    subs: null,
    subsTail: null,
    deps: null,
    depsTail: null,
    flags: NodeFlags.Dirty, // start dirty — first read triggers evaluation
    height: 0,
    fn,
    owned: null,
    cleanups: null,
  }

  // Register with active owner for cleanup
  if (activeOwner !== null) {
    if (activeOwner.owned === null) activeOwner.owned = []
    activeOwner.owned.push(node)
  }

  const getter: Accessor<T> = () => {
    // Circular dependency guard
    if (node.flags & NodeFlags.Running) {
      throw new Error('Cerberus Signals: Circular dependency detected in computed.')
    }

    // Lazily resolve if stale
    if (node.flags & (NodeFlags.Dirty | NodeFlags.Check)) {
      resolveComputed(node)
    }

    // Register this computed as a dependency of the outer context
    if (activeObserver !== null) {
      trackDep(node as ComputedNode<unknown>, activeObserver)
    }

    return node.value
  }

  return getter
}

// Internal - called by the scheduler flush and on first run

/**
 * Forces a computed to re-evaluate if it is Dirty or Check-resolved-to-Dirty.
 * Called lazily from updateIfNecessary — never from the scheduler directly.
 */
export function resolveComputed(node: ComputedNode<unknown>): void {
  if (node.flags & NodeFlags.Dirty) {
    _rerunComputed(node)
    return
  }

  if (node.flags & NodeFlags.Check) {
    let link = node.deps
    let needsRerun = false

    while (link !== null) {
      const dep = link.dep

      if ('fn' in dep) {
        const computed = dep as ComputedNode<unknown>

        if (computed.flags & (NodeFlags.Dirty | NodeFlags.Check)) {
          const prevValue = computed.value
          resolveComputed(computed)
          if (computed.value !== prevValue) {
            needsRerun = true
            break
          }
        }
      }

      link = link.nextDep
    }

    if (needsRerun) _rerunComputed(node)
    else node.flags &= ~NodeFlags.Check
  }
}

function _rerunComputed<T>(node: ComputedNode<T>): void {
  // Clean up stale deps from previous run
  endTracking(node)

  const prevObserver = activeObserver
  const prevOwner = activeOwner
  setActiveContext(node as unknown as EffectNode, node as Owner)
  node.flags = (node.flags & ~(NodeFlags.Dirty | NodeFlags.Check)) | NodeFlags.Running

  try {
    const newValue = node.fn()
    node.flags &= ~NodeFlags.Running

    if (newValue !== node.value) {
      node.value = newValue
      // Value changed — propagate to subscribers
      propagate(node as ComputedNode<unknown>)
    }
  } finally {
    node.flags &= ~NodeFlags.Running
    setActiveContext(prevObserver, prevOwner)
  }
}
