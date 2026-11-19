import { accordionAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const accordionConfig = defineComponent({
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
      description:
        'An abstraction for rendering all the content-related primitives.',
      types: ['AccordionItemGroupProps'],
    },
  ],

  a11y: {
    pattern: 'Accordion',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/accordion/',
    keyboard: [
      {
        key: 'Space',
        description:
          'When focus is on a trigger of a collapsed item, expands the item.',
      },
      {
        key: 'Enter',
        description:
          'When focus is on a trigger of a collapsed item, expands the item.',
      },
      { key: 'Tab', description: 'Moves focus to the next focusable element.' },
      {
        key: 'Shift + Tab',
        description: 'Moves focus to the previous focusable element.',
      },
      {
        key: 'ArrowDown',
        description: 'Moves focus to the next accordion trigger.',
      },
      {
        key: 'ArrowUp',
        description: 'Moves focus to the previous accordion trigger.',
      },
      {
        key: 'ArrowRight',
        description:
          'When orientation is horizontal, moves focus to the next accordion trigger.',
      },
      {
        key: 'ArrowLeft',
        description:
          'When orientation is horizontal, moves focus to the previous accordion trigger.',
      },
      {
        key: 'Home',
        description:
          'When focus is on a trigger, moves focus to the first trigger.',
      },
      {
        key: 'End',
        description:
          'When focus is on a trigger, moves focus to the last trigger.',
      },
    ],
  },
})
