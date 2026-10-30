import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  '.living-canvas': {
    bgColor: 'page.surface.initial',
    bottom: 0,
    height: 'full',
    left: 0,
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    top: 0,
    width: 'full',
    zIndex: -10,
  },

  '.shiki': {
    fontSize: 'md',
    fontVariationSettings: "'slnt' -3, 'CASL' 1, 'CRSV' 1, 'MONO' 0",
    lineHeight: 'initial!',
    letterSpacing: 'initial!',
    textStyle: 'mono-xs',
  },

  '.shiki code': {
    display: 'block',
    fontVariationSettings: 'inherit',
    py: 'md',
    px: '2rem',
    width: 'full',
  },

  '.shiki .highlighted-word': {
    border: '1px solid',
    borderColor: 'page.border.initial',
    padding: '1px 3px',
    margin: '-1px -3px',
    rounded: '4px',
  },

  'pre.shiki .indent': {
    display: 'inline-block',
    position: 'relative',
    ps: 'var(--indent-offset)',
    _before: {
      bgColor: 'currentColor',
      content: "''",
      height: 'full',
      left: 0,
      opacity: '0.15',
      pos: 'absolute',
      width: '1px',
    },
    _empty: {
      height: '1lh',
      verticalAlign: 'bottom',
    },
  },

  'figcaption[data-rehype-pretty-code-title]': {
    color: 'page.text.100',
    borderBottom: '1px solid',
    borderBottomColor: 'page.border.initial',
    bgcolor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    fontSize: '0.875rem',
    fontVariationSettings: "'slnt' 0, 'CASL' 0, 'CRSV' 0, 'MONO' 0",
    letterSpacing: 'initial!',
    px: 'md',
    py: '0.5rem',
    textStyle: 'mono-xs',
  },
})
