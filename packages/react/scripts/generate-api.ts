import { accordionAnatomy } from '@ark-ui/react/anatomy'
import { mkdir } from 'node:fs/promises'
import { join } from 'node:path'

async function generateTestAPI() {
  const componentName = 'Accordion'
  const componentKey = 'accordion'

  const outputDir = join(process.cwd(), 'src', 'components', 'accordion')

  await mkdir(outputDir, { recursive: true })

  const parts = accordionAnatomy.keys()

  // --- Generate primitives.tsx ---
  let primitivesCode = `'use client'\n\n`
  primitivesCode += `import { ${componentName} as Ark${componentName} } from '@ark-ui/react/${componentKey}'\n`
  primitivesCode += `import { type ComponentProps, createSlotRecipeContext } from 'styled-system/jsx'\n`
  primitivesCode += `import { ${componentKey} } from 'styled-system/recipes'\n\n`
  primitivesCode += `const { withProvider, withContext } = createSlotRecipeContext(${componentKey})\n\n`

  parts.forEach((part) => {
    const isRoot = part === 'root'
    const partName = `${componentName}${part.charAt(0).toUpperCase() + part.slice(1)}`
    const arkPart = `Ark${componentName}.${part.charAt(0).toUpperCase() + part.slice(1)}`

    primitivesCode += `// ${partName} -----------------------------------------------------\n\n`
    primitivesCode += `export type ${partName}Props = ComponentProps<typeof ${partName}>\n`
    primitivesCode += `export const ${partName} = ${isRoot ? 'withProvider' : 'withContext'}(${arkPart}, '${part}')\n\n`
  })

  // --- Generate api.ts ---
  let apiCode = `import { AccordionItemGroup } from './item-group'\n`
  apiCode += `import {\n`
  parts.forEach((part) => {
    const partName = `${componentName}${part.charAt(0).toUpperCase() + part.slice(1)}`
    apiCode += `  ${partName},\n`
  })
  apiCode += `} from './primitives'\n\n`

  // 2. Export as the real "Accordion" object
  apiCode += `export const ${componentName} = Object.assign(${componentName}Root, {\n`
  parts.forEach((part) => {
    const isRoot = part === 'root'
    const exportKey = isRoot ? 'Root' : part.charAt(0).toUpperCase() + part.slice(1)
    const partName = `${componentName}${part.charAt(0).toUpperCase() + part.slice(1)}`
    apiCode += `  ${exportKey}: ${partName},\n`
  })
  apiCode += `  ItemGroup: AccordionItemGroup,\n`
  apiCode += `})\n`

  await Bun.write(join(outputDir, 'primitives.tsx'), primitivesCode)
  await Bun.write(join(outputDir, 'api.ts'), apiCode)
  await Bun.write(join(outputDir, 'index.ts'), `export * from './api'\n`)

  console.log(`✅ Generated ${componentName} API at ${outputDir}`)
}

generateTestAPI().catch(console.error)
