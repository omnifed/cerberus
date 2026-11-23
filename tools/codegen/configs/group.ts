import { defineComponent } from '../manifest'

export const groupConfig = defineComponent({
  key: 'group',
  // Cerberus-only (no `@ark-ui/react/group`, so detection already says `cerberus`):
  // a single div styled by the plain (non-slot) `group` recipe
  anatomy: ['root'],
  // `GroupProps` is the v1 name of `GroupRootProps`
  types: ['GroupRootProps', 'GroupProps'],
  description: `
The Group component lays out its children in a normal, attached, grown or stacked
group, horizontally or vertically.

Use the \`layout\` and \`orientation\` props to choose how the children are grouped.

**NOTE**: This API is _slotless_ and is a single rendered layer: \`<Group>\` renders \`Group.Root\`.
    `,
  example: `
<Group layout="attached">
  <Button usage="outlined">Item 1</Button>
  <Button usage="outlined">Item 2</Button>
</Group>
`,
})
