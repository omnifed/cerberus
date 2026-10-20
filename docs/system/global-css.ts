import { defineGlobalStyles } from '@pandacss/dev'

export const globalCss = defineGlobalStyles({
  // '::selection': {
  //   bgColor: 'info.surface.200',
  //   color: 'page.text.inverse',
  // },

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
    fontFamily: 'mono',
    fontSize: '0.8rem',
  },

  '.shiki code': {
    display: 'block',
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

  '.shiki .indent': {
    display: 'inline-block',
    position: 'relative',
    left: 'var(--indent-offset)',
    _before: {
      content: "''",
      pos: 'absolute',
      opacity: '0.15',
      width: '1px',
      height: 'full',
      bgColor: 'currentColor',
    },
  },

  '.shiki .indent:empty': {
    height: '1lh',
    verticalAlign: 'bottom',
  },

  'figcaption[data-rehype-pretty-code-title]': {
    color: 'page.text.100',
    borderBottom: '1px solid',
    borderBottomColor: 'page.border.initial',
    bgcolor: 'rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)',
    fontFamily: 'Recursive',
    fontSize: '0.875rem',
    px: 'md',
    py: '0.5rem',
  },
})
