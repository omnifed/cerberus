import { PAGE } from '@cerberus-design/panda-preset'
import { css } from '@cerberus/styled-system/css'

const PAGE_BORDER_100 = 'page.border.100'

const headlineStyles = {
  color: 'page.text.initial',
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
  '& .table-wrapper': {
    border: '1px solid',
    borderColor: PAGE_BORDER_100,
    borderRadius: '1.5em',
    overflow: 'hidden',
    my: '6',
  },
  '& table': {
    borderCollapse: 'collapse',
    borderSpacing: '0',
    width: '100%',
    '& thead': {
      _first: {
        borderTop: 'none',
      },
    },
    '& tr': {
      _first: {
        '& th': {
          borderTop: 'none',
        },
      },
    },
    '& th': {
      borderRight: '1px solid',
      borderColor: PAGE_BORDER_100,
      bgColor: 'neutral.surface.100',
      textAlign: 'left',
      pxi: '8',
      py: '6',
      verticalAlign: 'middle',
      _last: {
        borderRight: 'none',
      },
    },
    '& td': {
      borderTop: '1px solid',
      borderRight: '1px solid',
      borderColor: PAGE_BORDER_100,
      pxi: '8',
      py: '6',
      _last: {
        borderRight: 'none',
      },
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
