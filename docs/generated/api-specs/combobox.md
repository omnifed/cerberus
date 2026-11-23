# Combobox API reference

The Combobox component is a filterable select: users type into an input to narrow a list of options and pick one or more of them.

Use the default `<Combobox>` with a `label` and an optional `startIcon` to render the label, the input with its clear and open triggers, and the dropdown for you, or compose the primitives for full structural control. Render options with `Combobox.ItemWithIndicator` and `Combobox.ItemText`, and group them with `Combobox.ItemGroupWithLabel`. Pair it with the `useStatefulCollection` hook for a collection that filters as the user types. It supports sizes from `sm` to `lg`; to use it within a form, wrap it with the Field component.

Import: `import { Combobox } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Combobox` or `Combobox.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` |

## Parts

### Combobox.El (abstraction)

An abstraction that renders the label, the control with an optional start icon, the input, the clear and open triggers, and the positioned dropdown content

Also accepts all props of `Combobox.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void)` | No | — | Function called when the pointer is pressed down outside the component |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void)` | No | — | Function called when the focus is moved outside the component |
| `onInteractOutside` | `((event: InteractOutsideEvent) => void)` | No | — | Function called when an interaction happens outside the component |
| `open` | `boolean` | No | — | The controlled open state of the combobox |
| `defaultOpen` | `boolean` | No | — | The initial open state of the combobox when rendered. Use when you don't need to control the open state of the combobox. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the combobox. Useful for composition. |
| `inputValue` | `string` | No | — | The controlled value of the combobox's input |
| `defaultInputValue` | `string` | No | `""` | The initial value of the combobox's input when rendered. Use when you don't need to control the value of the combobox's input. |
| `name` | `string` | No | — | The `name` attribute of the combobox's input. Useful for form submission |
| `form` | `string` | No | — | The associate form of the combobox. |
| `disabled` | `boolean` | No | — | Whether the combobox is disabled |
| `readOnly` | `boolean` | No | — | Whether the combobox is readonly. This puts the combobox in a "non-editable" mode but the user can still interact with it |
| `invalid` | `boolean` | No | — | Whether the combobox is invalid |
| `required` | `boolean` | No | — | Whether the combobox is required |
| `placeholder` | `string` | No | — | The placeholder text of the combobox's input |
| `defaultHighlightedValue` | `string \| null` | No | — | The initial highlighted value of the combobox when rendered. Use when you don't need to control the highlighted value of the combobox. |
| `highlightedValue` | `string \| null` | No | — | The controlled highlighted value of the combobox |
| `value` | `string[]` | No | — | The controlled value of the combobox's selected items |
| `defaultValue` | `string[]` | No | `[]` | The initial value of the combobox's selected items when rendered. Use when you don't need to control the value of the combobox's selected items. |
| `inputBehavior` | `"autohighlight" \| "autocomplete" \| "none"` | No | `"none"` | Defines the auto-completion behavior of the combobox. - `autohighlight`: The first focused item is highlighted as the user types - `autocomplete`: Navigating the listbox with the arrow keys selects the item and the input is updated |
| `selectionBehavior` | `"clear" \| "replace" \| "preserve"` | No | `"replace"` | The behavior of the combobox input when an item is selected - `replace`: The selected item string is set as the input value - `clear`: The input value is cleared - `preserve`: The input value is preserved |
| `autoFocus` | `boolean` | No | — | Whether to autofocus the input on mount |
| `openOnClick` | `boolean` | No | `false` | Whether to open the combobox popup on initial click on the input |
| `openOnChange` | `boolean \| ((details: InputValueChangeDetails) => boolean)` | No | `true` | Whether to show the combobox when the input value changes |
| `allowCustomValue` | `boolean` | No | — | Whether to allow typing custom values in the input |
| `alwaysSubmitOnEnter` | `boolean` | No | `false` | Whether to always submit on Enter key press, even if popup is open. Useful for single-field autocomplete forms where Enter should submit the form. |
| `loopFocus` | `boolean` | No | `true` | Whether to loop the keyboard navigation through the items |
| `positioning` | `PositioningOptions` | No | `{ placement: "bottom-start" }` | The positioning options to dynamically position the menu |
| `onInputValueChange` | `((details: InputValueChangeDetails) => void)` | No | — | Function called when the input's value changes |
| `onValueChange` | `((details: ValueChangeDetails<T>) => void)` | No | — | Function called when a new item is selected |
| `onHighlightChange` | `((details: HighlightChangeDetails<T>) => void)` | No | — | Function called when an item is highlighted using the pointer or keyboard navigation. |
| `onSelect` | `((details: SelectionDetails) => void)` | No | — | Function called when an item is selected |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function called when the popup is opened |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `multiple` | `boolean` | No | — | Whether to allow multiple selection. **Good to know:** When `multiple` is `true`, the `selectionBehavior` is automatically set to `clear`. It is recommended to render the selected items in a separate container. |
| `closeOnSelect` | `boolean` | No | — | Whether to close the combobox when an item is selected. |
| `openOnKeyPress` | `boolean` | No | `true` | Whether to open the combobox on arrow key press |
| `scrollToIndexFn` | `((details: ScrollToIndexDetails) => void)` | No | — | Function to scroll to a specific index |
| `composite` | `boolean` | No | `true` | Whether the combobox is a composed with other composite widgets like tabs |
| `disableLayer` | `boolean` | No | — | Whether to disable registering this a dismissable layer |
| `navigate` | `((details: NavigateDetails) => void) \| null` | No | — | Function to navigate to the selected item |
| `loading` | `boolean` | No | — | Whether the results are being loaded (e.g. fetched from a server). While loading, the listbox is marked with `aria-busy`, the loading message is announced instead of the result count, and "no results" is never announced. |
| `collection` | `ListCollection<T>` | Yes | — | The collection of items |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `asChild` | `boolean` | No | — | Use the provided child element as the default rendered element, combining their props and behavior. |
| `label` | `string` | No | — | The label that appears above the combobox input. |
| `startIcon` | `ReactNode` | No | — | The icon that appears at the start of the combobox input. |

### Combobox.ItemWithIndicator (abstraction)

An abstraction of the item that renders the Cerberus check icon in its indicator

Also accepts all props of `Combobox.Item`.

### Combobox.ItemGroupWithLabel (abstraction)

An abstraction of the item group that renders its `label` as the group label

Also accepts all props of `Combobox.ItemGroup`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | No | — | The label that appears for the combobox item group. |

### Combobox.Root (primitive)

The root container of the Combobox component.

Selector: `[data-scope="combobox"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void)` | No | — | Function called when the pointer is pressed down outside the component |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void)` | No | — | Function called when the focus is moved outside the component |
| `onInteractOutside` | `((event: InteractOutsideEvent) => void)` | No | — | Function called when an interaction happens outside the component |
| `open` | `boolean` | No | — | The controlled open state of the combobox |
| `defaultOpen` | `boolean` | No | — | The initial open state of the combobox when rendered. Use when you don't need to control the open state of the combobox. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the combobox. Useful for composition. |
| `inputValue` | `string` | No | — | The controlled value of the combobox's input |
| `defaultInputValue` | `string` | No | `""` | The initial value of the combobox's input when rendered. Use when you don't need to control the value of the combobox's input. |
| `name` | `string` | No | — | The `name` attribute of the combobox's input. Useful for form submission |
| `form` | `string` | No | — | The associate form of the combobox. |
| `disabled` | `boolean` | No | — | Whether the combobox is disabled |
| `readOnly` | `boolean` | No | — | Whether the combobox is readonly. This puts the combobox in a "non-editable" mode but the user can still interact with it |
| `invalid` | `boolean` | No | — | Whether the combobox is invalid |
| `required` | `boolean` | No | — | Whether the combobox is required |
| `placeholder` | `string` | No | — | The placeholder text of the combobox's input |
| `defaultHighlightedValue` | `string \| null` | No | — | The initial highlighted value of the combobox when rendered. Use when you don't need to control the highlighted value of the combobox. |
| `highlightedValue` | `string \| null` | No | — | The controlled highlighted value of the combobox |
| `value` | `string[]` | No | — | The controlled value of the combobox's selected items |
| `defaultValue` | `string[]` | No | `[]` | The initial value of the combobox's selected items when rendered. Use when you don't need to control the value of the combobox's selected items. |
| `inputBehavior` | `"autohighlight" \| "autocomplete" \| "none"` | No | `"none"` | Defines the auto-completion behavior of the combobox. - `autohighlight`: The first focused item is highlighted as the user types - `autocomplete`: Navigating the listbox with the arrow keys selects the item and the input is updated |
| `selectionBehavior` | `"clear" \| "replace" \| "preserve"` | No | `"replace"` | The behavior of the combobox input when an item is selected - `replace`: The selected item string is set as the input value - `clear`: The input value is cleared - `preserve`: The input value is preserved |
| `autoFocus` | `boolean` | No | — | Whether to autofocus the input on mount |
| `openOnClick` | `boolean` | No | `false` | Whether to open the combobox popup on initial click on the input |
| `openOnChange` | `boolean \| ((details: InputValueChangeDetails) => boolean)` | No | `true` | Whether to show the combobox when the input value changes |
| `allowCustomValue` | `boolean` | No | `false` | Whether to allow typing custom values in the input |
| `alwaysSubmitOnEnter` | `boolean` | No | `false` | Whether to always submit on Enter key press, even if popup is open. Useful for single-field autocomplete forms where Enter should submit the form. |
| `loopFocus` | `boolean` | No | `true` | Whether to loop the keyboard navigation through the items |
| `positioning` | `PositioningOptions` | No | `{ placement: "bottom-start" }` | The positioning options to dynamically position the menu |
| `onInputValueChange` | `((details: InputValueChangeDetails) => void)` | No | — | Function called when the input's value changes |
| `onValueChange` | `((details: ValueChangeDetails<T>) => void)` | No | — | Function called when a new item is selected |
| `onHighlightChange` | `((details: HighlightChangeDetails<T>) => void)` | No | — | Function called when an item is highlighted using the pointer or keyboard navigation. |
| `onSelect` | `((details: SelectionDetails) => void)` | No | — | Function called when an item is selected |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function called when the popup is opened |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `multiple` | `boolean` | No | — | Whether to allow multiple selection. **Good to know:** When `multiple` is `true`, the `selectionBehavior` is automatically set to `clear`. It is recommended to render the selected items in a separate container. |
| `closeOnSelect` | `boolean` | No | — | Whether to close the combobox when an item is selected. |
| `openOnKeyPress` | `boolean` | No | `true` | Whether to open the combobox on arrow key press |
| `scrollToIndexFn` | `((details: ScrollToIndexDetails) => void)` | No | — | Function to scroll to a specific index |
| `composite` | `boolean` | No | `true` | Whether the combobox is a composed with other composite widgets like tabs |
| `disableLayer` | `boolean` | No | — | Whether to disable registering this a dismissable layer |
| `navigate` | `((details: NavigateDetails) => void) \| null` | No | — | Function to navigate to the selected item |
| `loading` | `boolean` | No | — | Whether the results are being loaded (e.g. fetched from a server). While loading, the listbox is marked with `aria-busy`, the loading message is announced instead of the result count, and "no results" is never announced. |
| `collection` | `ListCollection<T>` | Yes | — | The collection of items |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-readonly` | Present when read-only. |

### Combobox.ClearTrigger (primitive)

The clear trigger primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="clear-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |

### Combobox.Content (primitive)

The content primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-placement` | The placement of the content. |
| `data-side` | The side of the trigger that the content is positioned on. |
| `data-empty` | Present when the content is empty. |
| `data-loading` | Present when loading. |
| `data-nested` | listbox. |
| `data-has-nested` | listbox. |

