---
'@cerberus-design/react': major
---

Collapsible, Marquee, PinInput and Switch now use the v2.1 compound API. Each is one object whose members are the parts, e.g. `Switch.Root`, `Switch.Control`, `Switch.Thumb`. `<Marquee>`, `<PinInput>` and `<Switch>` still render the same ready-made component (also available as `.El`).

Breaking changes:

- The standalone part exports are removed; use the compound members instead.
  - `CollapsibleRoot`, `CollapsibleTrigger`, `CollapsibleContent`, `CollapsibleIndicator`, `CollapsibleRootProvider` → `Collapsible.Root`, `.Trigger`, `.Content`, `.Indicator`, `.RootProvider`
  - `MarqueeRoot`, `MarqueeRootProvider`, `MarqueeViewport`, `MarqueeContent`, `MarqueeItem`, `MarqueeEdge` → `Marquee.Root`, `.RootProvider`, `.Viewport`, `.Content`, `.Item`, `.Edge`
  - `PinInputRoot`, `PinInputLabel`, `PinInputControl`, `PinInputInput`, `PinInputHiddenInput` → `PinInput.Root`, `.Label`, `.Control`, `.Input`, `.HiddenInput`
  - `SwitchRoot`, `SwitchLabel`, `SwitchControl`, `SwitchThumb`, `SwitchHiddenInput` → `Switch.Root`, `.Label`, `.Control`, `.Thumb`, `.HiddenInput`
- `PinInputParts` and `SwitchParts` are removed; the compound object replaces them.
- Recipe variants are set on Root and reach every part through context, so parts must render inside their Root (or RootProvider):
  - Collapsible: `effect` moves from `Collapsible.Content` to `Collapsible.Root`.
  - PinInput: `PinInputInputProps` no longer accepts `size`; set it on Root.
- `CollapsibleProviderProps` is renamed to `CollapsibleRootProviderProps`.
- `MarqueeEdgeOption` no longer includes `undefined`.

New:

- `<Marquee>`, `<PinInput>` and `<Switch>` accept part elements as direct children to override that part, e.g. `<Switch><Switch.Label textTransform="uppercase">…</Switch.Label></Switch>`.
- `Marquee.Context` and `Collapsible.RootProvider` are part of the compound.
