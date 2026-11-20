import { defineComponent } from '../manifest'

export const circularProgressConfig = defineComponent({
  key: 'circular-progress',
  ark: 'progress',
  name: 'CircularProgress',
  // Documented on the shared progress page
  docsSlug: 'progress',
  recipe: 'circularProgress',
  // The circular subset of Ark's progress anatomy: `track` and `range` belong to a
  // linear bar (Cerberus ships that as the separate ProgressBar). `view` is kept:
  // it renders its children only in a given state (`loading`, `complete`…)
  anatomy: [
    'root',
    'label',
    'valueText',
    'view',
    'circle',
    'circleTrack',
    'circleRange',
  ],
  description: `
The CircularProgress component displays a circular progress indicator for a task, with the value text and a label in the center of the circle. It scales with its \`size\` variant.

Use the default \`<CircularProgress>\` with a \`value\` (or \`defaultValue\`) and a \`label\` to render the circle, its track and range, and the info group for you, or compose the primitives for full structural control. Set \`hideValueText\` to only show the label, and \`usage="transparent"\` to remove the fill of the center circle.
  `,

  abstractions: [
    {
      name: 'El',
      file: 'circular-progress',
      description:
        'An abstraction that renders the circle with its track and range, and an info group with the value text and a label',
      isDefaultExport: true,
      types: ['CircularProgressProps'],
    },
  ],

  // Not exported in v1: a styled `RootProvider` for `useProgress()` state and
  // `CircularProgress.Context` render props for reading the progress state
  arkMembers: ['RootProvider', 'Context'],

  // Cerberus slot of the `circularProgress` recipe that centers the value text
  // and the label inside the circle
  elementParts: { infoGroup: 'div' },

  // A progressbar has no keyboard interaction and APG has no pattern page for it
  a11y: {},
})
