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
  // Data
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9359-322&m=dev',
  // Design & Dev
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9381-11&m=dev',
  // File
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9384-139&m=dev',
  // Formatting
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9472-2&m=dev',
  // Health
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9553-1938&m=dev',
  // IBM
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9614-3177&m=dev',
  // Instrument
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9617-2&m=dev',
  // Nav
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9018-8973&m=dev',
  // Operational
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9601-2186&m=dev',
  // Research
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9626-669&m=dev',
  // Senses
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9632-3&m=dev',
  // Social
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9656-349&m=dev',
  // Status
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9266-589&m=dev',
  // System
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9693-4&m=dev',
  // Tech
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9622-244&m=dev',
  // Time
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9619-3&m=dev',
  // Toggle
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9602-36406&m=dev',
  // Travel
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9455-852&m=dev',
  // User
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9426-1626&m=dev',
  // Weather
  'https://www.figma.com/design/ducwqOCxoxcWc3ReV3FYd8/Digital-University-Component-Library?node-id=9385-2&m=dev',
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

// This file was generated using the create:icons script

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

    uniqueNames.forEach((componentName) => {
      componentName.forEach(async (name) => {
        const componentData = components.find((c) => c.name === name)
        await write(
          resolve(iconsDirPath, `${name}.figma.tsx`),
          getIconTemplate(name, componentData?.figmaUrl || ''),
        )
        console.log(`Wrote ${name}`)
      })
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
