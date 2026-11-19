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
})
