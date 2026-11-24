# @cerberus-design/react

## 2.0.0

### Major Changes

- dfc5ef2: Migrate ecosystem to PandaCSS v2
- ec3b3f1: `<Admonition>` and `<Avatar>` now take direct part children as
  overrides, like the other v2.1 abstractions. They still render what they
  rendered in v1.

  Silent behavior changes:

  - A direct `Admonition.Indicator`, `.Content`, `.Heading` or `.Description`
    child of `<Admonition>` is now consumed as an override of that part. It used
    to render nested inside the description. An `Admonition.Heading` child with
    children renders even without the `heading` prop.
  - A direct `Avatar.Fallback` or `Avatar.Image` child of `<Avatar>` now
    overrides that part, and the default fallback and image still render. Other
    children still replace both, as in v1.
  - The close button of a `palette="page"` (or palette-less) Admonition now uses
    the IconButton `action` palette. Before, it received `page`, a palette
    IconButton doesn't have, so it was unstyled.

  Breaking changes:

  - `<Admonition>`/`Admonition.El` and `<Avatar>`/`Avatar.El` no longer accept
    the pre-release `slots`/`slotProps` props (never in a v1 release).

  New:

  - A self-closing part child patches that part's props. A part child with
    children (or `asChild`) replaces its default content.
- 046853c: Button, IconButton and SplitButton now live together in one `buttons`
  component module, and the `Button` compound carries all of them:
  `Button.Root`, `Button.Group`, `Button.Icon`, `Button.Provider`, `Button.El`,
  `Button.IconButton`, `Button.SplitButton` and `Button.IconButtonRoot`.
  `IconButton`, `SplitButton` and `IconButtonRoot` are still exported under
  their v1 names.

  Silent behavior changes (these compile unchanged):

  - **Admonition's close trigger is a focusable `<button>`** (it rendered a
    clickable `<div>` that keyboard users couldn't reach) and carries
    `data-scope="icon-button"` instead of `"icon-btn"`.
  - **`SplitButton`'s `pending` now disables the action button and shows the
    `Button.Icon` Spinner.** In v1 the action rendered `Button.Root` without the
    pending provider, so it stayed enabled and the icon never switched.

  - `SplitButton` with `shape="squared"` or `"hard"` applies the group's
    `default` shape (0.25rem corners on the menu trigger); v1 passed a shape the
    group recipe doesn't have, so no shape styles applied.

  Breaking changes:

  - **The `@cerberus-design/react/button`, `@cerberus-design/react/icon-button`
    and `@cerberus-design/react/split-button` subpaths are replaced by
    `@cerberus-design/react/buttons`.** Imports from the package root are
    unchanged.
  - `SplitButtonProps` no longer accepts arbitrary `CerberusPrimitiveProps`; it
    is `ButtonProps` (style props included) plus `actionText` and the IconButton
    `size`.

  New:

  - `Button.IconButton`, `Button.SplitButton` and `Button.IconButtonRoot`,
    documented in the Button API (the IconButton and SplitButton docs pages
    render it too).
- 1933651: Checkbox, Toggle, Clipboard and ProgressBar now use the v2.1 compound
  API. `<Checkbox>` and `<ProgressBar>` still render the same ready-made
  component (also available as `.El`). `<Toggle>` and `<Clipboard>` render their
  Root.

  Breaking changes:

  - **Clipboard: `Clipboard.Indicator` no longer renders the default copy/check
    icons, and `Clipboard.Trigger` no longer wraps itself in a copy-status
    tooltip.** Both are now the plain parts. Use `Clipboard.CopyIndicator` and
    `Clipboard.TriggerWithTooltip` for the previous behavior. Code using the old
    names still type-checks but renders without the icons or tooltip.
  - The standalone part exports are removed; use the compound members instead.
    - `CheckboxRoot`, `CheckboxLabel`, `CheckboxControl`, `CheckboxIndicator`,
      `CheckboxHiddenInput`, `CheckboxGroup` → `Checkbox.Root`, `.Label`,
      `.Control`, `.Indicator`, `.HiddenInput`, `.Group`
    - `ToggleRoot`, `ToggleIndicator` → `Toggle.Root` (or `<Toggle>`),
      `Toggle.Indicator`
    - `ClipboardRoot`, `ClipboardLabel`, `ClipboardControl`, `ClipboardInput`,
      `ClipboardTrigger`, `ClipboardIndicator`, `ClipboardContext` →
      `Clipboard.Root`, `.Label`, `.Control`, `.Input`, `.Trigger`,
      `.Indicator`, `.Context`
    - `ProgressBarRoot`, `ProgressBarBar` → `ProgressBar.Root`,
      `ProgressBar.Bar`
  - `CheckboxParts` and `ToggleParts` are removed; the compound object replaces
    them. `Clipboard` is now a component (its Root) with members instead of a
    plain object.
  - Checkbox: `size` is set on Root (or `<Checkbox>`) and reaches every part
    through context; `Checkbox.Control` and `Checkbox.Label` no longer accept
    it.
  - ProgressBar: the root and bar now render `data-scope="progress-bar"` with
    `data-part="root"` / `"bar"`.

  New:

  - `<Checkbox>` accepts `Checkbox.Control`, `.Indicator`, `.Label` and
    `.HiddenInput` as direct children to override those parts, and shows the
    indeterminate icon for uncontrolled `defaultChecked="indeterminate"` too.
  - `Checkbox.RootProvider`, `Checkbox.GroupProvider`, `Checkbox.Context`,
    `Toggle.Context`, `Clipboard.RootProvider`, `Clipboard.ValueText`,
    `Clipboard.CopyText`, `Clipboard.CopyIndicator` and
    `Clipboard.TriggerWithTooltip` are part of the compound.
  - `Clipboard.CopyIndicator` and `Clipboard.CopyText` accept children to
    replace the default icon or text.
