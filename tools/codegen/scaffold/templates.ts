/**
 * One-time starter files for a new component. Generated files (primitives.ts, api.ts,
 * index.ts, doc specs) are not here: the scaffold runs the generators for those.
 */

export interface ScaffoldNames {
  /** `date-picker` */
  key: string
  /** `DatePicker` */
  name: string
  /** `datePicker`: anatomy (`datePickerAnatomy`) and config export prefix */
  camel: string
  /** Panda recipe export name: `datePicker`, or `switchRecipe` for reserved words */
  recipe: string
  source: 'ark' | 'cerberus'
  /** Generated primitives (anatomy parts, plus `root` for root providers) */
  parts: string[]
  /** `Root` only provides context and renders no element */
  rootProvider: boolean
}

export function configTemplate({ key, name, camel, source }: ScaffoldNames) {
  const anatomyImport =
    source === 'ark'
      ? `import { ${camel}Anatomy } from '@ark-ui/react/anatomy'`
      : `import { ${camel}Anatomy } from '@cerberus/panda-preset'`
  return `${anatomyImport}
import { defineComponent } from '../manifest'

export const ${camel}Config = defineComponent({
  key: '${key}',
  anatomy: ${camel}Anatomy,
  description: \`
TODO: Describe what the ${name} component is for and when to use it.
  \`,
  abstractions: [
    {
      name: 'El',
      file: '${key}',
      description: 'An abstraction for rendering the ${name} with sensible defaults.',
      isDefaultExport: true,
      types: ['${name}Props'],
    },
  ],
  // TODO: add \`a11y\` (WAI-ARIA pattern, APG URL, keyboard interactions).
})
`
}

export function abstractionTemplate({ name }: ScaffoldNames) {
  return `'use client'

import { ${name}Root, type ${name}RootProps } from './primitives'

export type ${name}Props = ${name}RootProps

/**
 * TODO: compose the ${name} primitives into the default experience.
 */
export function ${name}El(props: ${name}Props) {
  return <${name}Root {...props} />
}
`
}

export function recipeTemplate({
  key,
  name,
  camel,
  recipe,
  source,
  parts,
}: ScaffoldNames) {
  const anatomyImport =
    source === 'ark'
      ? `import { ${camel}Anatomy } from '@ark-ui/react'`
      : `import { ${camel}Anatomy } from '../shared/anatomy'`
  const pascal = (part: string) => part.charAt(0).toUpperCase() + part.slice(1)
  return `${anatomyImport}
import { defineSlotRecipe } from '@pandacss/dev'
import type { SlotRecipeConfig } from '@pandacss/types'

/**
 * This module contains the ${camel} recipe.
 * @module
 */

/**
 * Styles for the ${camel} family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/${key})
 * @definition [${name} docs](https://cerberus.digitalu.design/react/${key})
 */
export const ${recipe}: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: '${camel}',
  slots: ${camel}Anatomy.keys(),
  jsx: [
    // primitives
${parts.map((p) => `    '${name}${pascal(p)}',`).join('\n')}
    // abstractions
    '${name}',
  ],

  base: {},

  variants: {},

  defaultVariants: {},
})
`
}

export function recipeTestTemplate({ name, recipe, parts }: ScaffoldNames) {
  const pascal = (part: string) => part.charAt(0).toUpperCase() + part.slice(1)
  return `import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('${recipe} recipe', () => {
  const { ${recipe} } = slotRecipes

  test('should be exported', () => {
    expect(${recipe}).toBeDefined()
  })

  test('should have a JSX property', () => {
    expect(${recipe}.jsx).toMatchObject([
${parts.map((p) => `      '${name}${pascal(p)}',`).join('\n')}
      '${name}',
    ])
  })
})
`
}

export function componentTestTemplate({
  key,
  name,
  rootProvider,
}: ScaffoldNames) {
  // A root provider renders no element, so there is no primitive node to query
  const primitive = rootProvider
    ? `  // TODO: add primitiveTestNode (${name}.Root renders no element of its own)\n`
    : `  primitiveTestNode: <${name}.Root data-testid="primitive-content" />,\n`
  return `import { describeDXContract } from '@/test-utils/dx-harness'
import { ${name} } from '@cerberus-design/react/${key}'

describeDXContract({
  name: '${name}',
  Root: ${name},
${primitive}})
`
}

export function docsPageTemplate({ key, name, recipe, source }: ScaffoldNames) {
  return `---
title: ${name}
description: TODO
npm: '@cerberus-design/react'
source: 'components/${key}'
recipe: 'slots/${recipe}.ts'
${source === 'ark' ? `ark: '${key}'\n` : ''}group: Components
---

## Import

\`\`\`tsx
import { ${name} } from '@cerberus/react'
\`\`\`

## Usage

TODO: describe the default usage.

<Example path="components/${key}" demo="basic" />

## API

<ComponentApi spec="${key}" />
`
}

export function demosIndexTemplate() {
  return `import { BasicDemo } from './basic.demo'

export const DEMOS = {
  basic: { preview: <BasicDemo /> },
}
`
}

export function basicDemoTemplate({ name }: ScaffoldNames) {
  return `import { ${name} } from '@cerberus-design/react'

export function BasicDemo() {
  return <${name} />
}
`
}
