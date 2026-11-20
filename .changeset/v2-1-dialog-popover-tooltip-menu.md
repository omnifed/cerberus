---
'@cerberus-design/react': major
'@cerberus/panda-preset': major
---

Dialog, Popover, Tooltip and Menu now use the v2.1 compound API. Their anatomies have no root element: `X.Root` provides the state and recipe variants (like `size`) to every part and renders nothing. `<Dialog>`, `<Popover>` and `<Tooltip>` still render the same ready-made component (also available as `.El`); `<Menu>` is `Menu.Root`, as before.

Breaking changes:

- **Menu: `MenuContent` → `Menu.ContentGroup`** (content inside its positioner). `Menu.Content` is now the bare content. **`MenuTrigger` (which always rendered `asChild`) is removed: use `<Menu.Trigger asChild>`.** Without `asChild`, `Menu.Trigger` renders its own `<button>`.
- **Dialog: `size` moves to `Dialog.Root` / `Dialog.RootProvider`.** It is a type error on `<Dialog>`. On `Dialog.Content` it still compiles but is now the CSS size utility (width and height), not the recipe variant.
- Dialog: `DialogHeading` → `Dialog.Title` (`DialogHeadingProps` → `DialogTitleProps`). `DialogProvider` (an alias of Root) is removed. Ark's raw `DialogRootProvider` provides no Cerberus recipe context, so Cerberus parts inside it throw: use `Dialog.RootProvider`. `style` on `<Dialog>` is plain `CSSProperties`; set CSS variables with `css`.
- Menu: `MenuGroupLabel` → `Menu.ItemGroupLabel`. `MenuContentProps` now types the bare content.
- The standalone part exports are removed; use the compound members instead.
  - `DialogRoot`, `DialogTrigger`, `DialogBackdrop`, `DialogPositioner`, `DialogContent`, `DialogDescription`, `DialogCloseTrigger`, `DialogCloseIconTrigger`, `DialogContext` → `Dialog.Root`, `.Trigger`, … `.Context`
  - `PopoverRoot`, `PopoverTrigger`, `PopoverAnchor`, `PopoverPositioner`, `PopoverContent`, `PopoverArrow`, `PopoverArrowTip`, `PopoverTitle`, `PopoverDescription`, `PopoverCloseTrigger`, `PopoverHeader`, `PopoverBody`, `PopoverFooter` → `Popover.Root`, … `.Footer`
  - `TooltipRoot`, `TooltipTrigger`, `TooltipPositioner`, `TooltipContent`, `TooltipArrow`, `TooltipArrowTip` → `Tooltip.Root`, … `.ArrowTip`
  - `MenuRoot`, `MenuTriggerItem`, `MenuPositioner`, `MenuItem`, `MenuItemGroup`, `MenuIndicator`, `MenuSeparator` and every `Menu*El` → `Menu.Root`, `.TriggerItem`, `.Positioner`, `.Item`, `.ItemGroup`, `.Indicator`, `.Separator`
- `DialogParts`, `PopoverParts` and `TooltipParts` are removed; the compound object replaces them. `PopoverBaseProps` is removed (use `PopoverProps`).
- Recipe variants are set on Root and reach every part through context; individual parts (e.g. `Popover.Content`, `Dialog.Content`) no longer accept them. `size` on `Popover.Root` now actually reaches the content, header, body and footer.
- Tooltip: `<Tooltip asChild>` is removed (it never had an effect). `positioning` is merged with the default `placement: 'top'` instead of replacing it.
- `<Dialog>`, `<Popover>` and `<Tooltip>` treat direct part children (e.g. `<Popover.Content>`) as overrides of that part instead of rendering them inside.
- panda-preset: the `dialog` recipe's `closeTrigger` slot is unstyled; the top-right placement moved to `Dialog.CloseIconTrigger`, so footer Close/Cancel buttons built on `Dialog.CloseTrigger` stay in place.

New:

- `Dialog.RootProvider`, `Popover.RootProvider`, `Tooltip.RootProvider` and `Menu.RootProvider` provide the recipe for `useX()` state; `X.Context` render props on all four.
- `Menu.CheckboxItem`, `Menu.RadioItemGroup` and `Menu.RadioItem` (styled like items), `Menu.Arrow`, `Menu.ArrowTip`, `Menu.ContextTrigger`, `Menu.ItemIndicator`, `Menu.ItemText`, `Popover.Indicator`.
- `Menu`'s `MenuSelectionDetails` type and Dialog's `OpenChangeDetails` type are still exported.
