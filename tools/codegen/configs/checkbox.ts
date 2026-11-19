import { checkboxAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const checkboxConfig = defineComponent({
  key: 'checkbox',
  anatomy: checkboxAnatomy,
  description: `
The Checkbox component allows users to select one or more options from a set. It supports the checked, unchecked and indeterminate states.

Use the default \`<Checkbox>\` for a labeled checkbox with the Cerberus check and indeterminate icons, or compose the primitives for full structural control. Wrap several checkboxes in \`Checkbox.Group\` to manage their values together. It supports different sizes to match the design requirements of your application. To use it within a form, wrap it with the Field component.
  `,
  abstractions: [
    {
      name: 'El',
      file: 'checkbox',
      description:
        'An abstraction that renders a labeled checkbox with the Cerberus check or indeterminate icon and a required notice',
      isDefaultExport: true,
      types: ['CheckboxProps'],
    },
  ],

  // HiddenInput is not in Ark's checkbox anatomy, so it has no recipe slot.
  // Not exported in v1: a styled `RootProvider` for `useCheckbox()` state and
  // `Checkbox.Context` render props for reading the checked state
  arkMembers: ['HiddenInput', 'RootProvider', 'GroupProvider', 'Context'],

  // A group wraps several roots, so it provides the slot recipe itself
  providers: ['group', 'GroupProvider'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Checkbox',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/',
  },
})