- 9ac42f1: Collapsible, Marquee, PinInput and Switch now use the v2.1 compound
  API. Each is one object whose members are the parts, e.g. `Switch.Root`,
  `Switch.Control`, `Switch.Thumb`. `<Marquee>`, `<PinInput>` and `<Switch>`
  still render the same ready-made component (also available as `.El`).

  Breaking changes:

  - The standalone part exports are removed; use the compound members instead.
    - `CollapsibleRoot`, `CollapsibleTrigger`, `CollapsibleContent`,
      `CollapsibleIndicator`, `CollapsibleRootProvider` → `Collapsible.Root`,
      `.Trigger`, `.Content`, `.Indicator`, `.RootProvider`
    - `MarqueeRoot`, `MarqueeRootProvider`, `MarqueeViewport`, `MarqueeContent`,
      `MarqueeItem`, `MarqueeEdge` → `Marquee.Root`, `.RootProvider`,
      `.Viewport`, `.Content`, `.Item`, `.Edge`
    - `PinInputRoot`, `PinInputLabel`, `PinInputControl`, `PinInputInput`,
      `PinInputHiddenInput` → `PinInput.Root`, `.Label`, `.Control`, `.Input`,
      `.HiddenInput`
    - `SwitchRoot`, `SwitchLabel`, `SwitchControl`, `SwitchThumb`,
      `SwitchHiddenInput` → `Switch.Root`, `.Label`, `.Control`, `.Thumb`,
      `.HiddenInput`
  - `PinInputParts` and `SwitchParts` are removed; the compound object replaces
    them.
  - Recipe variants are set on Root and reach every part through context, so
    parts must render inside their Root (or RootProvider):
    - Collapsible: `effect` moves from `Collapsible.Content` to
      `Collapsible.Root`.
    - PinInput: `PinInputInputProps` no longer accepts `size`; set it on Root.
  - `CollapsibleProviderProps` is renamed to `CollapsibleRootProviderProps`.
  - `MarqueeEdgeOption` no longer includes `undefined`.

  New:

  - `<Marquee>`, `<PinInput>` and `<Switch>` accept part elements as direct
    children to override that part, e.g.
    `<Switch><Switch.Label textTransform="uppercase">…</Switch.Label></Switch>`.
  - `Marquee.Context` and `Collapsible.RootProvider` are part of the compound.
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
- ab3eb24: Field now uses the v2.1 compound API. `<Field>` still renders the
  same ready-made component (also available as `Field.El`): the label with its
  required indicator, your control, and the helper text, error text and
  secondary helper text. `Input` and `Textarea` are still exported.

  Silent behavior changes (these compile unchanged):

  - **`Field.Label` no longer appends a "(required)" indicator on its own**;
    only `<Field label>` does. Compose
    `<Field.RequiredIndicator>(required)</Field.RequiredIndicator>` inside a
    bare `Field.Label`.
  - **`Field.RequiredIndicator` renders Ark's default `*`** instead of
    "(required)" when it has no children.
  - **The Field parts read the recipe from a `Field`** (`<Field>`, `Field.Root`
    or `Field.RootProvider`) and throw outside one. `Input` (`Field.InputGroup`)
    and `Textarea` keep working on their own: outside a `Field` they wrap
    themselves in a `Field.Root`.
  - `Field.Label`, `Field.RequiredIndicator`, `Field.HelperText` and
    `Field.ErrorText` passed as direct children of `<Field>` override that part
    instead of rendering inline. A `Field.HelperText` child is hidden when the
    field is invalid, like the `helperText` prop.
  - `Field.ErrorText` renders when the field is invalid even without children
    (v1's `FieldErrorText` rendered nothing).
  - `Field.StartIndicator` renders an empty span without children (v1's
    `FieldStartIndicator` rendered nothing); `Input` only renders it with a
    `startIcon`.
  - The input group's parts carry `data-scope="field"` and
    `data-part="input-root"`, `"start-indicator"`, `"end-indicator"` or
    `"status-indicator"`.
  - `label`, `errorText` and `secondaryHelperText` on `<Field>` accept a
    `ReactNode`.

  Breaking changes:

  - **`Input` is now `Field.InputGroup`** (`FieldInputElProps` is an alias of
    `FieldInputGroupProps`), with the same `startIcon`, `endIcon` and `size`
    props. `Field.Input` is the bare Ark input and no longer accepts the `size`
    variant: set `size` on the `Field` (it cascades) or on `Field.InputGroup`.
  - **`Input`'s props are typed.** They resolved to `any` in v1, so values of
    the wrong type (e.g. `unknown` for `defaultValue`) now fail to compile.
  - **`FieldStatusIndicator` → `Field.StatusIndicatorWithIcon`** (its props,
    with `fallback`, are `FieldStatusIndicatorWithIconProps`).
    `Field.StatusIndicator` and `FieldStatusIndicatorProps` are now the plain
    recipe slot.
  - `FieldLabel`'s `hideLabel` prop is removed: use `hideLabel` on `<Field>`, or
    the `srOnly` style prop on `Field.Label`.
  - `FieldIndicatorProps` is removed; use `FieldStartIndicatorProps`.
  - The standalone part exports are removed; use the compound members instead:
    `FieldRoot`, `FieldLabel`, `FieldRequiredIndicator`, `FieldInputRoot`,
    `FieldInput`, `FieldTextarea`, `FieldHelperText`, `FieldErrorText`,
    `FieldStartIndicator` → `Field.Root`, `.Label`, `.RequiredIndicator`,
    `.InputRoot`, `.Input`, `.Textarea`, `.HelperText`, `.ErrorText`,
    `.StartIndicator`.
  - `FieldParts` is removed; the compound object replaces it.
  - Recipe variants (`size`) are set on the `Field` and reach every part through
    context.
  - Ark's raw `FieldRootProvider` is no longer re-exported (it provides no
    Cerberus recipe context): use `Field.RootProvider`. `useField` is still
    exported.

  New:

  - `Field.RootProvider`, `Field.Context`, `Field.Select`, `Field.EndIndicator`
    and `Field.InputGroup`.
