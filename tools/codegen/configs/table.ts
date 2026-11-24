import { defineComponent } from '../manifest'

export const tableConfig = defineComponent({
  key: 'table',
  // The v1 `TableParts` names, so `data-part` keeps its v1 values. Each part
  // renders the native element of a `table` recipe slot: header → thead,
  // headerCol → th, body → tbody, row → tr, cell → td, footer → tfoot
  anatomy: [
    'root',
    'table',
    'caption',
    'header',
    'headerCol',
    'body',
    'row',
    'cell',
    'footer',
    'trigger',
  ],
  parts: {
    root: {
      description:
        'The bordered `<div>` around the table; provides the recipe variants to every part.',
    },
    table: { description: 'The `<table>` element.' },
    caption: { description: 'The `<caption>` element.' },
    header: { description: 'The `<thead>` element.' },
    headerCol: { description: 'A `<th>` header cell.' },
    body: { description: 'The `<tbody>` element.' },
    row: { description: 'A `<tr>` row.' },
    cell: { description: 'A `<td>` data cell.' },
    footer: { description: 'The `<tfoot>` element.' },
    trigger: {
      description:
        'A `<button>` for interactive header cells, e.g. a sortable column.',
    },
  },
  types: [
    'TableRootProps',
    'TableTableProps',
    'TableCaptionProps',
    'TableHeaderProps',
    'TableHeaderColProps',
    'TableBodyProps',
    'TableRowProps',
    'TableCellProps',
    'TableFooterProps',
    'TableTriggerProps',
  ],
  description: `
The Table component displays tabular data with native table semantics: each part renders the matching HTML table element (\`<table>\`, \`<caption>\`, \`<thead>\`, \`<th>\`, \`<tbody>\`, \`<tr>\`, \`<td>\`, \`<tfoot>\`) inside a styled container.

Set the \`size\` and \`decoration\` variants on \`<Table>\` (or \`Table.Root\`); they cascade to every part. \`Table.Trigger\` renders a button inside a \`Table.HeaderCol\` for clickable (e.g. sortable) columns.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'table',
      description:
        'An abstraction rendering `Table.Root` and `Table.Table` with a `caption` and an optional `sticky` header',
      types: ['TableProps'],
      isDefaultExport: true,
    },
  ],
  a11y: {
    pattern: 'Table',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/table/',
    notes: [
      'Give every table a `caption` (or a `Table.Caption` child); it names the table for assistive technology and is visually hidden by the recipe.',
      'Set `scope="col"` (or `scope="row"`) on `Table.HeaderCol` so header cells are associated with their data cells.',
      'For a sortable column, set `aria-sort` (`ascending`, `descending` or `none`) on the `Table.HeaderCol` that holds the `Table.Trigger`, and update it when the order changes; the trigger itself is a plain `type="button"`.',
    ],
  },
})
