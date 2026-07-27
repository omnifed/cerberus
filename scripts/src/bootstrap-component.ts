import { cancel, intro, isCancel, outro, spinner, text } from '@clack/prompts'
import { mkdir, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import pc from 'picocolors'

// Helper functions for casing
const toKebabCase = (str: string) =>
  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

const toPascalCase = (str: string) =>
  toKebabCase(str)
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('')

const toCamelCase = (str: string) => {
  const pascal = toPascalCase(str)
  return pascal.charAt(0).toLowerCase() + pascal.slice(1)
}

async function main() {
  intro(pc.bgCyan(pc.black(' Cerberus UI Component Bootstrapper ')))

  const inputName = await text({
    message: 'What is the name of the new component?',
    placeholder: 'e.g., DatePicker, accordion, ToggleSwitch',
    validate(value) {
      if (value?.trim().length === 0) return 'Component name is required!'
    },
  })

  if (isCancel(inputName)) {
    cancel('Operation cancelled.')
    process.exit(0)
  }

  const name = inputName as string
  const kebab = toKebabCase(name)
  const pascal = toPascalCase(name)
  const camel = toCamelCase(name)

  const s = spinner()
  s.start(`Bootstrapping ${pascal}...`)

  try {
    // Define Paths
    const paths = {
      recipeDir: join('packages', 'panda-preset', 'src', 'recipes', 'slots'),
      reactDir: join('packages', 'react', 'src', 'components', kebab),
      testReactDir: join('tests', 'react', 'components'),
      testRecipeDir: join('tests', 'panda-preset', 'recipes', 'slots'),
      // Docs paths
      docsContentDir: join('docs', 'app', 'docs', 'components', kebab, 'content'),
      docsCompDir: join(
        'docs',
        'app',
        'docs',
        'components',
        kebab,
        'components',
        kebab,
      ),
    }

    // Ensure directories exist
    for (const dir of Object.values(paths)) {
      await mkdir(dir, { recursive: true })
    }

    // 1. Create Recipe File
    const recipeContent = `import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { ${camel}Anatomy } from '@ark-ui/react'

/**
 * This module contains the ${camel} recipe.
 * @module
 */

/**
 * Styles for the ${camel} family components
 * @definition [ARK docs](https://ark-ui.com/react/docs/components/${kebab})
 * @definition [${pascal} docs](https://cerberus.digitalu.design/react/${kebab})
 */
export const ${camel}: Partial<SlotRecipeConfig> = defineSlotRecipe({
  className: '${camel}',
  slots: ${camel}Anatomy.keys(),
  jsx: [
    // primitives
    '${pascal}Root',
    // abstractions
    '${pascal}',
  ],

  base: {},

  variants: {},

  defaultVariants: {},
})
`
    await writeFile(join(paths.recipeDir, `${kebab}.ts`), recipeContent)

    // 2. Create React Component Files
    const primitivesContent = `import { ${pascal} } from '@ark-ui/react/${kebab}'
import { ${camel}, type ${pascal}VariantProps } from 'styled-system/recipes'
import {
  createCerberusPrimitive,
  type CerberusPrimitiveProps,
} from '../../system/index'

/**
 * This module contains the primitives of the ${pascal} component.
 * @module '${kebab}/primitives'
 */

const { withSlotRecipe } = createCerberusPrimitive(${camel})

// Root

export type ${pascal}RootProps = CerberusPrimitiveProps<${pascal}.RootProps & ${pascal}VariantProps>
export const ${pascal}Root = withSlotRecipe(${pascal}.Root, 'root')
`
    const indexContent = `export * from './${kebab}'
export * from './primitives'
`
    const componentContent = `import { ${pascal}Root } from './primitives'

export type ${pascal}Props = ${pascal}RootProps

export function ${pascal}(props: ${pascal}Props) {
  return null;
}
`
    await writeFile(join(paths.reactDir, 'primitives.ts'), primitivesContent)
    await writeFile(join(paths.reactDir, 'index.ts'), indexContent)
    await writeFile(join(paths.reactDir, `${kebab}.tsx`), componentContent)

    // 3. Create Test Files
    const reactTestContent = `import { describe, test, expect } from 'bun:test'
import { render, screen } from '@testing-library/react'
import { ${pascal} } from '@cerberus-design/react'

describe('${pascal} Component', () => {
  test('should render a ${pascal} element', () => {
    render(<${pascal} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })
})
`
    const recipeTestContent = `import { describe, test, expect } from 'bun:test'
import { slotRecipes } from '@cerberus/panda-preset'

describe('${pascal} Recipe', () => {
  const { ${camel} } = slotRecipes

  test('should be defined', () => {
    expect(${camel}).toBeDefined()
  })
})
`
    await writeFile(join(paths.testReactDir, `${kebab}.test.tsx`), reactTestContent)
    await writeFile(join(paths.testRecipeDir, `${kebab}.test.ts`), recipeTestContent)

    // 4. Create Docs Files
    const staticDemoContent = `import { BasicDemo } from "./basic.demo"

export const DEMOS = {
  basic: {
    id: "${kebab}.basic",
    preview: <BasicDemo />
  },
  custom: {
    id: "${kebab}.custom",
    preview: null
  },
  meta: "import { ${pascal} } from '@cerberus-design/react'"
}
`
    const basicDemoContent = `import { ${pascal} } from "@cerberus-design/react"

export function BasicDemo() {
  return null;
}
`
    const mdxContent = `---
title: ${pascal}
description: Add your description for this component
npm: '@cerberus-design/react'
source: 'components/${kebab}'
recipe: 'slots/${kebab}.ts'
ark: '${kebab}'
---

import CodePreview from '@/app/components/CodePreview'
import { CodeSnippet } from '@/app/components/code-snippet'
import { NoteAdmonition } from '@/app/components/Admonition'
import { DEMOS } from '../components/${kebab}/static'

<CodeSnippet snippet={DEMOS.meta} />

## Usage

Add a basic description about this component here...

<CodePreview {...DEMOS.basic} />

## Customizing

You can customize the \`${pascal}\` using style props and data selectors on any slot primitive.

<CodePreview {...DEMOS.custom} />

## Guides

Add any guides here...

## Primitives

The layers of the \`${pascal}\` which can be used to create a fully custom solution.

| Component           | Description                                        |
| ------------------- | -------------------------------------------------- |
| \`Root\`              | The main container for the ${pascal}.                |

### Data Attributes

The primitives additionally use the following data attributes for custom styling:

| Name         | Value         | Description                         |
| ------------ | ------------- | ----------------------------------- |
| \`data-scope\` | \`${kebab}\`      | The scope of the components.        |

## API

### Root Props

| Prop      | Type      | Required | Description                                                                                         |
| --------- | --------- | -------- | --------------------------------------------------------------------------------------------------- |
| \`asChild\` | \`boolean\` | No       | Use the provided child element as the default rendered element, combining their props and behavior. |
`

    await writeFile(join(paths.docsCompDir, 'static.tsx'), staticDemoContent)
    await writeFile(join(paths.docsCompDir, 'basic.demo.tsx'), basicDemoContent)
    await writeFile(join(paths.docsContentDir, `${kebab}.mdx`), mdxContent)

    s.stop(pc.green(`✔ ${pascal} successfully bootstrapped!`))

    outro(
      pc.gray(`Files created:
  - packages/panda-preset/src/recipes/slots/${kebab}.ts
  - packages/react/src/components/${kebab}/index.ts
  - packages/react/src/components/${kebab}/primitives.ts
  - packages/react/src/components/${kebab}/${kebab}.tsx
  - tests/react/components/${kebab}.test.tsx
  - tests/panda-preset/recipes/slots/${kebab}.test.ts
  - docs/app/docs/components/${kebab}/content/${kebab}.mdx
  - docs/app/docs/components/${kebab}/components/${kebab}/static.tsx
  - docs/app/docs/components/${kebab}/components/${kebab}/basic.demo.tsx
`),
    )
  } catch (error) {
    s.stop(pc.red('✖ Failed to bootstrap component'))
    console.error(error)
    process.exit(1)
  }
}

main().catch(console.error)
