# Table API reference

The Table component displays tabular data with native table semantics: each part renders the matching HTML table element (`<table>`, `<caption>`, `<thead>`, `<th>`, `<tbody>`, `<tr>`, `<td>`, `<tfoot>`) inside a styled container.

Set the `size` and `decoration` variants on `<Table>` (or `Table.Root`); they cascade to every part. `Table.Trigger` renders a button inside a `Table.HeaderCol` for clickable (e.g. sortable) columns.

Import: `import { Table } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Table` or `Table.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `size` | `'sm'` \| `'md'` \| `'lg'` | `'md'` |
| `decoration` | `'default'` \| `'zebra'` | `'default'` |

## Parts

### Table.El (abstraction)

An abstraction rendering `Table.Root` and `Table.Table` with a `caption` and an optional `sticky` header

Also accepts all props of `Table.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `caption` | `ReactNode` | No | — | An easy to understand description of the table, rendered as its `<caption>`. Required for accessibility unless a `Table.Caption` child is given. |
| `sticky` | `boolean` | No | `false` | If true, the table header will be sticky. |

### Table.Root (primitive)

The bordered `<div>` around the table; provides the recipe variants to every part.

Selector: `[data-scope="table"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `size` | `'sm' \| 'md' \| 'lg'` | No | `'md'` | PandaCSS recipe variant for size. |
| `decoration` | `'default' \| 'zebra'` | No | `'default'` | PandaCSS recipe variant for decoration. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Table (primitive)

The `<table>` element.

Selector: `[data-scope="table"][data-part="table"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Caption (primitive)

The `<caption>` element.

Selector: `[data-scope="table"][data-part="caption"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Header (primitive)

The `<thead>` element.

Selector: `[data-scope="table"][data-part="header"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.HeaderCol (primitive)

A `<th>` header cell.

Selector: `[data-scope="table"][data-part="header-col"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Body (primitive)

The `<tbody>` element.

Selector: `[data-scope="table"][data-part="body"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Row (primitive)

A `<tr>` row.

Selector: `[data-scope="table"][data-part="row"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Cell (primitive)

A `<td>` data cell.

Selector: `[data-scope="table"][data-part="cell"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Footer (primitive)

The `<tfoot>` element.

Selector: `[data-scope="table"][data-part="footer"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Table.Trigger (primitive)

A `<button>` for interactive header cells, e.g. a sortable column.

Selector: `[data-scope="table"][data-part="trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

## Accessibility

Follows the [Table WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/).

Give every table a `caption` (or a `Table.Caption` child); it names the table for assistive technology and is visually hidden by the recipe.

Set `scope="col"` (or `scope="row"`) on `Table.HeaderCol` so header cells are associated with their data cells.

For a sortable column, set `aria-sort` (`ascending`, `descending` or `none`) on the `Table.HeaderCol` that holds the `Table.Trigger`, and update it when the order changes; the trigger itself is a plain `type="button"`.
