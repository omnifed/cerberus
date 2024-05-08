import { css } from '@/styled-system/css'

const headlineStyles = {
  color: 'neutral.text.initial',
  pb: '2',
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
    textStyle: 'body-md',
    pb: '6',
  },
  '& small': {
    textStyle: 'body-xs',
  },
  '& a': {
    textStyle: 'link',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
