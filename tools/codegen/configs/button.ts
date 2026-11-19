import { buttonAnatomy } from '@cerberus/panda-preset'
import { defineComponent } from '../manifest'

export const buttonConfig = defineComponent({
  key: 'button',
  anatomy: buttonAnatomy,
  types: ['ButtonRootProps', 'IconButtonRootProps', 'ButtonGroupProps'],
  // Button.Group is styled by its own recipe and renders its own data-scope
  parts: {
    group: {
      recipe: 'buttonGroup',
      dataScope: 'button-group',
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
  ],
})
