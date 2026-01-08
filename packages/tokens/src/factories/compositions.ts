import { Theme } from '@pandacss/types'
import { compositions } from '../tokens'
import { NodeMeta } from '../types'
import { toKebabCase } from '../utils/helpers'

export function createTextStyles(): NonNullable<Theme['textStyles']> {
  const nodes = compositions.textStyle.nodes
  const keys = Object.keys(nodes)

  return keys.reduce(
    (acc, nodeId) => {
      const nodeData = nodes[nodeId as keyof typeof nodes]
      const data = nodeData.document

      // node metadata
      const stylesKey = data.styles.text as keyof typeof nodeData.styles
      const meta: NodeMeta = nodeData.styles[stylesKey]
      const name = toKebabCase(meta.name)

      const content = {
        description: meta.description,
        value: {
          fontFamily: getFontFamily(data.style.fontFamily),
          fontWeight: data.style.fontWeight,
          fontSize: `${data.style.fontSize / 16}rem`,
          letterSpacing: `${data.style.letterSpacing / 16}rem`,
          lineHeight: `${Math.floor(data.style.lineHeightPercentFontSize)}%`,
        },
      }

      acc[name] = content

      // Create heading text style alternative selectors that match HTML tags
      if (name.includes('heading')) {
        const elementTag = getHeadingElementTag(name.split('-')[1])
        acc[elementTag] = content
      }
      return acc
    },
    {} as NonNullable<Theme['textStyles']>,
  )
}

// Helpers

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
