---
'@cerberus-design/data-grid': minor
---

Added support for an initial pending state to display via the `overlays.initial` property. This will be rendered in the viewport when the grid is mounted and `pending` for the first time. Any `pending` update after that phase will use the `overlays.pending` option.
