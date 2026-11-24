import { avatarAnatomy } from '@ark-ui/react/anatomy'
import { defineComponent } from '../manifest'

export const avatarConfig = defineComponent({
  key: 'avatar',
  anatomy: avatarAnatomy,
  description: `
The Avatar component is a versatile UI element that allows users to have a visual representation of their presence within an application. It is composed of several primitives that enable customization and flexibility in its usage.

The Avatar component can be used in various contexts, such as profiles, App Bars, menus, or any other content that benefits from a user representation. It supports different palettes, gradients, and layout styles to match the design requirements of your application.
    `,
  abstractions: [
    {
      name: 'El',
      file: 'avatar',
      description:
        'Renders the image at `src` with the `fallback`; direct `Avatar.Fallback`/`Avatar.Image` children override that part, other children replace both',
      isDefaultExport: true,
    },
  ],

  // Styled RootProvider for `useAvatar()` state
  arkMembers: ['RootProvider'],
})
