# Tabs API reference

The Tabs component is used to create a tabbed interface. It organizes related content into panels that share the same space, showing one panel at a time while the tab list lets users switch between them.

Use `Tabs.ListGroup` for a tab list that renders the active tab indicator for you, or compose the primitives for full structural control. It supports different palettes, a vertical orientation, and placing the indicator at the start or end edge of the list.

Import: `import { Tabs } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Tabs` or `Tabs.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `palette` | `'action'` \| `'secondaryAction'` | `'action'` |
| `indicatorPlacement` | `'start'` \| `'end'` | `'end'` |

## Parts

### Tabs.ListGroup (abstraction)

An abstraction that renders the tab list with the active tab indicator

Also accepts all props of `Tabs.List`.

### Tabs.Root (primitive)

The root container of the Tabs component.

Selector: `[data-scope="tabs"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'secondaryAction'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `indicatorPlacement` | `'start' \| 'end'` | No | `'end'` | PandaCSS recipe variant for indicatorPlacement. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the tabs. Useful for composition. |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `loopFocus` | `boolean` | No | `true` | Whether the keyboard navigation will loop from last tab to first, and vice versa. |
| `value` | `string \| null` | No | — | The controlled selected tab value |
| `defaultValue` | `string \| null` | No | `null` | The initial selected tab value when rendered. Use when you don't need to control the selected tab value. |
| `orientation` | `"horizontal" \| "vertical"` | No | `"horizontal"` | The orientation of the tabs. Can be `horizontal` or `vertical` - `horizontal`: only left and right arrow key navigation will work. - `vertical`: only up and down arrow key navigation will work. |
| `activationMode` | `"manual" \| "automatic"` | No | `"automatic"` | The activation mode of the tabs. Can be `manual` or `automatic` - `manual`: Tabs are activated when clicked or press `enter` key. - `automatic`: Tabs are activated when receiving focus |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Callback to be called when the selected/active tab changes |
| `onFocusChange` | `((details: FocusChangeDetails) => void)` | No | — | Callback to be called when the focused tab changes |
| `composite` | `boolean` | No | `true` | Whether the tab is composite |
| `deselectable` | `boolean` | No | — | Whether the active tab can be deselected when clicking on it. |
| `navigate` | `((details: NavigateDetails) => void) \| null` | No | — | Function to navigate to the selected tab when clicking on it. Useful if tab triggers are anchor elements. |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-focus` | Present when focused. |

### Tabs.List (primitive)

The list primitive part of the Tabs component.

Selector: `[data-scope="tabs"][data-part="list"]`

Keyboard: `ArrowDown`, `ArrowUp`, `ArrowLeft`, `ArrowRight`, `Home`, `End`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-focus` | Present when focused. |
| `data-orientation` | Mirrors the `orientation` prop |

### Tabs.Trigger (primitive)

The trigger primitive part of the Tabs component.

Selector: `[data-scope="tabs"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | The value of the tab |
| `disabled` | `boolean` | No | — | Whether the tab is disabled |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-disabled` | Present when disabled. |
| `data-value` | The value of the item. |
| `data-selected` | Present when selected. |
| `data-focus` | Present when focused. |
| `data-ownedby` | Set by the component |
| `data-ssr` | Present when not rendered in the browser. Useful for ssr styling. |

### Tabs.Content (primitive)

The content primitive part of the Tabs component.

Selector: `[data-scope="tabs"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | The value of the tab |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-ownedby` | Set by the component |
| `data-selected` | Present when selected. |
| `data-orientation` | Mirrors the `orientation` prop |

### Tabs.Indicator (primitive)

The indicator primitive part of the Tabs component.

Selector: `[data-scope="tabs"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

| CSS variable | Description |
| --- | --- |
| `--transition-property` | The transition property value for the Indicator. |
| `--left` | The left position value. |
| `--top` | The top position value. |
| `--width` | The width of the element. |
| `--height` | The height of the element. |

### Tabs.RootProvider (primitive)

The root container of the Tabs component, driven by state created with `useTabs()`.

Selector: `[data-scope="tabs"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'secondaryAction'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `indicatorPlacement` | `'start' \| 'end'` | No | `'end'` | PandaCSS recipe variant for indicatorPlacement. |
| `value` | `UseTabsReturn` | Yes | — |  |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-focus` | Present when focused. |

### Tabs.Context (primitive)

Exposes the Tabs state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseTabsContext) => ReactNode` | Yes | — |  |

## Context API

`Tabs.Context` and `useTabs()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `value` | `string \| null` | The current value of the tabs. |
| `focusedValue` | `string \| null` | The value of the tab that is currently focused. |
| `setValue` | `(value: string) => void` | Sets the value of the tabs. |
| `clearValue` | `VoidFunction` | Clears the value of the tabs. |
| `setIndicatorRect` | `(value: string) => void` | Sets the indicator rect to the tab with the given value. |
| `syncTabIndex` | `VoidFunction` | Synchronizes the tab index of the content element. Useful when rendering tabs within a select or combobox. |
| `focus` | `VoidFunction` | Set focus on the selected tab trigger. |
| `selectNext` | `(fromValue?: string) => void` | Selects the next tab. |
| `selectPrev` | `(fromValue?: string) => void` | Selects the previous tab. |
| `getTriggerState` | `(props: TriggerProps) => TriggerState` | Returns the state of the trigger with the given props. |

## Accessibility

Follows the [Tabs WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

| Key | Description |
| --- | --- |
| `Tab` | When focus moves onto the tabs, focuses the active trigger. When a trigger is focused, moves focus to the active content. |
| `ArrowDown` | Moves focus to the next trigger in vertical orientation and activates its associated content. |
| `ArrowRight` | Moves focus to the next trigger in horizontal orientation and activates its associated content. |
| `ArrowUp` | Moves focus to the previous trigger in vertical orientation and activates its associated content. |
| `ArrowLeft` | Moves focus to the previous trigger in horizontal orientation and activates its associated content. |
| `Home` | Moves focus to the first trigger and activates its associated content. |
| `End` | Moves focus to the last trigger and activates its associated content. |
| `Enter` | In manual mode, when a trigger is focused, moves focus to its associated content. |
| `Space` | In manual mode, when a trigger is focused, moves focus to its associated content. |
