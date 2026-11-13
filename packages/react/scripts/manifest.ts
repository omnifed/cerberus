import { accordionAnatomy, avatarAnatomy } from '@ark-ui/react/anatomy'
import { admonitionAnatomy, buttonAnatomy } from '@cerberus/panda-preset'

export type ComponentConfig = {
  name: string
  key: string
  anatomy: any
  isArkUI?: boolean // Primitive bypass flag (defaults to true)
  description: string // The main Rust-level summary
  abstractions?: AbstractionConfig[]
  types?: string[] // Explicit types to export
}

export type AbstractionConfig = {
  name: string
  file: string // e.g., 'item-group' (no extension)
  description: string // Optional description for the abstraction
  isDefaultExport?: boolean
  types?: string[] // Explicit types to export
}

export const COMPONENTS: ComponentConfig[] = [
  {
    name: 'Accordion',
    key: 'accordion',
    isArkUI: true,
    anatomy: accordionAnatomy,
    description: `
The Accordion component is a versatile UI element that allows users to expand and collapse sections of content. It is composed of several primitives that enable customization and flexibility in its usage.

The Accordion component can be used in various contexts, such as displaying FAQs, menus, or any other content that benefits from a collapsible structure. It supports different palettes and usage styles to match the design requirements of your application.
    `,
    abstractions: [
      {
        name: 'ItemGroup',
        file: 'item-group',
        description:
          'An abstraction for rendering all the content-related primitives',
        types: ['AccordionItemGroupProps'],
      },
    ],
  },
  {
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
  },
  {
    name: 'Avatar',
    key: 'avatar',
    anatomy: avatarAnatomy,
    description: `
The Avatar component is a versatile UI element that allows users to have a visual representation of their presence within an application. It is composed of several primitives that enable customization and flexibility in its usage.

The Avatar component can be used in various contexts, such as profiles, App Bars, menus, or any other content that benefits from a user representation. It supports different palettes, gradients, and layout styles to match the design requirements of your application.
    `,
    abstractions: [
      {
        name: 'El',
        file: 'avatar',
        description:
          'An entry abstraction for rendering all the content-related primitives',
        isDefaultExport: true,
      },
    ],
  },
  {
    name: 'Button',
    key: 'button',
    isArkUI: false,
    anatomy: buttonAnatomy,
    types: ['ButtonRootProps', 'IconButtonRootProps', 'ButtonGroupProps'],
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
  },
]
