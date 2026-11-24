# Tooltip API reference

The Tooltip component is a small pop-up box that appears when a user hovers over or focuses an element, providing additional information about it.

Use the default `<Tooltip>` with a `content` prop to wrap a single trigger element, or compose the primitives for full structural control. `Tooltip.Root` renders no element: it provides the tooltip state and styles to the trigger, positioner, content and arrow parts. It supports every placement and can render its content in a Portal.

Import: `import { Tooltip } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Tooltip.El (abstraction)

An abstraction that wraps its child in the trigger and renders the content in a positioned bubble with an arrow, optionally in a Portal

Also accepts all props of `Tooltip.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `content` | `ReactNode` | Yes | — | The content to display in the tooltip bubble. |
| `portal` | `boolean` | No | `false` | Whether to render the positioner and content within a Portal. |

### Tooltip.Root (primitive)

Provides the Tooltip context and recipe variants to its parts. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the tooltip. Useful for composition. |
| `openDelay` | `number` | No | `400` | The open delay of the tooltip. |
| `closeDelay` | `number` | No | `150` | The close delay of the tooltip. |
| `closeOnPointerDown` | `boolean` | No | `true` | Whether to close the tooltip on pointerdown. |
| `closeOnEscape` | `boolean` | No | `true` | Whether to close the tooltip when the Escape key is pressed. |
| `closeOnScroll` | `boolean` | No | `true` | Whether the tooltip should close on scroll |
| `closeOnClick` | `boolean` | No | `true` | Whether the tooltip should close on click |
| `interactive` | `boolean` | No | `false` | Whether the tooltip's content is interactive. In this mode, the tooltip will remain open when user hovers over the content. See: https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function called when the tooltip is opened. |
| `positioning` | `PositioningOptions` | No | — | The user provided options used to position the popover content |
| `disabled` | `boolean` | No | `false` | Whether the tooltip is disabled |
| `open` | `boolean` | No | — | The controlled open state of the tooltip |
| `defaultOpen` | `boolean` | No | — | The initial open state of the tooltip when rendered. Use when you don't need to control the open state of the tooltip. |
| `triggerValue` | `string \| null` | No | — | The controlled trigger value |
| `defaultTriggerValue` | `string \| null` | No | — | The initial trigger value when rendered. Use when you don't need to control the trigger value. |
| `onTriggerValueChange` | `((details: TriggerValueChangeDetails) => void)` | No | — | Function called when the trigger value changes. |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `children` | `ReactNode` | No | — |  |

### Tooltip.Trigger (primitive)

The trigger primitive part of the Tooltip component.

Selector: `[data-scope="tooltip"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | No | — | The value that identifies this specific trigger |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-ownedby` | Set by the component |
| `data-value` | The value of the item. |
| `data-current` | Present when current. |
| `data-expanded` | Present when expanded. |
| `data-state` | `"open"` \| `"closed"` |

### Tooltip.Arrow (primitive)

The arrow primitive part of the Tooltip component.

Selector: `[data-scope="tooltip"][data-part="arrow"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| CSS variable | Description |
| --- | --- |
| `--arrow-size` | The size of the arrow. |
| `--arrow-size-half` | Half the size of the arrow. |
| `--arrow-background` | Use this variable to style the arrow background. |
| `--arrow-offset` | The offset position of the arrow. |

### Tooltip.ArrowTip (primitive)

The arrow tip primitive part of the Tooltip component.

Selector: `[data-scope="tooltip"][data-part="arrow-tip"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Tooltip.Positioner (primitive)

The positioner primitive part of the Tooltip component.

Selector: `[data-scope="tooltip"][data-part="positioner"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| CSS variable | Description |
| --- | --- |
| `--reference-width` | The width of the reference element. |
| `--reference-height` | The height of the root. |
| `--available-width` | The available width in viewport. |
| `--available-height` | The available height in viewport. |
| `--x` | The x position for transform. |
| `--y` | The y position for transform. |
| `--z-index` | The z-index value. |
| `--transform-origin` | The transform origin for animations. |

### Tooltip.Content (primitive)

The content primitive part of the Tooltip component.

Selector: `[data-scope="tooltip"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-instant` | Present when the state applies |
| `data-placement` | The placement of the content. |
| `data-side` | The side of the trigger that the content is positioned on. |

### Tooltip.RootProvider (primitive)

Provides the Tooltip context and recipe variants to its parts, from state created with `useTooltip()`. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UseTooltipReturn` | Yes | — |  |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `children` | `ReactNode` | No | — |  |

### Tooltip.Context (primitive)

Exposes the Tooltip state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseTooltipContext) => ReactNode` | Yes | — |  |

## Context API

`Tooltip.Context` and `useTooltip()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `open` | `boolean` | Whether the tooltip is open. |
| `setOpen` | `(open: boolean) => void` | Function to open the tooltip. |
| `triggerValue` | `string \| null` | The trigger value. |
| `setTriggerValue` | `(value: string \| null) => void` | Function to set the trigger value. |
| `reposition` | `(options?: Partial<PositioningOptions>) => void` | Function to reposition the popover. |

## Accessibility

Follows the [Tooltip WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/).

| Key | Description |
| --- | --- |
| `Tab` | Opens/closes the tooltip without delay. |
| `Escape` | If open, closes the tooltip without delay. |
