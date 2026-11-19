import { fieldsetAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const fieldsetConfig = defineComponent({
  key: 'fieldset',
  anatomy: fieldsetAnatomy,
  description: `
The Fieldset component groups related form fields together with a shared legend, helper text and error text. It is composed of several primitives that enable customization and flexibility in its usage.

Use the \`usage\` prop to style it as a \`fieldGroup\` (default), labeling a group of Radio or Checkbox inputs, or as a \`formSection\`, grouping the fields of a larger form. Mark it \`invalid\` to show the error text.
  `,

  abstractions: [
    {
      name: 'El',
      file: 'fieldset',
      description:
        'An entry abstraction that renders the legend, helper text, the grouped fields and the error text',
      isDefaultExport: true,
      types: ['FieldsetProps'],
    },
  ],

  // Styled RootProvider pairs with the `useFieldset` hook the package already
  // exports; Context exposes the invalid/disabled state as a render prop
  arkMembers: ['RootProvider', 'Context'],
})
