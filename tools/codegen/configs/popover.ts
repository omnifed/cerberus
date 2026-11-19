import { popoverAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const popoverConfig = defineComponent({
  key: 'popover',
  anatomy: popoverAnatomy,
  description: `
The Popover component is used to show detailed information inside a pop-up, anchored to a trigger or to another element.

Use the default \`<Popover>\` with a \`trigger\` to render the trigger, positioner and content for you, or compose the primitives for full structural control. \`Popover.Header\`, \`Popover.Body\` and \`Popover.Footer\` lay out the content with padding that follows the \`size\` variant. Set \`usage="arrow"\` to show an arrow tip.
  `,

  abstractions: [
    {
      name: 'El',
      file: 'popover',
      description:
        'An abstraction that renders the trigger, the positioner and the content, with an optional arrow',
      isDefaultExport: true,
      types: ['PopoverProps'],
    },
  ],

  // Not exported in v1: a styled `RootProvider` for `usePopover()` state
  // (exported from index.client) and `Popover.Context` render props
  arkMembers: ['RootProvider', 'Context'],

  // Cerberus layout slots of the `popover` recipe, outside Ark's anatomy
  elementParts: { header: 'div', body: 'div', footer: 'div' },

  // Keyboard rows come from @zag-js/docs. A popover is a non-modal dialog by
  // default and APG has no pattern page for that, so no `pattern`/`apgUrl`
  a11y: {},
})
