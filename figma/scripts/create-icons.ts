import { client } from '@figma/code-connect'
import { write } from 'bun'
import { resolve } from 'node:path'
import { green } from './variables/utils'

/**
 * This module accepts a Figma Page URL and returns a list of components to
 * create a Code Connect file for each component.
 */

const iconGroups = [
  // Alphanumeric
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9269-768&m=dev',
  // App Catalog
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9269-1202&m=dev',
  // Commerce
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9301-911&m=dev',
  // Controls
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9315-35054&m=dev',
  // Nav
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9018-8973&m=dev',
]

function addUnderScoreBeforeNumber(name: string): string {
  return name.replace(/([0-9]+)/g, '_$1')
}

function makeComponentName(name: string): string {
  return addUnderScoreBeforeNumber(
    name
      .split(/[.-]/g)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(''),
  )
}

function getIconTemplate(name: string, url: string): string {
  return `
import figma from '@figma/code-connect'
import { ${name} } from '@cerberus-design/icons'

figma.connect(
  ${name},
  '${url}',

  {
    imports: ["import { ${name} } from '@cerberus/icons'"],
    props: {
      size: figma.enum('Size', {
        sm: 16,
        md: 20,
        lg: 24,
        xl: 32,
      }),
    },

    example: (props) => <${name} size={props.size} />,
  },
)
  `
}

async function getIcons() {
  try {
    const data = await Promise.all(
      iconGroups.map(async (group) => await client.getComponents(group)),
    )

    // Figma example: https://github.com/figma/code-connect/blob/main/cli/scripts/import-icons.ts

    // Converts icon names from e.g `icon-32-list` to `Icon32List`
    const components = data
      .flatMap((group) => group)
      .map((component) => ({
        ...component,
        name: makeComponentName(component.name),
      }))

    const uniqueNames = new Set([components.map((c) => c.name)])
    const iconsDirPath = resolve(
      import.meta.dir,
      '..', // scripts
      'src',
      'icons',
    )

    uniqueNames.forEach(async ([componentName]) => {
      await write(
        resolve(iconsDirPath, `${componentName}.figma.tsx`),
        getIconTemplate(componentName, 'TODO: ADD URL'),
      )
      console.log(`Wrote ${componentName}`)
    })

    console.log(
      green(
        `✅ Tokens files have been written to the ${iconsDirPath} directory`,
      ),
    )
  } catch (error) {
    console.error(error)
  }
}

getIcons()
