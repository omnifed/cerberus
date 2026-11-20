# Field API reference

The Field component labels a form control and connects it to its helper text and error text, wiring the ids and ARIA attributes for you. It is composed of several primitives that enable customization and flexibility in its usage.

Use the default `<Field>` with a `label`, `helperText` and `errorText` around a control: `Field.InputGroup` (also available as `Input`) renders an input with optional `startIcon`/`endIcon` and the Cerberus invalid icon, and `Field.Textarea` (also available as `Textarea`) a textarea. Mark it `invalid` to swap the helper text for the error text, `required` to show the required indicator, and set the `size` on the field (or on a single `Field.InputGroup`). Compose the primitives for full structural control.

Import: `import { Field } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Field` or `Field.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'lg'` |

## Parts

### Field.El (abstraction)

An abstraction of the root that renders the label with its required indicator, the control, and the helper text, error text and secondary helper text

Also accepts all props of `Field.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | No | — | The label of the field. |
| `helperText` | `ReactNode` | No | — | The helper text of the field. Hidden when the field is invalid. |
| `secondaryHelperText` | `ReactNode` | No | — | A helper text positioned at the end of the field. Good for Textarea fields. |
| `errorText` | `ReactNode` | No | — | The error text of the field. Shown when the field is invalid. |
| `hideLabel` | `boolean` | No | — | Whether to hide the label visually while keeping it accessible to screen readers. On a `Field.Label` primitive, use the `srOnly` style prop. |

### Field.InputGroup (abstraction)

An abstraction that renders the input root with an optional start indicator, the input, and the Cerberus invalid icon or an end indicator

Also accepts all props of `Field.Input`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `FieldVariantProps['size']` | No | — | The size of this input. Defaults to the `size` of the parent `Field`. |
| `startIcon` | `ReactNode` | No | — | An optional icon to display at the start of the input. |
| `endIcon` | `ReactNode` | No | — | An optional icon to display at the end of the input while the field is valid. The Cerberus `invalid` icon replaces it when the field is invalid. |

### Field.StatusIndicatorWithIcon (abstraction)

An abstraction that renders the status indicator with the Cerberus `invalid` icon when the field is invalid, else an end indicator with its `fallback`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `fallback` | `ReactNode` | No | — | The content of the end indicator rendered while the field is valid. |

### Field.Root (primitive)

The root container of the Field component.

Selector: `[data-scope="field"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The id of the field. |
| `ids` | `ElementIds` | No | — | The ids of the field parts. |
| `required` | `boolean` | No | — | Indicates whether the field is required. |
| `disabled` | `boolean` | No | — | Indicates whether the field is disabled. |
| `invalid` | `boolean` | No | — | Indicates whether the field is invalid. |
| `readOnly` | `boolean` | No | — | Indicates whether the field is read-only. |
| `target` | `string` | No | — | The target field item value the label should point to. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.ErrorText (primitive)

The error-text primitive part of the Field component.

Selector: `[data-scope="field"][data-part="error-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.HelperText (primitive)

The helper-text primitive part of the Field component.

Selector: `[data-scope="field"][data-part="helper-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.Input (primitive)

The input primitive part of the Field component.

Selector: `[data-scope="field"][data-part="input"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.Label (primitive)

The label primitive part of the Field component.

Selector: `[data-scope="field"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.Select (primitive)

The select primitive part of the Field component.

Selector: `[data-scope="field"][data-part="select"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.Textarea (primitive)

The textarea primitive part of the Field component.

Selector: `[data-scope="field"][data-part="textarea"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `autoresize` | `boolean` | No | `false` | Whether the textarea should autoresize |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.RequiredIndicator (primitive)

The required-indicator primitive part of the Field component.

Selector: `[data-scope="field"][data-part="required-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `fallback` | `React.ReactNode` | No | — |  |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.InputRoot (primitive)

The input-root part of the Field component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<div>`.

Selector: `[data-scope="field"][data-part="input-root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.StartIndicator (primitive)

The start-indicator part of the Field component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<span>`.

Selector: `[data-scope="field"][data-part="start-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.EndIndicator (primitive)

The end-indicator part of the Field component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<span>`.

Selector: `[data-scope="field"][data-part="end-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.StatusIndicator (primitive)

The status-indicator part of the Field component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<span>`.

Selector: `[data-scope="field"][data-part="status-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.RootProvider (primitive)

The root container of the Field component, driven by state created with `useField()`.

Selector: `[data-scope="field"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `value` | `UseFieldReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Field.Context (primitive)

Exposes the Field state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseFieldContext) => ReactNode` | Yes | — |  |

## Accessibility

`Field.Root` renders a `role="group"` element and `Field.Label` a native `label` whose `for` points at the control.

The control gets `aria-invalid` when the field is invalid, and `aria-describedby` pointing at the helper text and, when invalid, the error text.

The error text is a polite live region, and the required indicator is hidden from assistive technology since the control is marked `required`.

The start, end and status indicators of `Field.InputGroup` are decorative (`aria-hidden`); describe anything they convey in the label or helper text.
