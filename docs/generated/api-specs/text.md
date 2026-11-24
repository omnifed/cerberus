# Text API reference

The Text component renders typography with Panda style props such as
`textStyle` and `color`. Choose the element with `as` (`p` by default,
`h1`–`h6`, `strong`, `em`, `small` or `span`); it accepts every
HTML attribute of that element, `ref` included.

**NOTE**: This API is _slotless_ and has no recipe: nothing is styled until you
pass style props.

Import: `import { Text } from '@cerberus/react'`

<!-- api-reference -->

## Parts

### Text.El (abstraction)

Renders the element chosen with `as` (`p` by default, `h1`–`h6`, `strong`, `em`, `small`, `span`) with style props

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `as` | `T` | No | — | The element to render as. Defaults to 'p'. |
| `h1` | `cerberus.h1` | Yes | — |  |
| `h2` | `cerberus.h2` | Yes | — |  |
| `h3` | `cerberus.h3` | Yes | — |  |
| `h4` | `cerberus.h4` | Yes | — |  |
| `h5` | `cerberus.h5` | Yes | — |  |
| `h6` | `cerberus.h6` | Yes | — |  |
| `strong` | `cerberus.strong` | Yes | — |  |
| `em` | `cerberus.em` | Yes | — |  |
| `small` | `cerberus.small` | Yes | — |  |
| `span` | `cerberus.span` | Yes | — |  |
| `p` | `cerberus.p` | Yes | — |  |

### Text.Root (primitive)

The root container of the Text component.

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
