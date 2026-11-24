# Rating API reference

The Rating component provides a way to select a value from a range of values, typically used for feedback on a scale.

Use the default `<Rating>` for a labeled rating that renders one item per `count` (5 by default), with a render function child that returns each item's icon from its state (`highlighted`, `half`, `checked`), or compose the primitives for full structural control. It supports `readOnly`, half values, two sizes, two palettes and a horizontal or vertical orientation.

Import: `import { Rating } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Rating` or `Rating.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `palette` | `'action'` \| `'warning'` | `'action'` |
| `orientation` | `'horizontal'` \| `'vertical'` | `'vertical'` |
| `size` | `'sm'` \| `'md'` | `'sm'` |

## Parts

### Rating.El (abstraction)

An abstraction that renders an optional label and one item per `count`, each showing the icon returned by its render function child (Cerberus stars by default)

Also accepts all props of `Rating.Root`.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `label` | `ReactNode` | No | — | The label of the rating, rendered in `Rating.Label`. A `Rating.Label` child with children replaces it. |
| `children` | `RatingItemRenderer \| ReactNode` | No | — | A render function that returns each item's content from its state (`highlighted`, `half`, `checked`), or direct `Rating.Label`, `Rating.Control`, `Rating.Item`, `Rating.ItemContext` and `Rating.HiddenInput` children that override those parts. Without a render function, each item shows the Cerberus `rating` icon (the `ratingHalf` icon when `half`). |

### Rating.Root (primitive)

The root container of the Rating component.

Selector: `[data-scope="rating-group"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'warning'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `orientation` | `'horizontal' \| 'vertical'` | No | `'vertical'` | PandaCSS recipe variant for orientation. |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `id` | `string` | No | — | The unique identifier of the machine. |
| `ids` | `ElementIds` | No | — | The ids of the elements in the rating. Useful for composition. |
| `translations` | `IntlTranslations` | No | — | Specifies the localized strings that identifies the accessibility elements and their states |
| `count` | `number` | No | `5` | The total number of ratings. |
| `name` | `string` | No | `"rating"` | The name attribute of the rating element (used in forms). |
| `form` | `string` | No | — | The associate form of the underlying input element. |
| `value` | `number` | No | — | The controlled value of the rating |
| `defaultValue` | `number` | No | `-1` | The initial value of the rating when rendered. Use when you don't need to control the value of the rating. |
| `readOnly` | `boolean` | No | — | Whether the rating is readonly. |
| `disabled` | `boolean` | No | — | Whether the rating is disabled. |
| `required` | `boolean` | No | — | Whether the rating is required. |
| `allowHalf` | `boolean` | No | — | Whether to allow half stars. |
| `autoFocus` | `boolean` | No | — | Whether to autofocus the rating. |
| `onValueChange` | `((details: ValueChangeDetails) => void)` | No | — | Function to be called when the rating value changes. |
| `onHoverChange` | `((details: HoverChangeDetails) => void)` | No | — | Function to be called when the rating value is hovered. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Rating.Label (primitive)

The label primitive part of the Rating component.

Selector: `[data-scope="rating-group"][data-part="label"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-required` | Present when required. |

### Rating.Item (primitive)

The item primitive part of the Rating component.

Selector: `[data-scope="rating-group"][data-part="item"]`

Keyboard: `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`, `Space`, `Home`, `End`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `index` | `number` | Yes | — | Optional in a patch child of a Rating abstraction, which supplies it. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-readonly` | Present when read-only. |
| `data-checked` | Present when checked. |
| `data-highlighted` | Present when highlighted. |
| `data-half` | Present when the state applies |

### Rating.Control (primitive)

The control primitive part of the Rating component.

Selector: `[data-scope="rating-group"][data-part="control"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-readonly` | Present when read-only. |
| `data-disabled` | Present when disabled. |

### Rating.RootProvider (primitive)

The root container of the Rating component, driven by state created with `useRatingGroup()`.

Selector: `[data-scope="rating-group"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `palette` | `'action' \| 'warning'` | No | `'action'` | PandaCSS recipe variant for palette. |
| `orientation` | `'horizontal' \| 'vertical'` | No | `'vertical'` | PandaCSS recipe variant for orientation. |
| `size` | `'sm' \| 'md'` | No | `'sm'` | PandaCSS recipe variant for size. |
| `value` | `UseRatingGroupReturn` | Yes | — |  |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

### Rating.Context (primitive)

Exposes the Rating state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseRatingGroupContext) => ReactNode` | Yes | — |  |

### Rating.ItemContext (primitive)

Exposes the Rating item state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseRatingGroupItemContext) => ReactNode` | Yes | — |  |

### Rating.HiddenInput (primitive)

The hidden input primitive part of the Rating component. It has no recipe slot, so it is unstyled.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

## Context API

`Rating.Context` and `useRatingGroup()` expose the component's state and methods:

| Property | Type | Description |
| --- | --- | --- |
| `setValue` | `(value: number) => void` | Sets the value of the rating group. |
| `clearValue` | `VoidFunction` | Clears the value of the rating group. |
| `hovering` | `boolean` | Whether the rating group is being hovered. |
| `value` | `number` | The current value of the rating group. |
| `hoveredValue` | `number` | The value of the currently hovered rating. |
| `count` | `number` | The total number of ratings. |
| `items` | `number[]` | The array of rating values. Returns an array of numbers from 1 to the max value. |
| `getItemState` | `(props: ItemProps) => ItemState` | Returns the state of a rating item. |

## Accessibility

Follows the [Radio Group WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/radio/).

| Key | Description |
| --- | --- |
| `ArrowRight` | Moves focus to the next star, increasing the rating value based on the `allowHalf` property. |
| `ArrowLeft` | Moves focus to the previous star, decreasing the rating value based on the `allowHalf` property. |
| `Enter` | Selects the focused star in the rating group. |
| `ArrowUp` | Decreases the rating by one step (a half star with `allowHalf`), like `ArrowLeft`. |
| `ArrowDown` | Increases the rating by one step (a half star with `allowHalf`), like `ArrowRight`. |
| `Space` | Selects the focused star when the rating has no value yet. |
| `Home` | Sets the rating to 1. |
| `End` | Sets the rating to `count`. |
