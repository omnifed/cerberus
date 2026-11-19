import { switchAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const switchConfig = defineComponent({
  key: 'switch',
  anatomy: switchAnatomy,
  description: `
The Switch component is a toggle input that allows users to switch between two states, such as turning a setting on or off.

Use the default \`<Switch>\` for a labeled switch with the Cerberus check indicator, or compose the primitives for full structural control. To use it within a form, wrap it with the Field component.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'switch',
      description:
        'An abstraction that renders a labeled switch with the Cerberus check indicator in the thumb',
      types: ['SwitchProps'],
      isDefaultExport: true,
    },
  ],

  // Not in Ark's switch anatomy, so it has no recipe slot
  arkMembers: ['HiddenInput'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Switch',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/switch/',
  },
})
