# Slider API reference

The Slider component allows users to make selections from a range of values by dragging one or more thumbs along a track. It is composed of several primitives that enable customization and flexibility in its usage.

Rendered on its own, Slider displays the control, track, range and one thumb per value, with optional marks and a dragging indicator. Children such as `Slider.Label` and `Slider.ValueText` render as a header above the control. It supports different sizes, usages, palettes and a vertical orientation to match the design requirements of your application.

Import: `import { Slider } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Slider` or `Slider.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `palette` | `'action'` \| `'info'` \| `'success'` \| `'warning'` \| `'danger'` | `'action'` |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'lg'` |
| `usage` | `'gradient'` \| `'filled'` \| `'outlined'` | `'gradient'` |
| `direction` | `'vertical'` \| `'horizontal'` | `'horizontal'` |

## Parts

### Slider.El (abstraction)

An entry abstraction that renders a header from its children, the control, track, range, one thumb per value and optional marks

Also accepts all props of `Slider.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `marks` | `SliderMark[]` | No | — | The marks to render along the track. A number renders as its own label; an object renders `label` (or its `value` when no label is given). |
| `showIndicator` | `boolean` | No | `false` | Shows a dragging indicator with the thumb's value while a thumb is dragged or focused. |

### Slider.Thumbs (abstraction)

Renders one thumb per slider value, each with its hidden input and an optional dragging indicator

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `showIndicator` | `boolean` | No | `false` | Shows a dragging indicator with the thumb's value while it is dragged or focused. A direct `Slider.DraggingIndicator` child also shows it. |
| `children` | `ReactNode` | No | — | Direct `Slider.Thumb`, `Slider.DraggingIndicator` and `Slider.HiddenInput` children patch those parts on every thumb (a thumb's `index` is ignored); other children render inside every thumb. |

### Slider.Marks (abstraction)

Renders a marker group with one marker, indicator and label per mark

Also accepts all props of `Slider.MarkerGroup`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `marks` | `SliderMark[]` | Yes | — | The marks to render along the track. A number renders as its own label; an object renders `label` (or its `value` when no label is given). |

### Slider.MarkerIndicator (abstraction)

The dot rendered inside a marker, styled by the slider recipe's `markerIndicator` slot

### Slider.Root (primitive)

The root container of the Slider component.

Selector: `[data-scope="slider"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'info' \| 'success' \| 'warning' \| 'danger'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `usage` | `'gradient' \| 'filled' \| 'outlined'` | No | `'gradient'` | PandaCSS recipe variant for usage. |
| `direction` | `'vertical' \| 'horizontal'` | No | `'horizontal'` | PandaCSS recipe variant for direction. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the slider. Useful for composition. |
| `name` | `string` | No | — | The name associated with each slider thumb (when used in a form) |
| `form` | `string` | No | — | The associate form of the underlying input element. |
| `value` | `number[]` | No | — | The controlled value of the slider |
| `defaultValue` | `number[]` | No | — | The initial value of the slider when rendered. Use when you don't need to control the value of the slider. |
| `disabled` | `boolean` | No | — | Whether the slider is disabled |
| `readOnly` | `boolean` | No | — | Whether the slider is read-only |
| `invalid` | `boolean` | No | — | Whether the slider is invalid |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Function invoked when the value of the slider changes |
| `onValueChangeEnd` | `((details: ValueChangeDetails) => void)` | No | — | Function invoked when the slider value change is done |
| `onFocusChange` | `((details: FocusChangeDetails) => void)` | No | — | Function invoked when the slider's focused index changes |
| `getAriaValueText` | `((details: ValueTextDetails) => string)` | No | — | Function that returns a human readable value for the slider thumb |
| `min` | `number` | No | `0` | The minimum value of the slider |
| `max` | `number` | No | `100` | The maximum value of the slider |
| `step` | `number` | No | `1` | The step value of the slider |
| `largeStep` | `number` | No | `10 * step` | The step value of the slider when the `Shift` key is held, or the `PageUp`/`PageDown` keys are used. |
| `minStepsBetweenThumbs` | `number` | No | `0` | The minimum permitted steps between multiple thumbs. `minStepsBetweenThumbs` * `step` should reflect the gap between the thumbs. - `step: 1` and `minStepsBetweenThumbs: 10` => gap is `10` - `step: 10` and `minStepsBetweenThumbs: 2` => gap is `20` |
| `orientation` | `"vertical" \| "horizontal"` | No | `"horizontal"` | The orientation of the slider |
| `origin` | `"start" \| "center" \| "end"` | No | `"start"` | The origin of the slider range. The track is filled from the origin to the thumb for single values. - "start": Useful when the value represents an absolute value - "center": Useful when the value represents an offset (relative) - "end": Useful when the value represents an offset from the end |
| `thumbAlignment` | `"contain" \| "center"` | No | `"contain"` | The alignment of the slider thumb relative to the track - `center`: the thumb will extend beyond the bounds of the slider track. - `contain`: the thumb will be contained within the bounds of the track. |
| `thumbSize` | `{ width: number; height: number; }` | No | — | The slider thumbs dimensions |
| `thumbCollisionBehavior` | `"none" \| "push" \| "swap"` | No | `"none"` | Controls how thumbs behave when they collide during pointer interactions. - `none` (default): Thumbs cannot move past each other; excess movement is ignored. - `push`: Thumbs push each other without restoring their previous positions when dragged back. - `swap`: Thumbs swap places when dragged past each other. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-dragging` | Present when in the dragging state. |
| `data-invalid` | Present when invalid. |
| `data-focus` | Present when focused. |

| CSS variable | Description |
| --- | --- |
| `--slider-thumb-width` | The thumb width of the slider. |
| `--slider-thumb-height` | The thumb height of the slider. |
| `--slider-thumb-transform` | The thumb transform of the slider. |
| `--slider-range-start` | The range start of the slider. |
| `--slider-range-end` | The range end of the slider. |
| `--translate-x` | The horizontal translation value. |
| `--translate-y` | The vertical translation value. |

### Slider.Label (primitive)

The label primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-invalid` | Present when invalid. |
| `data-dragging` | Present when in the dragging state. |
| `data-focus` | Present when focused. |

### Slider.Thumb (primitive)

The thumb primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="thumb"]`

Keyboard: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `PageUp`, `PageDown`, `Home`, `End`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | Yes | — |  |
| `name` | `string` | No | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-index` | The index of the item. |
| `data-name` | Set by the component |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-focus` | Present when focused. |
| `data-dragging` | Present when in the dragging state. |

### Slider.ValueText (primitive)

The value text primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="value-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-invalid` | Present when invalid. |
| `data-focus` | Present when focused. |