| CSS variable | Description |
| --- | --- |
| `--layer-index` | The index of the dismissable in the layer stack. |
| `--nested-layer-count` | The number of nested comboboxs. |

### Combobox.Control (primitive)

The control primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-focus` | Present when focused. |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |

### Combobox.Input (primitive)

The input primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="input"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-autofocus` | Present when the state applies |
| `data-state` | `"open"` \| `"closed"` |

### Combobox.Item (primitive)

The item primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `persistFocus` | `boolean` | No | — | Whether hovering outside should clear the highlighted state |
| `item` | `CollectionItem` | Yes | — | The item to render |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-highlighted` | Present when highlighted. |
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-disabled` | Present when disabled. |
| `data-value` | The value of the item. |

### Combobox.ItemGroup (primitive)

The item group primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="item-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-empty` | Present when the content is empty. |

### Combobox.ItemGroupLabel (primitive)

The item group label primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="item-group-label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Combobox.ItemIndicator (primitive)

The item indicator primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="item-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"checked"` \| `"unchecked"` |

### Combobox.ItemText (primitive)

The item text primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="item-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-disabled` | Present when disabled. |
| `data-highlighted` | Present when highlighted. |

### Combobox.Label (primitive)

The label primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-readonly` | Present when read-only. |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-required` | Present when required. |
| `data-focus` | Present when focused. |

