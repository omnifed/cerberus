import { fieldAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const fieldConfig = defineComponent({
  key: 'field',
  anatomy: fieldAnatomy,
  description: `
The Field component labels a form control and connects it to its helper text and error text, wiring the ids and ARIA attributes for you. It is composed of several primitives that enable customization and flexibility in its usage.

Use the default \`<Field>\` with a \`label\`, \`helperText\` and \`errorText\` around a control: \`Field.InputGroup\` (also available as \`Input\`) renders an input with optional \`startIcon\`/\`endIcon\` and the Cerberus invalid icon, and \`Field.Textarea\` (also available as \`Textarea\`) a textarea. Mark it \`invalid\` to swap the helper text for the error text, \`required\` to show the required indicator, and set the \`size\` on the field (or on a single \`Field.InputGroup\`). Compose the primitives for full structural control.
  `,

  // Ark's parts own the bare names (`Label`, `Input`, `HelperText`,
  // `ErrorText`…). v1 behavior under part-like names becomes abstractions
  // named for what they add: the v1 `Input` (input root + start indicator +
  // input + status indicator) → `InputGroup`, like `DatePicker.InputGroup`;
  // `FieldStatusIndicator` (the invalid icon, or an end indicator fallback) →
  // `StatusIndicatorWithIcon`, like `Pagination.PrevTriggerWithIcon`, since
  // `StatusIndicator` is the plain recipe slot. The v1 `(required)` label
  // suffix, `hideLabel` and the helper/error text swap live in `El`
  abstractions: [
    {
      name: 'El',
      file: 'field',
      description:
        'An abstraction of the root that renders the label with its required indicator, the control, and the helper text, error text and secondary helper text',
      isDefaultExport: true,
      types: ['FieldProps'],
    },
    {
      name: 'InputGroup',
      file: 'input-group',
      description:
        'An abstraction that renders the input root with an optional start indicator, the input, and the Cerberus invalid icon or an end indicator',
      types: ['FieldInputGroupProps'],
    },
    {
      name: 'StatusIndicatorWithIcon',
      file: 'status-indicator-with-icon',
      description:
        'An abstraction that renders the status indicator with the Cerberus `invalid` icon when the field is invalid, else an end indicator with its `fallback`',
      types: ['FieldStatusIndicatorWithIconProps'],
    },
  ],

  // Not exported in v1: a styled `RootProvider` for `useField()` state
  // (index.client re-exported Ark's raw, unstyled one) and `Field.Context`
  // render props. Ark's `Field.Item` renders no element and is left out
  arkMembers: ['RootProvider', 'Context'],

  // Cerberus layout slots of the `field` recipe, outside Ark's anatomy
  elementParts: {
    inputRoot: 'div',
    startIndicator: 'span',
    endIndicator: 'span',
    statusIndicator: 'span',
  },

  exports: [
    // v1 names, kept as aliases of `Field.InputGroup` and `Field.Textarea`
    {
      from: './input-group',
      values: ['Input'],
      types: ['FieldInputElProps'],
    },
    { from: './textarea', values: ['Textarea'] },
  ],

  // Ark implements Field with its own `useField()` hook: there is no Zag
  // machine and no keyboard interaction beyond the native control's
  a11y: {
    notes: [
      '`Field.Root` renders a `role="group"` element and `Field.Label` a native `label` whose `for` points at the control.',
      'The control gets `aria-invalid` when the field is invalid, and `aria-describedby` pointing at the helper text and, when invalid, the error text.',
      'The error text is a polite live region, and the required indicator is hidden from assistive technology since the control is marked `required`.',
      'The start, end and status indicators of `Field.InputGroup` are decorative (`aria-hidden`); describe anything they convey in the label or helper text.',
    ],
  },
})
