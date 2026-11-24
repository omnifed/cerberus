import { clipboardAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const clipboardConfig = defineComponent({
  key: 'clipboard',
  anatomy: clipboardAnatomy,
  description: `
The Clipboard component provides an accessible way to copy text to the user's clipboard with built-in visual feedback.

It is unstyled by default: every part accepts Panda style props, \`css\` and \`asChild\`, so you can turn the trigger into a button or the input into a text field. Use \`Clipboard.CopyIndicator\` or \`Clipboard.CopyText\` inside the trigger for the default copy/copied feedback, or \`Clipboard.TriggerWithTooltip\` to show that status in a tooltip.
  `,
  example: `
<Clipboard value="Hello, World!">
  <Clipboard.Label>Greeting</Clipboard.Label>
  <Clipboard.Control>
    <Clipboard.Input />
    <Clipboard.TriggerWithTooltip asChild>
      <IconButton clipboard>
        <Clipboard.CopyIndicator />
      </IconButton>
    </Clipboard.TriggerWithTooltip>
  </Clipboard.Control>
</Clipboard>
`,

  // No `clipboard` slot recipe exists: every part is `cerberus(ArkClipboard.X)`
  recipe: false,

  // The anatomy parts own the `Indicator` and `Trigger` names, so the v1
  // `Clipboard.Indicator` and `Clipboard.Trigger` abstractions are renamed
  abstractions: [
    {
      name: 'CopyIndicator',
      file: 'copy-indicator',
      description:
        'An abstraction of the indicator that shows a copy icon, then an animated checkmark once copied',
      types: ['ClipboardCopyIndicatorProps'],
    },
    {
      name: 'CopyText',
      file: 'copy-text',
      description:
        'An abstraction of the indicator that shows "Copy", then "Copied" once copied',
      types: ['ClipboardCopyTextProps'],
    },
    {
      name: 'TriggerWithTooltip',
      file: 'trigger-with-tooltip',
      description:
        'An abstraction of the trigger wrapped in a Tooltip that shows the copy status',
      types: ['ClipboardTriggerWithTooltipProps'],
    },
  ],

  // `Context` was exported in v1. `RootProvider` pairs with `useClipboard()`
  // (exported from index.client) and `ValueText` renders the value without an input
  arkMembers: ['RootProvider', 'Context', 'ValueText'],
})
