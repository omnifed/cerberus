export type CodeThemes =
  | 'nord'
  | 'min-light'
  | 'night-owl'
  | 'everforest-light'
  | 'everforest-dark'
  | 'vitesse-black'
  | 'vitesse-light'

export function createThemes(
  themes: CodeThemes[],
): Record<CodeThemes, CodeThemes> {
  return themes.reduce(
    (acc, theme) => {
      acc[theme] = theme
      return acc
    },
    {} as Record<CodeThemes, CodeThemes>,
  )
}

export function getShikiOptions(syntax: string) {
  return {
    lang: syntax ?? 'ts',
    themes: createThemes([
      'nord',
      'min-light',
      'night-owl',
      'everforest-light',
      'everforest-dark',
      'vitesse-black',
      'vitesse-light',
    ]),
    // This is to prevent a bug from the shiki package which does not style
    // the default theme correctly.
    defaultColor: 'nord',
  }
}
