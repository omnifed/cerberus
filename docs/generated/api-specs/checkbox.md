# Checkbox API reference

The Checkbox component allows users to select one or more options from a set. It supports the checked, unchecked and indeterminate states.

Use the default `<Checkbox>` for a labeled checkbox with the Cerberus check and indeterminate icons, or compose the primitives for full structural control. Wrap several checkboxes in `Checkbox.Group` to manage their values together. It supports different sizes to match the design requirements of your application. To use it within a form, wrap it with the Field component.

Import: `import { Checkbox } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Checkbox` or `Checkbox.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'md'` | `'sm'` |

## Parts

### Checkbox.El (abstraction)

An abstraction that renders a labeled checkbox with the Cerberus check or indeterminate icon and a required notice

Also accepts all props of `Checkbox.Root`.

### Checkbox.Root (primitive)

The root container of the Checkbox component.

Selector: `[data-scope="checkbox"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the checkbox. Useful for composition. |
| `disabled` | `boolean` | No | — | Whether the checkbox is disabled |
| `invalid` | `boolean` | No | — | Whether the checkbox is invalid |
| `required` | `boolean` | No | — | Whether the checkbox is required |
| `checked` | `CheckedState` | No | — | The controlled checked state of the checkbox |
| `defaultChecked` | `CheckedState` | No | — | The initial checked state of the checkbox when rendered. Use when you don't need to control the checked state of the checkbox. |
| `readOnly` | `boolean` | No | — | Whether the checkbox is read-only |
| `onCheckedChange` | `((details: CheckedChangeDetails) => void)` | No | — | The callback invoked when the checked state changes. |
| `name` | `string` | No | — | The name of the input field in a checkbox. Useful for form submission. |
| `form` | `string` | No | — | The id of the form that the checkbox belongs to. |
| `value` | `string` | No | `"on"` | The value of checkbox input. Useful for form submission. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-active` | Present when active or pressed. |
| `data-focus` | Present when focused. |
| `data-focus-visible` | Present when focused with keyboard. |
| `data-readonly` | Present when read-only. |
| `data-hover` | Present when hovered. |
| `data-disabled` | Present when disabled. |
| `data-state` | `"indeterminate"` \| `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Checkbox.Label (primitive)

The label primitive part of the Checkbox component.

Selector: `[data-scope="checkbox"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-active` | Present when active or pressed. |
| `data-focus` | Present when focused. |
| `data-focus-visible` | Present when focused with keyboard. |
| `data-readonly` | Present when read-only. |
| `data-hover` | Present when hovered. |
| `data-disabled` | Present when disabled. |
| `data-state` | `"indeterminate"` \| `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Checkbox.Control (primitive)

The control primitive part of the Checkbox component.

Selector: `[data-scope="checkbox"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-active` | Present when active or pressed. |
| `data-focus` | Present when focused. |
| `data-focus-visible` | Present when focused with keyboard. |
| `data-readonly` | Present when read-only. |
| `data-hover` | Present when hovered. |
| `data-disabled` | Present when disabled. |
| `data-state` | `"indeterminate"` \| `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Checkbox.Indicator (primitive)

The indicator primitive part of the Checkbox component.

Selector: `[data-scope="checkbox"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `indeterminate` | `boolean` | No | — |  |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-active` | Present when active or pressed. |
| `data-focus` | Present when focused. |
| `data-focus-visible` | Present when focused with keyboard. |
| `data-readonly` | Present when read-only. |
| `data-hover` | Present when hovered. |
| `data-disabled` | Present when disabled. |
| `data-state` | `"indeterminate"` \| `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Checkbox.Group (primitive)

The group primitive part of the Checkbox component.

Selector: `[data-scope="checkbox"][data-part="group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `defaultValue` | `string[]` | No | — | The initial value of `value` when uncontrolled |
| `value` | `string[]` | No | — | The controlled value of the checkbox group |
| `name` | `string` | No | — | The name of the input fields in the checkbox group (Useful for form submission). |
| `onValueChange` | `((value: string[]) => void)` | No | — | The callback to call when the value changes |
| `disabled` | `boolean` | No | — | If `true`, the checkbox group is disabled |
| `readOnly` | `boolean` | No | — | If `true`, the checkbox group is read-only |
| `invalid` | `boolean` | No | — | If `true`, the checkbox group is invalid |
| `maxSelectedValues` | `number` | No | — | The maximum number of selected values |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Checkbox.HiddenInput (primitive)

The hidden-input primitive part of the Checkbox component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Checkbox.RootProvider (primitive)

The root container of the Checkbox component, driven by state created with `useCheckbox()`.

Selector: `[data-scope="checkbox"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `value` | `UseCheckboxReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-active` | Present when active or pressed. |
| `data-focus` | Present when focused. |
| `data-focus-visible` | Present when focused with keyboard. |
| `data-readonly` | Present when read-only. |
| `data-hover` | Present when hovered. |
| `data-disabled` | Present when disabled. |
| `data-state` | `"indeterminate"` \| `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Checkbox.GroupProvider (primitive)

The group part of the Checkbox component, driven by state created with `useCheckboxGroup()`.

Selector: `[data-scope="checkbox"][data-part="group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `value` | `UseCheckboxGroupContext` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Checkbox.Context (primitive)

Exposes the Checkbox state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseCheckboxContext) => ReactNode` | Yes | — |  |

## Accessibility

Follows the [Checkbox WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/).

| Key | Description |
| --- | --- |
| `Space` | Toggle the checkbox. |
