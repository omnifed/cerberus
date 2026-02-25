import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const slideFadeOutConfig = {
  transform(props20) {
    return {
      animationStyle: 'slide-fade-out',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getSlideFadeOutStyle = (styles = {}) => {
  const _styles = getPatternStyles(slideFadeOutConfig, styles)
  return slideFadeOutConfig.transform(_styles, patternFns)
}

export const slideFadeOut = (styles) => css(getSlideFadeOutStyle(styles))
slideFadeOut.raw = getSlideFadeOutStyle
