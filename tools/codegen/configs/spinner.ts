import { defineComponent } from '../manifest'

export const spinnerConfig = defineComponent({
  key: 'spinner',
  // Documented on the Loading States page
  docsSlug: 'loading-states',
  // Cerberus-only (no `@ark-ui/react/spinner`): a single styled `<svg>`
  // No Panda recipe: style it with style props
  recipe: false,
  anatomy: ['root'],
  types: ['SpinnerRootProps'],
  description: `
The Spinner component displays an indeterminate loading indicator: an animated \`<svg>\` that inherits the current text color. It is typically used in buttons, dialogs, and other components with a loading state.

The root renders with \`role="status"\` and \`aria-busy="true"\`. Set \`size\` for its width and height; without it the spinner fills its container's width.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'spinner',
      description:
        'An abstraction rendering the animated spinner artwork in `Spinner.Root`, sized with `size`',
      types: ['SpinnerProps'],
      isDefaultExport: true,
    },
  ],
})
