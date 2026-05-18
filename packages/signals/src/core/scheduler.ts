import { resolveComputed } from './createComputed'
import { runEffect } from './createEffect'
import {
  NodeFlags,
  type Accessor,
  type ComputedNode,
  type EffectNode,
  type Link,
  type Owner,
  type SignalNode,
} from './types'

// Observers

export let activeObserver: EffectNode | null = null
export let activeOwner: Owner | null = null

export function setActiveContext(observer: EffectNode | null, owner: Owner | null) {
  activeObserver = observer
  activeOwner = owner
}

// Engine

/**
 * Called when a reactive node is READ inside an active computation.
 * Links dep → sub in O(1). Zero allocation when dep order is stable
 * between re-evaluations (the common case).
 */
export function trackDep(
  dep: SignalNode<unknown> | ComputedNode<unknown>,
  sub: ComputedNode<unknown> | EffectNode,
): void {
  const prevDep = sub.depsTail

  // Same dep accessed again in same position — already linked.
  if (prevDep !== null && prevDep.dep === dep) return

  // The NEXT existing dep in the list is this dep.
  // Stable dep order reuses existing Link objects — zero allocation.
  const nextExisting = prevDep !== null ? prevDep.nextDep : sub.deps
  if (nextExisting !== null && nextExisting.dep === dep) {
    sub.depsTail = nextExisting
    return
  }

  // Topology changed. Allocate a new Link.
  const prevSub = dep.subsTail
  const newLink: Link = {
    dep,
    sub,
    nextDep: nextExisting,
    prevSub,
    nextSub: null,
  }

  // Insert into sub's dep list
  if (prevDep !== null) prevDep.nextDep = newLink
  else sub.deps = newLink
  sub.depsTail = newLink

  // Insert into dep's sub list
  if (prevSub !== null) prevSub.nextSub = newLink
  else dep.subs = newLink
  dep.subsTail = newLink

  // Update sub's height: must be strictly deeper than dep
  if ('height' in dep && sub.height <= dep.height) {
    sub.height = dep.height + 1
  }
}

/**
 * Called at the END of a reactive evaluation.
 * Removes any deps that were NOT re-accessed in this run
 * (handles dynamic branches — no memory leaks from dead paths).
 */
export function endTracking(sub: ComputedNode<unknown> | EffectNode): void {
  const tail = sub.depsTail
  // Everything after `tail` in the dep list was NOT accessed — prune it
  let stale = tail !== null ? tail.nextDep : sub.deps

  while (stale !== null) {
    const next = stale.nextDep
    unlinkDep(stale) // O(1) pointer surgery, no allocation
    stale = next
  }

  if (tail !== null) tail.nextDep = null
  else sub.deps = null
}

/** O(1) removal of a single Link from the dep's subscriber list. */
function unlinkDep(link: Link): void {
  const { dep, prevSub, nextSub } = link

  if (nextSub !== null) nextSub.prevSub = prevSub
  else dep.subsTail = prevSub

  if (prevSub !== null) prevSub.nextSub = nextSub
  else dep.subs = nextSub
}

export function scheduleEffect(effect: EffectNode): void {
  const height = effect.height
  if (!observerQueue[height]) {
    observerQueue[height] = new Set()
  }

  observerQueue[height].add(effect)
  if (height > maxDepth) maxDepth = height
  if (!isBatching && !isFlushing) _flush()
}

export function cleanNode(owner: Owner) {
  if (owner.owned !== null) {
    for (let i = 0; i < owner.owned.length; i++) {
      const child = owner.owned[i]
      cleanNode(child)
    }
    owner.owned = null
  }

  if (owner.cleanups !== null) {
    for (let i = 0; i < owner.cleanups.length; i++) {
      owner.cleanups[i]()
    }
    owner.cleanups = null
  }
}

/**
 * Called when a signal or computed definitively changed value.
 * Marks direct subscribers Dirty, then propagates Check upward.
 * Zero allocation — pure pointer traversal.
 */
export function propagate(node: SignalNode<unknown> | ComputedNode<unknown>): void {
  let link = node.subs

  while (link !== null) {
    const sub = link.sub
    const isComputed = 'subs' in sub

    if (isComputed) {
      const computed = sub as ComputedNode<unknown>
      const flags = computed.flags

      // Guard against running nodes to prevent circular tracking
      if (!(flags & (NodeFlags.Dirty | NodeFlags.Running))) {
        // Upgrade Check to Dirty (and clear Check)
        computed.flags = (flags & ~NodeFlags.Check) | NodeFlags.Dirty

        // Only propagate downward if it was completely clean
        if (!(flags & NodeFlags.Check)) {
          _propagateCheck(computed)
        }
      }
    } else {
      const effect = sub as EffectNode
      const flags = effect.flags

      // Guard against running nodes to prevent circular tracking
      if (!(flags & (NodeFlags.Dirty | NodeFlags.Running))) {
        effect.flags = (flags & ~NodeFlags.Check) | NodeFlags.Dirty

        // Only schedule if it was completely clean
        // (If it was Check, it is already in the scheduler queue)
        if (!(flags & NodeFlags.Check)) {
          scheduleEffect(effect)
        }
      }
    }

    link = link.nextSub
  }
}

