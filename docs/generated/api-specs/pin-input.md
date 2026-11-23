# PinInput API reference

The PinInput component lets users enter and manage fixed-length codes, such as verification codes or PINs, one character at a time. It manages focus movement between the inputs and aggregates the value for you.

Rendered on its own, PinInput displays one input per `count` (3 by default) plus a hidden input that carries the combined value for form submission. It supports different sizes to match the design requirements of your application.

Import: `import { PinInput } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `PinInput` or `PinInput.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'md'` \| `'lg'` | `'lg'` |

## Parts

### PinInput.El (abstraction)

An entry abstraction that renders the control, one input per `count` and the hidden input

Also accepts all props of `PinInput.Root`.

### PinInput.Root (primitive)

The root container of the PinInput component.

Selector: `[data-scope="pin-input"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'md' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `name` | `string` | No | — | The name of the input element. Useful for form submission. |
| `form` | `string` | No | — | The associate form of the underlying input element. |
| `pattern` | `string` | No | — | The regular expression that the user-entered input value is checked against. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the pin input. Useful for composition. |
| `disabled` | `boolean` | No | — | Whether the inputs are disabled |
| `placeholder` | `string` | No | `"○"` | The placeholder text for the input |
| `autoFocus` | `boolean` | No | — | Whether to auto-focus the first input. |
| `invalid` | `boolean` | No | — | Whether the pin input is in the invalid state |
| `required` | `boolean` | No | — | Whether the pin input is required |
| `readOnly` | `boolean` | No | — | Whether the pin input is in the valid state |
| `otp` | `boolean` | No | `false` | If `true`, the pin input component signals to its fields that they should use `autocomplete="one-time-code"`. |
| `value` | `string[]` | No | — | The controlled value of the the pin input. |
| `defaultValue` | `string[]` | No | — | The initial value of the the pin input when rendered. Use when you don't need to control the value of the pin input. |
| `type` | `"alphanumeric" \| "numeric" \| "alphabetic"` | No | `"numeric"` | The type of value the pin-input should allow |
| `onValueComplete` | `((details: ValueChangeDetails) => void)` | No | — | Function called when all inputs have valid values |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Function called on input change |
| `onValueInvalid` | `((details: ValueInvalidDetails) => void)` | No | — | Function called when an invalid value is entered |
| `mask` | `boolean` | No | — | If `true`, the input's value will be masked just like `type=password` |
| `autoSubmit` | `boolean` | No | — | Whether to auto-submit the owning form when all inputs are filled. |
| `blurOnComplete` | `boolean` | No | — | Whether to blur the input when the value is complete |
| `selectOnFocus` | `boolean` | No | — | Whether to select input value when input is focused |
| `sanitizeValue` | `((value: string) => string)` | No | — | Function to sanitize pasted values before validation. Useful for stripping dashes, spaces, or other formatting. |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `count` | `number` | No | — | The number of inputs to render to improve SSR aria attributes. This will be required in next major version. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-disabled` | Present when disabled. |
| `data-complete` | Present when the pin-input value is complete. |
| `data-readonly` | Present when read-only. |

### PinInput.Label (primitive)

The label primitive part of the PinInput component.

Selector: `[data-scope="pin-input"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-disabled` | Present when disabled. |
| `data-complete` | Present when the label value is complete. |
| `data-required` | Present when required. |
| `data-readonly` | Present when read-only. |

### PinInput.Input (primitive)

The input primitive part of the PinInput component.

Selector: `[data-scope="pin-input"][data-part="input"]`

Keyboard: `Backspace`, `Delete`, `ArrowLeft`, `ArrowRight`, `Enter`, `Home`, `End`, `ArrowUp`, `ArrowDown`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | Yes | — | Optional in a patch child of a PinInput abstraction, which supplies it. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-complete` | Present when the input value is complete. |
| `data-filled` | Present when the state applies |
| `data-index` | The index of the item. |
| `data-ownedby` | Set by the component |
| `data-invalid` | Present when invalid. |

### PinInput.Control (primitive)

The control primitive part of the PinInput component.

Selector: `[data-scope="pin-input"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### PinInput.HiddenInput (primitive)

The hidden input primitive part of the PinInput component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### PinInput.RootProvider (primitive)

The root container of the PinInput component, driven by state created with `usePinInput()`.

Selector: `[data-scope="pin-input"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'md' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `value` | `UsePinInputReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-disabled` | Present when disabled. |
| `data-complete` | Present when the pin-input value is complete. |
| `data-readonly` | Present when read-only. |

## Accessibility

| Key | Description |
| --- | --- |
| `ArrowLeft` | Moves focus to the previous input. |
| `ArrowRight` | Moves focus to the next input. |
| `Home` | Moves focus to the first input. |
| `ArrowUp` | Moves focus to the first input. |
| `Control + ArrowLeft` | Moves focus to the first input. |
| `End` | Moves focus to the last filled input. |
| `ArrowDown` | Moves focus to the last filled input. |
| `Control + ArrowRight` | Moves focus to the last filled input. |
| `Backspace` | Deletes the value in the current input and moves focus to the previous input. |
| `Delete` | Deletes the value in the current input. |
| `Control + V` | Pastes the value into the input fields. |
| `Enter` | When focus is on an input, submits the form the pin input belongs to. |
