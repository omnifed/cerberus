# Cerberus: Agent Guide

Cerberus is a React 19 design system built on [Ark UI](https://ark-ui.com/) and
[Panda CSS v2](https://panda-css.com/), in a pnpm workspace monorepo. This file
is the source of truth for agents. [`CONTRIBUTING.md`](./CONTRIBUTING.md) has the
long-form human version.

## Rules

- Run every script from the repo root. Target a workspace with
  `pnpm --filter <name>`. Never `cd` into a workspace to run scripts.
- Never hand-edit generated files: `packages/react/src/components/*/primitives.ts`,
  `api.ts`, `index.ts`, `docs/generated/**` and every `styled-system/`. Change
  the config in `tools/codegen/configs/` and regenerate.
- New React components start from the generator (`pnpm gen:component`), never
  from scratch or by copying another component.
- Every abstraction is a `function` component that starts with `'use client'`
  and runs its `children` through `extractParts`
  (`packages/react/src/internal/extract-parts.ts`). Spread `parts.<name>` onto
  each inner layer and render the leftover `content` in the default slot. Copy
  `circular-progress/circular-progress.tsx`. There is no `createAbstraction`:
  don't add or use one.
- Tests live in `tests/`, never in a package. Bun's `expect` is extended with
  the Jest DOM matchers (`toBeInTheDocument()`, `toHaveAttribute()`).
- Style with Panda style props and semantic tokens (`page.text.initial`,
  `danger.border.initial`), never raw colors or pixel values.
- Public API changes and bug fixes need a changeset (`pnpm changeset`). Ask the
  user for the bump type if it isn't obvious.

## v2 conventions

v1 patterns are still in old code and training data. Use the v2 form:

| Don't (v1)                                     | Do (v2)                                                    |
| ---------------------------------------------- | ---------------------------------------------------------- |
| `presets: [createCerberusPreset()]`            | `designSystem: '@cerberus-design/react'` (or `/data-grid`) |
| `import { cerberus } from 'styled-system/jsx'` | `import { styled } from 'styled-system/jsx'`               |
| `<Text as="h1">`                               | `<cerberus.h1>` (`cerberus` from `@cerberus-design/react`) |
| `FieldParts.Input`, `parts.ts` files           | `Field.Input`: every API is one object with its parts      |
| `_cerberusTheme`                               | `_themeCerberus`                                           |
| `data-color-mode="dark"`                       | `className="dark"` (`dark`, `light`, `system`)             |
| `--font-poppins`, `--font-recursive`           | `--font-body`, `--font-mono`                               |
| Button `shape="default"`                       | Button `shape="squared"`                                   |

## Commands

| Task                           | Command                                                  |
| ------------------------------ | -------------------------------------------------------- |
| Install                        | `pnpm install`                                           |
| Docs site / sandbox            | `pnpm start:docs`                                        |
| Rebuild packages while working | `pnpm watch:react`, `pnpm watch:data-grid`               |
| Regenerate every styled-system | `pnpm codegen:panda`                                     |
| All tests                      | `pnpm test`                                              |
| One test file or folder        | `pnpm --filter tests exec bun test react/components/tag` |
| Generator tests                | `pnpm test:codegen`                                      |
| Lint                           | `pnpm lint:ox`                                           |
| Type-check                     | `pnpm lint`                                              |
| Generated files are in sync    | `pnpm generate:check`                                    |

Before you say work is done, run what CI runs: `pnpm lint:ox`, `pnpm lint`,
`pnpm test` and `pnpm generate:check`. Formatting is automatic (Oxfmt runs in
the pre-commit hook), so don't hand-format.

## Workflows

### New React component

1. `pnpm gen:component <Name> --dry-run`, then without `--dry-run`. For a
   Cerberus-only component (no Ark UI equivalent), first add `<name>Anatomy` to
   `packages/panda-preset/src/recipes/shared/anatomy.ts`.
2. `pnpm codegen:panda`, then `pnpm --filter docs exec panda codegen --spec`.
3. Fill in the `TODO`s: the config (`tools/codegen/configs/<name>.ts`), the
   abstraction, the recipe, the tests, the docs page and the demos.
4. After changing a config, run `pnpm generate:api` and `pnpm generate:docs`.
5. Run the checks above.

Full playbook: [`.agents/create-react-component.md`](./.agents/create-react-component.md).

### Tests for a component

Use `describeDXContract` from `tests/test-utils/dx-harness.tsx`. Each abstraction
must render `'Content body'`: pass it as `children` (or render it from
`defaultProps`). See `tests/react/components/admonition.test.tsx`.

### Docs page

MDX in `docs/content/docs/<section>/`. Pages are added to the nav automatically.
Demos are `*.demo.tsx` files in `docs/examples/<section>/<name>/`, registered in
that folder's `index.tsx`. Full playbook:
[`.agents/create-doc-component-page.md`](./.agents/create-doc-component-page.md).

## Map

| Path                      | What                                                      |
| ------------------------- | --------------------------------------------------------- |
| `packages/react`          | `@cerberus-design/react`: components                      |
| `packages/data-grid`      | `@cerberus-design/data-grid`                              |
| `packages/signals`        | `@cerberus-design/signals`                                |
| `packages/panda-preset`   | `@cerberus/panda-preset`: recipes, conditions, global CSS |
| `packages/tokens`         | `@cerberus/tokens`: design tokens                         |
| `packages/preset-*-theme` | Theme presets                                             |
| `tools/codegen`           | The component generator and its configs                   |
| `tests`                   | Every test, mirroring the package it covers               |
| `docs`                    | The Next.js docs site (see `docs/AGENTS.md` for Next.js)  |
| `.agents/`                | Task playbooks and skills                                 |

## Gotchas

- **Docs 500s with "designSystem isn't installed"** after rebuilding a package:
  stop the docs server, delete `docs/.next`, and restart.
- **A new recipe is missing from `styled-system`** (e.g. `has no exported
  member`): run `pnpm codegen:panda`. The `tests` workspace builds its styles
  from the packaged design system, so it needs the whole chain.
- **Large API pages can hang a browser** in docs dev. Check them with `curl`
  against the server-rendered HTML instead.
- **Demos that pass primitives as children** to an abstraction need
  `'use client'`, or the part overrides may not be picked up.

## Skills and tools

Skills live in `.agents/skills/`. Load the one that matches your task:

- `panda-css`, `panda-css-theming`, `panda-css-migrate`: Panda CSS v2. `pnpm install`
  installs these, and also copies them into `.claude/`, `.cursor/`, `.gemini/`
  and `.github/` skills folders
- `cerberus-form-component-styling`: styling custom form components
- `cerberus-realtime-data-grid`: Data Grid with Signals
- `token-hound`, `charons-ferry`: standardizing code and Figma files to Cerberus tokens

The Panda MCP server is configured in `.mcp.json`.
