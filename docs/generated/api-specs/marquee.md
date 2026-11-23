# Marquee API reference

The Marquee component displays continuously scrolling content, horizontally or vertically, with optional stylized edges. It is composed of several primitives that enable customization and flexibility in its usage.

The Marquee component can be used to showcase logos, announcements, or any repeating content. It supports controlling the spacing, speed, direction, and loop count of the animation, and can pause when users hover or focus on it.

Import: `import { Marquee } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Marquee.El (abstraction)

An entry abstraction for rendering all the content-related primitives and optional edges

Also accepts all props of `Marquee.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `edges` | `MarqueeEdgeOption[]` | No | — | The edges to display over the marquee. `both` shows the start and end edges for the current `side`. |

### Marquee.Root (primitive)

The root container of the Marquee component.

Selector: `[data-scope="marquee"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the marquee. Useful for composition. |
| `translations` | `IntlTranslations` | No | — | The localized messages to use. |
| `side` | `Side` | No | `"start"` | The side/direction the marquee scrolls towards. |
| `speed` | `number` | No | `50` | The speed of the marquee animation in pixels per second. |
| `delay` | `number` | No | `0` | The delay before the animation starts (in seconds). |
| `loopCount` | `number` | No | `0` | The number of times to loop the animation (0 = infinite). |
| `spacing` | `string` | No | `"1rem"` | The spacing between marquee items. |
| `autoFill` | `boolean` | No | `false` | Whether to automatically duplicate content to fill the container. |
| `pauseOnInteraction` | `boolean` | No | `false` | Whether to pause the marquee on user interaction (hover, focus). |
| `reverse` | `boolean` | No | `false` | Whether to reverse the animation direction. |
| `paused` | `boolean` | No | — | Whether the marquee is paused. |
| `defaultPaused` | `boolean` | No | `false` | Whether the marquee is paused by default. |
| `onPauseChange` | `((details: PauseStatusDetails) => void)` | No | — | Function called when the pause status changes. |
| `onLoopComplete` | `(() => void)` | No | — | Function called when the marquee completes one loop iteration. |
| `onComplete` | `(() => void)` | No | — | Function called when the marquee completes all loops and stops. Only fires for finite loops (loopCount > 0). |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"paused"` \| `"idle"` |
| `data-orientation` | The orientation of the marquee. |
| `data-paused` | Present when paused. |

| CSS variable | Description |
| --- | --- |
| `--marquee-duration` | The marquee duration value for the Root. |
| `--marquee-spacing` | The marquee spacing value for the Root. |
| `--marquee-delay` | The marquee delay value for the Root. |
| `--marquee-loop-count` | The marquee loop count value for the Root. |
| `--marquee-translate` | The marquee translate value for the Root. |

### Marquee.Viewport (primitive)

The viewport primitive part of the Marquee component.

Selector: `[data-scope="marquee"][data-part="viewport"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-part` | `"viewport"` |
| `data-orientation` | The orientation of the viewport. |
| `data-side` | The side of the trigger that the viewport is positioned on. |

### Marquee.Content (primitive)

The content primitive part of the Marquee component.

Selector: `[data-scope="marquee"][data-part="content"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `children` | `ReactNode` | Yes | — | Optional in a patch child of a Marquee abstraction, which supplies it. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-part` | `"content"` |
| `data-index` | The index of the item. |
| `data-orientation` | The orientation of the content. |
| `data-side` | The side of the trigger that the content is positioned on. |
| `data-reverse` | Set by the component |
| `data-clone` | Present when the state applies |

### Marquee.Edge (primitive)

The edge primitive part of the Marquee component.

Selector: `[data-scope="marquee"][data-part="edge"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `side` | `Side` | Yes | — | The side where the edge gradient should appear. Optional in a patch child of a Marquee abstraction, which supplies it. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-part` | `"edge"` |
| `data-side` | The side of the trigger that the edge is positioned on. |
| `data-orientation` | The orientation of the edge. |

### Marquee.Item (primitive)

The item primitive part of the Marquee component.

Selector: `[data-scope="marquee"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Marquee.RootProvider (primitive)

The root container of the Marquee component, driven by state created with `useMarquee()`.

Selector: `[data-scope="marquee"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UseMarqueeReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"paused"` \| `"idle"` |
| `data-orientation` | The orientation of the marquee. |
| `data-paused` | Present when paused. |

| CSS variable | Description |
| --- | --- |
| `--marquee-duration` | The marquee duration value for the Root. |
| `--marquee-spacing` | The marquee spacing value for the Root. |
| `--marquee-delay` | The marquee delay value for the Root. |
| `--marquee-loop-count` | The marquee loop count value for the Root. |
| `--marquee-translate` | The marquee translate value for the Root. |

### Marquee.Context (primitive)

Exposes the Marquee state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseMarqueeContext) => ReactNode` | Yes | — |  |
