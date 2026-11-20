---
'@cerberus-design/react': major
---

Field now uses the v2.1 compound API. `<Field>` still renders the same ready-made component (also available as `Field.El`): the label with its required indicator, your control, and the helper text, error text and secondary helper text. `Input` and `Textarea` are still exported.

Silent behavior changes (these compile unchanged):

- **`Field.Label` no longer appends a "(required)" indicator on its own**; only `<Field label>` does. Compose `<Field.RequiredIndicator>(required)</Field.RequiredIndicator>` inside a bare `Field.Label`.
- **`Field.RequiredIndicator` renders Ark's default `*`** instead of "(required)" when it has no children.
- **The Field parts read the recipe from a `Field`** (`<Field>`, `Field.Root` or `Field.RootProvider`) and throw outside one. `Input` (`Field.InputGroup`) and `Textarea` keep working on their own: outside a `Field` they wrap themselves in a `Field.Root`.
- `Field.Label`, `Field.RequiredIndicator`, `Field.HelperText` and `Field.ErrorText` passed as direct children of `<Field>` override that part instead of rendering inline. A `Field.HelperText` child is hidden when the field is invalid, like the `helperText` prop.
- `Field.ErrorText` renders when the field is invalid even without children (v1's `FieldErrorText` rendered nothing).
- `Field.StartIndicator` renders an empty span without children (v1's `FieldStartIndicator` rendered nothing); `Input` only renders it with a `startIcon`.
- The input group's parts carry `data-scope="field"` and `data-part="input-root"`, `"start-indicator"`, `"end-indicator"` or `"status-indicator"`.
- `label`, `errorText` and `secondaryHelperText` on `<Field>` accept a `ReactNode`.

Breaking changes:

- **`Input` is now `Field.InputGroup`** (`FieldInputElProps` is an alias of `FieldInputGroupProps`), with the same `startIcon`, `endIcon` and `size` props. `Field.Input` is the bare Ark input and no longer accepts the `size` variant: set `size` on the `Field` (it cascades) or on `Field.InputGroup`.
- **`Input`'s props are typed.** They resolved to `any` in v1, so values of the wrong type (e.g. `unknown` for `defaultValue`) now fail to compile.
- **`FieldStatusIndicator` → `Field.StatusIndicatorWithIcon`** (its props, with `fallback`, are `FieldStatusIndicatorWithIconProps`). `Field.StatusIndicator` and `FieldStatusIndicatorProps` are now the plain recipe slot.
- `FieldLabel`'s `hideLabel` prop is removed: use `hideLabel` on `<Field>`, or the `srOnly` style prop on `Field.Label`.
- `FieldIndicatorProps` is removed; use `FieldStartIndicatorProps`.
- The standalone part exports are removed; use the compound members instead: `FieldRoot`, `FieldLabel`, `FieldRequiredIndicator`, `FieldInputRoot`, `FieldInput`, `FieldTextarea`, `FieldHelperText`, `FieldErrorText`, `FieldStartIndicator` → `Field.Root`, `.Label`, `.RequiredIndicator`, `.InputRoot`, `.Input`, `.Textarea`, `.HelperText`, `.ErrorText`, `.StartIndicator`.
- `FieldParts` is removed; the compound object replaces it.
- Recipe variants (`size`) are set on the `Field` and reach every part through context.
- Ark's raw `FieldRootProvider` is no longer re-exported (it provides no Cerberus recipe context): use `Field.RootProvider`. `useField` is still exported.

New:

- `Field.RootProvider`, `Field.Context`, `Field.Select`, `Field.EndIndicator` and `Field.InputGroup`.
