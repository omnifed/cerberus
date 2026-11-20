import { carouselAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const carouselConfig = defineComponent({
  key: 'carousel',
  anatomy: carouselAnatomy,
  description: `
The Carousel component is a versatile UI element that allows users to navigate through a slideshow style set of "pages" which contain images.

The Carousel component can be used in various contexts, mostly pertaining to marketing sites. It is uncommon for application development but is not restricted to for a UX pattern.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'carousel',
      description:
        'An abstraction for rendering all the content-related primitives',
      types: ['CarouselProps'],
    },
  ],

  // @zag-js/docs has no carousel keyboard rows, so these describe the keys Zag
  // handles on the indicator group
  a11y: {
    pattern: 'Carousel',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/carousel/',
    keyboard: [
      {
        key: 'ArrowRight',
        description:
          'When focus is on an indicator and orientation is horizontal, moves to the next page.',
      },
      {
        key: 'ArrowLeft',
        description:
          'When focus is on an indicator and orientation is horizontal, moves to the previous page.',
      },
      {
        key: 'ArrowDown',
        description:
          'When focus is on an indicator and orientation is vertical, moves to the next page.',
      },
      {
        key: 'ArrowUp',
        description:
          'When focus is on an indicator and orientation is vertical, moves to the previous page.',
      },
      {
        key: 'Home',
        description: 'When focus is on an indicator, moves to the first page.',
      },
      {
        key: 'End',
        description: 'When focus is on an indicator, moves to the last page.',
      },
    ],
  },

  // Styled RootProvider for `useCarousel()` state
  arkMembers: ['RootProvider'],
})
