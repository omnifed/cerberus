import { radioGroupAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const radioConfig = defineComponent({
  key: 'radio',
  ark: 'radio-group',
  // The compound is the group: `<RadioGroup>` renders the root as in v1 and the
  // parts keep their v1 names (`RadioGroupRoot`, `RadioGroupItem`…)
  name: 'RadioGroup',
  anatomy: radioGroupAnatomy,
  recipe: 'radioGroup',
  description: `
The Radio component allows users to select one option from a set of choices.

Wrap \`<Radio>\` items (also available as \`RadioGroup.Radio\`) in a \`<RadioGroup>\` for labeled radios with the Cerberus control, or compose the primitives for full structural control. The group supports a horizontal or vertical orientation and two sizes; a single radio can override the size. To use it within a form, wrap it with the Fieldset or Field component.
  `,
  abstractions: [
    {
      name: 'Radio',
      file: 'radio',
      description:
        'An abstraction that renders a single labeled radio item with the Cerberus control and its hidden input',
      types: ['RadioProps'],
    },
  ],

  // v1 exported the single radio as `Radio`
  exports: [{ from: './radio', values: ['Radio'] }],

  // Not in Ark's radio-group anatomy: ItemHiddenInput has no recipe slot, and the
  // `Context`/`ItemContext` render props pass through. `RootProvider` is a styled
  // root driven by `useRadioGroup()` state
  arkMembers: ['ItemHiddenInput', 'RootProvider', 'Context', 'ItemContext'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Radio Group',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
  },
})
