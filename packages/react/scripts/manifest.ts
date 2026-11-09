import { accordionAnatomy } from '@ark-ui/react/anatomy'

export type AbstractionConfig = {
  name: string
  file: string // e.g., 'item-group' (no extension)
  description?: string // Optional description for the abstraction
}

export type ComponentConfig = {
  name: string
  key: string
  anatomy: any
  description: string // The main Rust-level summary
  abstractions?: AbstractionConfig[]
}

export const COMPONENTS: ComponentConfig[] = [
  {
    name: 'Accordion',
    key: 'accordion',
    anatomy: accordionAnatomy,
    description: `
The Accordion component is a versatile UI element that allows users to expand and collapse sections of content. It is composed of several primitives that enable customization and flexibility in its usage.

The Accordion component can be used in various contexts, such as displaying FAQs, menus, or any other content that benefits from a collapsible structure. It supports different palettes and usage styles to match the design requirements of your application.
    `,
    abstractions: [
      {
        name: 'ItemGroup',
        file: 'item-group',
        description: 'An abstraction for rendering all the content-related primitives',
      },
    ],
  },
]
