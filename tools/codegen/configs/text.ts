import { defineComponent } from '../manifest'

export const textConfig = defineComponent({
  key: 'text',
  name: 'Text',
  source: 'cerberus',
  // Text has no Panda recipe, and renders no data attributes (it is plain
  // typography), so its part documents no selector
  recipe: false,
  parts: { root: { dataScope: false } },
  anatomy: ['root'],
  types: ['TextRootProps'],
  description: `
The Text component renders typography with Panda style props such as
\`textStyle\` and \`color\`. Choose the element with \`as\` (\`p\` by default,
\`h1\`–\`h6\`, \`strong\`, \`em\`, \`small\` or \`span\`); it accepts every
HTML attribute of that element, \`ref\` included.

**NOTE**: This API is _slotless_ and has no recipe: nothing is styled until you
pass style props.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'text',
      description:
        'Renders the element chosen with `as` (`p` by default, `h1`–`h6`, `strong`, `em`, `small`, `span`) with style props',
      types: ['TextProps', 'Headings', 'TextElements'],
      isDefaultExport: true,
    },
  ],
})
