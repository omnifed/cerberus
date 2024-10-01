/* eslint-disable */
export type ThemeName = 'acheron'
export type ThemeByName = {
  acheron: {
    id: string
    name: 'acheron'
    css: string
  }
}

export type Theme<T extends ThemeName> = ThemeByName[T]

/**
 * Dynamically import a theme by name
 */
export declare function getTheme<T extends ThemeName>(
  themeName: T,
): Promise<ThemeByName[T]>

/**
 * Inject a theme stylesheet into the document
 */
export declare function injectTheme(
  el: HTMLElement,
  theme: Theme<any>,
): HTMLStyleElement
