# Create Doc Component Page

This document outlines the steps to create a new component page on the docs website within the `docs` project.

- This process must follow the [style guide](./style-guide.md) conventions.
- This process must understand the structure of the docs website by following the [docs](./docs.md) document.

## Steps

1. Navigate to the `docs/components/[slug]/content` directory
2. Create a new file named `untitled.mdx`
3. Navigate to the `docs/components/[slug]/content/items/components.ts` file
4. Import the new mdx component and frontmatter
5. Create a new meta object and include it in the `items` export in alphabetical order.

## `docs/components/[slug]/content/untitled.mdx`

This file contains the documentation for the Untitled component. It contains the frontmatter, examples, and API details.

Use this template to provide the contents of the file. Fill in the missing parts as needed:

````mdx
---
title: Untitled Component
description: A short description describing the Untitled component.
npm: '@cerberus-design/react'
source: 'components/untitled'
recipe: 'slots/untitled.ts'
ark: 'untitled-ark-component-slug'
---

import CodePreview from '@/app/components/CodePreview'
import { NoteAdmonition } from '@/app/components/Admonition'
import { StaticPreview } from '../components/untitled/static'

```ts
import { UntitledComponent } from '@cerberus/react'
```
````

## Usage

A long description of the Untitled component.

<CodePreview preview={<StaticPreview />}>

```tsx
...the example code used in the static.tsx file
```

</CodePreview>

## TODO: Different Variant Examples Go here

## Primitives

You can utilize the primitive components or the `css` prop to customize the untitled component.

| Component           | Description                                   |
| ------------------- | --------------------------------------------- |
| ThePrimitiveElement | A short description of the primitive element. |

<CodePreview preview={<CustomPreview />}>

```tsx
...the custom example code used in static.tsx
```

</CodePreview>

## API

### Untitled

The `Untitled` component is an abstraction of the primitives and accepts the following props:

| Name | Default | Description                    |
| ---- | ------- | ------------------------------ |
| size | `lg`    | The size of the untitled item. |

The Untitled is an abstraction of the [Root component](https://ark-ui.com/react/docs/components/accordion#api-reference).

### Add other exposed non-primitive APIs here

### Parts

The `UntitledParts` API is an Object containing the full family of components.

<NoteAdmonition description="It is best to only use the UntitledParts if you are building a custom solution. Importing Object based components will ship every property it includes into your bundle, regardless if you use it or not." />

| Name | Description                                                        |
| ---- | ------------------------------------------------------------------ |
| Root | The `UntitledRoot` component which is the Provider for the family. |

````

## `docs/components/[slug]/content/items/components.ts`

This file exports the metadata used to render the page in the docs. Each object should be listed in alphabetical order.

Use this template to provide the contents of the file:

```ts
import UntitledComponent, { frontmatter as untitledComponentFrontmatter } from ../untitled.mdx'

export const items = [
  {
    id: 'UUID-1',
    label: 'Untitled',
    slug: 'untitled',
    href: '/docs/components/untitled',
    frontmatter: untitledComponentFrontmatter,
    meta: {
      title: 'Untitled Component in Cerberus Design System',
      description:
        'Discover how to use the Untitled component in the Cerberus Design System.',
    },
    Content: UntitledComponent,
  },
]
````

## `docs/components/[slug]/components/untitled/static.tsx`

This file contains all the examples used in the `untitled.mdx` file. Each example should should be created with the intent to showcase the component's usage.
