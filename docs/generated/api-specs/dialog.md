# Dialog API reference

The Dialog component is a modal window that appears on top of the main content. It traps focus while open and returns focus to the trigger when it closes.

`Dialog.Root` provides the dialog state and the `size` variant to its parts without rendering an element. Use the default `<Dialog>` inside it to render the portalled backdrop, positioner and content for you, and `Dialog.CloseIconTrigger` for the default close button, or compose the primitives for full structural control. Use `Dialog.RootProvider` with `useDialog()` to control the dialog from outside.

Import: `import { Dialog } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Dialog` or `Dialog.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'auto'` \| `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'full'` | `'md'` |

## Parts

### Dialog.El (abstraction)

An abstraction that renders the dialog content inside a Portal with the backdrop and positioner

Also accepts all props of `Dialog.Content`.

### Dialog.CloseIconTrigger (abstraction)

An abstraction of the close trigger that renders a ghost IconButton with the Cerberus close icon

Also accepts all props of `Dialog.CloseTrigger`.

### Dialog.Root (primitive)

Provides the Dialog context and recipe variants to its parts. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'auto' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'full'` | No | `'md'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void)` | No | — | Function called when the pointer is pressed down outside the component |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void)` | No | — | Function called when the focus is moved outside the component |
| `onInteractOutside` | `((event: InteractOutsideEvent) => void)` | No | — | Function called when an interaction happens outside the component |
| `onEscapeKeyDown` | `((event: KeyboardEvent) => void)` | No | — | Function called when the escape key is pressed |
| `onRequestDismiss` | `((event: LayerDismissEvent) => void)` | No | — | Function called when this layer is closed due to a parent layer being closed |
| `persistentElements` | `Array<() => Element \| null>` | No | — | Returns the persistent elements that: - should not have pointer-events disabled - should not trigger the dismiss event |
| `ids` | `ElementIds` | No | — | The ids of the elements in the dialog. Useful for composition. |
| `trapFocus` | `boolean` | No | `true` | Whether to trap focus inside the dialog when it's opened |
| `preventScroll` | `boolean` | No | `true` | Whether to prevent scrolling behind the dialog when it's opened |
| `modal` | `boolean` | No | `true` | Whether to prevent pointer interaction outside the element and hide all content below it |
| `initialFocusEl` | `(() => MaybeElement \| false)` | No | — | Element to receive focus when the dialog is opened. Return `false` to skip moving focus, or `null` to use the default. |
| `finalFocusEl` | `(() => MaybeElement)` | No | — | Element to receive focus when the dialog is closed |
| `restoreFocus` | `boolean` | No | `true` | Whether to restore focus to the element that had focus before the dialog was opened |
| `closeOnInteractOutside` | `boolean` | No | `` `true` for modal dialogs, `false` for non-modal dialogs `` | Whether to close the dialog when the outside is clicked |
| `closeOnEscape` | `boolean` | No | `true` | Whether to close the dialog when the escape key is pressed |
| `role` | `"dialog" \| "alertdialog"` | No | `"dialog"` | The dialog's role |
| `open` | `boolean` | No | — | The controlled open state of the dialog |
| `defaultOpen` | `boolean` | No | `false` | The initial open state of the dialog when rendered. Use when you don't need to control the open state of the dialog. |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function to call when the dialog's open state changes |
| `triggerValue` | `string \| null` | No | — | The controlled active trigger value |
| `defaultTriggerValue` | `string \| null` | No | — | The initial active trigger value when rendered. Use when you don't need to control the active trigger value. |
| `onTriggerValueChange` | `((details: TriggerValueChangeDetails) => void)` | No | — | Function to call when the active trigger changes |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `children` | `ReactNode` | No | — |  |

### Dialog.Trigger (primitive)

The trigger primitive part of the Dialog component.

Selector: `[data-scope="dialog"][data-part="trigger"]`

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
| `data-state` | `"open"` \| `"closed"` |
| `data-current` | Present when current. |

### Dialog.Backdrop (primitive)

The backdrop primitive part of the Dialog component.

Selector: `[data-scope="dialog"][data-part="backdrop"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |

| CSS variable | Description |
| --- | --- |
| `--layer-index` | The index of the dismissable in the layer stack. |

### Dialog.Positioner (primitive)

The positioner primitive part of the Dialog component.

Selector: `[data-scope="dialog"][data-part="positioner"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Dialog.Content (primitive)

The content primitive part of the Dialog component.

Selector: `[data-scope="dialog"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-nested` | dialog. |
| `data-has-nested` | dialog. |

| CSS variable | Description |
| --- | --- |
| `--layer-index` | The index of the dismissable in the layer stack. |
| `--nested-layer-count` | The number of nested dialogs. |

### Dialog.Title (primitive)

The title primitive part of the Dialog component.

Selector: `[data-scope="dialog"][data-part="title"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Dialog.Description (primitive)

The description primitive part of the Dialog component.

Selector: `[data-scope="dialog"][data-part="description"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Dialog.CloseTrigger (primitive)

The close-trigger primitive part of the Dialog component.

Selector: `[data-scope="dialog"][data-part="close-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Dialog.RootProvider (primitive)

Provides the Dialog context and recipe variants to its parts, from state created with `useDialog()`. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'auto' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'full'` | No | `'md'` | PandaCSS recipe variant for size. |
| `value` | `UseDialogReturn` | Yes | — |  |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `asChild` | `boolean` | No | — | Use the provided child element as the default rendered element, combining their props and behavior. |
| `children` | `ReactNode` | No | — |  |

### Dialog.Context (primitive)

Exposes the Dialog state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseDialogContext) => ReactNode` | Yes | — |  |

## Accessibility

Follows the [Dialog (Modal) WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/).

| Key | Description |
| --- | --- |
| `Enter` | When focus is on the trigger, opens the dialog. |
| `Tab` | Moves focus to the next focusable element within the content. Focus is trapped within the dialog. |
| `Shift + Tab` | Moves focus to the previous focusable element. Focus is trapped within the dialog. |
| `Escape` | Closes the dialog and moves focus to trigger or the defined final focus element. |
