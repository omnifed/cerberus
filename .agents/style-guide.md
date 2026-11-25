# Cerberus Repository Style Guide

Code conventions for every package. For workflows and commands, see the root
[`AGENTS.md`](../AGENTS.md).

## General

- TypeScript everywhere. Type every function parameter, prop, context value and
  return value.
- Named exports only. No default exports outside of Next.js and config files.
- Named `function` declarations; arrow functions only for callbacks.
- `const` by default; `let` only when you reassign.
- JSDoc on every exported function, component, hook and constant.
- Formatting and linting are handled by [Oxfmt](https://oxc.rs/docs/guide/usage/formatter.html)
  and [Oxlint](https://oxc.rs/docs/guide/usage/linter.html) in the pre-commit
  hook. Don't hand-format.
- Never hand-edit a file that starts with `@generated` or lives in
  `styled-system/` or `docs/generated/`.

## `packages/panda-preset`

```
src/
  conditions.ts      Panda conditions
  config.ts          createCerberusConfig
  globalCss.ts       global CSS and the --global-* vars
  globalVars.ts      registered CSS vars
  index.ts           entry point
  patterns.ts        Panda patterns
  preset.ts          the preset
  recipes/           standard recipes (button.ts, tag.ts ...)
    slots/           slot recipes (accordion.ts ...)
    shared/          anatomy and shared style bases
    index.ts         registers every recipe
  theme/             tokens, text styles, layer styles, keyframes, easings
  types.ts           public types (e.g. StrictNonNullable)
  utilities/         custom Panda utilities
```

- **File names**: `camelCase` (`globalCss.ts`, `closableTag.ts`).
- **Recipe names**: `camelCase`, matching the file (`closableTag`). Reserved
  words get a `Recipe` suffix (`switchRecipe`).
- **JSR**: the package publishes to JSR from source, so every export needs an
  explicit type (no slow types), e.g. `export const tag: RecipeConfig<RecipeVariantRecord> = defineRecipe(...)`.
- **Styles**: semantic tokens only (`page.text.initial`, `danger.border.initial`).
  No raw colors or pixel values.

See [create-preset-recipe](./create-preset-recipe.md) for recipes.

## `packages/react`

```
src/
  components/<name>/
    primitives.ts    generated: styled Ark UI (or Cerberus) parts
    api.ts           generated: the object API (Accordion.Root ...) and its JSDoc
    index.ts         generated: the public entry point
    <name>.tsx       the default abstraction
    <other>.tsx      more abstractions (e.g. item-group.tsx)
  config/            icon definitions
  context/           providers (CerberusProvider, theme, feature flags ...)
  hooks/             custom hooks
  internal/          extractParts (part overrides for abstractions)
  system/            the cerberus factory and its types
  utils/             helpers
  index.ts           entry point
  index.client.ts    client entry point
```

- **File names**: `kebab-case` (`item-group.tsx`, `date-picker`).
- **Component names**: `PascalCase`. Every component is one object (`Field`,
  `Field.Input`), never a separate `*Parts` export.
- **Abstractions**: `function` components that start with `'use client'`, run
  `children` through `extractParts`, and spread `parts.<name>` onto each inner
  layer. See [create-react-component](./create-react-component.md).
- **Elements**: render styled HTML with the `cerberus` factory
  (`<cerberus.p>`, `<cerberus.div>`), not `Text` (deprecated).
- **Hooks**: `use` prefix (`useTheme`); type parameters and return values.
- **Exports**: the generator writes each component's `index.ts`. Don't add
  barrel exports by hand.
- **Server first**: keep non-interactive code server-compatible; only
  abstractions and interactive code are client modules.

## `docs`

The docs follow the same conventions. See [docs.md](./docs.md) for the site
structure.

## `tests`

Every test lives in `tests/`, in a folder that mirrors its package
(`tests/react/components/accordion.test.tsx`). Component tests use the DX
contract harness (`tests/test-utils/dx-harness.tsx`). Bun's `expect` is
extended with the Jest DOM matchers (`toBeInTheDocument()`, `toHaveAttribute()`).
