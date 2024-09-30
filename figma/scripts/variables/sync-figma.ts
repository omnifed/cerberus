import 'dotenv/config'
import { write } from 'bun'
import { resolve } from 'node:path'
import FigmaApi from './figma-api'
import { green } from './utils'
import { tokenFilesFromLocalVariables } from './token-export'

async function main() {
  if (!process.env.FIGMA_ACCESS_TOKEN) {
    throw new Error('FIGMA_ACCESS_TOKEN env variables are required')
  }

  const api = new FigmaApi(process.env.FIGMA_ACCESS_TOKEN)
  const localVariables = await api.getLocalVariables()

  const tokenDirPath = resolve(
    import.meta.dir,
    '..', // variables
    '..', // scripts
    '..', // figma
    'packages',
    'panda-preset',
    'src',
    'tokens',
    'data',
  )
  const tokensFiles = tokenFilesFromLocalVariables(localVariables)

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
}

main()
