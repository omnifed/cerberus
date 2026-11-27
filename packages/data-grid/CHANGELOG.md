# @cerberus-design/data-grid

## 2.0.1

### Patch Changes

- Updated dependencies [9702038]
  - @cerberus-design/react@2.0.1
  - @cerberus-design/signals@2.0.1

## 2.0.0

### Major Changes

- dfc5ef2: Migrate ecosystem to PandaCSS v2

### Patch Changes

- ec8e699: Pagination's `defaultPage` is typed `number | undefined` instead of
  `number | void`, so it can be passed to `Pagination.Root`'s `defaultPage`. No
  runtime change.
- Updated dependencies [97a1eef]
- Updated dependencies [5488e1c]
- Updated dependencies [dfc5ef2]
- Updated dependencies [ec3b3f1]
- Updated dependencies [046853c]
- Updated dependencies [1933651]
- Updated dependencies [9ac42f1]
- Updated dependencies [256e9b6]
- Updated dependencies [ab3eb24]
- Updated dependencies [1a39e77]
- Updated dependencies [cf80fb6]
- Updated dependencies [745c957]
- Updated dependencies [a2b059a]
- Updated dependencies [c655d46]
- Updated dependencies [987b9e8]
- Updated dependencies [856b518]
- Updated dependencies [737d4cb]
- Updated dependencies [751489c]
- Updated dependencies [a5552bb]
- Updated dependencies [a34ff37]
- Updated dependencies [1e6b73e]
  - @cerberus-design/signals@2.0.0
  - @cerberus-design/react@2.0.0

## 1.9.0

### Minor Changes

- 8cced3d: Updates Button sizes and adds SplitButton variants

### Patch Changes

- 087f458: Fix: update cta-dialog heading to be center aligned
- 9ceb04f: Fix Pagination ignoring the controlled page prop. page was consumed
  as a Panda CSS property. Add the forwardProps option to primitive factory
  methods.
- 90a8175: chore: update oceanus page tokens
- Updated dependencies [2725945]
- Updated dependencies [8cced3d]
- Updated dependencies [4b85c37]
- Updated dependencies [087f458]
- Updated dependencies [9ceb04f]
  - @cerberus-design/react@1.9.0
  - @cerberus-design/signals@1.9.0

## 1.8.1

### Patch Changes

- 1a294bd: Fix Compiler warnings
- Updated dependencies [1a294bd]
- Updated dependencies [629735e]
- Updated dependencies [efb94d9]
- Updated dependencies [2b43c35]
- Updated dependencies [5b6131c]
  - @cerberus-design/react@1.8.1
  - @cerberus-design/signals@1.8.1

## 1.8.0

### Minor Changes

- c378057: Force minor version from missed opportunity

### Patch Changes

- Updated dependencies [c378057]
  - @cerberus-design/react@1.8.0
  - @cerberus-design/signals@1.8.0

## 1.7.1

### Patch Changes

- d38326b: Force patch update to ensure 3.0 works
- Updated dependencies [d38326b]
  - @cerberus-design/react@1.7.1
  - @cerberus-design/signals@1.7.1

## 1.7.0

### Minor Changes

- 086f476: Add new pagination prop to Data Grid and deprecate related props

### Patch Changes

- 79f23bf: bump weekly deps
- Updated dependencies [79f23bf]
- Updated dependencies [c058e2e]
- Updated dependencies [212fe1c]
  - @cerberus-design/react@1.7.0
  - @cerberus-design/signals@1.7.0

## 1.6.0

### Patch Changes

- e17f2a9: Dependency update
- ec21994: Dependency Updates
- ee1ed7c: Update token values on certain palettes
- Updated dependencies [86c01a4]
- Updated dependencies [e17f2a9]
- Updated dependencies [ec21994]
- Updated dependencies [ee1ed7c]
  - @cerberus-design/react@1.6.0
  - @cerberus-design/signals@1.6.0

## 1.5.0

### Minor Changes

- 79a766e: Added support for an initial pending state to display via the
  `overlays.initial` property. This will be rendered in the viewport when the
  grid is mounted and `pending` for the first time. Any `pending` update after
  that phase will use the `overlays.pending` option.
- 6f0b035: Add "visibility" feature option to the DataGrid columns API and new
  "search" and "filter" icons to the Cerberus icons context.

### Patch Changes

- db81fe9: bump depedencies to latest
- 914a3be: Depedency updates
- a25eec3: Security Vuln dependency patches
- Updated dependencies [db81fe9]
- Updated dependencies [914a3be]
- Updated dependencies [a25eec3]
- Updated dependencies [6f0b035]
  - @cerberus-design/signals@1.5.0
  - @cerberus-design/react@1.5.0
