import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const scaleFadeOutConfig = {
  transform(props20) {
    return {
      animationStyle: 'scale-fade-out',
      animationDuration: props20.duration ?? 'normal',
      animationDelay: props20.delay ?? '0s',
      animationFillMode: props20.fillMode ?? 'forwards',
      animationTimingFunction: props20.timing ?? 'ease-in-out',
      ...props20,
    }
  },
}

export const getScaleFadeOutStyle = (styles = {}) => {
  const _styles = getPatternStyles(scaleFadeOutConfig, styles)
  return scaleFadeOutConfig.transform(_styles, patternFns)
}

export const scaleFadeOut = (styles) => css(getScaleFadeOutStyle(styles))
scaleFadeOut.raw = getScaleFadeOutStyle
