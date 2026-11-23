# CircularProgress API reference

The CircularProgress component displays a circular progress indicator for a task, with the value text and a label in the center of the circle. It scales with its `size` variant.

Use the default `<CircularProgress>` with a `value` (or `defaultValue`) and a `label` to render the circle, its track and range, and the info group for you, or compose the primitives for full structural control. Set `hideValueText` to only show the label, and `usage="transparent"` to remove the fill of the center circle.

Import: `import { CircularProgress } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `CircularProgress` or `CircularProgress.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `usage` | `'filled'` \| `'transparent'` | `'filled'` |
| `size` | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` | `'xs'` |

## Parts

### CircularProgress.El (abstraction)

An abstraction that renders the circle with its track and range, and an info group with the value text and a label

Also accepts all props of `CircularProgress.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | No | `'Done'` | The text rendered below the value text, in the center of the circle. |
| `hideValueText` | `boolean` | No | `false` | Whether to hide the value text in the center of the circle, leaving only the label. |

### CircularProgress.Root (primitive)

The root container of the CircularProgress component.

Selector: `[data-scope="circular-progress"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `usage` | `'filled' \| 'transparent'` | No | `'filled'` | PandaCSS recipe variant for usage. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | No | `'xs'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `orientation` | `"horizontal" \| "vertical"` | No | `"horizontal"` | The orientation of the element. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the progress bar. Useful for composition. |
| `value` | `number \| null` | No | — | The controlled value of the progress bar. |
| `defaultValue` | `number \| null` | No | `50` | The initial value of the progress bar when rendered. Use when you don't need to control the value of the progress bar. |
| `min` | `number` | No | `0` | The minimum allowed value of the progress bar. |
| `max` | `number` | No | `100` | The maximum allowed value of the progress bar. |
| `translations` | `IntlTranslations` | No | — | The localized messages to use. |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Callback fired when the value changes. |
| `formatOptions` | `Intl.NumberFormatOptions` | No | `{ style: "percent" }` | The options to use for formatting the value. See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat |
| `locale` | `string` | No | `"en-US"` | The locale to use for formatting the value. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-max` | Set by the component |
| `data-value` | The value of the item. |
| `data-state` | Set by the component |
| `data-orientation` | The orientation of the progress. |

| CSS variable | Description |
| --- | --- |
| `--percent` | The percent value for the root. |
| `--radius` | The border radius value. |
| `--circumference` | The circumference value for the root. |
| `--offset` | The offset position of the element. |

### CircularProgress.Label (primitive)

The label primitive part of the CircularProgress component.

Selector: `[data-scope="circular-progress"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | The orientation of the label. |

### CircularProgress.ValueText (primitive)

The value text primitive part of the CircularProgress component.

Selector: `[data-scope="circular-progress"][data-part="value-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### CircularProgress.View (primitive)

The view primitive part of the CircularProgress component.

Selector: `[data-scope="circular-progress"][data-part="view"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `state` | `ProgressState` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | Mirrors the `state` prop |

### CircularProgress.Circle (primitive)

The circle primitive part of the CircularProgress component.

Selector: `[data-scope="circular-progress"][data-part="circle"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### CircularProgress.CircleTrack (primitive)

The circle track primitive part of the CircularProgress component.

Selector: `[data-scope="circular-progress"][data-part="circle-track"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | The orientation of the circle track. |

### CircularProgress.CircleRange (primitive)

The circle range primitive part of the CircularProgress component.

Selector: `[data-scope="circular-progress"][data-part="circle-range"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | Set by the component |

### CircularProgress.InfoGroup (primitive)

The info group part of the CircularProgress component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<div>`.

Selector: `[data-scope="progress"][data-part="info-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### CircularProgress.RootProvider (primitive)

The root container of the CircularProgress component, driven by state created with `useProgress()`.

Selector: `[data-scope="circular-progress"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `usage` | `'filled' \| 'transparent'` | No | `'filled'` | PandaCSS recipe variant for usage. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | No | `'xs'` | PandaCSS recipe variant for size. |
| `value` | `UseProgressReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-max` | Set by the component |
| `data-value` | The value of the item. |
| `data-state` | Set by the component |
| `data-orientation` | The orientation of the progress. |

| CSS variable | Description |
| --- | --- |
| `--percent` | The percent value for the root. |
| `--radius` | The border radius value. |
| `--circumference` | The circumference value for the root. |
| `--offset` | The offset position of the element. |

### CircularProgress.Context (primitive)

Exposes the CircularProgress state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseProgressContext) => ReactNode` | Yes | — |  |
