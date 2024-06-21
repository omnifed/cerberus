import { defineGlobalStyles, type GlobalStyleObject } from '@pandacss/dev'

const tooltipStyles = {
  _positionTop: {
    _before: {
      top: '0',
      transform: 'translateY(-110%)',
    },
  },
  _positionBottom: {
    _before: {
      bottom: '0',
      transform: 'translateY(110%)',
    },
  },
  _positionLeft: {
    _before: {
      left: '0',
      top: '0',
      transform: 'translate3d(-110%, 0, 0)',
    },
  },
  _positionRight: {
    _before: {
      right: '0',
      top: '0',
      transform: 'translate3d(110%, 0, 0)',
    },
  },

  _before: {
    backgroundColor: 'var(--cerberus-colors-neutral-surface-100)',
    color: 'var(--cerberus-colors-neutral-text-initial)',
    content: 'attr(aria-label)',
    fontWeight: 400,
    maxH: '6rem',
    maxW: '17rem',
    pxi: '2',
    py: '3',
    opacity: 0,
    position: 'absolute',
    rounded: 'sm',
    shadow: 'lg',
    textAlign: 'left',
    textStyle: 'body-xs',
    textWrap: 'pretty',
    whiteSpace: 'nowrap',
    zIndex: 'tooltip',
    _motionSafe: {
      animationName: 'fadeIn',
      animationDuration: '150ms',
      animationFillMode: 'forwards',
      animationTimingFunction: 'ease-in-out',
      animationDelay: '50ms',
    },
  },
  // arrow
  _after: {},
}

export const globalCss: GlobalStyleObject = defineGlobalStyles({
  html: {
    backgroundColor: 'var(--cerberus-colors-neutral-surface-initial)',
    color: 'var(--cerberus-colors-neutral-text-initial)',
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

  ':is(div,button,span,svg)': {
    _tooltip: {
      position: 'relative',
      _hover: tooltipStyles,
      _focus: tooltipStyles,
    },
  },
})
