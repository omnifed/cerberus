import { tabsAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const tabsConfig = defineComponent({
  key: 'tabs',
  anatomy: tabsAnatomy,
  description: `
The Tabs component is used to create a tabbed interface. It organizes related content into panels that share the same space, showing one panel at a time while the tab list lets users switch between them.

Use \`Tabs.ListGroup\` for a tab list that renders the active tab indicator for you, or compose the primitives for full structural control. It supports different palettes, a vertical orientation, and placing the indicator at the start or end edge of the list.
  `,

  abstractions: [
    {
      name: 'ListGroup',
      file: 'list-group',
      description:
        'An abstraction that renders the tab list with the active tab indicator',
      types: ['TabsListGroupProps'],
    },
  ],

  arkMembers: ['RootProvider', 'Context'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Tabs',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tabs/',
  },
})
