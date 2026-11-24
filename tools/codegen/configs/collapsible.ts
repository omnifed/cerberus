import { collapsibleAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const collapsibleConfig = defineComponent({
  key: 'collapsible',
  anatomy: collapsibleAnatomy,
  description: `
The Collapsible component is used to expand and collapse additional content. It allows you to show or hide content with a trigger, and is useful for accordions, dropdowns, and expandable sections.

It supports an initial open state, a partial collapsed height to preview the content, and different open/close effects on the content.
  `,
  example: `
<Collapsible>
  <Collapsible.Trigger>Toggle</Collapsible.Trigger>
  <Collapsible.Content>Collapsible content goes here.</Collapsible.Content>
</Collapsible>
`,

  // v1 exported a RootProvider; keep it as `Collapsible.RootProvider`
  arkMembers: ['RootProvider'],
})
