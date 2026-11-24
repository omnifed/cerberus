# @cerberus/panda-preset

## 2.0.0

### Major Changes

- 7d8143d: Recipe `jsx` lists now name the v2.1 components, so Panda extracts
  responsive and conditional variant values from them again (for example
  `<Button.IconButton shape={{ base: 'square', md: 'circle' }}>`). Plain variant
  values were never affected: the preset's `staticCss.recipes: '*'`
  pre-generates them.

  Silent behavior changes:

  - The lists no longer name removed v1 components (`FieldRoot`, `SelectRoot`,
    `TableRoot`, `Caption`…). Responsive values on those names are no longer
    extracted.
  - Recipes whose public name is their capitalized key (`Accordion`, `Select`,
    `Tabs`…) drop their list and rely on Panda's default matching (`<Key>`,
    `<Key.Slot>`, `<KeySlot>`).

  New lists cover `Button.IconButton`, `Button.Group`, `Tag.Closable`,
  `Tag.Gradient`, `Field.InputGroup`, `DatePicker.InputGroup`, `Switch.*`,
  `Rating.*`, `RadioGroup.Radio` and `FileUpload`. `fileUploader` no longer
  lists `ConfirmModal`/`PromptModal`, which was a copy-paste bug.
- dfc5ef2: Migrate ecosystem to PandaCSS v2
- 256e9b6: Dialog, Popover, Tooltip and Menu now use the v2.1 compound API.
  Their anatomies have no root element: `X.Root` provides the state and recipe
  variants (like `size`) to every part and renders nothing. `<Dialog>`,
  `<Popover>` and `<Tooltip>` still render the same ready-made component (also
  available as `.El`); `<Menu>` is `Menu.Root`, as before.

  Breaking changes:

  - **Menu: `MenuContent` → `Menu.ContentGroup`** (content inside its
    positioner). `Menu.Content` is now the bare content. **`MenuTrigger` (which
    always rendered `asChild`) is removed: use `<Menu.Trigger asChild>`.**
    Without `asChild`, `Menu.Trigger` renders its own `<button>`.
  - **Dialog: `size` moves to `Dialog.Root` / `Dialog.RootProvider`.** It is a
    type error on `<Dialog>`. On `Dialog.Content` it still compiles but is now
    the CSS size utility (width and height), not the recipe variant.
  - Dialog: `DialogHeading` → `Dialog.Title` (`DialogHeadingProps` →
    `DialogTitleProps`). `DialogProvider` (an alias of Root) is removed. Ark's
    raw `DialogRootProvider` provides no Cerberus recipe context, so Cerberus
    parts inside it throw: use `Dialog.RootProvider`. `style` on `<Dialog>` is
    plain `CSSProperties`; set CSS variables with `css`.
  - Menu: `MenuGroupLabel` → `Menu.ItemGroupLabel`. `MenuContentProps` now types
    the bare content.
  - The standalone part exports are removed; use the compound members instead.
    - `DialogRoot`, `DialogTrigger`, `DialogBackdrop`, `DialogPositioner`,
      `DialogContent`, `DialogDescription`, `DialogCloseTrigger`,
      `DialogCloseIconTrigger`, `DialogContext` → `Dialog.Root`, `.Trigger`, …
      `.Context`
    - `PopoverRoot`, `PopoverTrigger`, `PopoverAnchor`, `PopoverPositioner`,
      `PopoverContent`, `PopoverArrow`, `PopoverArrowTip`, `PopoverTitle`,
      `PopoverDescription`, `PopoverCloseTrigger`, `PopoverHeader`,
      `PopoverBody`, `PopoverFooter` → `Popover.Root`, … `.Footer`
    - `TooltipRoot`, `TooltipTrigger`, `TooltipPositioner`, `TooltipContent`,
      `TooltipArrow`, `TooltipArrowTip` → `Tooltip.Root`, … `.ArrowTip`
    - `MenuRoot`, `MenuTriggerItem`, `MenuPositioner`, `MenuItem`,
      `MenuItemGroup`, `MenuIndicator`, `MenuSeparator` and every `Menu*El` →
      `Menu.Root`, `.TriggerItem`, `.Positioner`, `.Item`, `.ItemGroup`,
      `.Indicator`, `.Separator`
  - `DialogParts`, `PopoverParts` and `TooltipParts` are removed; the compound
    object replaces them. `PopoverBaseProps` is removed (use `PopoverProps`).
  - Recipe variants are set on Root and reach every part through context;
    individual parts (e.g. `Popover.Content`, `Dialog.Content`) no longer accept
    them. `size` on `Popover.Root` now actually reaches the content, header,
    body and footer.
  - Tooltip: `<Tooltip asChild>` is removed (it never had an effect).
    `positioning` is merged with the default `placement: 'top'` instead of
    replacing it.
  - `<Dialog>`, `<Popover>` and `<Tooltip>` treat direct part children (e.g.
    `<Popover.Content>`) as overrides of that part instead of rendering them
    inside.
  - panda-preset: the `dialog` recipe's `closeTrigger` slot is unstyled; the
    top-right placement moved to `Dialog.CloseIconTrigger`, so footer
    Close/Cancel buttons built on `Dialog.CloseTrigger` stay in place.

  New:

  - `Dialog.RootProvider`, `Popover.RootProvider`, `Tooltip.RootProvider` and
    `Menu.RootProvider` provide the recipe for `useX()` state; `X.Context`
    render props on all four.
  - `Menu.CheckboxItem`, `Menu.RadioItemGroup` and `Menu.RadioItem` (styled like
    items), `Menu.Arrow`, `Menu.ArrowTip`, `Menu.ContextTrigger`,
    `Menu.ItemIndicator`, `Menu.ItemText`, `Popover.Indicator`.
  - `Menu`'s `MenuSelectionDetails` type and Dialog's `OpenChangeDetails` type
    are still exported.
