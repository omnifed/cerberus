import { menuAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const menuConfig = defineComponent({
  key: 'menu',
  anatomy: menuAnatomy,
  description: `
The Menu component displays a list of actions or options that the user can choose from, opened from a trigger such as a button.

\`<Menu>\` provides the menu state to its parts and renders no element. Use \`Menu.Trigger\` with \`asChild\` to open the menu from your own button, and \`Menu.ContentGroup\` to render the positioned menu content. Group items with \`Menu.ItemGroup\` and \`Menu.ItemGroupLabel\`, divide them with \`Menu.Separator\`, and use \`Menu.CheckboxItem\` or \`Menu.RadioItemGroup\` with \`Menu.RadioItem\` for selectable options. The \`positioning\` prop places the menu relative to its trigger.
  `,

  // The anatomy has no `root` part, so `Menu.Root` provides the context and
  // recipe and renders no element. `Positioner` and `Content` own those names,
  // so the v1 `MenuContent` abstraction (content inside its positioner) is
  // renamed. The v1 `MenuTrigger` (an `asChild` trigger) is dropped:
  // `<Menu.Trigger asChild>` does the same
  abstractions: [
    {
      name: 'ContentGroup',
      file: 'content-group',
      description:
        'An abstraction that renders the menu content inside its positioner',
      types: ['MenuContentGroupProps'],
    },
  ],

  // Not in the anatomy: the checkbox and radio items are styled like items.
  // Not exported in v1: a styled `RootProvider` for `useMenu()` state and the
  // menu and item context render props
  arkMembers: [
    'CheckboxItem',
    'RadioItemGroup',
    'RadioItem',
    'RootProvider',
    'Context',
    'ItemContext',
  ],
  memberSlots: {
    CheckboxItem: 'item',
    RadioItemGroup: 'itemGroup',
    RadioItem: 'item',
  },

  // v1 re-exported the selection details type for `onSelect` handlers
  exports: [{ from: '@ark-ui/react/menu', types: ['MenuSelectionDetails'] }],

  // Keyboard rows come from @zag-js/docs, which doesn't describe Home and End
  a11y: {
    pattern: 'Menu Button',
    apgUrl: 'https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/',
    keyboard: [
      {
        key: 'Home',
        description: 'Highlights the first item in the menu.',
      },
      {
        key: 'End',
        description: 'Highlights the last item in the menu.',
      },
    ],
  },
})
