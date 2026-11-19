# ProgressBar API reference

The ProgressBar component displays a linear progress indicator for a task. It can be used in both determinate and indeterminate states, and supports different sizes and usage styles.

The root renders with `role="progressbar"` and the ARIA value attributes, so the abstraction only needs an `id`, a `label` and either a `now` value or `indeterminate`.

Import: `import { ProgressBar } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `ProgressBar` or `ProgressBar.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'xs'` \| `'sm'` \| `'md'` | `'md'` |
| `usage` | `'block'` \| `'rounded'` | `'rounded'` |

## Parts

### ProgressBar.El (abstraction)

An abstraction for rendering a labelled ProgressBar with a determinate `now` value or an `indeterminate` state

Also accepts all props of `ProgressBar.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | Yes | — | A unique identifier for the progress bar. Required for accessibility. |
| `label` | `string` | Yes | — | A description label for the progress bar. Required for accessibility. |
| `indeterminate` | `true` | No | — | The state of the progress bar. |
| `now` | `number` | No | — | The current value of the progress bar. |

### ProgressBar.Root (primitive)

The root container of the ProgressBar component.

Selector: `[data-scope="progress-bar"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'xs' \| 'sm' \| 'md'` | No | `'md'` | PandaCSS recipe variant for size. |
| `usage` | `'block' \| 'rounded'` | No | `'rounded'` | PandaCSS recipe variant for usage. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### ProgressBar.Bar (primitive)

The bar primitive part of the ProgressBar component.

Selector: `[data-scope="progress-bar"][data-part="bar"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
