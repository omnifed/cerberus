# Carousel API reference

The Carousel component is a versatile UI element that allows users to navigate through a slideshow style set of "pages" which contain images.

The Carousel component can be used in various contexts, mostly pertaining to marketing sites. It is uncommon for application development but is not restricted to for a UX pattern.

Import: `import { Carousel } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Carousel.El (abstraction)

An abstraction for rendering all the content-related primitives

Also accepts all props of `Carousel.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `showIndicators` | `boolean` | No | `false` | Whether to show the carousel indicators (dot list). |

### Carousel.Root (primitive)

The root container of the Carousel component.

Selector: `[data-scope="carousel"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `orientation` | `"horizontal" \| "vertical"` | No | `"horizontal"` | The orientation of the element. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the carousel. Useful for composition. |
| `translations` | `IntlTranslations` | No | — | The localized messages to use. |
| `slidesPerPage` | `number` | No | `1` | The number of slides to show at a time. |
| `autoSize` | `boolean` | No | `false` | Whether to enable variable width slides. |
| `slidesPerMove` | `number \| "auto"` | No | `"auto"` | The number of slides to scroll at a time. When set to `auto`, the number of slides to scroll is determined by the `slidesPerPage` property. |
| `autoplay` | `boolean \| { delay: number; }` | No | `false` | Whether to scroll automatically. The default delay is 4000ms. |
| `allowMouseDrag` | `boolean` | No | `false` | Whether to allow scrolling via dragging with mouse |
| `loop` | `boolean` | No | `false` | Whether the carousel should loop around. |
| `page` | `number` | No | — | The controlled page of the carousel. |
| `defaultPage` | `number` | No | `0` | The initial page to scroll to when rendered. Use when you don't need to control the page of the carousel. |
| `spacing` | `string` | No | `"0px"` | The amount of space between items. |
| `padding` | `string` | No | — | Defines the extra space added around the scrollable area, enabling nearby items to remain partially in view. |
| `onPageChange` | `((details: PageChangeDetails) => void)` | No | — | Function called when the page changes. |
| `inViewThreshold` | `number \| number[]` | No | `0.6` | The threshold for determining if an item is in view. |
| `snapType` | `"proximity" \| "mandatory"` | No | `"mandatory"` | The snap type of the item. |
| `slideCount` | `number` | Yes | — | The total number of slides. Useful for SSR to render the initial ating the snap points. |
| `onDragStatusChange` | `((details: DragStatusDetails) => void)` | No | — | Function called when the drag status changes. |
| `onAutoplayStatusChange` | `((details: AutoplayStatusDetails) => void)` | No | — | Function called when the autoplay status changes. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

| CSS variable | Description |
| --- | --- |
| `--slides-per-page` | The number of slides visible per page. |
| `--slide-spacing` | The spacing between slides. |
| `--slide-item-size` | The calculated size of each slide item. |

### Carousel.ItemGroup (primitive)

The item-group primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="item-group"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-dragging` | Present when in the dragging state. |

### Carousel.Item (primitive)

The item primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="item"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | Yes | — | The index of the item. |
| `snapAlign` | `"start" \| "end" \| "center"` | No | `"start"` | The snap alignment of the item. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-index` | Mirrors the `index` prop |
| `data-inview` | Present when in viewport. |
| `data-orientation` | Mirrors the `orientation` prop |

### Carousel.Control (primitive)

The control primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

### Carousel.NextTrigger (primitive)

The next-trigger primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="next-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

### Carousel.PrevTrigger (primitive)

The prev-trigger primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="prev-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

### Carousel.IndicatorGroup (primitive)

The indicator-group primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="indicator-group"]`

Keyboard: `ArrowDown`, `ArrowUp`, `ArrowRight`, `ArrowLeft`, `Home`, `End`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

### Carousel.Indicator (primitive)

The indicator primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | Yes | — | The index of the indicator. |
| `readOnly` | `boolean` | No | `false` | Whether the indicator is read only. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-index` | Mirrors the `index` prop |
| `data-readonly` | Present when read-only. |
| `data-current` | Present when current. |

### Carousel.AutoplayTrigger (primitive)

The autoplay-trigger primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="autoplay-trigger"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |
| `data-pressed` | Present when pressed. |

### Carousel.ProgressText (primitive)

The progress-text primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="progress-text"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Carousel.AutoplayIndicator (primitive)

The autoplay-indicator primitive part of the Carousel component.

Selector: `[data-scope="carousel"][data-part="autoplay-indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `fallback` | `React.ReactNode` | No | — | The fallback content to render when autoplay is paused. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Carousel.RootProvider (primitive)

The root container of the Carousel component, driven by state created with `useCarousel()`.

Selector: `[data-scope="carousel"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `value` | `UseCarouselReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-orientation` | Mirrors the `orientation` prop |

| CSS variable | Description |
| --- | --- |
| `--slides-per-page` | The number of slides visible per page. |
| `--slide-spacing` | The spacing between slides. |
| `--slide-item-size` | The calculated size of each slide item. |

## Accessibility

Follows the [Carousel WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/carousel/).

| Key | Description |
| --- | --- |
| `ArrowRight` | When focus is on an indicator and orientation is horizontal, moves to the next page. |
| `ArrowLeft` | When focus is on an indicator and orientation is horizontal, moves to the previous page. |
| `ArrowDown` | When focus is on an indicator and orientation is vertical, moves to the next page. |
| `ArrowUp` | When focus is on an indicator and orientation is vertical, moves to the previous page. |
| `Home` | When focus is on an indicator, moves to the first page. |
| `End` | When focus is on an indicator, moves to the last page. |
