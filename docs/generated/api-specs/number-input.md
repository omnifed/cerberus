# NumberInput API reference

The NumberInput component is used to manage numeric input fields. It includes increment and decrement buttons, supports the scrubber interaction pattern for pointer-based value adjustment, and can be easily integrated with form libraries.

Rendered on its own, NumberInput displays the input with increment and decrement triggers using the Cerberus icons; pass `scrubber` to add the scrubber. It supports different sizes to match the design requirements of your application. To use it within a form, wrap it with the Field component.

Import: `import { NumberInput } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `NumberInput` or `NumberInput.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` |

## Parts

### NumberInput.El (abstraction)

An entry abstraction that renders the input with increment and decrement triggers and an optional scrubber

Also accepts all props of `NumberInput.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `scrubber` | `boolean` | No | — | Whether to show a scrubber for fine-tuning the value with the pointer. A direct `NumberInput.Scrubber` child also shows it. |

### NumberInput.Root (primitive)

The root container of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `locale` | `string` | No | `"en-US"` | The current locale. Based on the BCP 47 definition. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the number input. Useful for composition. |
| `name` | `string` | No | — | The name attribute of the number input. Useful for form submission. |
| `form` | `string` | No | — | The associate form of the input element. |
| `disabled` | `boolean` | No | — | Whether the number input is disabled. |
| `readOnly` | `boolean` | No | — | Whether the number input is readonly |
| `invalid` | `boolean` | No | — | Whether the number input value is invalid. |
| `required` | `boolean` | No | — | Whether the number input is required |
| `pattern` | `string` | No | `"-?[0-9]*(.[0-9]+)?"` | The pattern used to check the <input> element's value against |
| `value` | `string` | No | — | The controlled value of the input |
| `defaultValue` | `string` | No | `""` | The initial value of the input when rendered. Use when you don't need to control the value of the input. |
| `min` | `number` | No | `Number.MIN_SAFE_INTEGER` | The minimum value of the number input |
| `max` | `number` | No | `Number.MAX_SAFE_INTEGER` | The maximum value of the number input |
| `step` | `number` | No | `1` | The amount to increment or decrement the value by |
| `largeStep` | `number` | No | `10 * step` | The amount to increment or decrement the value by when the `Shift` key is held. |
| `smallStep` | `number` | No | `step / 10` | The amount to increment or decrement the value by when the `Alt` key is held. |
| `allowMouseWheel` | `boolean` | No | — | Whether to allow mouse wheel to change the value |
| `allowOverflow` | `boolean` | No | `true` | Whether to allow the value overflow the min/max range |
| `clampValueOnBlur` | `boolean` | No | `true` | Whether to clamp the value when the input loses focus (blur) |
| `focusInputOnChange` | `boolean` | No | `true` | Whether to focus input when the value changes |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `formatOptions` | `Intl.NumberFormatOptions` | No | — | The options to pass to the `Intl.NumberFormat` constructor |
| `inputMode` | `InputMode` | No | `"decimal"` | Hints at the type of data that might be entered by the user. It also determines the type of keyboard shown to the user on mobile devices |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Function invoked when the value changes |
| `onValueInvalid` | `((details: ValueInvalidDetails) => void)` | No | — | Function invoked when the value overflows or underflows the min/max range |
| `onFocusChange` | `((details: FocusChangeDetails) => void)` | No | — | Function invoked when the number input is focused |
| `onValueCommit` | `((details: ValueChangeDetails) => void)` | No | — | Function invoked when the value is committed (when the input is blurred or the Enter key is pressed) |
| `spinOnPress` | `boolean` | No | `true` | Whether to spin the value when the increment/decrement button is pressed |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-focus` | Present when focused. |
| `data-invalid` | Present when invalid. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.Label (primitive)

The label primitive part of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-focus` | Present when focused. |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.Input (primitive)

The input primitive part of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="input"]`

Keyboard: `ArrowUp`, `ArrowDown`, `Home`, `End`, `Enter`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-disabled` | Present when disabled. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.Control (primitive)

The control primitive part of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-focus` | Present when focused. |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.ValueText (primitive)

The value text primitive part of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="value-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-focus` | Present when focused. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.IncrementTrigger (primitive)

The increment trigger primitive part of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="increment-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.DecrementTrigger (primitive)

The decrement trigger primitive part of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="decrement-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.Scrubber (primitive)

The scrubber primitive part of the NumberInput component.

Selector: `[data-scope="number-input"][data-part="scrubber"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.RootProvider (primitive)

The root container of the NumberInput component, driven by state created with `useNumberInput()`.

Selector: `[data-scope="number-input"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `value` | `UseNumberInputReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-focus` | Present when focused. |
| `data-invalid` | Present when invalid. |
| `data-scrubbing` | Present when the state applies |

### NumberInput.Context (primitive)

Exposes the NumberInput state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseNumberInputContext) => ReactNode` | Yes | — |  |

## Context API

`NumberInput.Context` and `useNumberInput()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `focused` | `boolean` | Whether the input is focused. |
| `invalid` | `boolean` | Whether the input is invalid. |
| `empty` | `boolean` | Whether the input value is empty. |
| `value` | `string` | The formatted value of the input. |
| `valueAsNumber` | `number` | The value of the input as a number. |
| `setValue` | `(value: number) => void` | Function to set the value of the input. |
| `clearValue` | `VoidFunction` | Function to clear the value of the input. |
| `increment` | `VoidFunction` | Function to increment the value of the input by the step. |
| `decrement` | `VoidFunction` | Function to decrement the value of the input by the step. |
| `setToMax` | `VoidFunction` | Function to set the value of the input to the max. |
| `setToMin` | `VoidFunction` | Function to set the value of the input to the min. |
| `focus` | `VoidFunction` | Function to focus the input. |

## Accessibility

Follows the [Spinbutton WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/).

| Key | Description |
| --- | --- |
| `ArrowUp` | Increments the value of the number input by a predefined step. |
| `ArrowDown` | Decrements the value of the number input by a predefined step. |
| `Shift + ArrowUp` | Increments the value of the number input by the `largeStep` amount. |
| `Shift + ArrowDown` | Decrements the value of the number input by the `largeStep` amount. |
| `Alt + ArrowUp` | Increments the value of the number input by the `smallStep` amount. |
| `Alt + ArrowDown` | Decrements the value of the number input by the `smallStep` amount. |
| `Home` | Sets the value of the number input to its minimum allowed value. |
| `End` | Sets the value of the number input to its maximum allowed value. |
| `Enter` | Submits the value entered in the number input. |
