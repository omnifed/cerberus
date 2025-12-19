import 'dotenv/config'
import { write } from 'bun'
import { resolve } from 'node:path'
import FigmaApi from './figma-api'
import { green } from './utils'
import { tokenFilesFromLocalVariables } from './token-export'
import { textStyleNodes } from './nodes/text-styles'

interface Options {
  hasTextStyles: boolean
  name: string
}

async function main(fileId: string, options: Options) {
  if (!process.env.FIGMA_ACCESS_TOKEN) {
    throw new Error('FIGMA_ACCESS_TOKEN env variables are required')
  }

  // Create Figma API client
  const api = new FigmaApi(process.env.FIGMA_ACCESS_TOKEN, fileId)

  // Fetch all the Figma data
  const [localVariables, textStyles] = await Promise.all([
    api.getLocalVariables(),
    options.hasTextStyles
      ? api.getTextStyles(textStyleNodes)
      : Promise.resolve({ nodes: [] }),
  ])

  // Get the path to the tokens directory
  const tokenDirPath = resolve(
    import.meta.dir,
    '..', // variables
    '..', // scripts
    '..', // figma
    'packages',
    'tokens',
    'src',
    'data',
  )
  const tokensFiles = tokenFilesFromLocalVariables(localVariables)

  // Write variable files
  Object.entries(tokensFiles).forEach(async ([fileName, fileContent]) => {
    await write(
      resolve(tokenDirPath, fileName),
      JSON.stringify(fileContent, null, 2),
    )
    console.log(`Wrote ${fileName}`)
  })

  console.log(
    green(`✅ Tokens files have been written to the ${tokenDirPath} directory`),
  )

  // Write text styles file
  if (options.hasTextStyles) {
    await write(
      resolve(tokenDirPath, `${options.name}-text-styles.json`),
      JSON.stringify(textStyles.nodes, null, 2),
    )
    console.log(`Wrote ${options.name}-text-styles.json`)
  }

  console.log(
    green(
      `✅ Text style files have been written to the ${tokenDirPath} directory`,
    ),
  )
}

main('ducwqOCxoxcWc3ReV3FYd8', {
  hasTextStyles: true,
  name: 'cerberus',
})

main('LVwP0fNzcEoLxwahJYvfYt', {
  hasTextStyles: false,
  name: 'elysium',
})
