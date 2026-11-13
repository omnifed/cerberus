import { admonitionAnatomy } from '@cerberus/panda-preset'

export const admonitionConfig = {
  name: 'Admonition',
  key: 'admonition',
  isArkUI: false,
  anatomy: admonitionAnatomy,
  types: [
    'AdmonitionRootProps',
    'AdmonitionIndicatorProps',
    'AdmonitionHeadingProps',
    'AdmonitionDescriptionProps',
    'AdmonitionContentProps',
  ],
  description: `
The Admonition component is a versatile UI element that can be used to display important information, warnings, or notes in a visually distinct manner. It is composed of several primitives that allow for customization and flexibility in its usage.

The Admonition component can be used in various contexts, such as displaying alerts, tips, or any other information that needs to be highlighted. It supports different palettes and usage styles to match the design requirements of your application.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'admonition',
      description: 'An abstraction for rendering all the primitive slots',
      types: ['AdmonitionProps'],
      isDefaultExport: true,
    },
  ],
}
