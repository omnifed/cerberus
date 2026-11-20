---
'@cerberus-design/react': major
---

RadioGroup, Rating, CircularProgress and Combobox now use the v2.1 compound API. `<RadioGroup>` is `RadioGroup.Root`, as before; `<Rating>`, `<CircularProgress>` and `<Combobox>` still render the same ready-made component (also available as `.El`).

Silent behavior changes (these compile unchanged):

- **RadioGroup: `size` on the group now reaches every radio.** In v1 it only sized the group, and each `<Radio>` needed its own `size`. A `size` on a single `<Radio>` still overrides the group's for that radio.
- **Rating: `<Rating>` now renders `Rating.HiddenInput`**, so `name` and `form` submit the value with a form.
- Rating: `children` is optional and defaults to Cerberus star icons (a half star when `half`). `label` accepts a `ReactNode`.
- CircularProgress: `CircularProgress.InfoGroup` now carries `data-scope="progress"` and `data-part="info-group"`.
- **Combobox: `useStatefulCollection` filters the initial items on every input change.** In v1 it filtered the last result, so editing a query (not only extending it) never brought back items the previous query excluded. Clearing the input also resets `filterChars`.
- Combobox: `size` reaches the content through the recipe context instead of an explicit prop on `Combobox.Content`.
- `<Rating>`, `<CircularProgress>` and `<Combobox>` treat direct part children (e.g. `<Rating.Label>`, `<CircularProgress.Label>`, `<Combobox.Input>`) as overrides of that part. Other children of `<CircularProgress>` render in the info group, after the label.

Breaking changes:

- **Combobox: `ComboItemWithIndicator` → `Combobox.ItemWithIndicator`, `ComboItemGroup` → `Combobox.ItemGroupWithLabel` (`ComboItemGroupProps` → `ComboboxItemGroupWithLabelProps`), `ComboItemText` → `Combobox.ItemText`.**
- Combobox: `ComboboxContextProps` is no longer generic. `ComboboxRootProps` and `ComboboxProps` are generic over Ark's `CollectionItem` (default `CollectionItem`) instead of being fixed to `SelectCollectionItem`. `StatefulCollectionReturn['collection']` is typed `ListCollection<SelectCollectionItem>`.
- **CircularProgress: `bgStyle` is removed** (it had no effect). Use `usage="transparent"` to remove the center fill.
- **Rating: `Rating.Item` no longer takes `palette`;** set it on `Rating.Root` (or `<Rating>`), which provides it to every item.
- Rating: `RatingGroupControlProps`, `RatingGroupItemProps`, `RatingGroupContextProps`, `RatingGroupItemContextProps` and `RatingGroupHiddenInputProps` → `RatingControlProps`, `RatingItemProps`, `RatingContextProps`, `RatingItemContextProps` and `RatingHiddenInputProps`.
- The standalone part exports are removed; use the compound members instead.
  - `RadioGroupRoot`, `RadioGroupLabel`, `RadioGroupIndicator`, `RadioGroupItem`, `RadioGroupItemText`, `RadioGroupItemControl`, `RadioGroupItemHiddenInput` → `RadioGroup.Root`, `.Label`, … `.ItemHiddenInput`
  - `RatingRoot`, `RatingLabel`, `RatingControl`, `RatingItem`, `RatingContext`, `RatingItemContext`, `RatingHiddenInput` → `Rating.Root`, … `.HiddenInput`
  - `CircularProgressRoot`, `CircularProgressLabel`, `CircularProgressValueText`, `CircularProgressCircle`, `CircularProgressCircleTrack`, `CircularProgressCircleRange`, `CircularProgressInfoGroup` → `CircularProgress.Root`, … `.InfoGroup`
  - `ComboboxRoot`, `ComboboxLabel`, `ComboboxControl`, `ComboboxInput`, `ComboboxTrigger`, `ComboboxClearTrigger`, `ComboboxPositioner`, `ComboboxContent`, `ComboboxItemGroup`, `ComboboxItemGroupLabel`, `ComboboxItem`, `ComboboxItemText`, `ComboboxItemIndicator`, `ComboboxStartIcon`, `ComboboxContext` → `Combobox.Root`, … `.Context`
- `RadioParts`, `RatingParts` and `ComboboxParts` are removed; the compound object replaces them.
- Recipe variants are set on Root and reach every part through context; individual parts no longer accept them.
- Ark's raw `RatingGroupRootProvider` is no longer re-exported (it provides no Cerberus recipe context): use `Rating.RootProvider`. `useRatingGroup` is still exported.

New:

- `RadioGroup.RootProvider`, `Rating.RootProvider`, `CircularProgress.RootProvider` and `Combobox.RootProvider` provide the recipe for `useX()` state; `X.Context` render props on all four, plus `RadioGroup.ItemContext`, `Rating.ItemContext` and `Combobox.ItemContext`.
- `RadioGroup.Radio` (also exported as `Radio`), `CircularProgress.View`, `Combobox.List` and `Combobox.Empty`.
- `Rating` exports a `RatingItemRenderer` type for its render function child.
