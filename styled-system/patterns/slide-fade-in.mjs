import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const slideFadeInConfig = {
  transform(props20) {
    return {
      animationStyle: 'slide-fade-in',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getSlideFadeInStyle = (styles = {}) => {
  const _styles = getPatternStyles(slideFadeInConfig, styles)
  return slideFadeInConfig.transform(_styles, patternFns)
}

export const slideFadeIn = (styles) => css(getSlideFadeInStyle(styles))
slideFadeIn.raw = getSlideFadeInStyle
