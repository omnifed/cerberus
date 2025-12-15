import 'dotenv/config'
import { write } from 'bun'
import { resolve } from 'node:path'
import FigmaApi from './figma-api'
import { green } from './utils'
import { tokenFilesFromLocalVariables } from './token-export'
import { textStyleNodes } from './nodes/text-styles'

async function main() {
  if (!process.env.FIGMA_ACCESS_TOKEN) {
    throw new Error('FIGMA_ACCESS_TOKEN env variables are required')
  }

  // Create Figma API client
  const api = new FigmaApi(process.env.FIGMA_ACCESS_TOKEN)

  // Fetch all the Figma data
  const [localVariables, textStyles] = await Promise.all([
    api.getLocalVariables(),
    api.getTextStyles(textStyleNodes),
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
  await write(
    resolve(tokenDirPath, 'text-styles.json'),
    JSON.stringify(textStyles.nodes, null, 2),
  )

  console.log(
    green(
      `✅ Text style files have been written to the ${tokenDirPath} directory`,
    ),
  )
}

main()