### Slider.Track (primitive)

The track primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="track"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-dragging` | Present when in the dragging state. |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-focus` | Present when focused. |

### Slider.Range (primitive)

The range primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="range"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-dragging` | Present when in the dragging state. |
| `data-focus` | Present when focused. |
| `data-invalid` | Present when invalid. |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |

### Slider.Control (primitive)

The control primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-dragging` | Present when in the dragging state. |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-invalid` | Present when invalid. |
| `data-focus` | Present when focused. |

### Slider.MarkerGroup (primitive)

The marker group primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="marker-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

### Slider.Marker (primitive)

The marker primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="marker"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `number` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-value` | Mirrors the `value` prop |
| `data-disabled` | Present when disabled. |
| `data-state` | Set by the component |

### Slider.DraggingIndicator (primitive)

The dragging indicator primitive part of the Slider component.

Selector: `[data-scope="slider"][data-part="dragging-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-state` | `"open"` \| `"closed"` |

### Slider.RootProvider (primitive)

The root container of the Slider component, driven by state created with `useSlider()`.

Selector: `[data-scope="slider"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'info' \| 'success' \| 'warning' \| 'danger'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `usage` | `'gradient' \| 'filled' \| 'outlined'` | No | `'gradient'` | PandaCSS recipe variant for usage. |
| `direction` | `'vertical' \| 'horizontal'` | No | `'horizontal'` | PandaCSS recipe variant for direction. |
| `value` | `UseSliderReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-dragging` | Present when in the dragging state. |
| `data-invalid` | Present when invalid. |
| `data-focus` | Present when focused. |

| CSS variable | Description |
| --- | --- |
| `--slider-thumb-width` | The thumb width of the slider. |
| `--slider-thumb-height` | The thumb height of the slider. |
| `--slider-thumb-transform` | The thumb transform of the slider. |
| `--slider-range-start` | The range start of the slider. |
| `--slider-range-end` | The range end of the slider. |
| `--translate-x` | The horizontal translation value. |
| `--translate-y` | The vertical translation value. |

### Slider.HiddenInput (primitive)

The hidden input primitive part of the Slider component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

## Accessibility

Follows the [Slider WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/).

| Key | Description |
| --- | --- |
| `ArrowRight` | <span>Increments the slider based on defined step</span>. |
| `ArrowLeft` | <span>Decrements the slider based on defined step</span>. |
| `ArrowUp` | <span>Increases the value by the step amount.</span>. |
| `ArrowDown` | <span>Decreases the value by the step amount.</span>. |
| `PageUp` | <span>Increases the value by the <code>largeStep</code> amount.</span>. |
| `PageDown` | <span>Decreases the value by the <code>largeStep</code> amount.</span>. |
| `Shift + ArrowUp` | <span>Increases the value by the <code>largeStep</code> amount.</span>. |
| `Shift + ArrowDown` | <span>Decreases the value by the <code>largeStep</code> amount.</span>. |
| `Home` | Sets the value to its minimum. |
| `End` | Sets the value to its maximum. |
