import { getPatternStyles, patternFns } from '../helpers.mjs'
import { css } from '../css/index.mjs'

const scrollableConfig = {
  transform(props20) {
    const { direction = 'vertical', hideScrollbar = false, ...rest } = props20
    return {
      overflow: 'auto',
      height: direction === 'horizontal' ? '100%' : 'auto',
      width: direction === 'vertical' ? '100%' : 'auto',
      scrollBehavior: 'smooth',
      scrollbarGutter: 'stable',
      '&::-webkit-scrollbar': {
        display: hideScrollbar ? 'none' : 'auto',
        w: '0.5em',
      },
      '&::-webkit-scrollbar-track': {
        bg: 'transparent',
        outline: 'none',
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: 'page.border.100',
        borderRadius: '5px',
        outline: 'none',
      },
      '&:hover::-webkit-scrollbar-thumb': {
        backgroundColor: 'page.border.100',
      },
      ...rest,
    }
  },
}

export const getScrollableStyle = (styles = {}) => {
  const _styles = getPatternStyles(scrollableConfig, styles)
  return scrollableConfig.transform(_styles, patternFns)
}

export const scrollable = (styles) => css(getScrollableStyle(styles))
scrollable.raw = getScrollableStyle
