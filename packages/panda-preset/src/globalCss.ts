import { defineGlobalStyles } from '@pandacss/dev'
import type { GlobalStyleObject } from '@pandacss/types'

export const globalCss: GlobalStyleObject = defineGlobalStyles({
  html: {
    backgroundColor: 'page.surface.initial',
    color: 'page.text.initial',
    fontFamily: 'sans',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: '150%',
    scrollbarGutter: 'stable',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  body: {
    fontSize: '1rem',
  },

  // Content Typography

  "input[type='search']": {
    '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
      {
        WebkitAppearance: 'none',
      },
  },

  _highlight: {
    backgroundColor: 'info.bg.initial',
    color: 'info.text.initial',
  },
  _spellingError: {
    backgroundColor: 'danger.bg.initial',
    color: 'danger.text.initial',
  },

  strong: {
    fontVariationSettings: "'wght' 700",
  },

  kbd: {
    boxShadow: 'none',
  },

  '& :is(mark::before, mark::after)': {
    clip: 'rect(1px, 1px, 1px, 1px)',
    clipPath: 'inset(100%)',
    height: '1px',
    overflow: 'hidden',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
  },

  'mark::before': {
    content: ' [highlight start] ',
  },

  'mark::after': {
    content: ' [highlight end] ',
  },

  '& :is(button)': {
    cursor: 'pointer',
    userSelect: 'none',
  },

  // images

  img: {
    maxWidth: '100%',
    verticalAlign: 'middle',
  },
  ':is(img[width], img[height])': {
    maxWidth: 'none',
  },

  // Skeletor API

  '& :is(div,main,section,header,footer,nav,a,span,button,li,p)': {
    _loading: {
      bgColor: 'page.bg.100/60',
      color: 'transparent',
      userSelect: 'none',
      _motionSafe: {
        animation: 'pulse 1.5s infinite',
      },
      '& > *': {
        visibility: 'hidden',
      },
    },
  },
})
