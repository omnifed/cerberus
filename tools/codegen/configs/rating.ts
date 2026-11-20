import { ratingGroupAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const ratingConfig = defineComponent({
  key: 'rating',
  ark: 'rating-group',
  anatomy: ratingGroupAnatomy,
  recipe: 'ratingGroup',
  description: `
The Rating component provides a way to select a value from a range of values, typically used for feedback on a scale.

Use the default \`<Rating>\` for a labeled rating that renders one item per \`count\` (5 by default), with a render function child that returns each item's icon from its state (\`highlighted\`, \`half\`, \`checked\`), or compose the primitives for full structural control. It supports \`readOnly\`, half values, two sizes, two palettes and a horizontal or vertical orientation.
  `,
  abstractions: [
    {
      name: 'El',
      file: 'rating',
      description:
        'An abstraction that renders an optional label and one item per `count`, each showing the icon returned by its render function child (Cerberus stars by default)',
      isDefaultExport: true,
      types: ['RatingProps', 'RatingItemRenderer'],
    },
  ],

  // Not in Ark's rating-group anatomy: HiddenInput has no recipe slot, and the
  // `Context`/`ItemContext` render props (both exported in v1) pass through.
  // `RootProvider` is new: a styled root driven by `useRatingGroup()` state
  arkMembers: ['RootProvider', 'Context', 'ItemContext', 'HiddenInput'],

  // v1 re-exported Ark's context types from the component module
  exports: [
    {
      from: '@ark-ui/react/rating-group',
      types: ['UseRatingGroupContext', 'UseRatingGroupItemContext'],
    },
  ],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Radio Group',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/radio/',
    // Zag handles these on Rating.Item, but @zag-js/docs doesn't describe them
    keyboard: [
      {
        key: 'ArrowUp',
        description:
          'Decreases the rating by one step (a half star with `allowHalf`), like `ArrowLeft`.',
      },
      {
        key: 'ArrowDown',
        description:
          'Increases the rating by one step (a half star with `allowHalf`), like `ArrowRight`.',
      },
      {
        key: 'Space',
        description:
          'Selects the focused star when the rating has no value yet.',
      },
      { key: 'Home', description: 'Sets the rating to 1.' },
      { key: 'End', description: 'Sets the rating to `count`.' },
    ],
  },
})
