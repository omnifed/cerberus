// ─── Internal Node Flags ─────────────────────────────────────────────────────
// Using const enum so TypeScript emits inline integer literals — zero runtime cost.
export const enum NodeFlags {
  None = 0,
  Dirty = 1 << 0, // This node's value is definitely stale; must recompute
  Check = 1 << 1, // An upstream changed; value MAY be stale (lazy check needed)
  Running = 1 << 2, // Currently evaluating — used for circular dep detection
}

// ─── Dependency Graph Link ────────────────────────────────────────────────────
// One Link object connects one (dep → sub) pair in the reactive graph.
// Both the dep's subscriber list and the sub's dependency list are doubly-linked
// through this same Link object — no separate containers needed.
export interface Link {
  dep: SignalNode<unknown> | ComputedNode<unknown>
  sub: ComputedNode<unknown> | EffectNode
  // Sub's dependency linked list (horizontal)
  nextDep: Link | null
  // Dep's subscriber linked list (vertical)
  prevSub: Link | null
  nextSub: Link | null
}

// ─── Signal Node ─────────────────────────────────────────────────────────────
// Source-only. No deps, no flags — signals are always "current".
export interface SignalNode<T> {
  value: T
  subs: Link | null // head of subscriber list
  subsTail: Link | null // tail of subscriber list (O(1) append)
}

// ─── Computed Node ────────────────────────────────────────────────────────────
// Both producer and consumer. Lazy — value is only recomputed when accessed
// and the node is Dirty or Check-resolved-to-Dirty.
export interface ComputedNode<T> {
  value: T
  subs: Link | null
  subsTail: Link | null
  deps: Link | null
  depsTail: Link | null
  flags: NodeFlags
  height: number // position in topological order; 0 = depends only on signals
  fn: () => T
  // Ownership tree (cleanup)
  owned: (ComputedNode<unknown> | EffectNode)[] | null
  cleanups: (() => void)[] | null
}

// ─── Effect Node ─────────────────────────────────────────────────────────────
// Terminal consumer. Runs side effects. Only node type that enters the scheduler queue.
export interface EffectNode {
  deps: Link | null
  depsTail: Link | null
  flags: NodeFlags
  height: number
  owned: (ComputedNode<unknown> | EffectNode)[] | null
  cleanups: (() => void)[] | null
  fn: () => void | (() => void)
}

// ─── Public API Types ────────────────────────────────────────────
export type Accessor<T> = () => T
export type Setter<T> = (newValue: T | ((prev: T) => T)) => void
export type SignalTuple<T> = [Accessor<T>, Setter<T>]

// Owner is the union of the two node types that can own child nodes
export type Owner = ComputedNode<unknown> | EffectNode
