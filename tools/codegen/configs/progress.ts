import { defineComponent } from '../manifest'

export const progressConfig = defineComponent({
  key: 'progress',
  name: 'ProgressBar',
  // `@ark-ui/react/progress` exists, but ProgressBar is built from Cerberus divs
  source: 'cerberus',
  recipe: 'progressBar',
  anatomy: ['root', 'bar'],
  types: ['ProgressBarRootProps', 'ProgressBarBarProps'],
  // Rendered scope differs from the key, so it can't collide with Ark's Progress
  parts: {
    root: { dataScope: 'progress-bar' },
    bar: { dataScope: 'progress-bar' },
  },
  description: `
The ProgressBar component displays a linear progress indicator for a task. It can be used in both determinate and indeterminate states, and supports different sizes and usage styles.

The root renders with \`role="progressbar"\` and the ARIA value attributes, so the abstraction only needs an \`id\`, a \`label\` and either a \`now\` value or \`indeterminate\`.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'progress-bar',
      description:
        'An abstraction for rendering a labelled ProgressBar with a determinate `now` value or an `indeterminate` state',
      types: [
        'ProgressBarProps',
        'NonIndeterminateProgressBarProps',
        'IndeterminateProgressBarProps',
      ],
      isDefaultExport: true,
    },
  ],
})
