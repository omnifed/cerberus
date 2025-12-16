import { defineTextStyles, type TextStyles } from '@pandacss/dev'
import { formatTextStyles, type NormalizedTextStyle } from '@cerberus/tokens'

export const figmaTextStyles: NormalizedTextStyle = formatTextStyles()

function getFontFamily(font: string): 'display' | 'sans' | 'mono' {
  switch (font) {
    case 'Poppins':
      return 'display'
    case 'Recursive':
      return 'mono'
    default:
      return 'sans'
  }
}

function getHeadingElementTag(
  heading: string,
): 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' {
  switch (heading) {
    case '2xl':
      return 'h1'
    case 'xl':
      return 'h2'
    case 'lg':
      return 'h3'
    case 'md':
      return 'h4'
    case 'sm':
      return 'h5'
    case 'xs':
      return 'h6'
    default:
      return 'h1'
  }
}

function createTextStyles(): TextStyles {
  const { results } = figmaTextStyles
  return figmaTextStyles.items.reduce((acc, nodeId) => {
    const data = results[nodeId as keyof typeof results]
    const name = data.name.replace('/', '-')
    const content = {
      description: data.description,
      value: {
        fontFamily: getFontFamily(data.styles.fontFamily),
        fontWeight: data.styles.fontWeight,
        fontSize: `${data.styles.fontSize / 16}rem`,
        letterSpacing: `${data.styles.letterSpacing / 16}rem`,
        lineHeight: `${Math.floor(data.styles.lineHeightPercentFontSize)}%`,
      },
    }

    // Create general text styles
    acc[name] = content

    // Create heading text style alternative selectors that match HTML tags
    if (name.includes('heading')) {
      const elementTag = getHeadingElementTag(name.split('-')[1])
      acc[elementTag] = content
    }
    return acc
  }, {} as TextStyles)
}

export const textStyles: TextStyles = defineTextStyles({
  ...createTextStyles(),
  link: {
    description: 'Used for inline text links.',
    value: {
      textDecoration: 'underline',
    },
  },
})
