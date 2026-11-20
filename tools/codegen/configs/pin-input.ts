import { pinInputAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const pinInputConfig = defineComponent({
  key: 'pin-input',
  anatomy: pinInputAnatomy,
  description: `
The PinInput component lets users enter and manage fixed-length codes, such as verification codes or PINs, one character at a time. It manages focus movement between the inputs and aggregates the value for you.

Rendered on its own, PinInput displays one input per \`count\` (3 by default) plus a hidden input that carries the combined value for form submission. It supports different sizes to match the design requirements of your application.
  `,
  abstractions: [
    {
      name: 'El',
      file: 'pin-input',
      description:
        'An entry abstraction that renders the control, one input per `count` and the hidden input',
      isDefaultExport: true,
      types: ['PinInputProps'],
    },
  ],

  // Not in Ark's pin-input anatomy, so it has no recipe slot
  arkMembers: ['HiddenInput', 'RootProvider'],

  // Rows come from @zag-js/docs, which doesn't describe Enter
  a11y: {
    keyboard: [
      {
        key: 'Enter',
        description:
          'When focus is on an input, submits the form the pin input belongs to.',
      },
    ],
  },
})
