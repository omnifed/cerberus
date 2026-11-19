# Admonition API reference

The Admonition component is a versatile UI element that can be used to display important information, warnings, or notes in a visually distinct manner. It is composed of several primitives that allow for customization and flexibility in its usage.

The Admonition component can be used in various contexts, such as displaying alerts, tips, or any other information that needs to be highlighted. It supports different palettes and usage styles to match the design requirements of your application.

Import: `import { Admonition } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Admonition` or `Admonition.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `palette` | `'page'` \| `'info'` \| `'success'` \| `'warning'` \| `'danger'` | `'page'` |
| `usage` | `'filled'` \| `'outlined'` | `'filled'` |

## Parts

### Admonition.El (abstraction)

An abstraction for rendering all the primitive slots

Also accepts all props of `Admonition.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `heading` | `string` | No | — | The heading title for the Admonition. |
| `onClose` | `IconButtonRootProps['onClick']` | No | — | When provided displays a `IconButton` using the `icons.close` icon at the end of the `Admonition`. This event is called when the user clicks the button. |
| `icon` | `ReactNode` | No | — | **Deprecated.** **THIS WILL BE REMOVED IN v3**. Use `slots` instead. |

### Admonition.Root (primitive)

The root container of the Admonition component.

Selector: `[data-scope="admonition"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'page' \| 'info' \| 'success' \| 'warning' \| 'danger'` | No | `'page'` | PandaCSS recipe variant for palette. |
| `usage` | `'filled' \| 'outlined'` | No | `'filled'` | PandaCSS recipe variant for usage. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Admonition.Indicator (primitive)

The indicator primitive part of the Admonition component.

Selector: `[data-scope="admonition"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Admonition.Heading (primitive)

The heading primitive part of the Admonition component.

Selector: `[data-scope="admonition"][data-part="heading"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Admonition.Description (primitive)

The description primitive part of the Admonition component.

Selector: `[data-scope="admonition"][data-part="description"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Admonition.Content (primitive)

The content primitive part of the Admonition component.

Selector: `[data-scope="admonition"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