- 1a39e77: Fieldset, Slider, NumberInput and Tabs now use the v2.1 compound API.
  `<Fieldset>`, `<Slider>` and `<NumberInput>` still render the same ready-made
  component (also available as `.El`), and now accept part elements as direct
  children to override that part.

  Breaking changes:

  - **Tabs: `Tabs.List` no longer renders the active-tab indicator.** Use the
    new `Tabs.ListGroup` (list + indicator), or add `<Tabs.Indicator />`
    yourself. Code using `<Tabs.List>` still type-checks but loses the
    indicator.
  - Tabs: `Tabs.Tab` → `Tabs.Trigger`, `Tabs.Panel` → `Tabs.Content`. Types
    `TabContentProps` → `TabsContentProps`, `TabIndicatorProps` →
    `TabsIndicatorProps`. `<Tabs>` now renders as `Tabs.Root`.
  - The standalone part exports are removed; use the compound members instead.
    - `FieldsetRoot`, `FieldsetLegend`, `FieldsetHelperText`,
      `FieldsetErrorText` → `Fieldset.Root`, `.Legend`, `.HelperText`,
      `.ErrorText`
    - `SliderRoot`, `SliderLabel`, `SliderValueText`, `SliderControl`,
      `SliderTrack`, `SliderRange`, `SliderThumb`, `SliderHiddenInput`,
      `SliderMarkerGroup`, `SliderMarker`, `SliderMarkerIndicator`,
      `SliderDraggingIndicator` → `Slider.Root`, `.Label`, …
      `.DraggingIndicator`
    - `NumberInputRoot`, `NumberInputLabel`, `NumberInputControl`,
      `NumberInputInput`, `NumberInputIncrementTrigger`,
      `NumberInputDecrementTrigger`, `NumberInputScrubber` → `NumberInput.Root`,
      `.Label`, … `.Scrubber`
    - `TabsRoot`, `TabsList`, `TabsTrigger`, `TabsContent`, `TabsIndicator` →
      `Tabs.Root`, `.List`, `.Trigger`, `.Content`, `.Indicator`
  - `FieldsetParts`, `NumberInputParts` and `TabsParts` are removed; the
    compound object replaces them.
  - Slider: `SliderProvider` / `Slider.Provider` → `Slider.RootProvider`, and
    `SliderProviderProps` → `SliderRootProviderProps`. `Slider.Thumbs` no longer
    takes `value` or `direction` (it renders one thumb per current value from
    context); `Slider.Marks` no longer takes `direction`.
  - Recipe variants are set on Root (or RootProvider) and reach every part
    through context, so parts must render inside it. Fieldset's `usage` and
    Slider's `direction`/`usage` are no longer accepted on individual parts.

  New:

  - `Fieldset.RootProvider`, `Fieldset.Context`, `NumberInput.RootProvider`,
    `NumberInput.Context`, `NumberInput.ValueText`, `Tabs.RootProvider` and
    `Tabs.Context` are part of the compound.
  - Fieldset's `legend`, `helperText` and `errorText` accept any `ReactNode`.
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
- 745c957: FileUpload: the dropzone's accessible name now matches its visible
  text.

  Silent behavior changes:

  - With `<FileUpload>` (`FileUploader`), the dropzone's `aria-label` used to be
    Zag's default, "dropzone". It is now the dropzone's visible text: the
    heading, the "Import … files" text and the description, or the text of a
    `FileUpload.Dropzone` child's children. Tests that query the dropzone by
    `{ name: 'dropzone' }` need updating.

  Pass `translations={{ dropzone: '…' }}` to set it yourself; any other
  `translations` keys you pass are kept. `FileUpload.Root` compositions still
  default to "dropzone".
