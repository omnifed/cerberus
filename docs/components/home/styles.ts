import { css } from 'styled-system/css'

/**
 * The home page's type and layout scale. Poppins is the brand face; at this
 * size it carries the page on its own, so there is no second display font.
 */

export const container = css({
  mx: 'auto',
  maxW: '90rem',
  px: 'md',
  w: 'full',
  md: { px: 'xl' },
  lg: { px: '4xl' },
})

/** The hero headline. */
export const displayHero = css({
  color: 'page.text.initial',
  fontSize: 'clamp(3rem, 1.2rem + 6.4vw, 8rem)',
  fontWeight: 'bold',
  letterSpacing: '-0.045em',
  lineHeight: '0.94',
  textWrap: 'balance',
})

/** Section statements: the problem, the answer, each beat's claim. */
export const displayStatement = css({
  color: 'page.text.initial',
  fontSize: 'clamp(2.125rem, 1rem + 3.6vw, 5rem)',
  fontWeight: 'semibold',
  letterSpacing: '-0.035em',
  lineHeight: '1.02',
  textWrap: 'balance',
})

export const lead = css({
  color: 'page.text.200',
  maxW: '38rem',
  textStyle: 'body-lg',
  textWrap: 'pretty',
})

export const fine = css({
  color: 'page.text.200',
  textStyle: 'label-sm',
})

export const code = css({
  color: 'page.text.initial',
  fontFamily: 'mono',
  fontSize: '0.92em',
})

export const textLink = css({
  color: 'action.navigation.initial',
  rounded: 'xs',
  textDecoration: 'underline',
  textUnderlineOffset: '0.22em',
  transitionDuration: 'fast',
  transitionProperty: 'color',
  _hover: { color: 'action.navigation.hover' },
  _focusVisible: { focusVisibleRing: 'outside' },
})

export const codeBlock = css({
  bgColor: 'page.bg.initial',
  border: '1px solid',
  borderColor: 'page.border.initial',
  color: 'page.text.200',
  fontFamily: 'mono',
  overflowX: 'auto',
  p: 'md',
  rounded: 'md',
  textStyle: 'body-sm',
  whiteSpace: 'pre',
})
