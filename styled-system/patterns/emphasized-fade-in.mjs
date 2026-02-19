import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const emphasizedFadeInConfig = {
  transform(props20) {
    return {
      animationStyle: 'emphasized-fade-in',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getEmphasizedFadeInStyle = (styles = {}) => {
  const _styles = getPatternStyles(emphasizedFadeInConfig, styles)
  return emphasizedFadeInConfig.transform(_styles, patternFns)
}

export const emphasizedFadeIn = (styles) =>
  css(getEmphasizedFadeInStyle(styles))
emphasizedFadeIn.raw = getEmphasizedFadeInStyle
