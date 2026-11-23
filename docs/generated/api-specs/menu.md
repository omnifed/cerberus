# Menu API reference

The Menu component displays a list of actions or options that the user can choose from, opened from a trigger such as a button.

`<Menu>` provides the menu state to its parts and renders no element. Use `Menu.Trigger` with `asChild` to open the menu from your own button, and `Menu.ContentGroup` to render the positioned menu content. Group items with `Menu.ItemGroup` and `Menu.ItemGroupLabel`, divide them with `Menu.Separator`, and use `Menu.CheckboxItem` or `Menu.RadioItemGroup` with `Menu.RadioItem` for selectable options. The `positioning` prop places the menu relative to its trigger.

Import: `import { Menu } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Menu.ContentGroup (abstraction)

An abstraction that renders the menu content inside its positioner

Also accepts all props of `Menu.Content`.

### Menu.Root (primitive)

Provides the Menu context and recipe variants to its parts. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onPointerDownOutside` | `((event: PointerDownOutsideEvent) => void)` | No | — | Function called when the pointer is pressed down outside the component |
| `onFocusOutside` | `((event: FocusOutsideEvent) => void)` | No | — | Function called when the focus is moved outside the component |
| `onInteractOutside` | `((event: InteractOutsideEvent) => void)` | No | — | Function called when an interaction happens outside the component |
| `onEscapeKeyDown` | `((event: KeyboardEvent) => void)` | No | — | Function called when the escape key is pressed |
| `onRequestDismiss` | `((event: LayerDismissEvent) => void)` | No | — | Function called when this layer is closed due to a parent layer being closed |
| `ids` | `ElementIds` | No | — | The ids of the elements in the menu. Useful for composition. |
| `defaultHighlightedValue` | `string \| null` | No | — | The initial highlighted value of the menu item when rendered. Use when you don't need to control the highlighted value of the menu item. |
| `highlightedValue` | `string \| null` | No | — | The controlled highlighted value of the menu item. |
| `onHighlightChange` | `((details: HighlightChangeDetails) => void)` | No | — | Function called when the highlighted menu item changes. |
| `onSelect` | `((details: SelectionDetails) => void)` | No | — | Function called when a menu item is selected. |
| `anchorPoint` | `Point \| null` | No | — | The positioning point for the menu. Can be set by the context menu trigger or the button trigger. |
| `loopFocus` | `boolean` | No | `false` | Whether to loop the keyboard navigation. |
| `positioning` | `PositioningOptions` | No | — | The options used to dynamically position the menu |
| `closeOnSelect` | `boolean` | No | `true` | Whether to close the menu when an option is selected |
| `open` | `boolean` | No | — | The controlled open state of the menu |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | Function called when the menu opens or closes |
| `defaultOpen` | `boolean` | No | — | The initial open state of the menu when rendered. Use when you don't need to control the open state of the menu. |
| `typeahead` | `boolean` | No | `true` | Whether the pressing printable characters should trigger typeahead navigation |
| `composite` | `boolean` | No | `true` | Whether the menu is a composed with other composite widgets like a combobox or tabs |
| `navigate` | `((details: NavigateDetails) => void) \| null` | No | — | Function to navigate to the selected item if it's an anchor element |
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

### Menu.Arrow (primitive)

The arrow primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="arrow"]`

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

### Menu.ArrowTip (primitive)

The arrow tip primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="arrow-tip"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Menu.Content (primitive)

The content primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="content"]`

Keyboard: `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`, `Enter`, `Space`, `Home`, `End`

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
| `data-nested` | menu. |
| `data-has-nested` | menu. |

| CSS variable | Description |
| --- | --- |
| `--layer-index` | The index of the dismissable in the layer stack. |
| `--nested-layer-count` | The number of nested menus. |

### Menu.ContextTrigger (primitive)

The context trigger primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="context-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-ownedby` | Set by the component |
| `data-value` | The value of the item. |
| `data-current` | Present when current. |
| `data-state` | `"open"` \| `"closed"` |

### Menu.Indicator (primitive)

The indicator primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |

### Menu.Item (primitive)

The item primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | The unique value of the menu item option. |
| `disabled` | `boolean` | No | — | Whether the menu item is disabled |
| `valueText` | `string` | No | — | The textual value of the option. Used in typeahead navigation of the menu. If not provided, the text content of the menu item will be used. |
| `closeOnSelect` | `boolean` | No | — | Whether the menu should be closed when the option is selected. |
| `onSelect` | `VoidFunction` | No | — | The function to call when the item is selected |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-ownedby` | Set by the component |
| `data-highlighted` | Present when highlighted. |
| `data-value` | The value of the item. |
| `data-valuetext` | The human-readable value. |
| `data-close-on-select` | Set by the component |

### Menu.ItemGroup (primitive)

The item group primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="item-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The `id` of the element that provides accessibility label to the option group |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Menu.ItemGroupLabel (primitive)

The item group label primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="item-group-label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Menu.ItemIndicator (primitive)

The item indicator primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="item-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-highlighted` | Present when highlighted. |
| `data-state` | `"checked"` |

