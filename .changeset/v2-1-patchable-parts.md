---
'@cerberus-design/react': major
---

Patch children no longer need the props their abstraction supplies. A self-closing part child that patches an abstraction's part can now omit those props:

- `Marquee.Edge` `side` and `Marquee.Content` `children` inside `<Marquee>`
- `PinInput.Input` `index` inside `<PinInput>`
- `Accordion.Item` `value` inside `Accordion.ItemGroup`
- `Pagination.Item` `type`/`value` and `Pagination.Ellipsis` `index` inside `<Pagination>` and `Pagination.ItemList`
- `Rating.Item` `index` inside `<Rating>`

For example, `<Marquee.Edge data-testid="qa" />` now type-checks. Before, it needed a `side` that was then ignored.

These members are typed with the new `Patchable<typeof Part, 'prop'>`, which adds a call signature where only those props are optional. Their `*Props` types (`MarqueeEdgeProps`…) are unchanged and still require them. Because JSX can't tell a patch child from direct use, the listed props also type-check when omitted in a direct composition (`<Marquee.Root><Marquee.Edge /></Marquee.Root>`), where Ark still needs them at runtime.
