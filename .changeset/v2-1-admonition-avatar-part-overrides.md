---
'@cerberus-design/react': major
---

`<Admonition>` and `<Avatar>` now take direct part children as overrides, like the other v2.1 abstractions. They still render what they rendered in v1.

Silent behavior changes:

- A direct `Admonition.Indicator`, `.Content`, `.Heading` or `.Description` child of `<Admonition>` is now consumed as an override of that part. It used to render nested inside the description. An `Admonition.Heading` child with children renders even without the `heading` prop.
- A direct `Avatar.Fallback` or `Avatar.Image` child of `<Avatar>` now overrides that part, and the default fallback and image still render. Other children still replace both, as in v1.
- The close button of a `palette="page"` (or palette-less) Admonition now uses the IconButton `action` palette. Before, it received `page`, a palette IconButton doesn't have, so it was unstyled.

Breaking changes:

- `<Admonition>`/`Admonition.El` and `<Avatar>`/`Avatar.El` no longer accept the pre-release `slots`/`slotProps` props (never in a v1 release).

New:

- A self-closing part child patches that part's props. A part child with children (or `asChild`) replaces its default content.
