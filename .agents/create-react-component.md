# Create a React Component (v2)

Use this playbook to add a new component to `@cerberus-design/react`. Follow the
rules in the root [`AGENTS.md`](../AGENTS.md) and the conventions in the
[style guide](./style-guide.md).

**Never build a component by hand or by copying another one.** The generator
writes the files that must stay in sync with the config; anything you hand-write
there is overwritten or fails `pnpm generate:check`.

## 1. Scaffold

Run from the repo root. `<Name>` is PascalCase (`HoverCard`).

```bash
pnpm gen:component <Name> --dry-run   # list what will be created
pnpm gen:component <Name>
```

- If `@ark-ui/react/<name>` exists, the component is built from the Ark UI
  anatomy.
- Otherwise it is Cerberus-only. Add `export const <name>Anatomy` to
  `packages/panda-preset/src/recipes/shared/anatomy.ts` **before** scaffolding,
  or the generator stops with an error naming the missing anatomy.
- The generator refuses names that already have a config or component folder.

It creates these files, never overwriting one that exists:

| File                                                                       | You edit it?                                     |
| -------------------------------------------------------------------------- | ------------------------------------------------ |
| `tools/codegen/configs/<name>.ts`                                          | Yes: the component's source of truth             |
| `packages/react/src/components/<name>/<name>.tsx`                          | Yes: the default abstraction                     |
| `packages/panda-preset/src/recipes/slots/<recipe>.ts`                      | Yes: styles ([guide](./create-preset-recipe.md)) |
| `tests/panda-preset/recipes/slots/<recipe>.test.ts`                        | Yes                                              |
| `tests/react/components/<name>.test.tsx`                                   | Yes                                              |
| `docs/content/docs/components/<name>.mdx`                                  | Yes ([guide](./create-doc-component-page.md))    |
| `docs/examples/components/<name>/index.tsx`, `basic.demo.tsx`              | Yes                                              |
| `packages/react/src/components/<name>/primitives.ts`, `api.ts`, `index.ts` | **No: generated**                                |
| `docs/generated/api-specs/<name>.*`                                        | **No: generated**                                |

## 2. Regenerate styles

The new recipe has to reach every `styled-system` before anything type-checks:

```bash
pnpm codegen:panda
pnpm --filter docs exec panda codegen --spec
```

## 3. Fill in the config

`tools/codegen/configs/<name>.ts` drives the primitives, the object API, the
JSDoc and the docs API table. See `tools/codegen/manifest.ts` for every field and
`configs/accordion.ts` for a complete example. At minimum:

- `description`: what the component is for and when to use it.
- `a11y`: the WAI-ARIA `pattern`, its `apgUrl`, and `keyboard` rows for any key
  the Zag machine handles that `@zag-js/docs` doesn't describe. Generation fails
  if a handled key is undocumented.
- `abstractions`: one entry per abstraction file. The default one is
  `{ name: 'El', file: '<name>', isDefaultExport: true, types: ['<Name>Props'] }`.

After every config change:

```bash
pnpm generate:api
pnpm generate:docs
```

## 4. Write the abstraction

Every abstraction file:

1. Starts with `'use client'`.
2. Exports a named `function` component (`<Name>El` for the default one).
3. Lists the **inner** layers a consumer can override in a `PARTS` object. The
   root is not listed: it takes the component's own props.
4. Runs `children` through `extractParts(children, PARTS)` from
   `../../internal/extract-parts`, which returns:
   - `parts`: the props of each direct part child, keyed like `PARTS`. An empty
     child (`<ProgressBar.Bar data-testid="qa" />`) patches that layer; a child
     with `children` replaces its default content.
   - `content`: every other child, rendered in the default slot.
5. Spreads `parts.<name>` onto the matching layer, after the defaults, so
   consumer props win.

There is no `createAbstraction` helper. Don't create one or reintroduce it.

````tsx
'use client'

import type { ReactNode } from 'react'
import { extractParts } from '../../internal/extract-parts'
import {
  CircularProgressInfoGroup,
  CircularProgressLabel,
  CircularProgressRoot,
  CircularProgressValueText,
  type CircularProgressRootProps,
} from './primitives'

const PARTS = {
  infoGroup: CircularProgressInfoGroup,
  valueText: CircularProgressValueText,
  label: CircularProgressLabel,
}

export type CircularProgressProps = CircularProgressRootProps & {
  label?: ReactNode
}

/**
 * The CircularProgress component ... Direct `CircularProgress.InfoGroup`,
 * `CircularProgress.ValueText` or `CircularProgress.Label` children override
 * that part. A part child with children replaces its default content.
 * @example
 * ```tsx
 * <CircularProgress value={50} label="Uploading" />
 * ```
 */
export function CircularProgressEl(props: CircularProgressProps) {
  const { label, children, ...rootProps } = props
  const { parts, content } = extractParts(children, PARTS)

  // Pull out `children` so a part child can replace the default content
  const { children: labelChildren, ...labelProps } = parts.label ?? {}

  return (
    <CircularProgressRoot {...rootProps}>
      <CircularProgressInfoGroup {...parts.infoGroup}>
        <CircularProgressValueText {...parts.valueText} />
        <CircularProgressLabel {...labelProps}>
          {labelChildren ?? label ?? 'Done'}
        </CircularProgressLabel>
        {content}
      </CircularProgressInfoGroup>
    </CircularProgressRoot>
  )
}
````

This is a trimmed version of
`packages/react/src/components/circular-progress/circular-progress.tsx`; read
the full file before writing a new abstraction. Document which parts can be
overridden in the JSDoc, as above.

If the abstraction always supplies a required prop to a part (like
`Marquee.Edge`'s `side`), list it in the config's `patchable`
(`patchable: { Edge: ['side'] }`) so consumers can omit it in a patch child.

To add another abstraction (e.g. `Accordion.ItemGroup`), create its file next to
the default one, add it to the config's `abstractions`, and run
`pnpm generate:api`.

## 5. Write the tests

Use the DX contract harness. Every abstraction must render `'Content body'`:

```tsx
import { describeDXContract } from '@/test-utils/dx-harness'
import { Admonition } from '@cerberus-design/react/admonition'

describeDXContract({
  name: 'Admonition',
  Root: Admonition.Root,
  primitiveTestNode: (
    <Admonition.Root>
      <Admonition.Content data-testid="primitive-content" />
    </Admonition.Root>
  ),
  abstractions: [
    {
      name: 'Admonition',
      Component: Admonition,
      defaultProps: { heading: 'Standard Heading' },
      children: 'Content body',
      PartToPatch: Admonition.Heading, // receives props from an empty child
      PartToReplace: Admonition.Indicator, // replaced by a child with content
    },
  ],
})
```

Add `describe` blocks after the contract for behavior specific to the component.
Bun's `expect` is extended with the Jest DOM matchers (`toBeInTheDocument()`,
`toHaveAttribute()` ...).

## 6. Verify

```bash
pnpm lint:ox
pnpm lint
pnpm test
pnpm generate:check
```

Then add a changeset (`pnpm changeset`, a `minor` bump for a new component).
