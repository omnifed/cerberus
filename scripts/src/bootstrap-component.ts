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
    }

    // Ensure directories exist
    for (const dir of Object.values(paths)) {
      await mkdir(dir, { recursive: true })
    }

    // 1. Create Recipe File
    const recipeContent = `import { defineSlotRecipe, type SlotRecipeConfig } from '@pandacss/dev'
import { ${camel}Anatomy } from '@ark-ui/react'
import { focusStates } from '../shared/states'

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
  jsx: [],

  base: {}
})
`
    await writeFile(join(paths.recipeDir, `${kebab}.ts`), recipeContent)

    // 2. Create React Component Files
    const primitivesContent = `import {} from '@ark-ui/react/${kebab}'
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
`
    const indexContent = `export * from './${kebab}'
export * from './primitives'
`
    const componentContent = `import { withSlotRecipe } from './primitives'

/**
 * ${pascal} component implementation
 */
`
    await writeFile(join(paths.reactDir, 'primitives.ts'), primitivesContent)
    await writeFile(join(paths.reactDir, 'index.ts'), indexContent)
    await writeFile(join(paths.reactDir, `${kebab}.tsx`), componentContent)

    // 3. Create Test Files
    const reactTestContent = `import { describe, test, expect } from 'bun:test'

describe('${pascal} Component', () => {
  test('should render correctly', () => {
    // Add component tests here
    expect(true).toBe(true)
  })
})
`
    const recipeTestContent = `import { describe, test, expect } from 'bun:test'
import { ${camel} } from '../../../../packages/panda-preset/src/recipes/slots/${kebab}'

describe('${pascal} Recipe', () => {
  test('should be defined', () => {
    expect(${camel}).toBeDefined()
  })
})
`
    await writeFile(join(paths.testReactDir, `${kebab}.test.tsx`), reactTestContent)
    await writeFile(join(paths.testRecipeDir, `${kebab}.test.ts`), recipeTestContent)

    s.stop(pc.green(`✔ ${pascal} successfully bootstrapped!`))

    outro(
      pc.gray(`Files created:
  - packages/panda-preset/src/recipes/slots/${kebab}.ts
  - packages/react/src/components/${kebab}/index.ts
  - packages/react/src/components/${kebab}/primitives.ts
  - packages/react/src/components/${kebab}/${kebab}.tsx
  - tests/react/components/${kebab}.test.tsx
  - tests/panda-preset/recipes/slots/${kebab}.test.ts
`),
    )
  } catch (error) {
    s.stop(pc.red('✖ Failed to bootstrap component'))
    console.error(error)
    process.exit(1)
  }
}

main().catch(console.error)
