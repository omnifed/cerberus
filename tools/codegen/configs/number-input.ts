import { numberInputAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const numberInputConfig = defineComponent({
  key: 'number-input',
  anatomy: numberInputAnatomy,
  description: `
The NumberInput component is used to manage numeric input fields. It includes increment and decrement buttons, supports the scrubber interaction pattern for pointer-based value adjustment, and can be easily integrated with form libraries.

Rendered on its own, NumberInput displays the input with increment and decrement triggers using the Cerberus icons; pass \`scrubber\` to add the scrubber. It supports different sizes to match the design requirements of your application. To use it within a form, wrap it with the Field component.
  `,
  abstractions: [
    {
      name: 'El',
      file: 'number-input',
      description:
        'An entry abstraction that renders the input with increment and decrement triggers and an optional scrubber',
      isDefaultExport: true,
      types: ['NumberInputProps'],
    },
  ],

  // Not exported in v1: a styled `RootProvider` for `useNumberInput()` state and
  // `NumberInput.Context` render props for reading the value
  arkMembers: ['RootProvider', 'Context'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Spinbutton',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/spinbutton/',
  },
})