### Combobox.List (primitive)

The list primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="list"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-empty` | Present when the content is empty. |
| `data-loading` | Present when loading. |

### Combobox.Positioner (primitive)

The positioner primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="positioner"]`

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

### Combobox.Trigger (primitive)

The trigger primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="trigger"]`

Keyboard: `ArrowDown`, `ArrowUp`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `focusable` | `boolean` | No | — | Whether the trigger is focusable |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-invalid` | Present when invalid. |
| `data-focusable` | Present when the state applies |
| `data-readonly` | Present when read-only. |
| `data-disabled` | Present when disabled. |

### Combobox.Empty (primitive)

The empty primitive part of the Combobox component.

Selector: `[data-scope="combobox"][data-part="empty"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Combobox.StartIcon (primitive)

The start icon part of the Combobox component: a Cerberus recipe slot outside the Ark anatomy, rendered as a `<span>`.

Selector: `[data-scope="combobox"][data-part="start-icon"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Combobox.RootProvider (primitive)

The root container of the Combobox component, driven by state created with `useCombobox()`.

Selector: `[data-scope="combobox"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `value` | `UseComboboxReturn<T>` | Yes | — |  |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |
| `data-readonly` | Present when read-only. |

### Combobox.Context (primitive)

Exposes the Combobox state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseComboboxContext<T>) => ReactNode` | Yes | — |  |

### Combobox.ItemContext (primitive)

Exposes the Combobox item state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseComboboxItemContext) => ReactNode` | Yes | — |  |

## Context API

`Combobox.Context`, `useCombobox()` and `useComboboxContext()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `focused` | `boolean` | Whether the combobox is focused. |
| `open` | `boolean` | Whether the combobox is open. |
| `loading` | `boolean` | Whether the results are being loaded. |
| `inputValue` | `string` | The value of the combobox input. |
| `highlightedValue` | `string \| null` | The value of the highlighted item. |
| `highlightedItem` | `V \| null` | The highlighted item. |
| `setHighlightValue` | `(value: string) => void` | The value of the combobox input. |
| `clearHighlightValue` | `VoidFunction` | Function to clear the highlighted value. |
| `syncSelectedItems` | `VoidFunction` | Function to sync the selected items with the value. Useful when `value` is updated from async sources. |
| `selectedItems` | `V[]` | The selected items. |
| `hasSelectedItems` | `boolean` | Whether there's a selected item. |
| `value` | `string[]` | The selected item keys. |
| `valueAsString` | `string` | The string representation of the selected items. |
| `selectValue` | `(value: string) => void` | Function to select a value. |
| `setValue` | `(value: string[]) => void` | Function to set the value of the combobox. |
| `clearValue` | `(value?: string) => void` | Function to clear the value of the combobox. |
| `focus` | `VoidFunction` | Function to focus on the combobox input. |
| `setInputValue` | `(value: string, reason?: InputValueChangeReason) => void` | Function to set the input value of the combobox. |
| `getItemState` | `(props: ItemProps) => ItemState` | Returns the state of a combobox item. |
| `setOpen` | `(open: boolean, reason?: OpenChangeReason) => void` | Function to open or close the combobox. |
| `collection` | `ListCollection<V>` | Function to toggle the combobox. |
| `reposition` | `(options?: Partial<PositioningOptions>) => void` | Function to set the positioning options. |
| `multiple` | `boolean` | Whether the combobox allows multiple selections. |
| `disabled` | `boolean` | Whether the combobox is disabled. |

## Accessibility

Follows the [Combobox WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/).

| Key | Description |
| --- | --- |
| `ArrowDown` | When the combobox is closed, opens the listbox and highlights to the first option. When the combobox is open, moves focus to the next option. |
| `ArrowUp` | When the combobox is closed, opens the listbox and highlights to the last option. When the combobox is open, moves focus to the previous option. |
| `Home` | When the combobox is open, moves focus to the first option. |
| `End` | When the combobox is open, moves focus to the last option. |
| `Escape` | Closes the listbox. |
| `Enter` | Selects the highlighted option and closes the combobox. |
| `Escape` | Closes the combobox. |
