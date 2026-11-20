---
'@cerberus-design/react': major
---

Text, Group, Spinner and Table now use the v2.1 API. `<Text>`, `<Group>` and `<Spinner>` render what they rendered in v1; `Table` becomes a renderable `<Table>` compound.

Silent behavior changes (these compile unchanged):

- **`Table.Root` is now the bare container `<div>`.** In v1 it rendered the container, the `<table>`, the caption and `data-sticky`; that is now `<Table>` (also `Table.El`). `<Table.Root>` without `caption`/`sticky` still compiles but renders no `<table>`: switch to `<Table>`.
- **Table parts read `size`/`decoration` from a `<Table>`/`Table.Root`** and throw outside one. `size` on another part is now Panda's `size` style utility (width and height); v1 dropped it.
- **`Table.Trigger` defaults to `type="button"`**, so it no longer submits a surrounding form.
- `Group` renders `data-scope="group"` and `data-part="root"`; Table parts render `data-slot` next to their unchanged `data-part`.
- `Spinner` passes extra props through to its `<svg>` (style props, SVG attributes such as `aria-label`); an explicit `width`/`height` overrides `size`. It renders an empty `class` attribute when unstyled.
- `TextProps['as']` without a type argument is `'p' | undefined` (`TextProps` is generic over the element); use `Headings | TextElements` for the full list.

Breaking changes:

- **`TextProps` now carries every style prop and the HTML attributes of the `as` element** (it had collapsed to `{ as? }`, so anything was accepted). Props that are invalid for the element fail to compile. `TextProps` is a type alias, so it can no longer be augmented with declaration merging.
- Table: `TableParts`, `TablePartsValue` and the standalone parts are removed: `TableRoot`, `TableEl`, `Caption`, `Thead`, `Th`, `Tbody`, `Tr`, `Td`, `Tfoot`, `TableTrigger` → `Table.Root`, `Table.Table`, `Table.Caption`, `Table.Header`, `Table.HeaderCol`, `Table.Body`, `Table.Row`, `Table.Cell`, `Table.Footer`, `Table.Trigger`. Their props types are renamed to `Table<Part>Props` (`TableRootElProps` → `TableProps`); `caption` is optional and accepts a `ReactNode`.
- `Theme`'s props are `<div>` props (they were typed as `<button>` props while it renders a `<div>`).

New:

- `Text.Root`, `Group.Root`, `Spinner.Root` and the `Table.Table` part; `TextRootProps`, `GroupRootProps` and `SpinnerRootProps`.
