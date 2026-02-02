import {
  transformerNotationDiff,
  transformerMetaHighlight,
  transformerRenderIndentGuides,
} from '@shikijs/transformers'
import {
  BundledLanguage,
  BundledTheme,
  CodeToHastOptions,
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
      transformerMetaHighlight(),
      transformerRenderIndentGuides(),
    ],
  }
}
