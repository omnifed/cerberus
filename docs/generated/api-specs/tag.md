# Tag API reference

The Tag component is used to display a meta description: a filled, gradient or
closable label.

`<Tag>` renders `Tag.Closable` when `onClick` is set, `Tag.Gradient` when
`gradient` is set, and `Tag.Root` (styled by the `tag` recipe) otherwise.

**NOTE**: This API is _slotless_: each part is a single rendered layer with its own recipe.

Import: `import { Tag } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Tag` or `Tag.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `palette` | `'page'` \| `'info'` \| `'success'` \| `'warning'` \| `'danger'` | `'page'` |
| `usage` | `'filled'` \| `'outlined'` | `'filled'` |
| `shape` | `'pill'` \| `'square'` | `'pill'` |

## Parts

### Tag.El (abstraction)

Renders `Tag.Closable` when `onClick` is set, `Tag.Gradient` when `gradient` is set, else `Tag.Root`

Also accepts all props of `Tag.Root`, `Tag.Gradient`, `Tag.ClosableRoot`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `gradient` | `never` | No | — |  |
| `onClick` | `IconButtonProps['onClick']` | No | — | Called when the close button is clicked. |
| `palette` | `never` | No | — |  |
| `pending` | `boolean` | No | — | When true, disables the close button and marks the content as busy. |

### Tag.Closable (abstraction)

A `Tag.ClosableRoot` with a close IconButton (labelled "Close tag") that calls `onClick`; `pending` disables it

Also accepts all props of `Tag.ClosableRoot`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `pending` | `boolean` | No | — | When true, disables the close button and marks the content as busy. |
| `gradient` | `never` | No | — |  |
| `onClick` | `IconButtonProps['onClick']` | No | — | Called when the close button is clicked. |

### Tag.Root (primitive)

The root container of the Tag component.

Selector: `[data-scope="tag"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'page' \| 'info' \| 'success' \| 'warning' \| 'danger'` | No | `'page'` | PandaCSS recipe variant for palette. |
| `usage` | `'filled' \| 'outlined'` | No | `'filled'` | PandaCSS recipe variant for usage. |
| `shape` | `'pill' \| 'square'` | No | `'pill'` | PandaCSS recipe variant for shape. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Tag.Gradient (primitive)

The gradient primitive part of the Tag component.

Selector: `[data-scope="tag"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `gradient` | `'amphiaraus-dark' \| 'amphiaraus-light' \| 'asphodel-light' \| 'asphodel-dark' \| 'charon-light' \| 'charon-dark' \| 'hades-light' \| 'hades-dark' \| 'nyx-light' \| 'nyx-dark' \| 'styx-light' \| 'styx-dark' \| 'thanatos-light' \| 'thanatos-dark'` | No | `'charon-light'` | PandaCSS recipe variant for gradient. |
| `usage` | `'outlined'` | No | — | PandaCSS recipe variant for usage. |
| `shape` | `'pill' \| 'square'` | No | `'pill'` | PandaCSS recipe variant for shape. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Tag.ClosableRoot (primitive)

The closable-root primitive part of the Tag component.

Selector: `[data-scope="tag"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'secondaryAction' \| 'danger'` | No | `'secondaryAction'` | PandaCSS recipe variant for palette. |
| `usage` | `'filled' \| 'outlined'` | No | `'filled'` | PandaCSS recipe variant for usage. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
