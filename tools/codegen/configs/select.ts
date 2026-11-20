import { selectAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const selectConfig = defineComponent({
  key: 'select',
  anatomy: selectAnatomy,
  description: `
The Select component is a dropdown list that lets users pick one or more options from a collection.

Use the default \`<Select>\` with a \`placeholder\` to render the trigger with its value text and Cerberus indicator, the positioned dropdown and the hidden native select for you, or compose the primitives for full structural control. Render options with \`Select.ItemWithIndicator\` (also available as \`Option\`) and group them with \`Select.ItemGroupWithLabel\` (also available as \`OptionGroup\`). Build the collection with \`createSelectCollection\`, or Ark's \`createListCollection\` for custom item shapes. It supports sizes from \`sm\` to \`lg\`; to use it within a form, wrap it with the Field component.
  `,

  // The default `<Select>` stays generic over the collection item type.
  // v1 `Option` and `OptionGroup` used their own names to avoid the Ark
  // `Item`/`ItemGroup` parts; under the bare-part policy they become
  // `ItemWithIndicator` and `ItemGroupWithLabel`, matching Combobox
  abstractions: [
    {
      name: 'El',
      file: 'select',
      description:
        'An abstraction that renders the control with the trigger, its value text and Cerberus indicator, the positioned dropdown content and the hidden native select',
      isDefaultExport: true,
      types: ['SelectProps'],
    },
    {
      name: 'ItemWithIndicator',
      file: 'item-with-indicator',
      description:
        'An abstraction of the item that renders its text (the item label by default) and the Cerberus check icon in its indicator',
      types: ['SelectItemWithIndicatorProps'],
    },
    {
      name: 'ItemGroupWithLabel',
      file: 'item-group-with-label',
      description:
        'An abstraction of the item group that renders its `label` as the group label',
      types: ['SelectItemGroupWithLabelProps'],
    },
  ],

  // Not in Ark's select anatomy: HiddenSelect has no recipe slot, and the
  // `Context`/`ItemContext` render props pass through. `RootProvider` is a
  // styled root driven by `useSelect()` state
  arkMembers: ['HiddenSelect', 'RootProvider', 'Context', 'ItemContext'],
  // Root and RootProvider take a typed collection (`ListCollection<T>`)
  collectionGeneric: ['Root', 'RootProvider'],

  exports: [
    // v1 names, kept as aliases of the abstractions (and the group label part)
    {
      from: './item-with-indicator',
      values: ['Option'],
      types: ['OptionProps'],
    },
    {
      from: './item-group-with-label',
      values: ['OptionGroup', 'OptionGroupLabel'],
    },
    {
      from: './collection',
      values: ['createSelectCollection'],
      types: ['SelectCollectionItem', 'SelectCollection'],
    },
    // v1 re-exported these Ark types from its primitives
    {
      from: '@ark-ui/react/select',
      types: ['SelectValueChangeDetails', 'ListCollection'],
    },
  ],

  // The trigger is a select-only combobox. Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Select-Only Combobox',
    apgUrl:
      'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/',
    // Zag handles these too, but @zag-js/docs doesn't describe them
    keyboard: [
      {
        key: 'ArrowLeft',
        description:
          'When focus is on the trigger of a single select, selects the previous item without opening the select (the last item when none is selected).',
      },
      {
        key: 'ArrowRight',
        description:
          'When focus is on the trigger of a single select, selects the next item without opening the select (the first item when none is selected).',
      },
      {
        key: 'Home',
        description:
          'When focus is on the trigger of a single select, selects the first item. When focus is on the content, highlights the first item.',
      },
      {
        key: 'End',
        description:
          'When focus is on the trigger of a single select, selects the last item. When focus is on the content, highlights the last item.',
      },
    ],
  },
})
