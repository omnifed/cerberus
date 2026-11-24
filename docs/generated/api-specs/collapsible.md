# Collapsible API reference

The Collapsible component is used to expand and collapse additional content. It allows you to show or hide content with a trigger, and is useful for accordions, dropdowns, and expandable sections.

It supports an initial open state, a partial collapsed height to preview the content, and different open/close effects on the content.

Import: `import { Collapsible } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Collapsible` or `Collapsible.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `effect` | `'none'` \| `'expandIn'` \| `'fade'` | `'expandIn'` |

## Parts

### Collapsible.Root (primitive)

The root container of the Collapsible component.

Selector: `[data-scope="collapsible"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `effect` | `'none' \| 'expandIn' \| 'fade'` | No | `'expandIn'` | PandaCSS recipe variant for effect. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the collapsible. Useful for composition. |
| `open` | `boolean` | No | — | The controlled open state of the collapsible. |
| `defaultOpen` | `boolean` | No | — | The initial open state of the collapsible when rendered. Use when you don't need to control the open state of the collapsible. |
| `onOpenChange` | `((details: OpenChangeDetails) => void)` | No | — | The callback invoked when the open state changes. |
| `onExitComplete` | `VoidFunction` | No | — | The callback invoked when the exit animation completes. |
| `disabled` | `boolean` | No | — | Whether the collapsible is disabled. |
| `collapsedHeight` | `number \| string` | No | — | The height of the content when collapsed. |
| `collapsedWidth` | `number \| string` | No | — | The width of the content when collapsed. |
| `lazyMount` | `boolean` | No | `false` | Whether to enable lazy mounting |
| `unmountOnExit` | `boolean` | No | `false` | Whether to unmount on exit. |
| `hideMode` | `HideMode` | No | `'display-none'` | How to hide content when mounted but not present. - `'display-none'`: HTML `hidden` attribute. Effects stay alive. - `'activity'`: React 19 `<Activity mode="hidden">`. Effects pause. Requires React 19+. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |

### Collapsible.Trigger (primitive)

The trigger primitive part of the Collapsible component.

Selector: `[data-scope="collapsible"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |

### Collapsible.Content (primitive)

The content primitive part of the Collapsible component.

Selector: `[data-scope="collapsible"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-collapsible` | `""` |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |
| `data-has-collapsed-size` | Present when the content has collapsed width or height. |

| CSS variable | Description |
| --- | --- |
| `--height` | The height of the element. |
| `--width` | The width of the element. |
| `--collapsed-height` | The height of the Content. |
| `--collapsed-width` | The width of the Content. |

### Collapsible.Indicator (primitive)

The indicator primitive part of the Collapsible component.

Selector: `[data-scope="collapsible"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |
| `data-disabled` | Present when disabled. |

### Collapsible.RootProvider (primitive)

The root container of the Collapsible component, driven by state created with `useCollapsible()`.

Selector: `[data-scope="collapsible"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `effect` | `'none' \| 'expandIn' \| 'fade'` | No | `'expandIn'` | PandaCSS recipe variant for effect. |
| `value` | `UseCollapsibleReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"open"` \| `"closed"` |

## Context API

`useCollapsible()` and `useCollapsibleContext()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `open` | `boolean` | Whether the collapsible is open. |
| `visible` | `boolean` | Whether the collapsible is visible (open or closing). |
| `disabled` | `boolean` | Whether the collapsible is disabled. |
| `setOpen` | `(open: boolean) => void` | Function to open or close the collapsible. |
| `measureSize` | `VoidFunction` | Function to measure the size of the content. |

## Accessibility

| Key | Description |
| --- | --- |
| `Space` | Opens/closes the collapsible. |
| `Enter` | Opens/closes the collapsible. |
