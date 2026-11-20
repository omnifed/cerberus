---
'@cerberus-design/react': major
---

Checkbox, Toggle, Clipboard and ProgressBar now use the v2.1 compound API. `<Checkbox>` and `<ProgressBar>` still render the same ready-made component (also available as `.El`). `<Toggle>` and `<Clipboard>` render their Root.

Breaking changes:

- **Clipboard: `Clipboard.Indicator` no longer renders the default copy/check icons, and `Clipboard.Trigger` no longer wraps itself in a copy-status tooltip.** Both are now the plain parts. Use `Clipboard.CopyIndicator` and `Clipboard.TriggerWithTooltip` for the previous behavior. Code using the old names still type-checks but renders without the icons or tooltip.
- The standalone part exports are removed; use the compound members instead.
  - `CheckboxRoot`, `CheckboxLabel`, `CheckboxControl`, `CheckboxIndicator`, `CheckboxHiddenInput`, `CheckboxGroup` → `Checkbox.Root`, `.Label`, `.Control`, `.Indicator`, `.HiddenInput`, `.Group`
  - `ToggleRoot`, `ToggleIndicator` → `Toggle.Root` (or `<Toggle>`), `Toggle.Indicator`
  - `ClipboardRoot`, `ClipboardLabel`, `ClipboardControl`, `ClipboardInput`, `ClipboardTrigger`, `ClipboardIndicator`, `ClipboardContext` → `Clipboard.Root`, `.Label`, `.Control`, `.Input`, `.Trigger`, `.Indicator`, `.Context`
  - `ProgressBarRoot`, `ProgressBarBar` → `ProgressBar.Root`, `ProgressBar.Bar`
- `CheckboxParts` and `ToggleParts` are removed; the compound object replaces them. `Clipboard` is now a component (its Root) with members instead of a plain object.
- Checkbox: `size` is set on Root (or `<Checkbox>`) and reaches every part through context; `Checkbox.Control` and `Checkbox.Label` no longer accept it.
- ProgressBar: the root and bar now render `data-scope="progress-bar"` with `data-part="root"` / `"bar"`.

New:

- `<Checkbox>` accepts `Checkbox.Control`, `.Indicator`, `.Label` and `.HiddenInput` as direct children to override those parts, and shows the indeterminate icon for uncontrolled `defaultChecked="indeterminate"` too.
- `Checkbox.RootProvider`, `Checkbox.GroupProvider`, `Checkbox.Context`, `Toggle.Context`, `Clipboard.RootProvider`, `Clipboard.ValueText`, `Clipboard.CopyText`, `Clipboard.CopyIndicator` and `Clipboard.TriggerWithTooltip` are part of the compound.
- `Clipboard.CopyIndicator` and `Clipboard.CopyText` accept children to replace the default icon or text.
