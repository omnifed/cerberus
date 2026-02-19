import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const emphasizedFadeOutConfig = {
  transform(props20) {
    return {
      animationStyle: 'emphasized-fade-out',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getEmphasizedFadeOutStyle = (styles = {}) => {
  const _styles = getPatternStyles(emphasizedFadeOutConfig, styles)
  return emphasizedFadeOutConfig.transform(_styles, patternFns)
}

export const emphasizedFadeOut = (styles) =>
  css(getEmphasizedFadeOutStyle(styles))
emphasizedFadeOut.raw = getEmphasizedFadeOutStyle
