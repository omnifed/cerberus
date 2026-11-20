# Group API reference

The Group component lays out its children in a normal, attached, grown or stacked
group, horizontally or vertically.

Use the `layout` and `orientation` props to choose how the children are grouped.

**NOTE**: This API is _slotless_ and is a single rendered layer: `<Group>` renders `Group.Root`.

Import: `import { Group } from '@cerberus/react'`

<!-- api-reference -->

## Variants

Set on `Group` or `Group.Root`; they cascade to every part.

| Variant | Values | Default |
| --- | --- | --- |
| `orientation` | `'horizontal'` \| `'vertical'` | `'horizontal'` |
| `layout` | `'default'` \| `'attached'` \| `'grow'` \| `'stack'` | `'default'` |

## Parts

### Group.Root (primitive)

The root container of the Group component.

Selector: `[data-scope="group"][data-part="root"]`

| Prop | Type | Required | Default | Description |
| --- | --- | --- | --- | --- |
| `orientation` | `'horizontal' \| 'vertical'` | No | `'horizontal'` | PandaCSS recipe variant for orientation. |
| `layout` | `'default' \| 'attached' \| 'grow' \| 'stack'` | No | `'default'` | PandaCSS recipe variant for layout. |
| `asChild` | `boolean` | No | `false` | Merges props and accessibility attributes onto the immediate child element instead of rendering a wrapper DOM node. |
| `unstyled` | `boolean` | No | `false` | Strips Cerberus PandaCSS recipe classes while preserving behavior and WAI-ARIA attributes. |
| `css` | `SystemStyleObject` | No | `undefined` | PandaCSS style object for custom atomic styling. All PandaCSS style props (e.g. p, bg, color) are also accepted. |
