# Select API reference

The Select component is a dropdown list that lets users pick one or more options from a collection.

Use the default `<Select>` with a `placeholder` to render the trigger with its value text and Cerberus indicator, the positioned dropdown and the hidden native select for you, or compose the primitives for full structural control. Render options with `Select.ItemWithIndicator` (also available as `Option`) and group them with `Select.ItemGroupWithLabel` (also available as `OptionGroup`). Build the collection with `createSelectCollection`, or Ark's `createListCollection` for custom item shapes. It supports sizes from `sm` to `lg`; to use it within a form, wrap it with the Field component.

Import: `import { Select } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Select` or `Select.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` |

## Parts

### Select.El (abstraction)

An abstraction that renders the control with the trigger, its value text and Cerberus indicator, the positioned dropdown content and the hidden native select

Also accepts all props of `Select.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void)` | No | — | Function called when the pointer is pressed down outside the component |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void)` | No | — | Function called when the focus is moved outside the component |
| `onInteractOutside` | `((event: InteractOutsideEvent) => void)` | No | — | Function called when an interaction happens outside the component |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `ids` | `ElementIds` | No | — | The ids of the elements in the select. Useful for composition. |
| `name` | `string` | No | — | The `name` attribute of the underlying select. |
| `form` | `string` | No | — | The associate form of the underlying select. |
| `autoComplete` | `string` | No | — | The autocomplete attribute for the hidden select. Enables browser autofill (e.g. "address-level1" for state). |
| `disabled` | `boolean` | No | — | Whether the select is disabled |
| `invalid` | `boolean` | No | — | Whether the select is invalid |
| `readOnly` | `boolean` | No | — | Whether the select is read-only |
| `required` | `boolean` | No | — | Whether the select is required |
| `closeOnSelect` | `boolean` | No | `true` | Whether the select should close after an item is selected |
| `onSelect` | `((details: SelectionDetails) => void)` | No | — | Function called when an item is selected |
| `onHighlightChange` | `((details: HighlightChangeDetails<T>) => void)` | No | — | The callback fired when the highlighted item changes. |
| `onValueChange` | `((details: ValueChangeDetails<T>) => void)` | No | — | The callback fired when the selected item changes. |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function called when the popup is opened |
| `positioning` | `PositioningOptions` | No | — | The positioning options of the menu. |
| `value` | `string[]` | No | — | The controlled keys of the selected items |
| `defaultValue` | `string[]` | No | — | The initial default value of the select when rendered. Use when you don't need to control the value of the select. |
| `highlightedValue` | `string \| null` | No | — | The controlled key of the highlighted item |
| `defaultHighlightedValue` | `string \| null` | No | — | The initial value of the highlighted item when opened. Use when you don't need to control the highlighted value of the select. |
| `loopFocus` | `boolean` | No | `false` | Whether to loop the keyboard navigation through the options |
| `multiple` | `boolean` | No | — | Whether to allow multiple selection |
| `open` | `boolean` | No | — | Whether the select menu is open |
| `defaultOpen` | `boolean` | No | — | Whether the select's open state is controlled by the user |
| `scrollToIndexFn` | `((details: ScrollToIndexDetails) => void)` | No | — | Function to scroll to a specific index |
| `composite` | `boolean` | No | `true` | Whether the select is a composed with other composite widgets like tabs or combobox |
| `deselectable` | `boolean` | No | — | Whether the value can be cleared by clicking the selected item. **Note:** this is only applicable for single selection |
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
| `placeholder` | `string` | No | — | The placeholder text when no option is selected. |

### Select.ItemWithIndicator (abstraction)

An abstraction of the item that renders its text (the item label by default) and the Cerberus check icon in its indicator

Also accepts all props of `Select.Item`.

### Select.ItemGroupWithLabel (abstraction)

An abstraction of the item group that renders its `label` as the group label

Also accepts all props of `Select.ItemGroup`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | `string` | No | — | The label that appears for the select item group. |

### Select.Label (primitive)

The label primitive part of the Select component.

Selector: `[data-scope="select"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-readonly` | Present when read-only. |
| `data-required` | Present when required. |

### Select.Positioner (primitive)

The positioner primitive part of the Select component.

Selector: `[data-scope="select"][data-part="positioner"]`

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

### Select.Trigger (primitive)

The trigger primitive part of the Select component.

Selector: `[data-scope="select"][data-part="trigger"]`

Keyboard: `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight`, `Home`, `End`, `Enter`, `Space`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-readonly` | Present when read-only. |
| `data-placement` | The placement of the trigger. |
| `data-side` | The side of the trigger that the trigger is positioned on. |
| `data-placeholder-shown` | Present when placeholder is shown. |

### Select.Indicator (primitive)

The indicator primitive part of the Select component.

Selector: `[data-scope="select"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-readonly` | Present when read-only. |

### Select.ClearTrigger (primitive)

The clear trigger primitive part of the Select component.

Selector: `[data-scope="select"][data-part="clear-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-invalid` | Present when invalid. |

### Select.Item (primitive)

The item primitive part of the Select component.

Selector: `[data-scope="select"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `item` | `T` | Yes | — | The item to render |
| `persistFocus` | `boolean` | No | — | Whether hovering outside should clear the highlighted state |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-value` | The value of the item. |
| `data-state` | `"checked"` \| `"unchecked"` |
| `data-highlighted` | Present when highlighted. |
| `data-disabled` | Present when disabled. |

### Select.ItemText (primitive)

The item text primitive part of the Select component.

Selector: `[data-scope="select"][data-part="item-text"]`

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

### Select.ItemIndicator (primitive)

The item indicator primitive part of the Select component.

Selector: `[data-scope="select"][data-part="item-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"checked"` \| `"unchecked"` |

### Select.ItemGroup (primitive)

The item group primitive part of the Select component.

Selector: `[data-scope="select"][data-part="item-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |

### Select.ItemGroupLabel (primitive)

The item group label primitive part of the Select component.

Selector: `[data-scope="select"][data-part="item-group-label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Select.List (primitive)

The list primitive part of the Select component.

Selector: `[data-scope="select"][data-part="list"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Select.Content (primitive)

The content primitive part of the Select component.

Selector: `[data-scope="select"][data-part="content"]`

Keyboard: `ArrowUp`, `ArrowDown`, `Home`, `End`, `Enter`, `Space`

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
| `data-activedescendant` | The id the active descendant of the content. |
| `data-nested` | listbox. |
| `data-has-nested` | listbox. |

| CSS variable | Description |
| --- | --- |
| `--layer-index` | The index of the dismissable in the layer stack. |
| `--nested-layer-count` | The number of nested selects. |

### Select.Root (primitive)

The root container of the Select component.

Selector: `[data-scope="select"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void)` | No | — | Function called when the pointer is pressed down outside the component |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void)` | No | — | Function called when the focus is moved outside the component |
| `onInteractOutside` | `((event: InteractOutsideEvent) => void)` | No | — | Function called when an interaction happens outside the component |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `ids` | `ElementIds` | No | — | The ids of the elements in the select. Useful for composition. |
| `name` | `string` | No | — | The `name` attribute of the underlying select. |
| `form` | `string` | No | — | The associate form of the underlying select. |
| `autoComplete` | `string` | No | — | The autocomplete attribute for the hidden select. Enables browser autofill (e.g. "address-level1" for state). |
| `disabled` | `boolean` | No | — | Whether the select is disabled |
| `invalid` | `boolean` | No | — | Whether the select is invalid |
| `readOnly` | `boolean` | No | — | Whether the select is read-only |
| `required` | `boolean` | No | — | Whether the select is required |
| `closeOnSelect` | `boolean` | No | `true` | Whether the select should close after an item is selected |
| `onSelect` | `((details: SelectionDetails) => void)` | No | — | Function called when an item is selected |
| `onHighlightChange` | `((details: HighlightChangeDetails<T>) => void)` | No | — | The callback fired when the highlighted item changes. |
| `onValueChange` | `((details: ValueChangeDetails<T>) => void)` | No | — | The callback fired when the selected item changes. |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function called when the popup is opened |
| `positioning` | `PositioningOptions` | No | — | The positioning options of the menu. |
| `value` | `string[]` | No | — | The controlled keys of the selected items |
| `defaultValue` | `string[]` | No | `[]` | The initial default value of the select when rendered. Use when you don't need to control the value of the select. |
| `highlightedValue` | `string \| null` | No | — | The controlled key of the highlighted item |
| `defaultHighlightedValue` | `string \| null` | No | — | The initial value of the highlighted item when opened. Use when you don't need to control the highlighted value of the select. |
| `loopFocus` | `boolean` | No | `false` | Whether to loop the keyboard navigation through the options |
| `multiple` | `boolean` | No | — | Whether to allow multiple selection |
| `open` | `boolean` | No | — | Whether the select menu is open |
| `defaultOpen` | `boolean` | No | — | Whether the select's open state is controlled by the user |
| `scrollToIndexFn` | `((details: ScrollToIndexDetails) => void)` | No | — | Function to scroll to a specific index |
| `composite` | `boolean` | No | `true` | Whether the select is a composed with other composite widgets like tabs or combobox |
| `deselectable` | `boolean` | No | — | Whether the value can be cleared by clicking the selected item. **Note:** this is only applicable for single selection |
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

### Select.Control (primitive)

The control primitive part of the Select component.

Selector: `[data-scope="select"][data-part="control"]`

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

### Select.ValueText (primitive)

The value text primitive part of the Select component.

Selector: `[data-scope="select"][data-part="value-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `placeholder` | `string` | No | — | Text to display when no value is selected. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-invalid` | Present when invalid. |
| `data-focus` | Present when focused. |

### Select.HiddenSelect (primitive)

The hidden select primitive part of the Select component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Select.RootProvider (primitive)

The root container of the Select component, driven by state created with `useSelect()`.

Selector: `[data-scope="select"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `value` | `UseSelectReturn<T>` | Yes | — |  |
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

### Select.Context (primitive)

Exposes the Select state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseSelectContext<T>) => ReactNode` | Yes | — |  |

### Select.ItemContext (primitive)

Exposes the Select item state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseSelectItemContext) => ReactNode` | Yes | — |  |

## Context API

`Select.Context` and `useSelect()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `focused` | `boolean` | Whether the select is focused. |
| `open` | `boolean` | Whether the select is open. |
| `empty` | `boolean` | Whether the select value is empty. |
| `highlightedValue` | `string \| null` | The value of the highlighted item. |
| `highlightedItem` | `V \| null` | The highlighted item. |
| `setHighlightValue` | `(value: string) => void` | Function to highlight a value. |
| `clearHighlightValue` | `VoidFunction` | Function to clear the highlighted value. |
| `selectedItems` | `V[]` | The selected items. |
| `hasSelectedItems` | `boolean` | Whether there's a selected option. |
| `value` | `string[]` | The selected item keys. |
| `valueAsString` | `string` | The string representation of the selected items. |
| `selectValue` | `(value: string) => void` | Function to select a value. |
| `selectAll` | `VoidFunction` | Function to select all values. |
| `setValue` | `(value: string[]) => void` | Function to set the value of the select. |
| `clearValue` | `(value?: string) => void` | Function to clear the value of the select. If a value is provided, it will only clear that value, otherwise, it will clear all values. |
| `focus` | `VoidFunction` | Function to focus on the select input. |
| `getItemState` | `(props: ItemProps) => ItemState` | Returns the state of a select item. |
| `setOpen` | `(open: boolean) => void` | Function to open or close the select. |
| `collection` | `ListCollection<V>` | Function to toggle the select. |
| `reposition` | `(options?: Partial<PositioningOptions>) => void` | Function to set the positioning options of the select. |
| `multiple` | `boolean` | Whether the select allows multiple selections. |
| `disabled` | `boolean` | Whether the select is disabled. |

## Accessibility

Follows the [Select-Only Combobox WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/).

| Key | Description |
| --- | --- |
| `Space` | <span>When focus is on trigger, opens the select and focuses the first selected item.<br />When focus is on the content, selects the highlighted item.</span>. |
| `Enter` | <span>When focus is on trigger, opens the select and focuses the first selected item.<br />When focus is on content, selects the focused item.</span>. |
| `ArrowDown` | <span>When focus is on trigger, opens the select.<br />When focus is on content, moves focus to the next item.</span>. |
| `ArrowUp` | <span>When focus is on trigger, opens the select.<br />When focus is on content, moves focus to the previous item.</span>. |
| `Escape` | <span>Closes the select and moves focus to trigger.</span>. |
| `A-Z` | <span>When focus is on trigger, selects the item whose label starts with the typed character.<br />When focus is on the listbox, moves focus to the next item with a label that starts with the typed character.</span>. |
| `a-z` | <span>When focus is on trigger, selects the item whose label starts with the typed character.<br />When focus is on the listbox, moves focus to the next item with a label that starts with the typed character.</span>. |
| `ArrowLeft` | When focus is on the trigger of a single select, selects the previous item without opening the select (the last item when none is selected). |
| `ArrowRight` | When focus is on the trigger of a single select, selects the next item without opening the select (the first item when none is selected). |
| `Home` | When focus is on the trigger of a single select, selects the first item. When focus is on the content, highlights the first item. |
| `End` | When focus is on the trigger of a single select, selects the last item. When focus is on the content, highlights the last item. |
