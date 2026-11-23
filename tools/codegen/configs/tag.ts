import { defineComponent } from '../manifest'

export const tagConfig = defineComponent({
  key: 'tag',
  // Cerberus-only (no `@ark-ui/react/tag`): three `<span>` roots, each styled by
  // its own plain (non-slot) recipe. `closableRoot` is the bare closable root
  // that `Tag.Closable` adds a close button to (like Button's `iconButtonRoot`)
  anatomy: ['root', 'gradient', 'closableRoot'],
  // Every part renders the same data-scope/data-part as the v1 tags
  parts: {
    root: {
      description: 'A filled `<span>` tag styled by the `tag` recipe.',
    },
    gradient: {
      description:
        'A `<span>` tag with a gradient background, styled by the `gradientTag` recipe.',
      recipe: 'gradientTag',
      dataScope: 'tag',
      dataPart: 'root',
    },
    closableRoot: {
      description:
        'The bare `<span>` of a closable tag (`closableTag` recipe), without the close button `Tag.Closable` adds.',
      recipe: 'closableTag',
      dataScope: 'tag',
      dataPart: 'root',
    },
  },
  types: ['TagRootProps', 'TagGradientProps', 'TagClosableRootProps'],
  description: `
The Tag component is used to display a meta description: a filled, gradient or
closable label.

\`<Tag>\` renders \`Tag.Closable\` when \`onClick\` is set, \`Tag.Gradient\` when
\`gradient\` is set, and \`Tag.Root\` (styled by the \`tag\` recipe) otherwise.

**NOTE**: This API is _slotless_: each part is a single rendered layer with its own recipe.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'tag',
      description:
        'Renders `Tag.Closable` when `onClick` is set, `Tag.Gradient` when `gradient` is set, else `Tag.Root`',
      types: ['TagProps', 'FilledTagProps', 'GradientTagProps'],
      isDefaultExport: true,
    },
    {
      name: 'Closable',
      file: 'closable',
      description:
        'A `Tag.ClosableRoot` with a close IconButton (labelled "Close tag") that calls `onClick`; `pending` disables it',
      types: ['ClosableTagProps'],
    },
  ],
  // v1 top-level names, kept as aliases of the parts and abstractions
  exports: [
    { from: './closable', values: ['ClosableTag'] },
    {
      from: './primitives',
      values: ['FilledTag', 'GradientTag', 'ClosableTagRoot'],
    },
  ],
})
