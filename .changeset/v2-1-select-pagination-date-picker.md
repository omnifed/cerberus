---
'@cerberus-design/react': major
---

Select, Pagination and DatePicker now use the v2.1 compound API. `<Select>`, `<Pagination>` and `<DatePicker>` still render the same ready-made component (also available as `.El`).

Silent behavior changes (these compile unchanged):

- **DatePicker: `DatePicker.Input`, `DatePicker.Trigger` and `DatePicker.Content` are now the bare Ark parts.** Renaming v1 `DatePickerInput` to `DatePicker.Input` by name drops the control, the calendar trigger, `maxLength` and the placeholder: use `DatePicker.InputGroup`.
- **DatePicker: the day view marks `data-date="today"`, `"past"` and `"future"` in the user's time zone.** v1 used the UTC date, so near midnight it could mark the wrong day.
- DatePicker: the view control renders Ark's `ViewControl` (`data-part="view-control"`) instead of Ark's `Control` (`data-part="control"`), so `[data-part=control]` selectors only match the input control.
- DatePicker: children of `DatePicker.Calendar`, the day/month/year views and the input groups were ignored (or landed on the `<input>`); part children now override that part and other children render.
- **Select: in a composed `Select.Root size="lg"`, `Select.Content` takes the root's size.** In v1, content without its own `size` was `md`.
- Select: `Option` (`Select.ItemWithIndicator`) takes its default text from the collection's `itemToString` (falling back to `label`) instead of `item.label`, and renders non-part children as the item text (v1 ignored them).
- Select: `OptionGroup` (`Select.ItemGroupWithLabel`) accepts a `label` prop; an `OptionGroupLabel` child is moved to the start of the group.
- Pagination: page and ellipsis buttons get `shape="squared"`. v1 passed `shape="default"`, which matched no recipe value.
- Pagination: children of the previous and next icon triggers replace the icon (v1 ignored them).
- `<Select>`, `<Pagination>`, `DatePicker.Calendar` and the input groups treat direct part children (e.g. `<Select.Trigger>`, `<Pagination.Item>`) as overrides of that part instead of rendering them as extra elements.

Breaking changes:

- **DatePicker: `DatePickerInput` → `DatePicker.InputGroup`, `RangePickerInput` → `DatePicker.RangeInputGroup` (`RangePickerInputProps` → `DatePickerRangeInputGroupProps`, without `index`), `DatePickerCalendar` → `DatePicker.Calendar`, `DatePickerInputEl` → `DatePicker.Input` (`DatePickerInputElProps` → `DatePickerInputProps`).**
- **Pagination: `PrevTrigger` / `NextTrigger` → `Pagination.PrevTriggerWithIcon` / `Pagination.NextTriggerWithIcon` (`TriggerProps` is removed), `ItemList` → `Pagination.ItemList`, `CompactText` → `Pagination.CompactList`.** `Pagination.PrevTrigger` and `Pagination.NextTrigger` are now the bare, unstyled Ark parts. `Pagination.ItemList` and `Pagination.CompactList` read the pagination context instead of taking it spread as props (`<ItemList {...pagination} />` → `<Pagination.ItemList />` inside `Pagination.Root`).
- Select: `Option`, `OptionGroup` and `OptionGroupLabel` are still exported, as aliases of `Select.ItemWithIndicator`, `Select.ItemGroupWithLabel` and `Select.ItemGroupLabel`. `OptionProps` is Ark's item props (`item: any`) instead of redeclaring `item: SelectCollectionItem`.
- Select: `SelectRootProps` and `SelectProps` are generic over Ark's `CollectionItem` (default `CollectionItem`) instead of being fixed to `SelectCollectionItem`.
- DatePicker: `DatePickerViewControl` is Ark's `ViewControl`; `DatePickerClearTriggerProps` is typed from `ClearTrigger` (v1 used `Trigger`'s props).
- The standalone part exports are removed; use the compound members instead.
  - `SelectRoot`, `SelectLabel`, `SelectControl`, `SelectTrigger`, `SelectValueText`, `SelectIndicator`, `SelectClearTrigger`, `SelectPositioner`, `SelectContent`, `SelectItemGroup`, `SelectItemGroupLabel`, `SelectItem`, `SelectItemText`, `SelectItemIndicator`, `SelectHiddenSelect` → `Select.Root`, … `.HiddenSelect`
  - `PaginationRoot`, `PaginationPrevTrigger`, `PaginationNextTrigger`, `PaginationItem`, `PaginationEllipsis`, `PaginationContext`, `PaginationRootProvider` → `Pagination.Root`, … `.RootProvider`
  - `DatePickerRoot`, `DatePickerLabel`, `DatePickerControl`, `DatePickerTrigger`, `DatePickerContent`, `DatePickerPositioner`, `DatePickerClearTrigger`, `DatePickerYearSelect`, `DatePickerMonthSelect`, `DatePickerView`, `DatePickerContext`, `DatePickerViewControl`, `DatePickerPrevTrigger`, `DatePickerNextTrigger`, `DatePickerViewTrigger`, `DatePickerRangeText`, `DatePickerTable`, `DatePickerTableHead`, `DatePickerTableHeader`, `DatePickerTableBody`, `DatePickerTableRow`, `DatePickerTableCell`, `DatePickerTableCellTrigger` → `DatePicker.Root`, … `.TableCellTrigger`
- `SelectParts`, `PaginationParts` and `DatePickerParts` are removed; the compound object replaces them.
- Recipe variants are set on Root and reach every part through context; individual parts (e.g. `Select.Content`) no longer accept them.
- Ark's raw `SelectRootProvider` and `DatePickerRootProvider` are no longer re-exported (they provide no Cerberus recipe context): use `Select.RootProvider` and `DatePicker.RootProvider`. `useSelect` and `useDatePicker` are still exported.

New:

- `Select.RootProvider`, `Pagination.RootProvider` and `DatePicker.RootProvider`; `X.Context` render props on all three, plus `Select.ItemContext`.
- `Select.List`; `Pagination.FirstTrigger`, `Pagination.LastTrigger`, `Pagination.ItemButton` and `Pagination.EllipsisButton`; `DatePicker.IconTrigger`, `DatePicker.ContentGroup`, `DatePicker.DayView`, `DatePicker.MonthView`, `DatePicker.YearView`, `DatePicker.ViewControlGroup`, `DatePicker.ValueText`, `DatePicker.PresetTrigger`, `DatePicker.WeekNumberCell` and `DatePicker.WeekNumberHeaderCell`.
- DatePicker exports `DatePickerDateView`, `DatePickerValueChangeDetails`, `DatePickerOpenChangeDetails`, `DatePickerViewChangeDetails` and `UseDatePickerContext`.
