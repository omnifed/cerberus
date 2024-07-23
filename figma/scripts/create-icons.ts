import { client } from '@figma/code-connect'
import { write } from 'bun'
import { resolve } from 'node:path'
import { appendFile } from 'node:fs/promises'
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

function addUnderscoreToNumber(name: string): string {
  return correctIBMWeirdFormatting(name.replace(/([0-9]+)/g, '_$1'))
}

function shouldReplaceUnderscore(name: string): boolean {
  return (
    /(Db)|(HL)|(Mp)|(Mpg)|(QCu)|(QU)|(3D)|(3rd)_[0-9]/.test(name) ||
    /Health_3rd/.test(name)
  )
}

function correctIBMWeirdFormatting(name: string): string {
  let formattedName = name

  if (shouldReplaceUnderscore(name) && !/(Chart)|(Erase)_3D/.test(name)) {
    formattedName = name.replace('_', '').replace('HL7', 'Hl7')
  }

  if (/QCu[0-9]/.test(formattedName) || /Q[C|I][z|d|y]/.test(formattedName)) {
    formattedName = formattedName.toUpperCase()
  }

  return formattedName
}

function makePascalCase(name: string): string {
  return name
    .split(/[.-]/g)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

function makeComponentName(name: string, rawUrl: string): string {
  const url: URL = new URL(rawUrl)
  const nodeID = url.searchParams.get('node-id') ?? ''
  let formattedName = name

  if (nodeID.includes('9553')) {
    formattedName = `watson-health-${name}`
  }

  return addUnderscoreToNumber(
    makePascalCase(formattedName)
      .replace('4k', '4K')
      .replace('2d', '2D')
      .replace('3d', '3D'),
  )

  // return addUnderScoreToStartNumber(
  //   addUnderscoreToEndNumber(makePascalCase(formattedName)),
  // )
}

function getInitialTemplate(): string {
  return `
import figma from '@figma/code-connect'
import * as CerbIcons from '@cerberus-design/icons'

/**
 * This file was generated by the create-icons script.
 * Do not modify this file directly or your changes will be overwritten.
 **/
  `
}

function getIconTemplate(name: string, url: string): string {
  return `
const ${name} = CerbIcons['${name}']

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
      iconGroups.map(async (group) => {
        const data = await client.getComponents(group)
        return data.map((component) => ({
          ...component,
          group,
        }))
      }),
    )

    // Figma example: https://github.com/figma/code-connect/blob/main/cli/scripts/import-icons.ts

    // Converts icon names from e.g `icon-32-list` to `Icon32List`
    const components = data
      .flatMap((group) => group)
      .map((component) => ({
        ...component,
        name: makeComponentName(component.name, component.group),
      }))

    const uniqueNames = new Set([components.map((c) => c.name)])
    const iconsDirPath = resolve(
      import.meta.dir,
      '..', // scripts
      'src',
      'generated',
    )

    await write(resolve(iconsDirPath, `icons.figma.tsx`), getInitialTemplate())

    uniqueNames.forEach((componentName) => {
      componentName.forEach(async (name) => {
        const componentData = components.find((c) => c.name === name)
        await appendFile(
          resolve(iconsDirPath, `icons.figma.tsx`),
          getIconTemplate(name, componentData?.figmaUrl || ''),
        )
        // await write(
        //   resolve(iconsDirPath, `icons.figma.tsx`),
        //   getIconTemplate(name, componentData?.figmaUrl || ''),
        // )
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
