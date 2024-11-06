import { css } from '@cerberus/styled-system/css'

export const markdown = css({
  pxi: '4',

  '& a.heading': {
    color: 'inherit',
    textDecoration: 'none',
    transition: 'color 0.2s ease-in-out',
    _focusVisible: {
      boxShadow: 'none',
      outline: '3px solid',
      outlineColor: 'action.border.focus',
      outlineOffset: '2px',
    },
  },
  '& .expressive-code': {
    mb: '6',
  },
  '& :is(p,li,td) > code:not(.code)': {
    pxi: 'lg',
    py: 'md',
    textStyle: 'mono-xs',
    rounded: 'md',
  },
})
