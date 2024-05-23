import { focusStates } from '@cerberus-design/panda-preset'
import { css } from '@cerberus-design/styled-system/css'

const headlineStyles = {
  color: 'neutral.text.initial',
  py: '2',
}

export const markdown = css({
  pxi: '4',

  '& h1': {
    ...headlineStyles,
    textStyle: 'h1',
  },
  '& h2': {
    ...headlineStyles,
    textStyle: 'h2',
  },
  '& h3': {
    ...headlineStyles,
    textStyle: 'h3',
  },
  '& h4': {
    ...headlineStyles,
    textStyle: 'h4',
  },
  '& h5': {
    ...headlineStyles,
    textStyle: 'h5',
  },
  '& h6': {
    ...headlineStyles,
    textStyle: 'h6',
  },
  '& p': {
    color: 'neutral.text.100',
    lineHeight: '165%',
    pb: '6',
    textStyle: 'body-md',
    textWrap: 'pretty',
  },
  '& small': {
    textStyle: 'body-xs',
  },
  '& a': {
    display: 'inline-block',
    rounded: 'sm',
    textStyle: 'link',
    _hover: {
      color: 'action.navigation.hover',
      textDecoration: 'underline',
    },
    _focusVisible: {
      boxShadow: 'none',
      outline: '3px solid',
      outlineColor: 'action.border.focus',
      outlineOffset: '2px',
    },
  },
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
  '& ol': {
    listStyleType: 'decimal',
    listStylePosition: 'inside',
    '& li': {
      pb: '2',
    },
  },
  '& .expressive-code': {
    mb: '6',
  },
  '& table': {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    mb: '6',
    width: '100%',
    '& th': {
      borderBottom: '1px solid',
      borderColor: 'neutral.border.initial',
      bgColor: 'neutral.bg.initial',
      textAlign: 'left',
      p: '2',
    },
    '& td': {
      borderBottom: '1px solid',
      borderColor: 'neutral.border.initial',
      p: '2',
    },
  },
  '& :is(p,li,td) > code:not(.code)': {
    border: '2px solid',
    borderColor: '#01213a',
    bgColor: '#011627',
    color: '#ECC48D',
    fontSize: '0.9rem',
    fontWeight: '400',
    lineHeight: '1.65',
    pxi: '1',
    rounded: 'md',
  },
})
