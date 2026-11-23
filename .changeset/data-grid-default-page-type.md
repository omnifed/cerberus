---
'@cerberus-design/data-grid': patch
---

Pagination's `defaultPage` is typed `number | undefined` instead of `number | void`, so it can be passed to `Pagination.Root`'s `defaultPage`. No runtime change.
