# Create a Preset Recipe (v2)

Recipes live in `packages/panda-preset` and style the React components. Follow
the rules in the root [`AGENTS.md`](../AGENTS.md) and the
[style guide](./style-guide.md).

**For a new component, don't write the recipe by hand.** `pnpm gen:component`
creates and registers its slot recipe (see
[create-react-component](./create-react-component.md)). Use this guide to fill
in that recipe, or to add a recipe on its own.

## Slot or standard?

- **Slot recipe** (`recipes/slots/<recipe>.ts`, `defineSlotRecipe`): the
  component has more than one styled layer. Every Ark UI component uses a slot
  recipe.
- **Standard recipe** (`recipes/<recipe>.ts`, `defineRecipe`): a single layer,
  like `button` or `tag`.

Recipe names are camelCase (`hoverCard`). Reserved words get a suffix
(`switchRecipe`).

## Slot recipe template

This is what the generator creates. Fill in `base`, `variants` and
`defaultVariants` from the Figma design using semantic tokens only.

```ts
import { hoverCardAnatomy } from '@ark-ui/react'
import { defineSlotRecipe } from '@pandacss/dev'
import type { SlotRecipeConfig } from '@pandacss/types'

/**
 * This module contains the hoverCard recipe.
 * @module
 */

/**
 * Styles for the hoverCard family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/hover-card)
 */
export const hoverCard: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: 'hoverCard',
  slots: hoverCardAnatomy.keys(),
  jsx: [
    // primitives
    'HoverCardRoot',
    'HoverCardTrigger',
    'HoverCardContent',
    // abstractions
    'HoverCard',
  ],

  base: {},
  variants: {},
  defaultVariants: {},
})
```

- For a Cerberus-only component, import the anatomy from `./shared/anatomy`
  (`import { <name>Anatomy } from '../shared/anatomy'`) instead of
  `@ark-ui/react`.
- Keep `jsx` in sync with every primitive and abstraction that uses the recipe,
  or Panda won't extract their styles.
- The explicit `Partial<SlotRecipeConfig>` type is required for JSR (no slow
  types).
- Reuse the shared bases in `recipes/shared/` (`button.base.ts`,
  `input.base.ts`, `modal.base.ts`, `palettes.ts`, `states.ts`) before writing
  new styles.

## Register it

Skip this if the generator created the recipe. Otherwise, in
`packages/panda-preset/src/recipes/index.ts`:

1. Import it with the others in its group (`./slots/...` or `./...`).
2. Add it to `slotRecipes` (slot) or `recipes` (standard).

Then run `pnpm codegen:panda` so the recipe reaches every `styled-system`.

## Test it

Recipe tests live in `tests/panda-preset/recipes/` (`slots/` for slot recipes),
one file per recipe. Run them with:

```bash
pnpm --filter tests exec bun test panda-preset/recipes
```

If the component's docs show variants, also run
`pnpm --filter docs exec panda codegen --spec` so they're documented.
