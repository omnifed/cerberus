import { dialogAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const dialogConfig = defineComponent({
  key: 'dialog',
  anatomy: dialogAnatomy,
  description: `
The Dialog component is a modal window that appears on top of the main content. It traps focus while open and returns focus to the trigger when it closes.

\`Dialog.Root\` provides the dialog state and the \`size\` variant to its parts without rendering an element. Use the default \`<Dialog>\` inside it to render the portalled backdrop, positioner and content for you, and \`Dialog.CloseIconTrigger\` for the default close button, or compose the primitives for full structural control. Use \`Dialog.RootProvider\` with \`useDialog()\` to control the dialog from outside.
  `,

  abstractions: [
    {
      name: 'El',
      file: 'dialog',
      description:
        'An abstraction that renders the dialog content inside a Portal with the backdrop and positioner',
      isDefaultExport: true,
      types: ['DialogProps'],
    },
    {
      name: 'CloseIconTrigger',
      file: 'close-icon-trigger',
      description:
        'An abstraction of the close trigger that renders a ghost IconButton with the Cerberus close icon',
      types: ['DialogCloseIconTriggerProps'],
    },
  ],

  // Dialog's anatomy has no `root`: `Root` and `RootProvider` provide the recipe
  // without rendering an element. `RootProvider` pairs with `useDialog()`
  arkMembers: ['RootProvider', 'Context'],

  // v1 declared this in index.ts, which is generated now
  exports: [{ from: './types', types: ['OpenChangeDetails'] }],

  a11y: {
    pattern: 'Dialog (Modal)',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/',
  },
})
