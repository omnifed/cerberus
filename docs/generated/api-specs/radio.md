# RadioGroup API reference

The Radio component allows users to select one option from a set of choices.

Wrap `<Radio>` items (also available as `RadioGroup.Radio`) in a `<RadioGroup>` for labeled radios with the Cerberus control, or compose the primitives for full structural control. The group supports a horizontal or vertical orientation and two sizes; a single radio can override the size. To use it within a form, wrap it with the Fieldset or Field component.

Import: `import { RadioGroup } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `RadioGroup` or `RadioGroup.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `orientation` | `'horizontal'` \| `'vertical'` | `'horizontal'` |
| `size` | `'sm'` \| `'md'` | `'sm'` |

## Parts

### RadioGroup.Radio (abstraction)

An abstraction that renders a single labeled radio item with the Cerberus control and its hidden input

Also accepts all props of `RadioGroup.Item`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `RadioGroupVariantProps['size']` | No | — | The size of this radio's control and text. Defaults to the `size` of the parent `RadioGroup`. |

### RadioGroup.Root (primitive)

The root container of the RadioGroup component.

Selector: `[data-scope="radio-group"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `orientation` | `"horizontal" \| "vertical"` | No | `'horizontal'` | Orientation of the radio group |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the radio. Useful for composition. |
| `value` | `string \| null` | No | — | The controlled value of the radio group |
| `defaultValue` | `string \| null` | No | — | The initial value of the checked radio when rendered. Use when you don't need to control the value of the radio group. |
| `name` | `string` | No | — | The name of the input fields in the radio (Useful for form submission). |
| `form` | `string` | No | — | The associate form of the underlying input. |
| `disabled` | `boolean` | No | — | If `true`, the radio group will be disabled |
| `invalid` | `boolean` | No | — | If `true`, the radio group is marked as invalid. |
| `required` | `boolean` | No | — | If `true`, the radio group is marked as required. |
| `readOnly` | `boolean` | No | — | Whether the radio group is read-only |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Function called once a radio is checked |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### RadioGroup.Label (primitive)

The label primitive part of the RadioGroup component.

Selector: `[data-scope="radio-group"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### RadioGroup.Item (primitive)

The item primitive part of the RadioGroup component.

Selector: `[data-scope="radio-group"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — |  |
| `disabled` | `boolean` | No | — |  |
| `invalid` | `boolean` | No | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### RadioGroup.ItemText (primitive)

The item text primitive part of the RadioGroup component.

Selector: `[data-scope="radio-group"][data-part="item-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### RadioGroup.ItemControl (primitive)

The item control primitive part of the RadioGroup component.

Selector: `[data-scope="radio-group"][data-part="item-control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-active` | Present when active or pressed. |

### RadioGroup.Indicator (primitive)

The indicator primitive part of the RadioGroup component.

Selector: `[data-scope="radio-group"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |

| CSS variable | Description |
| --- | --- |
| `--transition-property` | The transition property value for the Indicator. |
| `--left` | The left position value. |
| `--top` | The top position value. |
| `--width` | The width of the element. |
| `--height` | The height of the element. |

### RadioGroup.ItemHiddenInput (primitive)

The item hidden input primitive part of the RadioGroup component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-ownedby` | Set by the component |

### RadioGroup.RootProvider (primitive)

The root container of the RadioGroup component, driven by state created with `useRadioGroup()`.

Selector: `[data-scope="radio-group"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | No | `'horizontal'` | PandaCSS recipe variant for orientation. Styles only: pass `orientation` to `useRadioGroup()` for the behavior (it defaults to "vertical" there). |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `value` | `UseRadioGroupReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |

### RadioGroup.Context (primitive)

Exposes the RadioGroup state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseRadioGroupContext) => ReactNode` | Yes | — |  |

### RadioGroup.ItemContext (primitive)

Exposes the RadioGroup item state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseRadioGroupItemContext) => ReactNode` | Yes | — |  |

## Context API

`RadioGroup.Context` and `useRadioGroup()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `value` | `string \| null` | The current value of the radio group. |
| `setValue` | `(value: string) => void` | Function to set the value of the radio group. |
| `clearValue` | `VoidFunction` | Function to clear the value of the radio group. |
| `focus` | `VoidFunction` | Function to focus the radio group. |
| `getItemState` | `(props: ItemProps) => ItemState` | Returns the state details of a radio input. |

## Accessibility

Follows the [Radio Group WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

| Key | Description |
| --- | --- |
| `Tab` | Moves focus to either the checked radio item or the first radio item in the group. |
| `Space` | When focus is on an unchecked radio item, checks it. |
| `ArrowDown` | Moves focus and checks the next radio item in the group. |
| `ArrowRight` | Moves focus and checks the next radio item in the group. |
| `ArrowUp` | Moves focus to the previous radio item in the group. |
| `ArrowLeft` | Moves focus to the previous radio item in the group. |
