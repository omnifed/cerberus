import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const emphasizedSlideOutConfig = {
  transform(props20) {
    return {
      animationStyle: 'emphasized-slide-out',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getEmphasizedSlideOutStyle = (styles = {}) => {
  const _styles = getPatternStyles(emphasizedSlideOutConfig, styles)
  return emphasizedSlideOutConfig.transform(_styles, patternFns)
}

export const emphasizedSlideOut = (styles) =>
  css(getEmphasizedSlideOutStyle(styles))
emphasizedSlideOut.raw = getEmphasizedSlideOutStyle
