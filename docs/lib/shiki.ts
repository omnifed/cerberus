import {
  transformerMetaHighlight,
  transformerNotationDiff,
  transformerNotationWordHighlight,
  transformerRenderIndentGuides,
} from '@shikijs/transformers'
import { connection } from 'next/server'
import {
  BundledLanguage,
  BundledTheme,
  CodeToHastOptions,
  codeToHtml,
  createCssVariablesTheme,
} from 'shiki'

export type CodeThemes =
  | 'nord'
  | 'min-light'
  | 'night-owl'
  | 'everforest-light'
  | 'everforest-dark'
  | 'vitesse-black'
  | 'vitesse-light'

export const cerbyTheme = createCssVariablesTheme({
  name: 'css-variables',
  variablePrefix: '--shiki-',
  variableDefaults: {},
  fontStyle: true,
})

export function getShikiOptions(
  syntax?: string,
): CodeToHastOptions<BundledLanguage, BundledTheme> {
  return {
    lang: syntax ?? 'ts',
    theme: cerbyTheme,
    transformers: [
      transformerNotationDiff(),
      transformerNotationWordHighlight(),
      transformerMetaHighlight(),
      transformerRenderIndentGuides(),
    ],
  }
}

/**
 * Converts a code snippet to a shiki string. Mostly used for non-demo purposes.
 * @param snippet - The code snippet to convert.
 * @returns The code snippet as a string.
 */
export async function getCodeString(snippet: string): Promise<string> {
  try {
    await connection()
    return await codeToHtml(snippet, getShikiOptions('tsx'))
  } catch (error) {
    console.error('Error converting code to string:', error)
    return ''
  }
}
