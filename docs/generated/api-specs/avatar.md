# Avatar API reference

The Avatar component is a versatile UI element that allows users to have a visual representation of their presence within an application. It is composed of several primitives that enable customization and flexibility in its usage.

The Avatar component can be used in various contexts, such as profiles, App Bars, menus, or any other content that benefits from a user representation. It supports different palettes, gradients, and layout styles to match the design requirements of your application.

Import: `import { Avatar } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Avatar` or `Avatar.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `gradient` | `'amphiaraus-dark'` \| `'amphiaraus-light'` \| `'asphodel-light'` \| `'asphodel-dark'` \| `'charon-light'` \| `'charon-dark'` \| `'hades-light'` \| `'hades-dark'` \| `'nyx-light'` \| `'nyx-dark'` \| `'styx-light'` \| `'styx-dark'` \| `'thanatos-light'` \| `'thanatos-dark'` \| `'none'` | `'none'` |
| `size` | `'xs'` \| `'sm'` \| `'md'` \| `'lg'` \| `'xl'` \| `'2xl'` \| `'3xl'` \| `'4xl'` | `'md'` |
| `shape` | `'circle'` \| `'square'` | `'circle'` |

## Parts

### Avatar.El (abstraction)

Renders the image at `src` with the `fallback`; direct `Avatar.Fallback`/`Avatar.Image` children override that part, other children replace both

Also accepts all props of `Avatar.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `alt` | `string` | No | — | The alternative text for the image. Required when `src` is set. |
| `src` | `string` | No | — | The image source URL. When omitted, only the `fallback` is rendered. |
| `fallback` | `ReactNode` | No | — | The content shown when there is no image or it fails to load, such as initials or an icon. |

### Avatar.Root (primitive)

The root container of the Avatar component.

Selector: `[data-scope="avatar"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `gradient` | `'amphiaraus-dark' \| 'amphiaraus-light' \| 'asphodel-light' \| 'asphodel-dark' \| 'charon-light' \| 'charon-dark' \| 'hades-light' \| 'hades-dark' \| 'nyx-light' \| 'nyx-dark' \| 'styx-light' \| 'styx-dark' \| 'thanatos-light' \| 'thanatos-dark' \| 'none'` | No | `'none'` | PandaCSS recipe variant for gradient. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | No | `'md'` | PandaCSS recipe variant for size. |
| `shape` | `'circle' \| 'square'` | No | `'circle'` | PandaCSS recipe variant for shape. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `onStatusChange` | `((details: StatusChangeDetails) => void)` | No | — | Functional called when the image loading status changes. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the avatar. Useful for composition. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Avatar.Image (primitive)

The image primitive part of the Avatar component.

Selector: `[data-scope="avatar"][data-part="image"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"visible"` \| `"hidden"` |

### Avatar.Fallback (primitive)

The fallback primitive part of the Avatar component.

Selector: `[data-scope="avatar"][data-part="fallback"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"hidden"` \| `"visible"` |

### Avatar.RootProvider (primitive)

The root container of the Avatar component, driven by state created with `useAvatar()`.

Selector: `[data-scope="avatar"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `gradient` | `'amphiaraus-dark' \| 'amphiaraus-light' \| 'asphodel-light' \| 'asphodel-dark' \| 'charon-light' \| 'charon-dark' \| 'hades-light' \| 'hades-dark' \| 'nyx-light' \| 'nyx-dark' \| 'styx-light' \| 'styx-dark' \| 'thanatos-light' \| 'thanatos-dark' \| 'none'` | No | `'none'` | PandaCSS recipe variant for gradient. |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl' \| '3xl' \| '4xl'` | No | `'md'` | PandaCSS recipe variant for size. |
| `shape` | `'circle' \| 'square'` | No | `'circle'` | PandaCSS recipe variant for shape. |
| `value` | `UseAvatarReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
