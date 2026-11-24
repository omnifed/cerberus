import { comboboxAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const comboboxConfig = defineComponent({
  key: 'combobox',
  anatomy: comboboxAnatomy,
  description: `
The Combobox component is a filterable select: users type into an input to narrow a list of options and pick one or more of them.

Use the default \`<Combobox>\` with a \`label\` and an optional \`startIcon\` to render the label, the input with its clear and open triggers, and the dropdown for you, or compose the primitives for full structural control. Render options with \`Combobox.ItemWithIndicator\` and \`Combobox.ItemText\`, and group them with \`Combobox.ItemGroupWithLabel\`. Pair it with the \`useStatefulCollection\` hook for a collection that filters as the user types. It supports sizes from \`sm\` to \`lg\`; to use it within a form, wrap it with the Field component.
  `,

  // The default `<Combobox>` stays generic over the collection item type.
  // v1 `ComboItemWithIndicator` and `ComboItemGroup` used "Combo" names to
  // avoid the Ark `Item`/`ItemGroup` parts; under the bare-part policy they
  // become `ItemWithIndicator` (the name the docs already used) and
  // `ItemGroupWithLabel` (an item group that renders its own label)
  abstractions: [
    {
      name: 'El',
      file: 'combobox',
      description:
        'An abstraction that renders the label, the control with an optional start icon, the input, the clear and open triggers, and the positioned dropdown content',
      isDefaultExport: true,
      types: ['ComboboxProps'],
    },
    {
      name: 'ItemWithIndicator',
      file: 'item-with-indicator',
      description:
        'An abstraction of the item that renders the Cerberus check icon in its indicator',
      types: ['ComboboxItemWithIndicatorProps'],
    },
    {
      name: 'ItemGroupWithLabel',
      file: 'item-group-with-label',
      description:
        'An abstraction of the item group that renders its `label` as the group label',
      types: ['ComboboxItemGroupWithLabelProps'],
    },
  ],

  // `Context` replaces v1 `ComboboxContext`. Not exported in v1: a styled
  // `RootProvider` for `useCombobox()` state and `ItemContext` render props
  arkMembers: ['RootProvider', 'Context', 'ItemContext'],
  // Root and RootProvider take a typed collection (`ListCollection<T>`)
  collectionGeneric: ['Root', 'RootProvider'],

  // Cerberus slot of the `combobox` recipe, outside Ark's anatomy (v1
  // `ComboboxStartIcon`, an `ark.span`)
  elementParts: { startIcon: 'span' },

  exports: [
    // v1 re-exported the input change details for `onInputValueChange`
    {
      from: '@ark-ui/react/combobox',
      types: ['ComboboxInputValueChangeDetails'],
    },
    {
      from: './use-stateful-collection',
      values: ['useStatefulCollection'],
      types: ['StatefulCollectionReturn'],
    },
  ],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Combobox',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/combobox/',
  },
})
