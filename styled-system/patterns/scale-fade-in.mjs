import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const scaleFadeInConfig = {
  transform(props20) {
    return {
      animationStyle: 'scale-fade-in',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getScaleFadeInStyle = (styles = {}) => {
  const _styles = getPatternStyles(scaleFadeInConfig, styles)
  return scaleFadeInConfig.transform(_styles, patternFns)
}

export const scaleFadeIn = (styles) => css(getScaleFadeInStyle(styles))
scaleFadeIn.raw = getScaleFadeInStyle
