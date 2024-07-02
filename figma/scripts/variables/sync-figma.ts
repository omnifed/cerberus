import 'dotenv/config'
import { write } from 'bun'
import { resolve } from 'node:path'
import FigmaApi from './figma-api'
import { green } from './utils'
import { tokenFilesFromLocalVariables } from './token-export'

/**
 * Usage:
 *
 * // Defaults to writing to the tokens_new directory
 * npm run sync-figma-to-tokens
 *
 * // Writes to the specified directory
 * npm run sync-figma-to-tokens -- --output directory_name
 */

async function main() {
  if (!process.env.FIGMA_ACCESS_TOKEN) {
    throw new Error('FIGMA_ACCESS_TOKEN env variables are required')
  }

  const api = new FigmaApi(process.env.FIGMA_ACCESS_TOKEN)
  const localVariables = await api.getLocalVariables()

  const outputDir = resolve(
    import.meta.dir,
    '..',
    '..',
    'packages',
    'panda-preset',
    'src',
    'tokens',
  )
  const tokensFiles = tokenFilesFromLocalVariables(localVariables)

  Object.entries(tokensFiles).forEach(([fileName, fileContent]) => {
    write(outputDir, JSON.stringify(fileContent, null, 2))
    console.log(`Wrote ${fileName}`)
  })

  console.log(
    green(`✅ Tokens files have been written to the ${outputDir} directory`),
  )
}

main()