- a2b059a: FileUpload now uses the v2.1 compound API. `<FileUpload>` (also
  available as `FileUpload.El`, and still exported as `FileUploader`) renders
  what v1's `FileUploader` rendered: the dropzone with the Cerberus icon, an
  optional `heading`, the "Import <types> files" text and a description, the
  accepted files with their previews, and the hidden input. `ImgPreview` and
  `FileStatus` are still exported.

  Silent behavior changes (these compile unchanged):

  - **Non-part children of `<FileUpload>`/`FileUploader` render after the file
    list even when `showPreview` is on.** v1 only rendered them with
    `showPreview={false}` and dropped them otherwise.
  - **`FileUpload.Icon`, `FileUpload.Heading` and `FileUpload.Description` read
    the recipe from a `FileUpload.Root`/`RootProvider`** and throw outside one
    (v1's standalone exports rendered anywhere).
  - Direct `FileUpload.Label`, `Dropzone`, `Icon`, `Heading`, `Description`,
    `ClearTrigger` or `HiddenInput` children of `<FileUpload>` override that
    part instead of rendering as extra content.
  - Props passed to `ImgPreview` (`FileUpload.ItemGroupWithPreview`) land on the
    item group element; v1 ignored them.
  - `FileUpload.Icon`, `Heading` and `Description` carry
    `data-scope="file-upload"` and `data-part="icon"`, `"heading"` or
    `"description"`.
  - `heading` accepts a `ReactNode`.

  Breaking changes:

  - **`ImgPreview` is now `FileUpload.ItemGroupWithPreview`** (still exported as
    `ImgPreview`). It renders an item per accepted file, with a preview for
    images; direct `FileUpload.ItemPreview`, `ItemPreviewImage`, `ItemName`,
    `ItemSizeText` or `ItemDeleteTrigger` children patch that part of every
    item.
  - `FileUploadContent` (and `FileUploadContentProps`) is removed;
    `<FileUpload>` renders the text group itself.
  - The part props are typed (they resolved to `any` through `FileUploadParts`):
    e.g. `FileUpload.Item` requires `file`.
  - The standalone part exports are removed; use the compound members instead:
    `FileUploadRoot`, `FileUploadDropzone`, `FileUploadLabel`,
    `FileUploadTrigger`, `FileUploadClearTrigger`, `FileUploadItemGroup`,
    `FileUploadItem`, `FileUploadItemPreview`, `FileUploadItemPreviewImage`,
    `FileUploadItemName`, `FileUploadItemSizeText`,
    `FileUploadItemDeleteTrigger`, `FileUploadHiddenInput`, `FileUploadContext`,
    `FileUploadIcon`, `FileUploadHeading`, `FileUploadDescription` →
    `FileUpload.Root`, … `FileUpload.Description`.
  - `FileUploadParts` is removed; the compound object replaces it.
  - Ark's raw `FileUploadRootProvider` is no longer re-exported (it provides no
    Cerberus recipe context): use `FileUpload.RootProvider`. `useFileUpload` is
    still exported.

  New:

  - `FileUpload.RootProvider` and `FileUpload.Context`.
  - The `FileUploadFileAcceptDetails`, `FileUploadFileChangeDetails`,
    `FileUploadFileRejectDetails` and `FileUploadFileError` types.
- c655d46: Patch children no longer need the props their abstraction supplies. A
  self-closing part child that patches an abstraction's part can now omit those
  props:

  - `Marquee.Edge` `side` and `Marquee.Content` `children` inside `<Marquee>`
  - `PinInput.Input` `index` inside `<PinInput>`
  - `Accordion.Item` `value` inside `Accordion.ItemGroup`
  - `Pagination.Item` `type`/`value` and `Pagination.Ellipsis` `index` inside
    `<Pagination>` and `Pagination.ItemList`
  - `Rating.Item` `index` inside `<Rating>`

  For example, `<Marquee.Edge data-testid="qa" />` now type-checks. Before, it
  needed a `side` that was then ignored.

  These members are typed with the new `Patchable<typeof Part, 'prop'>`, which
  adds a call signature where only those props are optional. Their `*Props`
  types (`MarqueeEdgeProps`…) are unchanged and still require them. Because JSX
  can't tell a patch child from direct use, the listed props also type-check
  when omitted in a direct composition
  (`<Marquee.Root><Marquee.Edge /></Marquee.Root>`), where Ark still needs them
  at runtime.
