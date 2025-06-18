import type { PropsWithChildren } from 'react'
import type { ColorModes, CustomThemes } from '../../context/theme'
import { cerberus, type CerberusPrimitiveProps } from '../../system'

export interface ThemeProps<T extends string> {
  /**
   * The color mode to apply to the theme.
   * @default 'light'
   */
  mode?: ColorModes
  /**
   * The theme to apply to the component.
   * @default 'cerberus'
   */
  theme?: CustomThemes<T>
}

export function Theme<T extends string>(
  props: PropsWithChildren<CerberusPrimitiveProps<ThemeProps<T>>>,
) {
  const { mode, theme, ...nativeProps } = props
  const colorMode = mode || 'light'
  const themeName = theme || 'cerberus'

  return (
    <cerberus.div
      {...nativeProps}
      data-panda-theme={themeName}
      data-color-mode={colorMode}
    >
      {props.children}
    </cerberus.div>
  )
}
