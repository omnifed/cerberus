# Switch API reference

The Switch component is a toggle input that allows users to switch between two states, such as turning a setting on or off.

Use the default `<Switch>` for a labeled switch with the Cerberus check indicator, or compose the primitives for full structural control. To use it within a form, wrap it with the Field component.

Import: `import { Switch } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Switch` or `Switch.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'lg'` | `'sm'` |

## Parts

### Switch.El (abstraction)

An abstraction that renders a labeled switch with the Cerberus check indicator in the thumb

Also accepts all props of `Switch.Root`.

### Switch.Root (primitive)

The root container of the Switch component.

Selector: `[data-scope="switch"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'lg'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the switch. Useful for composition. |
| `label` | `string` | No | `"switch"` | Specifies the localized strings that identifies the accessibility elements and their states |
| `disabled` | `boolean` | No | — | Whether the switch is disabled. |
| `invalid` | `boolean` | No | — | If `true`, the switch is marked as invalid. |
| `required` | `boolean` | No | — | If `true`, the switch input is marked as required, |
| `readOnly` | `boolean` | No | — | Whether the switch is read-only |
| `onCheckedChange` | `((details: CheckedChangeDetails) => void)` | No | — | Function to call when the switch is clicked. |
| `checked` | `boolean` | No | — | The controlled checked state of the switch |
| `defaultChecked` | `boolean` | No | `false` | The initial checked state of the switch when rendered. Use when you don't need to control the checked state of the switch. |
| `name` | `string` | No | — | The name of the input field in a switch (Useful for form submission). |
| `form` | `string` | No | — | The id of the form that the switch belongs to |
| `value` | `string \| number` | No | `"on"` | The value of switch input. Useful for form submission. |
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
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Switch.Label (primitive)

The label primitive part of the Switch component.

Selector: `[data-scope="switch"][data-part="label"]`

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
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Switch.Control (primitive)

The control primitive part of the Switch component.

Selector: `[data-scope="switch"][data-part="control"]`

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
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Switch.Thumb (primitive)

The thumb primitive part of the Switch component.

Selector: `[data-scope="switch"][data-part="thumb"]`

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
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### Switch.HiddenInput (primitive)

The hidden-input primitive part of the Switch component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Switch.RootProvider (primitive)

The root container of the Switch component, driven by state created with `useSwitch()`.

Selector: `[data-scope="switch"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'lg'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `value` | `UseSwitchReturn` | Yes | — |  |
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
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

## Accessibility

Follows the [Switch WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).

| Key | Description |
| --- | --- |
| `Space` | Toggle the switch. |
| `Enter` | Toggle the switch. |
