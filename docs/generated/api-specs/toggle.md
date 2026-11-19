# Toggle API reference

The Toggle component is a two-state button that allows users to toggle between states via an action, such as pressed and not pressed.

It is headless (unstyled) to fit any scenario: style it with style props or the `css` prop, or render your own button with `asChild`. Use `Toggle.Indicator` to show content based on the pressed state. If you only need to conditionally render content based on a binary condition, use the Show component instead.

Import: `import { Toggle } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Toggle.Root (primitive)

The root container of the Toggle component.

Selector: `[data-scope="toggle"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `disabled` | `boolean` | No | — | Whether the toggle is disabled. |
| `defaultPressed` | `boolean` | No | `false` | The default pressed state of the toggle. |
| `pressed` | `boolean` | No | — | The pressed state of the toggle. |
| `onPressedChange` | `((pressed: boolean) => void)` | No | — | Event handler called when the pressed state of the toggle changes. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-state` | `"on"` \| `"off"` |
| `data-pressed` | Present when pressed. |
| `data-disabled` | Present when disabled. |

### Toggle.Indicator (primitive)

The indicator primitive part of the Toggle component.

Selector: `[data-scope="toggle"][data-part="indicator"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `fallback` | `React.ReactNode` | No | — | The fallback content to render when the toggle is not pressed. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |

| Data attribute | Value |
| --- | --- |
| `data-disabled` | Present when disabled. |
| `data-pressed` | Present when pressed. |
| `data-state` | `"on"` \| `"off"` |

### Toggle.Context (primitive)

Exposes the Toggle state to a render function. Renders no element.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `children` | `(context: UseToggleContext) => ReactNode` | Yes | — |  |

## Accessibility

Follows the [Button WAI-ARIA pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

| Key | Description |
| --- | --- |
| `Space` | Toggle the pressed state. |
| `Enter` | Toggle the pressed state. |
