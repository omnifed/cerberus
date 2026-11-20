# Pagination API reference

The Pagination component lets users navigate between the pages of a data set.

Use the default `<Pagination>` to render the previous and next triggers around one button per page (with ellipses), or pass `compact` to show "page of total" text between the triggers instead. Non-part children render inside the root, where `usePaginationContext()` reads the state, e.g. to `slice()` your data. Compose `Pagination.ItemList`, `Pagination.CompactList`, `Pagination.PrevTriggerWithIcon`, `Pagination.NextTriggerWithIcon`, `Pagination.ItemButton` and `Pagination.EllipsisButton` for custom layouts, or the unstyled primitives for full structural control: every part accepts Panda style props, `css` and `asChild`.

Import: `import { Pagination } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Pagination.El (abstraction)

An abstraction that renders the previous and next triggers around the page items and ellipses, or "page of total" text with `compact`

Also accepts all props of `Pagination.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `page` | `ArkPaginationRootProps['page']` | No | — | The controlled active page. |
| `compact` | `boolean` | No | `false` | Display a compact layout of only text information and triggers. |
| `layout` | `GroupProps['layout']` | No | `'default'` | The layout of the button group. |

### Pagination.ItemList (abstraction)

An abstraction that renders a Group of the previous trigger, one button per page or ellipsis, and the next trigger

Also accepts all props of `Group.Root` (group).

### Pagination.CompactList (abstraction)

An abstraction that renders a Group of the previous trigger, "page of total" text, and the next trigger

Also accepts all props of `Group.Root` (group).

### Pagination.PrevTriggerWithIcon (abstraction)

An abstraction of the previous trigger rendered as a square IconButton with the Cerberus `calendarPrev` icon

Also accepts all props of `Pagination.PrevTrigger`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `"action" \| "secondaryAction" \| "info" \| "success" \| "warning" \| "danger"` | No | — |  |
| `usage` | `"ghost" \| "filled" \| "outlined" \| "outlined-subtle"` | No | — |  |
| `shape` | `"square" \| "circle"` | No | — |  |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | No | — |  |
| `layout` | `GroupProps['layout']` | No | `'default'` | The layout of the Group the trigger renders in. `attached` renders an `outlined-subtle` IconButton so it matches the attached items. |

### Pagination.NextTriggerWithIcon (abstraction)

An abstraction of the next trigger rendered as a square IconButton with the Cerberus `calendarNext` icon

Also accepts all props of `Pagination.NextTrigger`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `"action" \| "secondaryAction" \| "info" \| "success" \| "warning" \| "danger"` | No | — |  |
| `usage` | `"ghost" \| "filled" \| "outlined" \| "outlined-subtle"` | No | — |  |
| `shape` | `"square" \| "circle"` | No | — |  |
| `size` | `"xs" \| "sm" \| "md" \| "lg"` | No | — |  |
| `layout` | `GroupProps['layout']` | No | `'default'` | The layout of the Group the trigger renders in. `attached` renders an `outlined-subtle` IconButton so it matches the attached items. |

### Pagination.ItemButton (abstraction)

An abstraction of the item rendered as an outlined-subtle Button that shows its page number

Also accepts all props of `Pagination.Item`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `"action" \| "secondaryAction" \| "info" \| "success" \| "warning" \| "danger"` | No | — |  |
| `usage` | `"ghost" \| "outlined" \| "outlined-subtle" \| "filled"` | No | — |  |
| `shape` | `"hard" \| "squared" \| "sharp" \| "rounded"` | No | — |  |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | No | — |  |

### Pagination.EllipsisButton (abstraction)

An abstraction of the ellipsis rendered as an outlined-subtle Button that shows "…"

Also accepts all props of `Pagination.Ellipsis`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `"action" \| "secondaryAction" \| "info" \| "success" \| "warning" \| "danger"` | No | — |  |
| `usage` | `"ghost" \| "outlined" \| "outlined-subtle" \| "filled"` | No | — |  |
| `shape` | `"hard" \| "squared" \| "sharp" \| "rounded"` | No | — |  |
| `size` | `"xs" \| "sm" \| "md" \| "lg" \| "xl" \| "2xl"` | No | — |  |

### Pagination.Root (primitive)

The root container of the Pagination component.

Selector: `[data-scope="pagination"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the accordion. Useful for composition. |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `count` | `number` | No | `1` | Total number of data items |
| `pageSize` | `number` | No | — | The controlled number of data items per page |
| `defaultPageSize` | `number` | No | `10` | The initial number of data items per page when rendered. Use when you don't need to control the page size of the pagination. |
| `siblingCount` | `number` | No | `1` | Number of pages to show beside active page |
| `boundaryCount` | `number` | No | `1` | Number of pages to show at the beginning and end |
| `page` | `number` | No | — | The controlled active page |
| `defaultPage` | `number` | No | `1` | The initial active page when rendered. Use when you don't need to control the active page of the pagination. |
| `onPageChange` | `((details: PageChangeDetails) => void)` | No | — | Called when the page number is changed |
| `onPageSizeChange` | `((details: PageSizeChangeDetails) => void)` | No | — | Called when the page size is changed |
| `type` | `"button" \| "link"` | No | `"button"` | The type of the trigger element |
| `getPageUrl` | `((details: PageUrlDetails) => string)` | No | — | Function to generate href attributes for pagination links. Only used when `type` is set to "link". |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Pagination.Item (primitive)

The item primitive part of the Pagination component.

Selector: `[data-scope="pagination"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `type` | `"page"` | Yes | — |  |
| `value` | `number` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-index` | The index of the item. |
| `data-selected` | Present when selected. |

### Pagination.Ellipsis (primitive)

The ellipsis primitive part of the Pagination component.

Selector: `[data-scope="pagination"][data-part="ellipsis"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Pagination.FirstTrigger (primitive)

The first-trigger primitive part of the Pagination component.

Selector: `[data-scope="pagination"][data-part="first-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |

### Pagination.PrevTrigger (primitive)

The prev-trigger primitive part of the Pagination component.

Selector: `[data-scope="pagination"][data-part="prev-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |

### Pagination.NextTrigger (primitive)

The next-trigger primitive part of the Pagination component.

Selector: `[data-scope="pagination"][data-part="next-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |

### Pagination.LastTrigger (primitive)

The last-trigger primitive part of the Pagination component.

Selector: `[data-scope="pagination"][data-part="last-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |

### Pagination.RootProvider (primitive)

The root container of the Pagination component, driven by state created with `usePagination()`.

Selector: `[data-scope="pagination"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UsePaginationReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Pagination.Context (primitive)

Exposes the Pagination state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UsePaginationContext) => ReactNode` | Yes | — |  |
