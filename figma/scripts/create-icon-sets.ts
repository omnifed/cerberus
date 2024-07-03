import { client } from '@figma/code-connect'

async function getIcons() {
  try {
    const components = await client.getComponents(
      'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?m=auto&node-id=8828-2234&t=3tgTnJYuDX1IXmLI-1',
    )

    console.log({
      components,
      properties: components.map(
        ({ componentPropertyDefinitions }) => componentPropertyDefinitions,
      ),
    })

    // STEP 1: Get all the icons (should just be components)

    // STEP 2: Create a new file for each icon [name].figma.tsx in the src/icons folder (using Bun)

    // Step 3. The contents should match the arrow-right.figma.tsx file
  } catch (error) {
    console.error(error)
  }
}

getIcons()
