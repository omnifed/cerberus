import { defineTextStyles, type TextStyles } from '@pandacss/dev'
import type {
  CssProperties,
  Recursive,
  TextStyle,
  Token,
} from '@pandacss/types'

type TextStyleResult = Token<TextStyle> | Recursive<Token<TextStyle>>

// display titles
const displayStyles = {
  fontFamily: 'display',
  fontWeight: 700,
  lineHeight: '115%',
}

// h1-h6
const headingWeight = {
  fontWeight: 600,
  lineHeight: '120%',
}

// mono
const monoStyles = {
  fontFamily: 'mono',
  fontWeight: 400,
}

function createTextStyle(
  description: string,
  options: CssProperties,
): TextStyleResult {
  return {
    description,
    value: {
      fontFamily: 'sans',
      ...options,
    },
  }
}

export const textStyles: TextStyles = defineTextStyles({
  'display-sm': {
    ...createTextStyle('TThe h1 - Used for marketing cards or data visuals', {
      fontSize: '2rem',
      ...displayStyles,
    }),
  },
  'display-md': {
    ...createTextStyle('The h1 - Used for medium marketing headlines', {
      fontSize: '2.5rem',
      ...displayStyles,
    }),
  },
  'display-lg': {
    ...createTextStyle('The h1 - Used for large marketing headlines', {
      fontSize: '3rem',
      ...displayStyles,
    }),
  },

  // headings

  h1: {
    ...createTextStyle('The h1 text style - large body blocks', {
      fontSize: '2.5rem',
      ...headingWeight,
    }),
  },
  h2: {
    ...createTextStyle('The h2 text style - used in page headings', {
      fontSize: '2.25rem',
      ...headingWeight,
    }),
  },
  h3: {
    ...createTextStyle(
      'The h3 text style - used in secondary/sub-section headings',
      {
        fontSize: '1.875rem',
        ...headingWeight,
      },
    ),
  },
  h4: {
    ...createTextStyle('The h4 text style - used in headings for cards', {
      fontSize: '1.5rem',
      ...headingWeight,
    }),
  },
  h5: {
    ...createTextStyle(
      'The h5 text style - used in headings for card body text',
      {
        fontSize: '1.25rem',
        ...headingWeight,
      },
    ),
  },
  h6: {
    ...createTextStyle(
      'The h6 text style - used in headings that are the lowest emphasis',
      {
        fontSize: '1rem',
        ...headingWeight,
      },
    ),
  },

  // body text - inherits mostly from the html element in globalCSS.ts

  'body-xs': {
    ...createTextStyle(
      'The small text style - used in support text or legal.',
      {
        fontSize: '0.75rem',
      },
    ),
  },
  'body-sm': {
    ...createTextStyle(
      'The small text style - used in compact or dense text blocks.',
      {
        fontSize: '0.875rem',
      },
    ),
  },
  'body-md': {
    ...createTextStyle('The default body text style - used in paragraphs', {
      fontSize: '1rem',
    }),
  },
  'body-lg': {
    ...createTextStyle(
      'The body text style - used in paragraphs as smallest headings',
      {
        fontSize: '1.125rem',
      },
    ),
  },
  'body-xl': {
    ...createTextStyle(
      'The body text style - used in paragraphs as smaller headings',
      {
        fontSize: '1.25rem',
      },
    ),
  },
  'body-2xl': {
    ...createTextStyle(
      'The body text style - used in paragraphs as small headings',
      {
        fontSize: '1.5rem',
      },
    ),
  },

  // mono

  'mono-xs': {
    ...createTextStyle('The mono text style - used in smallest code blocks', {
      fontSize: '0.75rem',
      ...monoStyles,
    }),
  },
  'mono-sm': {
    ...createTextStyle('The mono text style - used in small code blocks', {
      fontSize: '0.875rem',
      ...monoStyles,
    }),
  },
  'mono-md': {
    ...createTextStyle('The mono text style - used in normal code blocks', {
      fontSize: '1rem',
      ...monoStyles,
    }),
  },
  'mono-lg': {
    ...createTextStyle('The mono text style - used in large code blocks', {
      fontSize: '1.125rem',
      ...monoStyles,
    }),
  },

  // forms

  'label-sm': {
    ...createTextStyle('The label text style - used for small environments', {
      fontSize: '0.75rem',
      lineHeight: '120%',
    }),
  },

  'label-md': {
    ...createTextStyle('The label text style - used for form input labels', {
      fontSize: '1rem',
      fontWeight: '400',
      lineHeight: '150%',
    }),
  },

  button: {
    ...createTextStyle('The button text style - used for buttons', {
      fontSize: '1rem',
      fontWeight: '600',
      lineHeight: '100%',
    }),
  },

  // links

  link: {
    ...createTextStyle('The link text style - used for inline text links', {
      textDecoration: 'underline',
    }),
  },
})
