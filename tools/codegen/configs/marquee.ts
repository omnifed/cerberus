import { marqueeAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const marqueeConfig = defineComponent({
  key: 'marquee',
  anatomy: marqueeAnatomy,
  description: `
The Marquee component displays continuously scrolling content, horizontally or vertically, with optional stylized edges. It is composed of several primitives that enable customization and flexibility in its usage.

The Marquee component can be used to showcase logos, announcements, or any repeating content. It supports controlling the spacing, speed, direction, and loop count of the animation, and can pause when users hover or focus on it.
  `,

  abstractions: [
    {
      name: 'El',
      file: 'marquee',
      description:
        'An entry abstraction for rendering all the content-related primitives and optional edges',
      isDefaultExport: true,
      types: ['MarqueeProps', 'MarqueeEdgeOption'],
    },
  ],

  // v1 exported a styled RootProvider and `Marquee.Context`; keep both
  arkMembers: ['RootProvider', 'Context'],
})
