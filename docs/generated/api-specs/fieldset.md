# Fieldset API reference

The Fieldset component groups related form fields together with a shared legend, helper text and error text. It is composed of several primitives that enable customization and flexibility in its usage.

Use the `usage` prop to style it as a `fieldGroup` (default), labeling a group of Radio or Checkbox inputs, or as a `formSection`, grouping the fields of a larger form. Mark it `invalid` to show the error text.

Import: `import { Fieldset } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Fieldset` or `Fieldset.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `usage` | `'fieldGroup'` \| `'formSection'` | `'fieldGroup'` |

## Parts

### Fieldset.El (abstraction)

An entry abstraction that renders the legend, helper text, the grouped fields and the error text

Also accepts all props of `Fieldset.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `legend` | `ReactNode` | No | — | The legend/title/label of the fieldset group. |
| `helperText` | `ReactNode` | No | — | The description text for the fieldset group. |
| `errorText` | `ReactNode` | No | — | The error text for the fieldset group shown when the fieldset is invalid. |

### Fieldset.Root (primitive)

The root container of the Fieldset component.

Selector: `[data-scope="fieldset"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `usage` | `'fieldGroup' \| 'formSection'` | No | `'fieldGroup'` | PandaCSS recipe variant for usage. |
| `id` | `string` | No | — | The id of the fieldset. |
| `disabled` | `boolean` | No | — | Indicates whether the fieldset is disabled. |
| `invalid` | `boolean` | No | — | Indicates whether the fieldset is invalid. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Fieldset.ErrorText (primitive)

The error-text primitive part of the Fieldset component.

Selector: `[data-scope="fieldset"][data-part="error-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Fieldset.HelperText (primitive)

The helper-text primitive part of the Fieldset component.

Selector: `[data-scope="fieldset"][data-part="helper-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Fieldset.Legend (primitive)

The legend primitive part of the Fieldset component.

Selector: `[data-scope="fieldset"][data-part="legend"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Fieldset.RootProvider (primitive)

The root container of the Fieldset component, driven by state created with `useFieldset()`.

Selector: `[data-scope="fieldset"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `usage` | `'fieldGroup' \| 'formSection'` | No | `'fieldGroup'` | PandaCSS recipe variant for usage. |
| `value` | `UseFieldsetReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Fieldset.Context (primitive)

Exposes the Fieldset state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseFieldsetContext) => ReactNode` | Yes | — |  |
