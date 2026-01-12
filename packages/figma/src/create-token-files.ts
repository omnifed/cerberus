import { write } from 'bun'
import { oraPromise } from 'ora'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import { figma, FigmaApiType } from './sync/api'
import { localVarsMixin } from './sync/mixin-local-vars'
import { publishedVarsMixin } from './sync/mixin-published-vars'
import { fileNodesMixin } from './sync/mixin-nodes'
import { getTokensDataPath } from './utils/path'
import { slugify } from './utils/slugify'
import { LocalVariable } from '@figma/rest-api-spec'
import {
  createFileContent,
  createNodeFileContent,
  createSemanticTokenPath,
  resolveValuesByMode,
} from './utils/helpers'

// TEMPORARY IMPORT
import { textStyleNodes } from './temp-text-styles'

type FigmaWithMixins = FigmaApiType &
  typeof localVarsMixin &
  typeof publishedVarsMixin &
  typeof fileNodesMixin

async function createTokenFiles() {
  const token = process.env.FIGMA_ACCESS_TOKEN
  const file = 'ducwqOCxoxcWc3ReV3FYd8'

  if (!token) {
    throw new Error('Missing FIGMA_ACCESS_TOKEN env variable')
  }

  const api = figma(token, file, [
    localVarsMixin,
    publishedVarsMixin,
    fileNodesMixin,
  ]) as FigmaWithMixins

  try {
    await oraPromise(
      Promise.all([
        api.getLocalVariables(),
        api.getPublishedVariables(),
        api.getNodes(textStyleNodes),
      ]),
      {
        text: 'Fetching variables',
      },
    )
  } catch (error) {
    console.error('Error fetching variables:', error)
    process.exit(1)
  }

  const localVars = {
    collections: api.localCollections(),
    variables: api.localVariables(),
  }
  const collectionList = api.createCollectionList()

  const tokensDataPath = getTokensDataPath()
  const typographyNodes = api.fileNodes()

  try {
    await oraPromise(mkdir(tokensDataPath, { recursive: true }), {
      text: 'Creating tokens data directory',
    })
  } catch (error) {
    console.error('Error creating tokens data directory:', error)
    process.exit(1)
  }

  try {
    for (const collection of collectionList) {
      const fileName = `${slugify(collection.name)}.ts`
      const collectionPath = path.join(tokensDataPath, fileName)

      const collectionData = localVars.collections?.[collection.id]
      if (!collectionData) {
        console.error(`Collection not found: ${collection.id}`)
        process.exit(1)
      }

      const activeVars = collectionData?.variableIds || []
      // const isExtended = collectionData?.isExtension || false

      const data = activeVars.reduce(
        (acc: Record<string, LocalVariable>, id: string) => {
          const variable = localVars.variables?.[id]

          if (variable) {
            acc[createSemanticTokenPath(variable.name)] = {
              ...variable,
              valuesByMode: resolveValuesByMode(
                collectionData,
                variable.id,
                localVars.variables!,
              ),
            }
          }

          return acc
        },
        {} as Record<string, LocalVariable>,
      )

      const content = await createFileContent(collectionData, data)

      await oraPromise(write(collectionPath, content), {
        text: `Creating collection file: ${fileName}`,
      })
    }

    if (typographyNodes?.nodes) {
      // Create temporary text nodes. This should eventually be replaced with
      // proper primitives
      const nodeContent = await createNodeFileContent(typographyNodes!.nodes)
      await oraPromise(
        write(path.join(tokensDataPath, 'text-nodes.ts'), nodeContent),
        {
          text: 'Creating temporary text nodes file: text-nodes.ts',
        },
      )
    }
  } catch (error) {
    console.error('Error creating collection files:', error)
    process.exit(1)
  }
}

await createTokenFiles()
