import { toggleAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const toggleConfig = defineComponent({
  key: 'toggle',
  anatomy: toggleAnatomy,
  description: `
The Toggle component is a two-state button that allows users to toggle between states via an action, such as pressed and not pressed.

It is headless (unstyled) to fit any scenario: style it with style props or the \`css\` prop, or render your own button with \`asChild\`. Use \`Toggle.Indicator\` to show content based on the pressed state. If you only need to conditionally render content based on a binary condition, use the Show component instead.
  `,
  example: `
<Toggle defaultPressed asChild>
  <IconButton ariaLabel="Notifications">
    <Toggle.Indicator fallback={<NotificationOff />}>
      <Notification />
    </Toggle.Indicator>
  </IconButton>
</Toggle>
`,

  // No slot recipe: the legacy `toggle` recipe's slots don't match Ark's anatomy
  recipe: false,

  arkMembers: ['Context'],

  // Keyboard rows come from @zag-js/docs
  a11y: {
    pattern: 'Button',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/button/',
  },
})
