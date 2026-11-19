---
'@cerberus-design/react': major
---

Fieldset, Slider, NumberInput and Tabs now use the v2.1 compound API. `<Fieldset>`, `<Slider>` and `<NumberInput>` still render the same ready-made component (also available as `.El`), and now accept part elements as direct children to override that part.

Breaking changes:

- **Tabs: `Tabs.List` no longer renders the active-tab indicator.** Use the new `Tabs.ListGroup` (list + indicator), or add `<Tabs.Indicator />` yourself. Code using `<Tabs.List>` still type-checks but loses the indicator.
- Tabs: `Tabs.Tab` → `Tabs.Trigger`, `Tabs.Panel` → `Tabs.Content`. Types `TabContentProps` → `TabsContentProps`, `TabIndicatorProps` → `TabsIndicatorProps`. `<Tabs>` now renders as `Tabs.Root`.
- The standalone part exports are removed; use the compound members instead.
  - `FieldsetRoot`, `FieldsetLegend`, `FieldsetHelperText`, `FieldsetErrorText` → `Fieldset.Root`, `.Legend`, `.HelperText`, `.ErrorText`
  - `SliderRoot`, `SliderLabel`, `SliderValueText`, `SliderControl`, `SliderTrack`, `SliderRange`, `SliderThumb`, `SliderHiddenInput`, `SliderMarkerGroup`, `SliderMarker`, `SliderMarkerIndicator`, `SliderDraggingIndicator` → `Slider.Root`, `.Label`, … `.DraggingIndicator`
  - `NumberInputRoot`, `NumberInputLabel`, `NumberInputControl`, `NumberInputInput`, `NumberInputIncrementTrigger`, `NumberInputDecrementTrigger`, `NumberInputScrubber` → `NumberInput.Root`, `.Label`, … `.Scrubber`
  - `TabsRoot`, `TabsList`, `TabsTrigger`, `TabsContent`, `TabsIndicator` → `Tabs.Root`, `.List`, `.Trigger`, `.Content`, `.Indicator`
- `FieldsetParts`, `NumberInputParts` and `TabsParts` are removed; the compound object replaces them.
- Slider: `SliderProvider` / `Slider.Provider` → `Slider.RootProvider`, and `SliderProviderProps` → `SliderRootProviderProps`. `Slider.Thumbs` no longer takes `value` or `direction` (it renders one thumb per current value from context); `Slider.Marks` no longer takes `direction`.
- Recipe variants are set on Root (or RootProvider) and reach every part through context, so parts must render inside it. Fieldset's `usage` and Slider's `direction`/`usage` are no longer accepted on individual parts.

New:

- `Fieldset.RootProvider`, `Fieldset.Context`, `NumberInput.RootProvider`, `NumberInput.Context`, `NumberInput.ValueText`, `Tabs.RootProvider` and `Tabs.Context` are part of the compound.
- Fieldset's `legend`, `helperText` and `errorText` accept any `ReactNode`.
