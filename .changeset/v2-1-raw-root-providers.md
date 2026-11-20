---
'@cerberus-design/react': major
---

The raw, unstyled Ark `*RootProvider` re-exports are removed for components on the v2.1 compound API: `AccordionRootProvider`, `AvatarRootProvider`, `CarouselRootProvider`, `CheckboxRootProvider`, `ClipboardRootProvider`, `DialogRootProvider`, `FieldsetRootProvider`, `MenuRootProvider`, `NumberInputRootProvider`, `PinInputRootProvider`, `PopoverRootProvider`, `SliderRootProvider`, `SwitchRootProvider`, `TabsRootProvider` and `TooltipRootProvider`.

Their parts now read the Cerberus recipe from context, so they throw inside a raw Ark provider. Use the styled member instead, with the same `useX()` hook (still exported):

```tsx
const accordion = useAccordion()
<Accordion.RootProvider value={accordion}>…</Accordion.RootProvider>
```

`Accordion.RootProvider`, `Avatar.RootProvider`, `Carousel.RootProvider`, `PinInput.RootProvider` and `Switch.RootProvider` are new.