### Menu.ItemText (primitive)

The item text primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="item-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-highlighted` | Present when highlighted. |
| `data-state` | `"checked"` |

### Menu.Positioner (primitive)

The positioner primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="positioner"]`

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

### Menu.Separator (primitive)

The separator primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="separator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Menu.Trigger (primitive)

The trigger primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="trigger"]`

Keyboard: `ArrowDown`, `ArrowUp`, `Enter`, `Space`

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
| `data-uid` | Mirrors the `id` prop |
| `data-controls` | Set by the component |
| `data-state` | `"open"` \| `"closed"` |
| `data-value` | The value of the item. |
| `data-current` | Present when current. |

### Menu.TriggerItem (primitive)

The trigger item primitive part of the Menu component.

Selector: `[data-scope="menu"][data-part="trigger-item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Menu.CheckboxItem (primitive)

The checkbox item primitive part of the Menu component, styled with the `item` slot.

Selector: `[data-scope="menu"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | The value of the option |
| `disabled` | `boolean` | No | — | Whether the menu item is disabled |
| `valueText` | `string` | No | — | The textual value of the option. Used in typeahead navigation of the menu. If not provided, the text content of the menu item will be used. |
| `closeOnSelect` | `boolean` | No | — | Whether the menu should be closed when the option is selected. |
| `checked` | `boolean` | Yes | — | Whether the option is checked |
| `onCheckedChange` | `((checked: boolean) => void)` | No | — | Function called when the option state is changed |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-ownedby` | Set by the component |
| `data-highlighted` | Present when highlighted. |
| `data-value` | The value of the item. |
| `data-valuetext` | The human-readable value. |
| `data-close-on-select` | Set by the component |

### Menu.RadioItemGroup (primitive)

The radio item group primitive part of the Menu component, styled with the `itemGroup` slot.

Selector: `[data-scope="menu"][data-part="item-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — |  |
| `value` | `string` | No | — |  |
| `onValueChange` | `((e: ValueChangeDetails) => void)` | No | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Menu.RadioItem (primitive)

The radio item primitive part of the Menu component, styled with the `item` slot.

Selector: `[data-scope="menu"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | The value of the option |
| `disabled` | `boolean` | No | — | Whether the menu item is disabled |
| `valueText` | `string` | No | — | The textual value of the option. Used in typeahead navigation of the menu. If not provided, the text content of the menu item will be used. |
| `closeOnSelect` | `boolean` | No | — | Whether the menu should be closed when the option is selected. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-ownedby` | Set by the component |
| `data-highlighted` | Present when highlighted. |
| `data-value` | The value of the item. |
| `data-valuetext` | The human-readable value. |
| `data-close-on-select` | Set by the component |

### Menu.RootProvider (primitive)

Provides the Menu context and recipe variants to its parts, from state created with `useMenu()`. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UseMenuReturn` | Yes | — |  |
| `present` | `boolean` | No | — | Whether the node is present (controlled by the user) |
| `onExitComplete` | `VoidFunction` | No | — | Function called when the animation ends in the closed state |
| `onEnterComplete` | `VoidFunction` | No | — | Function called when the animation ends in the open state |
| `immediate` | `boolean` | No | — | Whether to synchronize the present change immediately or defer it to the next frame |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `skipAnimationOnMount` | `boolean` | No | `false` | Whether to allow the initial presence animation. |
| `children` | `ReactNode` | No | — |  |

### Menu.Context (primitive)

Exposes the Menu state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseMenuContext) => ReactNode` | Yes | — |  |

### Menu.ItemContext (primitive)

Exposes the Menu item state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseMenuItemContext) => ReactNode` | Yes | — |  |

## Accessibility

Follows the [Menu Button WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/).

| Key | Description |
| --- | --- |
| `Space` | Activates/Selects the highlighted item. |
| `Enter` | Activates/Selects the highlighted item. |
| `ArrowDown` | Highlights the next item in the menu. |
| `ArrowUp` | Highlights the previous item in the menu. |
| `ArrowRight` | <span>When focus is on trigger, opens or closes the submenu depending on reading direction.</span>. |
| `ArrowLeft` | <span>When focus is on trigger, opens or closes the submenu depending on reading direction.</span>. |
| `Escape` | Closes the menu and moves focus to the trigger. |
| `Home` | Highlights the first item in the menu. |
| `End` | Highlights the last item in the menu. |
