import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const emphasizedSlideInConfig = {
  transform(props20) {
    return {
      animationStyle: 'emphasized-slide-in',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getEmphasizedSlideInStyle = (styles = {}) => {
  const _styles = getPatternStyles(emphasizedSlideInConfig, styles)
  return emphasizedSlideInConfig.transform(_styles, patternFns)
}

export const emphasizedSlideIn = (styles) =>
  css(getEmphasizedSlideInStyle(styles))
emphasizedSlideIn.raw = getEmphasizedSlideInStyle
