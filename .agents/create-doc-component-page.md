# Create a Component Docs Page (v2)

Every component has one MDX page on the docs site. Follow the rules in the root
[`AGENTS.md`](../AGENTS.md) and the docs structure in [docs.md](./docs.md).

**For a new component, the generator already created the page and a basic
demo** (`pnpm gen:component`). Use this guide to finish them.

## Files

| File                                              | Purpose                                  |
| ------------------------------------------------- | ---------------------------------------- |
| `docs/content/docs/components/<name>.mdx`         | The page                                 |
| `docs/examples/components/<name>/<demo>.demo.tsx` | One file per example                     |
| `docs/examples/components/<name>/index.tsx`       | Registers every demo in `DEMOS`          |
| `docs/generated/api-specs/<name>.*`               | The API table. **Generated, don't edit** |

Pages are added to the site and its navigation automatically from the file and
its frontmatter. There is no list to update.

## Frontmatter

```yaml
---
title: Accordion
description: A way to show and hide information by sections.
npm: '@cerberus-design/react'
source: 'components/accordion' # path under packages/react/src
recipe: 'slots/accordion.ts' # path under packages/panda-preset/src/recipes
ark: 'accordion' # Ark UI slug, only for Ark-based components
group: Components # nav group: Components, Layout, Utilities or Concepts
order: 1 # optional: position in its group
since: '2.0.0' # optional: marks the whole page as new
---
```

`title` and `group` are required. The full schema is the `docs` collection in
`docs/velite.config.ts`.

## Page flow

Use these sections, in this order:

1. **Import**: the single object import.
2. **Usage**: what the component is for, and the `basic` demo.
3. **Variant examples**: one `##` section per variant or feature, each with a
   short description and a demo.
4. **Customizing**: style props, child part overrides, and `unstyled`.
5. **API**: `<ComponentApi spec="<name>" />`. It renders the generated spec, so
   improve the API text in `tools/codegen/configs/<name>.ts`, not here.

````mdx
## Import

```tsx
import { Accordion } from '@cerberus/react'
```
````

## Usage

Use `Accordion` with `Accordion.ItemGroup` for an accessible, collapsible list out of the box.

<Example path="components/accordion" demo="basic" />

## Customizing

Customize `Accordion` using style props, direct JSX child part overrides inside `Accordion.ItemGroup`, or low-level primitives.

<Example path="components/accordion" demo="custom" />

### Unstyled <FeatureBadge since="2.0.0" />

Add `unstyled` to `Accordion` to strip Cerberus recipe classes across the entire tree, or pass `unstyled` to a single primitive part.

<Example path="components/accordion" demo="unstyled" />

## API

<ComponentApi spec="accordion" />
```

Mark anything new with `<FeatureBadge since="<version>" />` next to its heading.

## Demos

Each demo is a named export in its own `*.demo.tsx` file:

```tsx
import { Accordion } from '@cerberus-design/react'

export function BasicDemo() {
  return (
    <Accordion defaultValue={['one']}>
      <Accordion.ItemGroup heading="What is Cerberus?" value="one">
        A design system.
      </Accordion.ItemGroup>
    </Accordion>
  )
}
```

Then register it in the folder's `index.tsx`. The key is the `demo` name used in
the MDX:

```tsx
import { BasicDemo } from './basic.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
}
```

- Import components from `@cerberus-design/react`, and Panda helpers from
  `styled-system/*` (e.g. `import { Box } from 'styled-system/jsx'`).
- A demo that passes primitives as children to an abstraction must start with
  `'use client'`, or the part overrides may not be picked up.
- Keep demo data in a `data.json` next to the demos.

## Verify

Run `pnpm start:docs` and open `/docs/components/<name>`. Very large API pages
can hang a browser in dev mode. If that happens, check the server-rendered HTML
with `curl` instead.
