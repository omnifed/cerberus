# Clipboard API reference

The Clipboard component provides an accessible way to copy text to the user's clipboard with built-in visual feedback.

It is unstyled by default: every part accepts Panda style props, `css` and `asChild`, so you can turn the trigger into a button or the input into a text field. Use `Clipboard.CopyIndicator` or `Clipboard.CopyText` inside the trigger for the default copy/copied feedback, or `Clipboard.TriggerWithTooltip` to show that status in a tooltip.

Import: `import { Clipboard } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Clipboard.CopyIndicator (abstraction)

An abstraction of the indicator that shows a copy icon, then an animated checkmark once copied

Also accepts all props of `Clipboard.Indicator`.

### Clipboard.CopyText (abstraction)

An abstraction of the indicator that shows "Copy", then "Copied" once copied

Also accepts all props of `Clipboard.Indicator`.

### Clipboard.TriggerWithTooltip (abstraction)

An abstraction of the trigger wrapped in a Tooltip that shows the copy status

Also accepts all props of `Clipboard.Trigger`.

### Clipboard.Root (primitive)

The root container of the Clipboard component.

Selector: `[data-scope="clipboard"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `ids` | `ElementIds` | No | — | The ids of the elements in the clipboard. Useful for composition. |
| `value` | `string` | No | — | The controlled value of the clipboard |
| `defaultValue` | `string` | No | `""` | The initial value to be copied to the clipboard when rendered. Use when you don't need to control the value of the clipboard. |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | The function to be called when the value changes |
| `onStatusChange` | `((details: CopyStatusDetails) => void)` | No | — | The function to be called when the value is copied to the clipboard |
| `timeout` | `number` | No | `3000` | The timeout for the copy operation |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-copied` | Present when copied state is true. |

### Clipboard.Control (primitive)

The control primitive part of the Clipboard component.

Selector: `[data-scope="clipboard"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-copied` | Present when copied state is true. |

### Clipboard.Trigger (primitive)

The trigger primitive part of the Clipboard component.

Selector: `[data-scope="clipboard"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-copied` | Present when copied state is true. |

### Clipboard.Indicator (primitive)

The indicator primitive part of the Clipboard component.

Selector: `[data-scope="clipboard"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `copied` | `ReactNode` | No | — |  |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Clipboard.Input (primitive)

The input primitive part of the Clipboard component.

Selector: `[data-scope="clipboard"][data-part="input"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-copied` | Present when copied state is true. |
| `data-readonly` | `"true"`: Present when read-only. |

### Clipboard.Label (primitive)

The label primitive part of the Clipboard component.

Selector: `[data-scope="clipboard"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-copied` | Present when copied state is true. |

### Clipboard.RootProvider (primitive)

The root container of the Clipboard component, driven by state created with `useClipboard()`.

Selector: `[data-scope="clipboard"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UseClipboardReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-copied` | Present when copied state is true. |

### Clipboard.Context (primitive)

Exposes the Clipboard state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseClipboardContext) => ReactNode` | Yes | — |  |

### Clipboard.ValueText (primitive)

The value-text primitive part of the Clipboard component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
