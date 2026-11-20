import { sliderAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const sliderConfig = defineComponent({
  key: 'slider',
  anatomy: sliderAnatomy,
  description: `
The Slider component allows users to make selections from a range of values by dragging one or more thumbs along a track. It is composed of several primitives that enable customization and flexibility in its usage.

Rendered on its own, Slider displays the control, track, range and one thumb per value, with optional marks and a dragging indicator. Children such as \`Slider.Label\` and \`Slider.ValueText\` render as a header above the control. It supports different sizes, usages, palettes and a vertical orientation to match the design requirements of your application.
  `,

  abstractions: [
    {
      name: 'El',
      file: 'slider',
      description:
        'An entry abstraction that renders a header from its children, the control, track, range, one thumb per value and optional marks',
      isDefaultExport: true,
      types: ['SliderProps'],
    },
    {
      name: 'Thumbs',
      file: 'thumbs',
      description:
        'Renders one thumb per slider value, each with its hidden input and an optional dragging indicator',
      types: ['SliderThumbsProps'],
    },
    {
      name: 'Marks',
      file: 'marks',
      description:
        'Renders a marker group with one marker, indicator and label per mark',
      types: ['SliderMarksProps', 'SliderMark'],
    },
    {
      name: 'MarkerIndicator',
      file: 'marker-indicator',
      description:
        "The dot rendered inside a marker, styled by the slider recipe's `markerIndicator` slot",
      types: ['SliderMarkerIndicatorProps'],
    },
  ],

  // v1 exported a styled RootProvider (as `Provider`) and the hidden input;
  // HiddenInput is not in Ark's slider anatomy, so it has no recipe slot
  arkMembers: ['RootProvider', 'HiddenInput'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Slider',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/slider-multithumb/',
  },
})