- 987b9e8: RadioGroup's `orientation` now reaches the Zag machine, and both
  default to horizontal.

  Silent behavior changes:

  - A `<RadioGroup>` (`RadioGroup.Root`) with no `orientation` now reports
    `aria-orientation="horizontal"` and `data-orientation="horizontal"`,
    matching the horizontal layout the recipe has always drawn. It used to
    report Zag's default, `vertical`.
  - `orientation` passed to `<RadioGroup>` now also sets
    `aria-orientation`/`data-orientation`. Before, it only styled the group, and
    Zag always reported `vertical`.

  `RadioGroup.RootProvider` is unchanged: its `orientation` prop only styles.
  Pass `orientation` to `useRadioGroup()` for the behavior, which still defaults
  to `vertical` there.
- 856b518: RadioGroup, Rating, CircularProgress and Combobox now use the v2.1
  compound API. `<RadioGroup>` is `RadioGroup.Root`, as before; `<Rating>`,
  `<CircularProgress>` and `<Combobox>` still render the same ready-made
  component (also available as `.El`).

  Silent behavior changes (these compile unchanged):

  - **RadioGroup: `size` on the group now reaches every radio.** In v1 it only
    sized the group, and each `<Radio>` needed its own `size`. A `size` on a
    single `<Radio>` still overrides the group's for that radio.
  - **Rating: `<Rating>` now renders `Rating.HiddenInput`**, so `name` and
    `form` submit the value with a form.
  - Rating: `children` is optional and defaults to Cerberus star icons (a half
    star when `half`). `label` accepts a `ReactNode`.
  - CircularProgress: `CircularProgress.InfoGroup` now carries
    `data-scope="progress"` and `data-part="info-group"`.
  - **Combobox: `useStatefulCollection` filters the initial items on every input
    change.** In v1 it filtered the last result, so editing a query (not only
    extending it) never brought back items the previous query excluded. Clearing
    the input also resets `filterChars`.
  - Combobox: `size` reaches the content through the recipe context instead of
    an explicit prop on `Combobox.Content`.
  - `<Rating>`, `<CircularProgress>` and `<Combobox>` treat direct part children
    (e.g. `<Rating.Label>`, `<CircularProgress.Label>`, `<Combobox.Input>`) as
    overrides of that part. Other children of `<CircularProgress>` render in the
    info group, after the label.

  Breaking changes:

  - **Combobox: `ComboItemWithIndicator` → `Combobox.ItemWithIndicator`,
    `ComboItemGroup` → `Combobox.ItemGroupWithLabel` (`ComboItemGroupProps` →
    `ComboboxItemGroupWithLabelProps`), `ComboItemText` → `Combobox.ItemText`.**
  - Combobox: `ComboboxContextProps` is no longer generic. `ComboboxRootProps`
    and `ComboboxProps` are generic over Ark's `CollectionItem` (default
    `CollectionItem`) instead of being fixed to `SelectCollectionItem`.
    `StatefulCollectionReturn['collection']` is typed
    `ListCollection<SelectCollectionItem>`.
  - **CircularProgress: `bgStyle` is removed** (it had no effect). Use
    `usage="transparent"` to remove the center fill.
  - **Rating: `Rating.Item` no longer takes `palette`;** set it on `Rating.Root`
    (or `<Rating>`), which provides it to every item.
  - Rating: `RatingGroupControlProps`, `RatingGroupItemProps`,
    `RatingGroupContextProps`, `RatingGroupItemContextProps` and
    `RatingGroupHiddenInputProps` → `RatingControlProps`, `RatingItemProps`,
    `RatingContextProps`, `RatingItemContextProps` and `RatingHiddenInputProps`.
  - The standalone part exports are removed; use the compound members instead.
    - `RadioGroupRoot`, `RadioGroupLabel`, `RadioGroupIndicator`,
      `RadioGroupItem`, `RadioGroupItemText`, `RadioGroupItemControl`,
      `RadioGroupItemHiddenInput` → `RadioGroup.Root`, `.Label`, …
      `.ItemHiddenInput`
    - `RatingRoot`, `RatingLabel`, `RatingControl`, `RatingItem`,
      `RatingContext`, `RatingItemContext`, `RatingHiddenInput` → `Rating.Root`,
      … `.HiddenInput`
    - `CircularProgressRoot`, `CircularProgressLabel`,
      `CircularProgressValueText`, `CircularProgressCircle`,
      `CircularProgressCircleTrack`, `CircularProgressCircleRange`,
      `CircularProgressInfoGroup` → `CircularProgress.Root`, … `.InfoGroup`
    - `ComboboxRoot`, `ComboboxLabel`, `ComboboxControl`, `ComboboxInput`,
      `ComboboxTrigger`, `ComboboxClearTrigger`, `ComboboxPositioner`,
      `ComboboxContent`, `ComboboxItemGroup`, `ComboboxItemGroupLabel`,
      `ComboboxItem`, `ComboboxItemText`, `ComboboxItemIndicator`,
      `ComboboxStartIcon`, `ComboboxContext` → `Combobox.Root`, … `.Context`
  - `RadioParts`, `RatingParts` and `ComboboxParts` are removed; the compound
    object replaces them.
  - Recipe variants are set on Root and reach every part through context;
    individual parts no longer accept them.
  - Ark's raw `RatingGroupRootProvider` is no longer re-exported (it provides no
    Cerberus recipe context): use `Rating.RootProvider`. `useRatingGroup` is
    still exported.

  New:

  - `RadioGroup.RootProvider`, `Rating.RootProvider`,
    `CircularProgress.RootProvider` and `Combobox.RootProvider` provide the
    recipe for `useX()` state; `X.Context` render props on all four, plus
    `RadioGroup.ItemContext`, `Rating.ItemContext` and `Combobox.ItemContext`.
  - `RadioGroup.Radio` (also exported as `Radio`), `CircularProgress.View`,
    `Combobox.List` and `Combobox.Empty`.
  - `Rating` exports a `RatingItemRenderer` type for its render function child.
