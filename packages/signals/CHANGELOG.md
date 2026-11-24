# @cerberus-design/signals

## 2.0.0

### Major Changes

- dfc5ef2: Migrate ecosystem to PandaCSS v2

### Patch Changes

- 97a1eef: Fix the published type declarations under `moduleResolution` `node16`
  and `nodenext`: relative specifiers in `dist/**/*.d.ts` now end in `.js` (and
  in `.cjs` for `.d.cts`), so `@cerberus-design/signals` and its `./core` and
  `./react` subpaths export their types again.
- 5488e1c: `createEffect`'s dispose function now actually unsubscribes the
  effect. Before, it was a no-op.

  Silent behavior changes (fixes):

  - A disposed effect no longer runs when a signal it read changes, including
    when it was already queued in a `batch`.
  - `useRead` no longer leaks a subscription on unmount, StrictMode double-mount
    or accessor change.
  - Effects and computeds created inside an effect or computed are disposed when
    their owner re-runs; they used to pile up and keep running.

  Docs: signals notify only when a value changes by `!==`. Sorting an array in
  place and returning it (`data.sort()`) notifies nobody; return a new array
  (`toSorted`, `map`, `filter`).

## 1.9.0

No changes in this release.

## 1.8.1

### Patch Changes

- 1a294bd: Fix Compiler warnings

## 1.8.0

### Minor Changes

- c378057: Force minor version from missed opportunity

## 1.7.1

### Patch Changes

- d38326b: Force patch update to ensure 3.0 works

## 1.7.0

## 1.6.0

### Patch Changes

- e17f2a9: Dependency update
- ec21994: Dependency Updates
- ee1ed7c: Update token values on certain palettes

## 1.5.0

### Minor Changes

- 6f0b035: Add "visibility" feature option to the DataGrid columns API and new
  "search" and "filter" icons to the Cerberus icons context.

### Patch Changes

- db81fe9: bump depedencies to latest
- 914a3be: Depedency updates
- a25eec3: Security Vuln dependency patches
