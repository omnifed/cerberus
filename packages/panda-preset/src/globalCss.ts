import { defineGlobalStyles, type GlobalStyleObject } from '@pandacss/dev'

export const globalCss: GlobalStyleObject = defineGlobalStyles({
  html: {
    backgroundColor: 'var(--cerberus-colors-neutral-surface-100)',
    color: 'var(--cerberus-colors-neutral-text-300)',
    fontFamily: 'var(--cerberus-fonts-sans)',
    fontFeatureSettings: "'tnum' on, 'lnum' on",
    fontSize: '1em',
    fontWeight: 400,
    lineHeight: '150%',
    textRendering: 'geometricprecision',
    textSizeAdjust: '100%',
  },

  body: {
    fontSize: '1rem',

    _modalOpen: {
      marginLeft: '0',
      marginRight: '0',
      marginTop: '0',
      overflow: 'hidden',
      overscrollBehavior: 'contain',
      paddingInlineStart: '0',
      paddingInlineEnd: '0.5em',
      paddingTop: '0',
      position: 'relative',
    },

    _scrollbar: {
      width: '0.5em',
    },
    _scrollbarTrack: {
      backgroundColor: 'var(--cerberus-colors-neutral-surface-200)',
      outline: 'none',
    },
    _scrollbarThumb: {
      backgroundColor: 'var(--cerberus-colors-neutral-border-100)',
      borderRadius: '5px',
      outline: 'none',
    },
  },

  _highlight: {
    backgroundColor: 'var(--cerberus-colors-info-border-initial)',
    color: 'var(--cerberus-colors-info-text-initial)',
  },

  _spellingError: {
    backgroundColor: 'var(--cerberus-colors-danger-bg-initial)',
    color: 'var(--cerberus-colors-danger-text-initial)',
  },

  strong: {
    fontVariationSettings: "'wght' 700",
  },

  kbd: {
    boxShadow: 'none',
  },

  ':is(mark::before, mark::after)': {
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

  // images

  img: {
    maxWidth: '100%',
    verticalAlign: 'middle',
  },
  ':is(img[width], img[height])': {
    maxWidth: 'none',
  },
})
