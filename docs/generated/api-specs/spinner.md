# Spinner API reference

The Spinner component displays an indeterminate loading indicator: an animated `<svg>` that inherits the current text color. It is typically used in buttons, dialogs, and other components with a loading state.

The root renders with `role="status"` and `aria-busy="true"`. Set `size` for its width and height; without it the spinner fills its container's width.

Import: `import { Spinner } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Spinner.El (abstraction)

An abstraction rendering the animated spinner artwork in `Spinner.Root`, sized with `size`

Also accepts all props of `Spinner.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `number \| string` | No | — | The width and height of the spinner, set as the `<svg>` attributes. Without it the spinner fills its container's width. |

### Spinner.Root (primitive)

The root container of the Spinner component.

Selector: `[data-scope="spinner"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
