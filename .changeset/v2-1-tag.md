---
'@cerberus-design/react': major
---

Tag now uses the v2.1 API. `<Tag>` (also `Tag.El`) renders exactly what it rendered in v1: `Tag.Root` (filled), `Tag.Gradient` (with `gradient`) or, with `onClick`, `Tag.Closable` (`Tag.ClosableRoot` with a close IconButton labelled "Close tag"). `FilledTag`, `GradientTag`, `ClosableTagRoot` and `ClosableTag` are still exported as aliases of those members, and `TagProps`, `FilledTagProps`, `GradientTagProps` and `ClosableTagProps` keep their shapes.

Breaking changes:

- The accidental `defaultProps` export (`{ 'data-scope': 'tag', 'data-part': 'root' }`) is removed.

New:

- `Tag.Root`, `Tag.Gradient`, `Tag.ClosableRoot`, `Tag.Closable` and `Tag.El`, documented in the Tag API; `TagRootProps`, `TagGradientProps` and `TagClosableRootProps`.
