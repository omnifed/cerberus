# Button API reference

The Button component provides a visual indicator for a user to make an
action of sorts, commonly used in forms, menus, and popovers.

For a customizable Button, use the Button object to access the
individual primitives of the Button component or style props.

**NOTE**: This API is _slotless_ and is a single rendered layer abstraction.

Import: `import { Button } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Button` or `Button.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `palette` | `'action'` \| `'secondaryAction'` \| `'info'` \| `'success'` \| `'warning'` \| `'danger'` | `'action'` |
| `usage` | `'ghost'` \| `'outlined'` \| `'outlined-subtle'` \| `'filled'` | `'filled'` |
| `shape` | `'hard'` \| `'squared'` \| `'sharp'` \| `'rounded'` | `'squared'` |
| `size` | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` \| `'2xl'` | `'lg'` |

## Parts

### Button.Icon (abstraction)

An abstraction displaying an icon that is replaced by a Spinner when `pending` is set to true

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `ReactNode` | No | — | The icon to render. It is replaced by a Spinner while the parent Button is `pending`. |
| `ref` | `Ref<HTMLDivElement>` | No | — | A ref to the Spinner wrapper rendered while the parent Button is `pending`. |

### Button.Provider (abstraction)

The Button context provider

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `pending` | `boolean` | No | — | When true, replaces the `Button.Indicator` icon with a Spinner. |

### Button.El (abstraction)

An abstraction for using the Provider and Button.Root together

Also accepts all props of `Button.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `pending` | `boolean` | No | — | When true, replaces the `Button.Indicator` icon with a Spinner. |

### Button.IconButton (abstraction)

An icon-only button styled by the `iconButton` recipe, labelled with `ariaLabel` (or "Copy to clipboard" with `clipboard`)

Also accepts all props of `Button.IconButtonRoot`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `ariaLabel` | `string` | No | — | The aria-label attribute for the icon button. |
| `clipboard` | `true` | No | — | If true, the icon button is used as a clipboard trigger. In this case, the aria-label defaults to "Copy to clipboard". |

### Button.SplitButton (abstraction)

A primary action `<Button>` attached to an IconButton that opens a Menu of other actions; `pending` disables the action and shows a Spinner

Also accepts all props of `Button.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `pending` | `boolean` | No | — | When true, replaces the `Button.Indicator` icon with a Spinner. |
| `actionText` | `string` | Yes | — | The text for the primary action button. |
| `size` | `IconButtonProps['size']` | No | — | The size of the SplitButton. |

### Button.Root (primitive)

A `<button>` styled by the `button` recipe.

Selector: `[data-scope="buttons"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'secondaryAction' \| 'info' \| 'success' \| 'warning' \| 'danger'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `usage` | `'ghost' \| 'outlined' \| 'outlined-subtle' \| 'filled'` | No | `'filled'` | PandaCSS recipe variant for usage. |
| `shape` | `'hard' \| 'squared' \| 'sharp' \| 'rounded'` | No | `'squared'` | PandaCSS recipe variant for shape. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Button.Group (primitive)

Lays out related buttons together, styled by the `buttonGroup` recipe.

Selector: `[data-scope="button-group"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `layout` | `'default' \| 'attached'` | No | `'default'` | PandaCSS recipe variant for layout. |
| `shape` | `'default' \| 'sharp' \| 'rounded'` | No | `'sharp'` | PandaCSS recipe variant for shape. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Button.IconButtonRoot (primitive)

The bare icon `<button>` styled by the `iconButton` recipe; `IconButton` wraps it and requires an `ariaLabel`.

Selector: `[data-scope="icon-button"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'secondaryAction' \| 'info' \| 'success' \| 'warning' \| 'danger'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `usage` | `'ghost' \| 'filled' \| 'outlined' \| 'outlined-subtle'` | No | `'ghost'` | PandaCSS recipe variant for usage. |
| `shape` | `'square' \| 'circle'` | No | `'circle'` | PandaCSS recipe variant for shape. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
