import { tooltipAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const tooltipConfig = defineComponent({
  key: 'tooltip',
  anatomy: tooltipAnatomy,
  description: `
The Tooltip component is a small pop-up box that appears when a user hovers over or focuses an element, providing additional information about it.

Use the default \`<Tooltip>\` with a \`content\` prop to wrap a single trigger element, or compose the primitives for full structural control. \`Tooltip.Root\` renders no element: it provides the tooltip state and styles to the trigger, positioner, content and arrow parts. It supports every placement and can render its content in a Portal.
  `,

  abstractions: [
    {
      name: 'El',
      file: 'tooltip',
      description:
        'An abstraction that wraps its child in the trigger and renders the content in a positioned bubble with an arrow, optionally in a Portal',
      isDefaultExport: true,
      types: ['TooltipProps'],
    },
  ],

  // Not exported in v1: a styled `RootProvider` for `useTooltip()` state
  // (exported from index.client) and `Tooltip.Context` render props
  arkMembers: ['RootProvider', 'Context'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Tooltip',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/tooltip/',
  },
})