- 737d4cb: Rating's default item icons are now configurable through
  `CerberusProvider` with the new `rating` and `ratingHalf` icon keys
  (`defineIcons({ rating, ratingHalf })`). They default to Carbon's
  `StarFilled`/`StarHalf` at 24px, so the default look is unchanged.

  Breaking changes:

  - `<Rating>` (`Rating.El`) reads its icons from the Cerberus context, so it
    must render inside a `CerberusProvider`. The `Rating.*` primitives don't
    need one.
  - `SystemConfig['icons']` requires the `rating` and `ratingHalf` keys. Configs
    built with `defineIcons` or `makeSystemConfig` get them automatically.
- 751489c: The raw, unstyled Ark `*RootProvider` re-exports are removed for
  components on the v2.1 compound API: `AccordionRootProvider`,
  `AvatarRootProvider`, `CarouselRootProvider`, `CheckboxRootProvider`,
  `ClipboardRootProvider`, `DialogRootProvider`, `FieldsetRootProvider`,
  `MenuRootProvider`, `NumberInputRootProvider`, `PinInputRootProvider`,
  `PopoverRootProvider`, `SliderRootProvider`, `SwitchRootProvider`,
  `TabsRootProvider` and `TooltipRootProvider`.

  Their parts now read the Cerberus recipe from context, so they throw inside a
  raw Ark provider. Use the styled member instead, with the same `useX()` hook
  (still exported):

  ```tsx
  const accordion = useAccordion()
  <Accordion.RootProvider value={accordion}>…</Accordion.RootProvider>
  ```

  `Accordion.RootProvider`, `Avatar.RootProvider`, `Carousel.RootProvider`,
  `PinInput.RootProvider` and `Switch.RootProvider` are new.
