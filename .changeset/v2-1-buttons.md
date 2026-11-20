---
'@cerberus-design/react': major
---

Button, IconButton and SplitButton now live together in one `buttons` component module, and the `Button` compound carries all of them: `Button.Root`, `Button.Group`, `Button.Icon`, `Button.Provider`, `Button.El`, `Button.IconButton`, `Button.SplitButton` and `Button.IconButtonRoot`. `IconButton`, `SplitButton` and `IconButtonRoot` are still exported under their v1 names.

Silent behavior changes (these compile unchanged):

- **Admonition's close trigger is a focusable `<button>`** (it rendered a clickable `<div>` that keyboard users couldn't reach) and carries `data-scope="icon-button"` instead of `"icon-btn"`.
- **`SplitButton`'s `pending` now disables the action button and shows the `Button.Icon` Spinner.** In v1 the action rendered `Button.Root` without the pending provider, so it stayed enabled and the icon never switched.

- `SplitButton` with `shape="squared"` or `"hard"` applies the group's `default` shape (0.25rem corners on the menu trigger); v1 passed a shape the group recipe doesn't have, so no shape styles applied.

Breaking changes:

- **The `@cerberus-design/react/button`, `@cerberus-design/react/icon-button` and `@cerberus-design/react/split-button` subpaths are replaced by `@cerberus-design/react/buttons`.** Imports from the package root are unchanged.
- `SplitButtonProps` no longer accepts arbitrary `CerberusPrimitiveProps`; it is `ButtonProps` (style props included) plus `actionText` and the IconButton `size`.

New:

- `Button.IconButton`, `Button.SplitButton` and `Button.IconButtonRoot`, documented in the Button API (the IconButton and SplitButton docs pages render it too).
