import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const animateInConfig = {
  transform(props) {
    const { delay, ...rest } = props
    return {
      animationName: 'fadeIn',
      animationDuration: '2s',
      animationFillMode: 'forwards',
      animationDelay: delay ?? '200ms',
      opacity: '0',
      ...rest,
      _motionReduce: {
        animationName: 'none',
      },
    }
  },
}

export const getAnimateInStyle = (styles = {}) => {
  const _styles = getPatternStyles(animateInConfig, styles)
  return animateInConfig.transform(_styles, patternFns)
}

export const animateIn = (styles) => css(getAnimateInStyle(styles))
animateIn.raw = getAnimateInStyle