/**
 * Propagates the MAYBE-STALE signal upward from a computed that is Dirty
 * but has not yet re-evaluated. Subscribers of this computed should not be
 * marked Dirty (the computed might produce the same value), only Check.
 */
function _propagateCheck(node: ComputedNode<unknown>): void {
  let link = node.subs

  while (link !== null) {
    const sub = link.sub
    if (!(sub.flags & (NodeFlags.Dirty | NodeFlags.Check | NodeFlags.Running))) {
      sub.flags |= NodeFlags.Check
      if ('subs' in sub) {
        _propagateCheck(sub as ComputedNode<unknown>)
      } else {
        scheduleEffect(sub as EffectNode)
      }
    }

    link = link.nextSub
  }
}

/**
 * Lazy guard called before executing an effect in the flush phase.
 * Returns true if the effect should actually run, false if it can be skipped.
 *
 * Diamond Problem fix: if all upstream computeds produced the same value
 * despite their signals changing, returns false and the effect is a no-op.
 */
export function updateIfNecessary(sub: ComputedNode<unknown> | EffectNode): boolean {
  if (sub.flags & NodeFlags.Dirty) return true

  if (sub.flags & NodeFlags.Check) {
    let link = sub.deps

    while (link !== null) {
      const dep = link.dep

      if ('fn' in dep) {
        const computed = dep as ComputedNode<unknown>

        if (computed.flags & (NodeFlags.Dirty | NodeFlags.Check)) {
          const prevValue = computed.value
          resolveComputed(computed)

          if (computed.value !== prevValue) {
            // This dep changed value — our sub must update
            sub.flags = (sub.flags & ~NodeFlags.Check) | NodeFlags.Dirty
            return true
          }
        }
      }

      link = link.nextDep
    }

    // No dep changed value — clear Check, skip execution
    sub.flags &= ~NodeFlags.Check
    return false
  }

  return false
}

// Batching

// Keep for backward compat if needed, but migrate internal usage
export const batchedObservers: Set<EffectNode> = new Set<EffectNode>()

const observerQueue: Set<EffectNode>[] = []
let maxDepth = 0
let isBatching: boolean = false
let isFlushing: boolean = false

/**
 * ## Batching Signal Setters
 *
 * Allows multiple signal setters to be batched together, ensuring they run in a
 * single update. This is useful when you want to update multiple signals at once,
 * without triggering multiple updates.
 *
 * | Parameters | Type | Description |
 * |------------|------|-------------|
 * | `callback` | `() => void` | The callback to batch any signal updates into a single update. |
 */
export function batch<T>(fn: () => T): void {
  if (isBatching) {
    fn()
    return
  }
  isBatching = true
  try {
    fn()
  } finally {
    isBatching = false
    // Only flush if we aren't already in the middle of a flush cycle
    if (!isFlushing) _flush()
  }
}

/**
 * ## Register a Cleanup Function
 * Registers a callback to be executed when the current computation is
 * re-evaluated or explicitly destroyed.
 */
export function onCleanup(fn: () => void) {
  if (activeOwner !== null) {
    if (activeOwner.cleanups === null) activeOwner.cleanups = []
    activeOwner.cleanups.push(fn)
  }
}

/**
 * ## Untrack Signal Dependencies
 * Executes a function without tracking any signals read within it.
 * Useful for reading the latest value of a signal without triggering
 * re-evaluations when that signal changes.
 */
export function untrack<T>(signal: Accessor<T>): T {
  const prevObserver = activeObserver
  setActiveContext(null, activeOwner) // Disable tracking, keep ownership

  try {
    return signal()
  } finally {
    setActiveContext(prevObserver, activeOwner)
  }
}

// Private

function _flush(): void {
  if (isFlushing) return
  isFlushing = true

  try {
    for (let i = 0; i <= maxDepth; i++) {
      const bucket = observerQueue[i]
      if (!bucket || bucket.size === 0) continue

      for (const effect of bucket) {
        // Remove the effect from the queue immediately
        bucket.delete(effect)

        if (updateIfNecessary(effect)) {
          try {
            runEffect(effect)
          } catch (err) {
            console.error('Cerberus Signals: Unhandled error in effect', err)
          }
        }
      }
    }
  } finally {
    isFlushing = false
    maxDepth = 0
  }
}
