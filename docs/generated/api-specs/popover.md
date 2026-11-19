# Popover API reference

The Popover component is used to show detailed information inside a pop-up, anchored to a trigger or to another element.

Use the default `<Popover>` with a `trigger` to render the trigger, positioner and content for you, or compose the primitives for full structural control. `Popover.Header`, `Popover.Body` and `Popover.Footer` lay out the content with padding that follows the `size` variant. Set `usage="arrow"` to show an arrow tip.

Import: `import { Popover } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Popover` or `Popover.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` | `'md'` |

## Parts

### Popover.El (abstraction)

An abstraction that renders the trigger, the positioner and the content, with an optional arrow

Also accepts all props of `Popover.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `trigger` | `ReactNode` | No | — | The element that toggles the popover. It is rendered as the trigger (`Popover.Trigger asChild`), so pass a single element such as a `Button`. |
| `usage` | `'default' \| 'arrow'` | No | `'default'` | Set to `arrow` to show an arrow tip pointing at the trigger. |

### Popover.Root (primitive)

Provides the Popover context and recipe variants to its parts. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void)` | No | — | Function called when the pointer is pressed down outside the component |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void)` | No | — | Function called when the focus is moved outside the component |
| `onInteractOutside` | `((event: InteractOutsideEvent) => void)` | No | — | Function called when an interaction happens outside the component |
| `onEscapeKeyDown` | `((event: KeyboardEvent) => void)` | No | — | Function called when the escape key is pressed |
| `onRequestDismiss` | `((event: LayerDismissEvent) => void)` | No | — | Function called when this layer is closed due to a parent layer being closed |
| `persistentElements` | `Array<() => Element \| null>` | No | — | Returns the persistent elements that: - should not have pointer-events disabled - should not trigger the dismiss event |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `ids` | `ElementIds` | No | — | The ids of the elements in the popover. Useful for composition. |
| `modal` | `boolean` | No | `false` | Whether the popover should be modal. When set to `true`: - interaction with outside elements will be disabled - only popover content will be visible to screen readers - scrolling is blocked - focus is trapped within the popover |
| `portalled` | `boolean` | No | `true` | Whether the popover is portalled. This will proxy the tabbing behavior regardless of the DOM position of the popover content. |
| `autoFocus` | `boolean` | No | `true` | Whether to automatically set focus on the first focusable content within the popover when opened. |
| `initialFocusEl` | `(() => HTMLElement \| null \| false)` | No | — | The element to focus on when the popover is opened. Return `false` to skip moving focus, or `null` to use the default. |
| `finalFocusEl` | `(() => MaybeElement)` | No | — | Element to receive focus when the popover is closed. |
| `restoreFocus` | `boolean` | No | `true` | Whether to restore focus to the element that had focus before the popover was opened. |
| `closeOnInteractOutside` | `boolean` | No | `true` | Whether to close the popover when the user clicks outside of the popover. |
| `closeOnEscape` | `boolean` | No | `true` | Whether to close the popover when the escape key is pressed. |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function invoked when the popover opens or closes |
| `positioning` | `PositioningOptions` | No | — | The user provided options used to position the popover content |
| `open` | `boolean` | No | — | The controlled open state of the popover |
| `defaultOpen` | `boolean` | No | — | The initial open state of the popover when rendered. Use when you don't need to control the open state of the popover. |
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

### Popover.Arrow (primitive)

The arrow primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="arrow"]`

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

### Popover.ArrowTip (primitive)

The arrow-tip primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="arrow-tip"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.Anchor (primitive)

The anchor primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="anchor"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.Trigger (primitive)

The trigger primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | No | — | The value that identifies this specific trigger |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-placement` | The placement of the trigger. |
| `data-side` | The side of the trigger that the trigger is positioned on. |
| `data-ownedby` | Set by the component |
| `data-value` | The value of the item. |
| `data-current` | Present when current. |
| `data-state` | `"open"` \| `"closed"` |

### Popover.Indicator (primitive)

The indicator primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |

### Popover.Positioner (primitive)

The positioner primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="positioner"]`

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

### Popover.Content (primitive)

The content primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-expanded` | Present when expanded. |
| `data-placement` | The placement of the content. |
| `data-side` | The side of the trigger that the content is positioned on. |
| `data-nested` | popover. |
| `data-has-nested` | popover. |

| CSS variable | Description |
| --- | --- |
| `--layer-index` | The index of the dismissable in the layer stack. |
| `--nested-layer-count` | The number of nested popovers. |

### Popover.Title (primitive)

The title primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="title"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.Description (primitive)

The description primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="description"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.CloseTrigger (primitive)

The close-trigger primitive part of the Popover component.

Selector: `[data-scope="popover"][data-part="close-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.Header (primitive)

The header part of the Popover component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<div>`.

Selector: `[data-scope="popover"][data-part="header"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.Body (primitive)

The body part of the Popover component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<div>`.

Selector: `[data-scope="popover"][data-part="body"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.Footer (primitive)

The footer part of the Popover component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<div>`.

Selector: `[data-scope="popover"][data-part="footer"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Popover.RootProvider (primitive)

Provides the Popover context and recipe variants to its parts, from state created with `usePopover()`. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `value` | `UsePopoverReturn` | Yes | — |  |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `children` | `ReactNode` | No | — |  |

### Popover.Context (primitive)

Exposes the Popover state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UsePopoverContext) => ReactNode` | Yes | — |  |

## Accessibility

| Key | Description |
| --- | --- |
| `Space` | Opens/closes the popover. |
| `Enter` | Opens/closes the popover. |
| `Tab` | <span>Moves focus to the next focusable element within the content.<br /><strong>Note:</strong> If there are no focusable elements, focus is moved to the next focusable element after the trigger.</span>. |
| `Shift + Tab` | <span>Moves focus to the previous focusable element within the content<br /><strong>Note:</strong> If there are no focusable elements, focus is moved to the trigger.</span>. |
| `Escape` | <span>Closes the popover and moves focus to the trigger.</span>. |
