import { defineGlobalStyles } from '@pandacss/dev'
import type { GlobalStyleObject } from '@pandacss/types'

const markStyles = {
  clip: 'rect(1px, 1px, 1px, 1px)',
  clipPath: 'inset(100%)',
  height: '1px',
  overflow: 'hidden',
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
}

export const globalCss: GlobalStyleObject = defineGlobalStyles({
  html: {
    '--global-font-body': 'var(--font-poppins, sans-serif)',
    '--global-font-mono': 'var(--font-recursive, monospace)',
    '--global-color-border': 'var(--cerberus-colors-page-border-initial)',
    '--global-color-placeholder': 'var(--cerberus-colors-page-text-100)',
    '--global-color-selection': 'var(--cerberus-colors-info-ghost-active)',
    '--global-color-focus-ring': 'var(--cerberus-colors-action-border-focus)',
    backgroundColor: 'page.surface.initial',
    color: 'page.text.initial',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '16px',
    fontWeight: 400,
    lineHeight: 1.5,
    scrollbarGutter: 'stable',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  body: {
    fontSize: '1rem',
  },

  // Content Typography

  '::selection': {
    color: 'var(--global-color-selection-text)',
  },

  _highlight: {
    backgroundColor: 'info.bg.initial',
    color: 'info.text.initial',
  },
  _spellingError: {
    backgroundColor: 'danger.bg.initial',
    color: 'danger.text.initial',
  },

  "input[type='search']": {
    '&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration':
      {
        WebkitAppearance: 'none',
      },
  },

  strong: {
    fontVariationSettings: "'wght' 700",
  },

  kbd: {
    boxShadow: 'none',
  },

  mark: {
    _before: {
      content: ' [highlight start] ',
      ...markStyles,
    },
    _after: {
      content: ' [highlight end] ',
      ...markStyles,
    },
  },

  // Elements

  ':is(img[width], img[height])': {
    maxWidth: 'none',
  },

  // Skeletor API

  ':is(div,main,section,header,footer,nav,a,span,button,li,p)': {
    _loading: {
      bgColor: 'page.bg.100/60',
      color: 'transparent',
      userSelect: 'none',
      _motionSafe: {
        animationName: 'pulse',
        animationDuration: '1.5s',
        animationIterationCount: 'infinite',
      },
      '& > *': {
        visibility: 'hidden',
      },
    },
  },
})
