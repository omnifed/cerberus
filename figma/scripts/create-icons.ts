import { client } from '@figma/code-connect'

/**
 * This module accepts a Figma Page URL and returns a list of components to
 * create a Code Connect file for each component.
 */

async function getIcons() {
  try {
    const components = await client.getComponents(
      'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=2-14619&m=dev',
    )

    console.log({
      components,
      properties: components.map(
        ({ componentPropertyDefinitions }) => componentPropertyDefinitions,
      ),
    })

    // Figma example: https://github.com/figma/code-connect/blob/main/cli/scripts/import-icons.ts

    // STEP 1: Get all the icons (should just be components)

    // STEP 2: Create a new file for each icon [name].figma.tsx in the src/icons folder (using Bun)

    // Step 3. The contents should match the arrow-right.figma.tsx file
  } catch (error) {
    console.error(error)
  }
}

getIcons()