- cf80fb6: FileStatus is now a v2.1 compound with its own
  `@cerberus-design/react/file-status` module. `<FileStatus>` (also
  `FileStatus.El`) renders the same card as before, and it now takes direct part
  children: `FileStatus.Icon`, `.Info`, `.Name`, `.Progress`, `.StatusText` and
  `.Action`. A self-closing part patches its props; a part with children
  replaces its default content.

  Silent behavior changes:

  - The progress bar's `id` is now `progress:<id>`. Before, the card root and
    the progress bar both rendered `id`, a duplicate id.
  - The status text is a `<span data-part="status-text">` (still with
    `id="help:<file>"`) instead of a `Field.HelperText` wrapped in a
    `Field.Root`.
  - Every layer renders `data-scope="file-status"` and its `data-part`, and the
    root renders `data-status` (`todo`, `processing`, `done` or `error`) for
    status-specific styling.
  - Children of `<FileStatus>` that aren't parts now render at the end of the
    info column. Before, they were silently dropped.
  - An unknown `status` no longer throws while rendering the icon; it shows the
    waiting state.

  Breaking changes:

  - `@cerberus-design/react/file-upload` no longer exports `FileStatus`,
    `processStatus`, `FileStatusProps`, `FileBaseStatusProps`, `FileStatusKey`
    or `FileStatusActions`. Import them from `@cerberus-design/react`
    (unchanged) or `@cerberus-design/react/file-status`.
  - The `fileStatus` recipe's slots are now `root`, `icon`, `info`, `name` and
    `statusText`, which hold the styles the component used to inline. Its
    `status` variant is removed: it only styled the `icon` slot, which nothing
    rendered. `FileStatusVariantProps` no longer has `status`.

  New:

  - `FileStatus.Root`, `.Icon`, `.Info`, `.Name` and `.StatusText` primitives,
    and the `FileStatus.Progress` and `FileStatus.Action` abstractions. They
    work on their own too: `Progress`'s `id`, `label` and `now` are optional,
    and `Action` picks its icon, label and palette from `status`.
  - `status` also accepts the plain strings `'todo'`, `'processing'`, `'done'`
    and `'error'`.
  - `fileStatusAnatomy` from `@cerberus/panda-preset`.

### Patch Changes

- 2251680: Give the exported `size` utility an explicit `PropertyConfig` type so
  `@cerberus/panda-preset` passes JSR's slow-types check and publishes again.

## 1.9.0

### Minor Changes

- 8cced3d: Updates Button sizes and adds SplitButton variants

### Patch Changes

- 2725945: Support autocomplete styling
- 436cedd: The dialog styling has been updated to set the title's textStyle to
  heading-md, previously it was heading-lg.
- bf23183: Add zIndex layering to datePicker & select recipes

## 1.8.1

### Patch Changes

- 53ace97: Add focusRing to staticCss
- 0729d63: fixes focus ring for input recipe
- 07a2410: Update menu recipe to use z-index layering
- efb94d9: fix accessibility bugs for color contrast
- 03fa4ad: Update tokens: slider, switch & add page.text.static

## 1.8.0

### Minor Changes

- c378057: Force minor version from missed opportunity

## 1.8.0

### Minor Changes

- 93abefd: Add focus-related utilities to panda-preset

### Patch Changes

- d38326b: Force patch update to ensure 3.0 works

## 1.7.0

### Minor Changes

- c058e2e: Add Slider API and recipe

### Patch Changes

- 59206c1: Fix select recipe to remove focus on content slot
- 79f23bf: bump weekly deps
- 212fe1c: Dependency updates

## 1.6.0

### Patch Changes

- e17f2a9: Dependency update
- ec21994: Dependency Updates
- ee1ed7c: Update token values on certain palettes

## 1.5.0

### Minor Changes

- 6f0b035: Add "visibility" feature option to the DataGrid columns API and new
  "search" and "filter" icons to the Cerberus icons context.

### Patch Changes

- db81fe9: bump depedencies to latest
- 914a3be: Depedency updates
- a25eec3: Security Vuln dependency patches
