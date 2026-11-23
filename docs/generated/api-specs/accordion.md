# Accordion API reference

The Accordion component is a versatile UI element that allows users to expand and collapse sections of content. It is composed of several primitives that enable customization and flexibility in its usage.

The Accordion component can be used in various contexts, such as displaying FAQs, menus, or any other content that benefits from a collapsible structure. It supports different palettes and usage styles to match the design requirements of your application.

Import: `import { Accordion } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Accordion` or `Accordion.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'lg'` | `'lg'` |

## Parts

### Accordion.ItemGroup (abstraction)

An abstraction for rendering all the content-related primitives.

Also accepts all props of `Accordion.Item`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `heading` | `ReactNode` | No | — | The heading content displayed inside the accordion trigger. |
| `indicatorPosition` | `'start' \| 'end'` | No | `'end'` | The position of the indicator icon relative to the heading. |

### Accordion.Root (primitive)

The root container of the Accordion component.

Selector: `[data-scope="accordion"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the accordion. Useful for composition. |
| `multiple` | `boolean` | No | `false` | Whether multiple accordion items can be expanded at the same time. |
| `collapsible` | `boolean` | No | `false` | Whether an accordion item can be closed after it has been expanded. |
| `value` | `string[]` | No | — | The controlled value of the expanded accordion items. |
| `defaultValue` | `string[]` | No | `[]` | The initial value of the expanded accordion items. Use when you don't need to control the value of the accordion. |
| `disabled` | `boolean` | No | — | Whether the accordion items are disabled |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | The callback fired when the state of expanded/collapsed accordion items changes. |
| `onFocusChange` | `((details: FocusChangeDetails) => void)` | No | — | The callback fired when the focused accordion item changes. |
| `orientation` | `"horizontal" \| "vertical"` | No | `"vertical"` | The orientation of the accordion items. |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

### Accordion.Item (primitive)

The item primitive part of the Accordion component.

Selector: `[data-scope="accordion"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `string` | Yes | — | The value of the accordion item. |
| `disabled` | `boolean` | No | — | Whether the accordion item is disabled. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-focus` | Present when focused. |
| `data-disabled` | Present when disabled. |
| `data-orientation` | Mirrors the `orientation` prop |

### Accordion.ItemTrigger (primitive)

The item trigger primitive part of the Accordion component.

Selector: `[data-scope="accordion"][data-part="item-trigger"]`

Keyboard: `ArrowDown`, `ArrowUp`, `ArrowRight`, `ArrowLeft`, `Home`, `End`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-controls` | Set by the component |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-state` | `"open"` \| `"closed"` |
| `data-focus` | Present when focused. |
| `data-ownedby` | Set by the component |

### Accordion.ItemContent (primitive)

The item content primitive part of the Accordion component.

Selector: `[data-scope="accordion"][data-part="item-content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |
| `data-focus` | Present when focused. |
| `data-orientation` | Mirrors the `orientation` prop |

### Accordion.ItemIndicator (primitive)

The item indicator primitive part of the Accordion component.

Selector: `[data-scope="accordion"][data-part="item-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |
| `data-focus` | Present when focused. |
| `data-orientation` | Mirrors the `orientation` prop |

### Accordion.RootProvider (primitive)

The root container of the Accordion component, driven by state created with `useAccordion()`.

Selector: `[data-scope="accordion"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'lg'` | No | `'lg'` | PandaCSS recipe variant for size. |
| `value` | `UseAccordionReturn` | Yes | — |  |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

## Accessibility

Follows the [Accordion WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/).

| Key | Description |
| --- | --- |
| `Space` | When focus is on a trigger of a collapsed item, expands the item. |
| `Enter` | When focus is on a trigger of a collapsed item, expands the item. |
| `Tab` | Moves focus to the next focusable element. |
| `Shift + Tab` | Moves focus to the previous focusable element. |
| `ArrowDown` | Moves focus to the next accordion trigger. |
| `ArrowUp` | Moves focus to the previous accordion trigger. |
| `ArrowRight` | When orientation is horizontal, moves focus to the next accordion trigger. |
| `ArrowLeft` | When orientation is horizontal, moves focus to the previous accordion trigger. |
| `Home` | When focus is on a trigger, moves focus to the first trigger. |
| `End` | When focus is on a trigger, moves focus to the last trigger. |
