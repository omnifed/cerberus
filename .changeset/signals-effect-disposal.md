---
'@cerberus-design/signals': patch
---

`createEffect`'s dispose function now actually unsubscribes the effect. Before, it was a no-op.

Silent behavior changes (fixes):

- A disposed effect no longer runs when a signal it read changes, including when it was already queued in a `batch`.
- `useRead` no longer leaks a subscription on unmount, StrictMode double-mount or accessor change.
- Effects and computeds created inside an effect or computed are disposed when their owner re-runs; they used to pile up and keep running.

Docs: signals notify only when a value changes by `!==`. Sorting an array in place and returning it (`data.sort()`) notifies nobody; return a new array (`toSorted`, `map`, `filter`).