- a5552bb: Select, Pagination and DatePicker now use the v2.1 compound API.
  `<Select>`, `<Pagination>` and `<DatePicker>` still render the same ready-made
  component (also available as `.El`).

  Silent behavior changes (these compile unchanged):

  - **DatePicker: `DatePicker.Input`, `DatePicker.Trigger` and
    `DatePicker.Content` are now the bare Ark parts.** Renaming v1
    `DatePickerInput` to `DatePicker.Input` by name drops the control, the
    calendar trigger, `maxLength` and the placeholder: use
    `DatePicker.InputGroup`.
  - **DatePicker: the day view marks `data-date="today"`, `"past"` and
    `"future"` in the user's time zone.** v1 used the UTC date, so near midnight
    it could mark the wrong day.
  - DatePicker: the view control renders Ark's `ViewControl`
    (`data-part="view-control"`) instead of Ark's `Control`
    (`data-part="control"`), so `[data-part=control]` selectors only match the
    input control.
  - DatePicker: children of `DatePicker.Calendar`, the day/month/year views and
    the input groups were ignored (or landed on the `<input>`); part children
    now override that part and other children render.
  - **Select: in a composed `Select.Root size="lg"`, `Select.Content` takes the
    root's size.** In v1, content without its own `size` was `md`.
  - Select: `Option` (`Select.ItemWithIndicator`) takes its default text from
    the collection's `itemToString` (falling back to `label`) instead of
    `item.label`, and renders non-part children as the item text (v1 ignored
    them).
  - Select: `OptionGroup` (`Select.ItemGroupWithLabel`) accepts a `label` prop;
    an `OptionGroupLabel` child is moved to the start of the group.
  - Pagination: page and ellipsis buttons get `shape="squared"`. v1 passed
    `shape="default"`, which matched no recipe value.
  - Pagination: children of the previous and next icon triggers replace the icon
    (v1 ignored them).
  - `<Select>`, `<Pagination>`, `DatePicker.Calendar` and the input groups treat
    direct part children (e.g. `<Select.Trigger>`, `<Pagination.Item>`) as
    overrides of that part instead of rendering them as extra elements.

  Breaking changes:

  - **DatePicker: `DatePickerInput` → `DatePicker.InputGroup`,
    `RangePickerInput` → `DatePicker.RangeInputGroup` (`RangePickerInputProps` →
    `DatePickerRangeInputGroupProps`, without `index`), `DatePickerCalendar` →
    `DatePicker.Calendar`, `DatePickerInputEl` → `DatePicker.Input`
    (`DatePickerInputElProps` → `DatePickerInputProps`).**
  - **Pagination: `PrevTrigger` / `NextTrigger` →
    `Pagination.PrevTriggerWithIcon` / `Pagination.NextTriggerWithIcon`
    (`TriggerProps` is removed), `ItemList` → `Pagination.ItemList`,
    `CompactText` → `Pagination.CompactList`.** `Pagination.PrevTrigger` and
    `Pagination.NextTrigger` are now the bare, unstyled Ark parts.
    `Pagination.ItemList` and `Pagination.CompactList` read the pagination
    context instead of taking it spread as props (`<ItemList {...pagination} />`
    → `<Pagination.ItemList />` inside `Pagination.Root`).
  - Select: `Option`, `OptionGroup` and `OptionGroupLabel` are still exported,
    as aliases of `Select.ItemWithIndicator`, `Select.ItemGroupWithLabel` and
    `Select.ItemGroupLabel`. `OptionProps` is Ark's item props (`item: any`)
    instead of redeclaring `item: SelectCollectionItem`.
  - Select: `SelectRootProps` and `SelectProps` are generic over Ark's
    `CollectionItem` (default `CollectionItem`) instead of being fixed to
    `SelectCollectionItem`.
  - DatePicker: `DatePickerViewControl` is Ark's `ViewControl`;
    `DatePickerClearTriggerProps` is typed from `ClearTrigger` (v1 used
    `Trigger`'s props).
  - The standalone part exports are removed; use the compound members instead.
    - `SelectRoot`, `SelectLabel`, `SelectControl`, `SelectTrigger`,
      `SelectValueText`, `SelectIndicator`, `SelectClearTrigger`,
      `SelectPositioner`, `SelectContent`, `SelectItemGroup`,
      `SelectItemGroupLabel`, `SelectItem`, `SelectItemText`,
      `SelectItemIndicator`, `SelectHiddenSelect` → `Select.Root`, …
      `.HiddenSelect`
    - `PaginationRoot`, `PaginationPrevTrigger`, `PaginationNextTrigger`,
      `PaginationItem`, `PaginationEllipsis`, `PaginationContext`,
      `PaginationRootProvider` → `Pagination.Root`, … `.RootProvider`
    - `DatePickerRoot`, `DatePickerLabel`, `DatePickerControl`,
      `DatePickerTrigger`, `DatePickerContent`, `DatePickerPositioner`,
      `DatePickerClearTrigger`, `DatePickerYearSelect`, `DatePickerMonthSelect`,
      `DatePickerView`, `DatePickerContext`, `DatePickerViewControl`,
      `DatePickerPrevTrigger`, `DatePickerNextTrigger`, `DatePickerViewTrigger`,
      `DatePickerRangeText`, `DatePickerTable`, `DatePickerTableHead`,
      `DatePickerTableHeader`, `DatePickerTableBody`, `DatePickerTableRow`,
      `DatePickerTableCell`, `DatePickerTableCellTrigger` → `DatePicker.Root`, …
      `.TableCellTrigger`
  - `SelectParts`, `PaginationParts` and `DatePickerParts` are removed; the
    compound object replaces them.
  - Recipe variants are set on Root and reach every part through context;
    individual parts (e.g. `Select.Content`) no longer accept them.
  - Ark's raw `SelectRootProvider` and `DatePickerRootProvider` are no longer
    re-exported (they provide no Cerberus recipe context): use
    `Select.RootProvider` and `DatePicker.RootProvider`. `useSelect` and
    `useDatePicker` are still exported.

  New:

  - `Select.RootProvider`, `Pagination.RootProvider` and
    `DatePicker.RootProvider`; `X.Context` render props on all three, plus
    `Select.ItemContext`.
  - `Select.List`; `Pagination.FirstTrigger`, `Pagination.LastTrigger`,
    `Pagination.ItemButton` and `Pagination.EllipsisButton`;
    `DatePicker.IconTrigger`, `DatePicker.ContentGroup`, `DatePicker.DayView`,
    `DatePicker.MonthView`, `DatePicker.YearView`,
    `DatePicker.ViewControlGroup`, `DatePicker.ValueText`,
    `DatePicker.PresetTrigger`, `DatePicker.WeekNumberCell` and
    `DatePicker.WeekNumberHeaderCell`.
  - DatePicker exports `DatePickerDateView`, `DatePickerValueChangeDetails`,
    `DatePickerOpenChangeDetails`, `DatePickerViewChangeDetails` and
    `UseDatePickerContext`.
- a34ff37: Tag now uses the v2.1 API. `<Tag>` (also `Tag.El`) renders exactly
  what it rendered in v1: `Tag.Root` (filled), `Tag.Gradient` (with `gradient`)
  or, with `onClick`, `Tag.Closable` (`Tag.ClosableRoot` with a close IconButton
  labelled "Close tag"). `FilledTag`, `GradientTag`, `ClosableTagRoot` and
  `ClosableTag` are still exported as aliases of those members, and `TagProps`,
  `FilledTagProps`, `GradientTagProps` and `ClosableTagProps` keep their shapes.

  Breaking changes:

  - The accidental `defaultProps` export
    (`{ 'data-scope': 'tag', 'data-part': 'root' }`) is removed.

  New:

  - `Tag.Root`, `Tag.Gradient`, `Tag.ClosableRoot`, `Tag.Closable` and `Tag.El`,
    documented in the Tag API; `TagRootProps`, `TagGradientProps` and
    `TagClosableRootProps`.
- 1e6b73e: Text, Group, Spinner and Table now use the v2.1 API. `<Text>`,
  `<Group>` and `<Spinner>` render what they rendered in v1; `Table` becomes a
  renderable `<Table>` compound.

  Silent behavior changes (these compile unchanged):

  - **`Table.Root` is now the bare container `<div>`.** In v1 it rendered the
    container, the `<table>`, the caption and `data-sticky`; that is now
    `<Table>` (also `Table.El`). `<Table.Root>` without `caption`/`sticky` still
    compiles but renders no `<table>`: switch to `<Table>`.
  - **Table parts read `size`/`decoration` from a `<Table>`/`Table.Root`** and
    throw outside one. `size` on another part is now Panda's `size` style
    utility (width and height); v1 dropped it.
  - **`Table.Trigger` defaults to `type="button"`**, so it no longer submits a
    surrounding form.
  - `Group` renders `data-scope="group"` and `data-part="root"`; Table parts
    render `data-slot` next to their unchanged `data-part`.
  - `Spinner` passes extra props through to its `<svg>` (style props, SVG
    attributes such as `aria-label`); an explicit `width`/`height` overrides
    `size`. It renders an empty `class` attribute when unstyled.
  - `TextProps['as']` without a type argument is `'p' | undefined` (`TextProps`
    is generic over the element); use `Headings | TextElements` for the full
    list.

  Breaking changes:

  - **`TextProps` now carries every style prop and the HTML attributes of the
    `as` element** (it had collapsed to `{ as? }`, so anything was accepted).
    Props that are invalid for the element fail to compile. `TextProps` is a
    type alias, so it can no longer be augmented with declaration merging.
  - Table: `TableParts`, `TablePartsValue` and the standalone parts are removed:
    `TableRoot`, `TableEl`, `Caption`, `Thead`, `Th`, `Tbody`, `Tr`, `Td`,
    `Tfoot`, `TableTrigger` → `Table.Root`, `Table.Table`, `Table.Caption`,
    `Table.Header`, `Table.HeaderCol`, `Table.Body`, `Table.Row`, `Table.Cell`,
    `Table.Footer`, `Table.Trigger`. Their props types are renamed to
    `Table<Part>Props` (`TableRootElProps` → `TableProps`); `caption` is
    optional and accepts a `ReactNode`.
  - `Theme`'s props are `<div>` props (they were typed as `<button>` props while
    it renders a `<div>`).

  New:

  - `Text.Root`, `Group.Root`, `Spinner.Root` and the `Table.Table` part;
    `TextRootProps`, `GroupRootProps` and `SpinnerRootProps`.

## 1.9.0

### Minor Changes

- 8cced3d: Updates Button sizes and adds SplitButton variants

### Patch Changes

- 2725945: Support autocomplete styling
- 4b85c37: Update dependencies
- 087f458: Fix: update cta-dialog heading to be center aligned
- 9ceb04f: Fix Pagination ignoring the controlled page prop. page was consumed
  as a Panda CSS property. Add the forwardProps option to primitive factory
  methods.

## 1.8.1

### Patch Changes

- 1a294bd: Fix Compiler warnings
- 629735e: Depedency updates
- efb94d9: fix accessibility bugs for color contrast
- 2b43c35: Expose Presence API
- 5b6131c: dependency bumps

## 1.8.0

### Minor Changes

- c378057: Force minor version from missed opportunity

## 1.7.1

### Patch Changes

- d38326b: Force patch update to ensure 3.0 works

## 1.7.0

### Minor Changes

- c058e2e: Add Slider API and recipe

### Patch Changes

- 79f23bf: bump weekly deps
- 212fe1c: Dependency updates

## 1.6.0

### Minor Changes

- 86c01a4: Add Oceanus theme

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
