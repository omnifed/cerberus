import { cx } from 'styled-system/css'
import type { ColorModes, CustomThemes } from '../../context/theme'
import { cerberus, CerberusProps } from '../../system'

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
  props: CerberusProps<'button'> & ThemeProps<T>,
) {
  const { mode, theme, ...nativeProps } = props
  const colorMode = mode || 'light'
  const themeName = theme || 'cerberus'

  return (
    <cerberus.div
      {...nativeProps}
      data-panda-theme={themeName}
      className={cx(colorMode, nativeProps.className)}
    >
      {props.children}
    </cerberus.div>
  )
}
