import { defineComponent } from '../manifest'

export const buttonsConfig = defineComponent({
  // The shared folder for every Button API: Button (with Button.Group),
  // IconButton and SplitButton
  key: 'buttons',
  name: 'Button',
  recipe: 'button',
  docsSlug: 'button',
  // `iconButtonRoot` is the unlabelled icon button that `IconButton` labels
  anatomy: ['root', 'group', 'iconButtonRoot'],
  types: [
    'ButtonRootProps',
    'ButtonGroupProps',
    'ButtonIconButtonRootProps',
    'IconButtonRootProps',
  ],
  // Button.Group is styled by its own recipe and renders its own data-scope
  parts: {
    root: {
      description: 'A `<button>` styled by the `button` recipe.',
    },
    group: {
      description:
        'Lays out related buttons together, styled by the `buttonGroup` recipe.',
      recipe: 'buttonGroup',
      dataScope: 'button-group',
      dataPart: 'root',
    },
    iconButtonRoot: {
      description:
        'The bare icon `<button>` styled by the `iconButton` recipe; `IconButton` wraps it and requires an `ariaLabel`.',
      recipe: 'iconButton',
      dataScope: 'icon-button',
      dataPart: 'root',
    },
  },
  description: `
The Button component provides a visual indicator for a user to make an
action of sorts, commonly used in forms, menus, and popovers.

For a customizable Button, use the Button object to access the
individual primitives of the Button component or style props.

**NOTE**: This API is _slotless_ and is a single rendered layer abstraction.
    `,
  abstractions: [
    {
      name: 'Icon',
      file: 'icon',
      description:
        'An abstraction displaying an icon that is replaced by a Spinner when `pending` is set to true',
      types: ['ButtonIconProps'],
    },
    {
      name: 'Provider',
      file: 'context',
      description: 'The Button context provider',
      types: ['ButtonContextValue'],
    },
    {
      name: 'El',
      file: 'button',
      description:
        'An abstraction for using the Provider and Button.Root together',
      types: ['ButtonProps'],
      isDefaultExport: true,
    },
    {
      name: 'IconButton',
      file: 'icon-button',
      description:
        'An icon-only button styled by the `iconButton` recipe, labelled with `ariaLabel` (or "Copy to clipboard" with `clipboard`)',
      types: ['IconButtonProps'],
    },
    {
      name: 'SplitButton',
      file: 'split-button',
      description:
        'A primary action `<Button>` attached to an IconButton that opens a Menu of other actions; `pending` disables the action and shows a Spinner',
      types: ['SplitButtonProps'],
    },
  ],
  // v1 top-level names, kept as aliases of the abstractions
  exports: [
    { from: './icon-button', values: ['IconButton'] },
    { from: './split-button', values: ['SplitButton'] },
    // The unlabelled icon button primitive (data-grid composes it directly)
    { from: './primitives', values: ['IconButtonRoot'] },
  ],
})
