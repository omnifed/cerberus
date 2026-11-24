---
'@cerberus-design/react': major
---

Rating's default item icons are now configurable through `CerberusProvider` with the new `rating` and `ratingHalf` icon keys (`defineIcons({ rating, ratingHalf })`). They default to Carbon's `StarFilled`/`StarHalf` at 24px, so the default look is unchanged.

Breaking changes:

- `<Rating>` (`Rating.El`) reads its icons from the Cerberus context, so it must render inside a `CerberusProvider`. The `Rating.*` primitives don't need one.
- `SystemConfig['icons']` requires the `rating` and `ratingHalf` keys. Configs built with `defineIcons` or `makeSystemConfig` get them automatically.
