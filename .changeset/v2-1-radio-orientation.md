---
'@cerberus-design/react': major
---

RadioGroup's `orientation` now reaches the Zag machine, and both default to horizontal.

Silent behavior changes:

- A `<RadioGroup>` (`RadioGroup.Root`) with no `orientation` now reports `aria-orientation="horizontal"` and `data-orientation="horizontal"`, matching the horizontal layout the recipe has always drawn. It used to report Zag's default, `vertical`.
- `orientation` passed to `<RadioGroup>` now also sets `aria-orientation`/`data-orientation`. Before, it only styled the group, and Zag always reported `vertical`.

`RadioGroup.RootProvider` is unchanged: its `orientation` prop only styles. Pass `orientation` to `useRadioGroup()` for the behavior, which still defaults to `vertical` there.
